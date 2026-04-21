import { randomUUID } from "node:crypto"

import { getGhlConfig, listUnsetPipelineEnvVars } from "./config"
import { addTagsToContact, createOpportunity, GhlApiError, upsertContact } from "./client"
import { normalizedLeadToCustomFields, pipelineStageForLeadType, resolveTagsForLead } from "./lead-mapping"
import type { NormalizedLead } from "./types"
import { parseSubmitLeadBody } from "./validate"

export type SubmitLeadResult =
  | { ok: true; contactId?: string; opportunityId?: string }
  | { ok: false; error: string; code?: string }

export async function submitLeadToGhl(lead: NormalizedLead): Promise<SubmitLeadResult> {
  const correlationId = randomUUID()

  let cfg
  try {
    cfg = getGhlConfig()
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Configuration error"
    console.error("[ghl] config_error", { correlationId, message: msg })
    return { ok: false, error: "Lead capture is not configured. Please try again later.", code: "config_error" }
  }

  if (cfg.dryRun) {
    const cf = normalizedLeadToCustomFields(lead, cfg)
    const tg = resolveTagsForLead(lead, cfg)
    console.info("[ghl] dry_run_skip", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      tagCount: tg.length,
      customFieldCount: cf.length,
    })
    return { ok: true, contactId: "dry-run-contact", opportunityId: "dry-run-opportunity" }
  }

  const customFields = normalizedLeadToCustomFields(lead, cfg)
  const tags = resolveTagsForLead(lead, cfg)

  try {
    console.info("[ghl] submit_start", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      tagCount: tags.length,
      customFieldCount: customFields.length,
    })

    const { contactId } = await upsertContact(cfg, {
      firstName: lead.firstName,
      lastName: lead.lastName,
      fullName: lead.fullName,
      email: lead.email,
      phone: lead.phoneE164,
      customFields,
      correlationId,
    })

    console.info("[ghl] contact_upserted", { correlationId, contactId })

    await addTagsToContact(cfg, contactId, tags, correlationId)
    console.info("[ghl] tags_applied", { correlationId, contactId, tagCount: tags.length })

    const pipe = pipelineStageForLeadType(lead.leadType, cfg)
    let opportunityId: string | undefined

    if (pipe) {
      const oppName = `M2M Web — ${lead.leadType === "buyer" ? "Buyer" : "Seller"} — ${lead.fullName}`
      const { opportunityId: oid } = await createOpportunity(cfg, {
        contactId,
        pipelineId: pipe.pipelineId,
        pipelineStageId: pipe.stageId,
        name: oppName,
        correlationId,
      })
      opportunityId = oid
      console.info("[ghl] opportunity_created", { correlationId, contactId, opportunityId })
    } else {
      const missing = listUnsetPipelineEnvVars()
      console.warn("[ghl] opportunity_skipped", {
        correlationId,
        contactId,
        reason: "incomplete_pipeline_env",
        missingEnvVars: missing,
      })
    }

    if (lead.notes?.trim()) {
      /** Optional: GHL note API can be added when account workflow needs it. */
      console.info("[ghl] lead_notes_present_not_posted", {
        correlationId,
        contactId,
        charCount: lead.notes.length,
      })
    }

    console.info("[ghl] submit_ok", { correlationId, contactId, opportunityId: opportunityId ?? null })
    return { ok: true, contactId, opportunityId }
  } catch (e) {
    if (e instanceof GhlApiError) {
      console.error("[ghl] upstream_error", {
        correlationId,
        status: e.status,
        code: e.code,
        message: e.message,
      })
      return {
        ok: false,
        error: "We could not reach our CRM. Please call us or try again shortly.",
        code: e.code ?? "ghl_upstream_error",
      }
    }
    console.error("[ghl] submit_unexpected", { correlationId, err: e })
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
