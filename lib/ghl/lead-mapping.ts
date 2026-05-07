import type { GhlConfig } from "./config"
import type { GhlCustomFieldEntry, LeadType, NormalizedLead } from "./types"

function addField(out: GhlCustomFieldEntry[], id: string | undefined, value: string | undefined) {
  if (!value?.trim() || !id || id.startsWith("dry-run__")) return
  out.push({ id, value: value.trim() })
}

/** Build GHL `customFields` entries using env-configured field IDs. */
export function normalizedLeadToCustomFields(lead: NormalizedLead, cfg: GhlConfig): GhlCustomFieldEntry[] {
  const { fieldIds: f } = cfg
  const out: GhlCustomFieldEntry[] = []

  addField(out, f.dob, lead.dateOfBirth)
  addField(out, f.address, lead.address)
  addField(out, f.urgency, lead.urgency)
  /** GHL field must accept exact strings `Buyer` | `Seller` (see docs/M2M_GHL_OPERATOR_VERIFICATION.md). */
  addField(out, f.leadType, lead.leadType === "buyer" ? "Buyer" : "Seller")
  addField(out, f.utmSource, lead.utm.source)
  addField(out, f.utmMedium, lead.utm.medium)
  addField(out, f.utmCampaign, lead.utm.campaign)
  addField(out, f.utmContent, lead.utm.content)

  const optIds = cfg.optionalFieldIds
  addField(out, optIds.guideName, lead.guideName)
  addField(out, optIds.sourcePage, lead.sourcePage)
  addField(out, optIds.sourcePath, lead.sourcePath)
  addField(out, optIds.quizQ1BuyerType, lead.quizQ1BuyerType)
  addField(out, optIds.quizQ2Credit, lead.quizQ2Credit)
  addField(out, optIds.quizQ3DownPayment, lead.quizQ3DownPayment)
  addField(out, optIds.quizQ4Timeline, lead.quizQ4Timeline)
  addField(out, optIds.quizQ5Concern, lead.quizQ5Concern)
  addField(out, optIds.quizResult, lead.quizResult)
  addField(out, optIds.quizSource, lead.quizSource)
  addField(out, optIds.foreclosureIntent, lead.foreclosureIntent)

  return out
}

export function resolveTagsForLead(lead: NormalizedLead, cfg: GhlConfig): string[] {
  const base = lead.leadType === "buyer" ? cfg.tags.buyer : cfg.tags.seller
  const path = lead.sourcePath?.trim()
  const extra = path ? cfg.tags.pathTags[path] ?? [] : []
  const merged = [...base, ...extra]
  const fi = lead.foreclosureIntent
  if (fi === "guide" || fi === "speak_now" || fi === "both") {
    merged.push(...(cfg.tags.foreclosureIntentTags[fi] ?? []))
  }
  return [...new Set(merged.map((t) => t.trim()).filter(Boolean))]
}

export function pipelineStageForLeadType(leadType: LeadType, cfg: GhlConfig): {
  pipelineId: string
  stageId: string
} | null {
  if (!cfg.pipelines) return null
  return leadType === "buyer"
    ? { pipelineId: cfg.pipelines.buyerPipelineId, stageId: cfg.pipelines.buyerStageNewInquiryId }
    : { pipelineId: cfg.pipelines.sellerPipelineId, stageId: cfg.pipelines.sellerStageNewInquiryId }
}
