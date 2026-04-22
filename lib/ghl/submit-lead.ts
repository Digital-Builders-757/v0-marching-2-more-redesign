import { getGhlConfig, listUnsetPipelineEnvVars } from "./config"
import { addTagsToContact, createOpportunity, GhlApiError, ghlStatusBucket, upsertContact } from "./client"
import { normalizedLeadToCustomFields, pipelineStageForLeadType, resolveTagsForLead } from "./lead-mapping"
import type { GhlApiStep, NormalizedLead } from "./types"
import { parseSubmitLeadBody } from "./validate"

export type SubmitLeadResult =
  | { ok: true; contactId?: string; opportunityId?: string }
  | {
      ok: false
      error: string
      code?: string
      correlationId: string
      failed_step?: GhlApiStep
      crm_http_status?: number
    }

export async function submitLeadToGhl(lead: NormalizedLead, correlationId: string): Promise<SubmitLeadResult> {
  let cfg
  try {
    cfg = getGhlConfig()
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Configuration error"
    console.error("[ghl] config_error", { correlationId, message: msg })
    return {
      ok: false,
      error: "Lead capture is not configured. Please try again later.",
      code: "config_error",
      correlationId,
    }
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

  if (!cfg.dryRun && tags.length === 0) {
    console.warn("[ghl] tags_empty_for_lead_type", {
      correlationId,
      leadType: lead.leadType,
      hint: "GHL_TAG_LEAD_BUYER / GHL_TAG_LEAD_SELLER unset — tags step will be skipped",
    })
  }

  try {
    console.info("[ghl] submit_start", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      tagCount: tags.length,
      customFieldCount: customFields.length,
      willCreateOpportunity: Boolean(pipelineStageForLeadType(lead.leadType, cfg)),
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
        statusBucket: ghlStatusBucket(e.status),
        code: e.code,
        failed_step: e.step,
        message: e.message,
      })
      return {
        ok: false,
        error: "We could not reach our CRM. Please call us or try again shortly.",
        code: e.code ?? "ghl_upstream_error",
        correlationId,
        ...(e.step ? { failed_step: e.step } : {}),
        crm_http_status: e.status,
      }
    }
    console.error("[ghl] submit_unexpected", { correlationId, err: e })
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
      code: "internal_error",
      correlationId,
    }
  }
}

/** Full path from raw JSON body (API route helper). */
export async function handleSubmitLeadJson(json: unknown, correlationId: string): Promise<SubmitLeadResult> {
  const parsed = parseSubmitLeadBody(json)
  if (!parsed.ok) {
    return { ok: false, error: parsed.error, code: parsed.code, correlationId }
  }
  return submitLeadToGhl(parsed.data, correlationId)
}
