import { getGhlConfig, listUnsetPipelineEnvVars } from "./config"
import { classifyGhlUserFacingError } from "./crm-user-message"
import { addTagsToContact, createContactNote, createOpportunity, GhlApiError, ghlStatusBucket, upsertContact } from "./client"
import { normalizedLeadToCustomFields, pipelineStageForLeadType, resolveTagsForLead } from "./lead-mapping"
import type { GhlApiStep, NormalizedLead, SubmitLeadWarningCode } from "./types"
import { parseSubmitLeadBody } from "./validate"
import { urgencyLogBucket } from "@/lib/m2m-lead-urgency"

export type SubmitLeadResult =
  | {
      ok: true
      contactId?: string
      opportunityId?: string
      correlationId: string
      warnings?: SubmitLeadWarningCode[]
    }
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
    if (lead.notes?.trim()) {
      console.info("[ghl] dry_run_would_create_note", { correlationId, charCount: lead.notes.trim().length })
    }
    console.info("[ghl] dry_run_skip", {
      correlationId,
      leadType: lead.leadType,
      sourcePath: lead.sourcePath,
      tagCount: tg.length,
      customFieldCount: cf.length,
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

  if (!cfg.dryRun && tags.length === 0) {
    console.warn("[ghl] tags_empty_for_lead_type", {
      correlationId,
      leadType: lead.leadType,
      hint: "GHL_TAG_LEAD_BUYER / GHL_TAG_LEAD_SELLER unset — tags step will be skipped",
    })
  }

  console.info("[ghl] submit_start", {
    correlationId,
    leadType: lead.leadType,
    sourcePath: lead.sourcePath,
    tagCount: tags.length,
    customFieldCount: customFields.length,
    customFieldIdsCount: customFields.length,
    willCreateOpportunity: Boolean(pipelineStageForLeadType(lead.leadType, cfg)),
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

    const warnings: SubmitLeadWarningCode[] = []

    try {
      await addTagsToContact(cfg, contactId, tags, correlationId)
      console.info("[ghl] tags_applied", { correlationId, contactId, tagCount: tags.length })
    } catch (tagErr) {
      if (tagErr instanceof GhlApiError) {
        console.error("[ghl] tags_failed_partial", {
          correlationId,
          contactId,
          status: tagErr.status,
          failed_step: tagErr.step,
        })
        warnings.push("tags_failed")
      } else {
        console.error("[ghl] tags_failed_partial_unexpected", { correlationId, contactId, err: tagErr })
        warnings.push("tags_failed")
      }
    }

    const pipe = pipelineStageForLeadType(lead.leadType, cfg)
    let opportunityId: string | undefined

    if (pipe) {
      try {
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
      } catch (oppErr) {
        if (oppErr instanceof GhlApiError) {
          console.error("[ghl] opportunity_failed_partial", {
            correlationId,
            contactId,
            status: oppErr.status,
            failed_step: oppErr.step,
          })
          warnings.push("opportunity_failed")
        } else {
          console.error("[ghl] opportunity_failed_partial_unexpected", { correlationId, contactId, err: oppErr })
          warnings.push("opportunity_failed")
        }
      }
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
      try {
        await createContactNote(cfg, contactId, lead.notes, correlationId)
        console.info("[ghl] contact_note_created", { correlationId, contactId, charCount: lead.notes.trim().length })
      } catch (noteErr) {
        console.warn("[ghl] contact_note_failed_partial", {
          correlationId,
          contactId,
          message: noteErr instanceof Error ? noteErr.message : String(noteErr),
        })
        warnings.push("note_failed")
      }
    }

    console.info("[ghl] submit_ok", {
      correlationId,
      contactId,
      opportunityId: opportunityId ?? null,
      warningCount: warnings.length,
      warnings: warnings.length ? warnings : undefined,
    })

    return {
      ok: true,
      contactId,
      opportunityId,
      correlationId,
      ...(warnings.length ? { warnings } : {}),
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
        status: e.status,
        statusBucket: ghlStatusBucket(e.status),
        crmUserCode: classified.code,
        ghlCode: e.code,
        failed_step: e.step,
        logDuplicateHint: classified.logDuplicateHint,
        logValidationHint: classified.logValidationHint,
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
