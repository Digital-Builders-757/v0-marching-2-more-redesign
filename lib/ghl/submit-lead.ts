import { getGhlConfig, listUnsetPipelineEnvVars } from "./config"
import { classifyGhlUserFacingError } from "./crm-user-message"
import { addTagsToContact, createContactNote, createOpportunity, GhlApiError, ghlStatusBucket, upsertContact } from "./client"
import { normalizedLeadToCustomFields, pipelineStageForLeadType, resolveTagsForLead } from "./lead-mapping"
import type { GhlApiStep, NormalizedLead } from "./types"
import { parseSubmitLeadBody } from "./validate"
import { urgencyLogBucket } from "@/lib/m2m-lead-urgency"

export type SubmitLeadResult =
  | {
      ok: true
      contactId?: string
      opportunityId?: string
      correlationId: string
    }
  | {
      ok: false
      error: string
      code?: string
      correlationId: string
      failed_step?: GhlApiStep
      crm_http_status?: number
    }

function buildOperatorNote(lead: NormalizedLead): string {
  const out: string[] = []
  const message = lead.notes?.trim()

  if (message) {
    out.push("Lead message:")
    out.push(message)
    out.push("")
  }

  out.push("Submission metadata:")
  out.push(`- Lead type: ${lead.leadType}`)
  if (lead.guideName?.trim()) out.push(`- Guide: ${lead.guideName.trim()}`)
  if (lead.sourcePath?.trim()) out.push(`- Source path: ${lead.sourcePath.trim()}`)
  if (lead.sourcePage?.trim()) out.push(`- Source page: ${lead.sourcePage.trim()}`)
  if (lead.urgency?.trim()) out.push(`- Urgency: ${lead.urgency.trim()}`)
  if (lead.utm.source?.trim()) out.push(`- UTM source: ${lead.utm.source.trim()}`)
  if (lead.utm.medium?.trim()) out.push(`- UTM medium: ${lead.utm.medium.trim()}`)
  if (lead.utm.campaign?.trim()) out.push(`- UTM campaign: ${lead.utm.campaign.trim()}`)
  if (lead.utm.content?.trim()) out.push(`- UTM content: ${lead.utm.content.trim()}`)

  return out.join("\n")
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
    if (process.env.VERCEL_ENV === "production") {
      console.error("[ghl] dry_run_blocked_in_production", { correlationId })
      return {
        ok: false,
        error: "Lead capture is temporarily unavailable. Please try again shortly.",
        code: "config_error",
        correlationId,
      }
    }

    const cf = normalizedLeadToCustomFields(lead, cfg)
    const tg = resolveTagsForLead(lead, cfg)
    const noteBody = buildOperatorNote(lead)
    console.info("[ghl] dry_run_skip", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      sourcePage: lead.sourcePage,
      tagCount: tg.length,
      customFieldCount: cf.length,
      noteCharCount: noteBody.length,
      urgencyBucket: urgencyLogBucket(lead.urgency, lead.urgencyExplicit),
      urgencyExplicit: Boolean(lead.urgencyExplicit),
      hasUrgency: Boolean(lead.urgency?.trim()),
    })
    return {
      ok: true,
      contactId: "dry-run-contact",
      opportunityId: "dry-run-opportunity",
      correlationId,
    }
  }

  const customFields = normalizedLeadToCustomFields(lead, cfg)
  const tags = resolveTagsForLead(lead, cfg)
  const pipe = pipelineStageForLeadType(lead.leadType, cfg)

  if (tags.length === 0) {
    console.error("[ghl] strict_failure_tags_missing", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      hint: "GHL_TAG_LEAD_BUYER / GHL_TAG_LEAD_SELLER unset",
    })
    return {
      ok: false,
      error: "Lead routing is temporarily unavailable. Please try again shortly.",
      code: "config_error",
      correlationId,
      failed_step: "contacts_tags",
    }
  }

  if (!pipe) {
    const missing = listUnsetPipelineEnvVars()
    console.error("[ghl] strict_failure_pipeline_unconfigured", {
      correlationId,
      leadType: lead.leadType,
      missingEnvVars: missing,
      sourcePath: lead.sourcePath,
    })
    return {
      ok: false,
      error: "Lead routing is temporarily unavailable. Please try again shortly.",
      code: "config_error",
      correlationId,
      failed_step: "opportunities_create",
    }
  }

  console.info("[ghl] submit_start", {
    correlationId,
    leadType: lead.leadType,
    sourcePath: lead.sourcePath,
    sourcePage: lead.sourcePage,
    tagCount: tags.length,
    customFieldCount: customFields.length,
    customFieldIdsCount: customFields.length,
    willCreateOpportunity: true,
    hasUrgency: Boolean(lead.urgency?.trim()),
    urgencyBucket: urgencyLogBucket(lead.urgency, lead.urgencyExplicit),
    urgencyExplicit: Boolean(lead.urgencyExplicit),
  })

  console.info("[ghl] urgency_meta", {
    correlationId,
    explicit: Boolean(lead.urgencyExplicit),
    valueBucket: urgencyLogBucket(lead.urgency, lead.urgencyExplicit),
  })

  try {
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

    const oppName = `M2M Web — ${lead.leadType === "buyer" ? "Buyer" : "Seller"} — ${lead.fullName}`
    const { opportunityId } = await createOpportunity(cfg, {
      contactId,
      pipelineId: pipe.pipelineId,
      pipelineStageId: pipe.stageId,
      name: oppName,
      correlationId,
    })
    console.info("[ghl] opportunity_created", { correlationId, contactId, opportunityId })

    const noteBody = buildOperatorNote(lead)
    await createContactNote(cfg, contactId, noteBody, correlationId)
    console.info("[ghl] contact_note_created", {
      correlationId,
      contactId,
      charCount: noteBody.length,
      includesSourcePage: Boolean(lead.sourcePage?.trim()),
    })

    console.info("[ghl] submit_ok", {
      correlationId,
      contactId,
      opportunityId,
      strictFullPipeline: true,
    })

    return {
      ok: true,
      contactId,
      opportunityId,
      correlationId,
    }
  } catch (e) {
    if (e instanceof GhlApiError) {
      const classified = classifyGhlUserFacingError({
        httpStatus: e.status,
        upstreamMessage: e.message,
        upstreamDetail: e.upstreamDetail,
        step: e.step,
      })
      console.error("[ghl] upstream_error", {
        correlationId,
        leadType: lead.leadType,
        sourcePath: lead.sourcePath,
        hasSourcePage: Boolean(lead.sourcePage?.trim()),
        status: e.status,
        statusBucket: ghlStatusBucket(e.status),
        crmUserCode: classified.code,
        ghlCode: e.code,
        failed_step: e.step,
        logDuplicateHint: classified.logDuplicateHint,
        logValidationHint: classified.logValidationHint,
        upstreamDetail: e.upstreamDetail,
      })
      return {
        ok: false,
        error: classified.userError,
        code: classified.code,
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
