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

  return out
}

export function resolveTagsForLead(lead: NormalizedLead, cfg: GhlConfig): string[] {
  const base = lead.leadType === "buyer" ? cfg.tags.buyer : cfg.tags.seller
  const path = lead.sourcePath?.trim()
  const extra = path ? cfg.tags.pathTags[path] ?? [] : []
  const merged = [...base, ...extra]
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
