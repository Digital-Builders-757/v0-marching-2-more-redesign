import { getGhlConfig } from "./config"
import { addTagsToContact, createOpportunity, GhlApiError, upsertContact } from "./client"
import { normalizedLeadToCustomFields, pipelineStageForLeadType, resolveTagsForLead } from "./lead-mapping"
import type { NormalizedLead } from "./types"
import { parseSubmitLeadBody } from "./validate"

export type SubmitLeadResult =
  | { ok: true; contactId?: string; opportunityId?: string }
  | { ok: false; error: string; code?: string }

export async function submitLeadToGhl(lead: NormalizedLead): Promise<SubmitLeadResult> {
  let cfg
  try {
    cfg = getGhlConfig()
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Configuration error"
    console.error("[ghl] config", msg)
    return { ok: false, error: "Lead capture is not configured. Please try again later.", code: "config_error" }
  }

  if (cfg.dryRun) {
    console.info("[ghl] dry run — skipping upstream", { email: lead.email, leadType: lead.leadType })
    return { ok: true, contactId: "dry-run-contact", opportunityId: "dry-run-opportunity" }
  }

  const customFields = normalizedLeadToCustomFields(lead, cfg)
  const tags = resolveTagsForLead(lead, cfg)

  try {
    const { contactId } = await upsertContact(cfg, {
      firstName: lead.firstName,
      lastName: lead.lastName,
      fullName: lead.fullName,
      email: lead.email,
      phone: lead.phoneE164,
      customFields,
    })

    await addTagsToContact(cfg, contactId, tags)

    const pipe = pipelineStageForLeadType(lead.leadType, cfg)
    let opportunityId: string | undefined

    if (pipe) {
      const oppName = `M2M Web — ${lead.leadType === "buyer" ? "Buyer" : "Seller"} — ${lead.fullName}`
      const { opportunityId: oid } = await createOpportunity(cfg, {
        contactId,
        pipelineId: pipe.pipelineId,
        pipelineStageId: pipe.stageId,
        name: oppName,
      })
      opportunityId = oid
    } else {
      console.warn("[ghl] pipeline/stage env not set — contact saved without opportunity")
    }

    if (lead.notes?.trim()) {
      /** Optional: GHL note API can be added when account workflow needs it. */
      console.info("[ghl] lead notes present (not auto-posted to conversation)", {
        contactId,
        len: lead.notes.length,
      })
    }

    return { ok: true, contactId, opportunityId }
  } catch (e) {
    if (e instanceof GhlApiError) {
      return {
        ok: false,
        error: "We could not reach our CRM. Please call us or try again shortly.",
        code: e.code ?? "ghl_upstream_error",
      }
    }
    console.error("[ghl] submitLeadToGhl", e)
    return { ok: false, error: "Something went wrong. Please try again.", code: "internal_error" }
  }
}

/** Full path from raw JSON body (API route helper). */
export async function handleSubmitLeadJson(json: unknown): Promise<SubmitLeadResult> {
  const parsed = parseSubmitLeadBody(json)
  if (!parsed.ok) {
    return { ok: false, error: parsed.error, code: parsed.code }
  }
  return submitLeadToGhl(parsed.data)
}
