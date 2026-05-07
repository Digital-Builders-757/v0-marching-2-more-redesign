/**
 * Server-only GHL configuration from environment.
 * Never import this module from client components.
 */

export type GhlFieldIds = {
  dob: string
  address: string
  urgency: string
  leadType: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
}

/** Optional contact custom fields — only sent when the matching env var is set (never required). */
export type GhlOptionalFieldIds = {
  guideName?: string
  sourcePage?: string
  sourcePath?: string
}

export type GhlPipelineConfig = {
  buyerPipelineId: string
  sellerPipelineId: string
  buyerStageNewInquiryId: string
  sellerStageNewInquiryId: string
}

export type GhlTagConfig = {
  buyer: string[]
  seller: string[]
  /** Optional per-path tags (exact pathname keys, e.g. "/cma-form") */
  pathTags: Record<string, string[]>
}

export type GhlConfig = {
  apiKey: string
  locationId: string
  apiVersion: string
  baseUrl: string
  fieldIds: GhlFieldIds
  optionalFieldIds: GhlOptionalFieldIds
  pipelines: GhlPipelineConfig | null
  tags: GhlTagConfig
  dryRun: boolean
}

function req(name: string, value: string | undefined, dryRun: boolean): string {
  const v = value?.trim()
  if (!v) {
    if (dryRun) return `dry-run__${name}`
    throw new Error(`Missing required env: ${name}`)
  }
  return v
}

function opt(value: string | undefined): string | undefined {
  const v = value?.trim()
  return v || undefined
}

function parseTagList(value: string | undefined): string[] {
  if (!value?.trim()) return []
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}

function parsePathTags(raw: string | undefined): Record<string, string[]> {
  if (!raw?.trim()) return {}
  /** Format: "/path:Tag A|Tag B,/other:Tag C" */
  const out: Record<string, string[]> = {}
  for (const segment of raw.split(",")) {
    const [path, tagsPart] = segment.split(":").map((s) => s?.trim())
    if (!path || !tagsPart) continue
    out[path] = tagsPart.split("|").map((t) => t.trim()).filter(Boolean)
  }
  return out
}

/**
 * Load and validate GHL config. Call only from server routes / server actions.
 * @throws if required CRM field IDs or API credentials are missing (except when dryRun).
 */
export function getGhlConfig(): GhlConfig {
  const dryRun = process.env.GHL_DRY_RUN === "1" || process.env.GHL_DRY_RUN === "true"

  const apiKey = opt(process.env.GHL_API_KEY)
  const locationId = opt(process.env.GHL_LOCATION_ID)

  if (!dryRun && (!apiKey || !locationId)) {
    throw new Error("GHL_API_KEY and GHL_LOCATION_ID are required unless GHL_DRY_RUN=true")
  }

  const fieldIds: GhlFieldIds = {
    dob: req("GHL_CF_DOB", process.env.GHL_CF_DOB, dryRun),
    address: req("GHL_CF_ADDRESS", process.env.GHL_CF_ADDRESS, dryRun),
    urgency: req("GHL_CF_URGENCY", process.env.GHL_CF_URGENCY, dryRun),
    leadType: req("GHL_CF_LEAD_TYPE", process.env.GHL_CF_LEAD_TYPE, dryRun),
    utmSource: req("GHL_CF_UTM_SOURCE", process.env.GHL_CF_UTM_SOURCE, dryRun),
    utmMedium: req("GHL_CF_UTM_MEDIUM", process.env.GHL_CF_UTM_MEDIUM, dryRun),
    utmCampaign: req("GHL_CF_UTM_CAMPAIGN", process.env.GHL_CF_UTM_CAMPAIGN, dryRun),
    utmContent: req("GHL_CF_UTM_CONTENT", process.env.GHL_CF_UTM_CONTENT, dryRun),
  }

  const optionalFieldIds: GhlOptionalFieldIds = {
    guideName: opt(process.env.GHL_CF_GUIDE_NAME),
    sourcePage: opt(process.env.GHL_CF_SOURCE_PAGE),
    sourcePath: opt(process.env.GHL_CF_SOURCE_PATH),
  }

  const bp = opt(process.env.GHL_BUYER_PIPELINE_ID)
  const sp = opt(process.env.GHL_SELLER_PIPELINE_ID)
  const bs = opt(process.env.GHL_BUYER_STAGE_NEW_INQUIRY_ID)
  const ss = opt(process.env.GHL_SELLER_STAGE_NEW_INQUIRY_ID)

  const pipelines: GhlPipelineConfig | null =
    bp && sp && bs && ss
      ? {
          buyerPipelineId: bp,
          sellerPipelineId: sp,
          buyerStageNewInquiryId: bs,
          sellerStageNewInquiryId: ss,
        }
      : null

  const tags: GhlTagConfig = {
    buyer: parseTagList(process.env.GHL_TAG_LEAD_BUYER),
    seller: parseTagList(process.env.GHL_TAG_LEAD_SELLER),
    pathTags: parsePathTags(process.env.GHL_PATH_TAGS),
  }

  return {
    apiKey: apiKey ?? "",
    locationId: locationId ?? "",
    apiVersion: opt(process.env.GHL_API_VERSION) ?? "2021-07-28",
    baseUrl: opt(process.env.GHL_API_BASE_URL) ?? "https://services.leadconnectorhq.com",
    fieldIds,
    optionalFieldIds,
    pipelines,
    tags,
    dryRun,
  }
}

/** When pipelines is null, lists which of the four pipeline/stage env vars are unset (names only). */
export function listUnsetPipelineEnvVars(): string[] {
  const checks: [string, string | undefined][] = [
    ["GHL_BUYER_PIPELINE_ID", process.env.GHL_BUYER_PIPELINE_ID],
    ["GHL_SELLER_PIPELINE_ID", process.env.GHL_SELLER_PIPELINE_ID],
    ["GHL_BUYER_STAGE_NEW_INQUIRY_ID", process.env.GHL_BUYER_STAGE_NEW_INQUIRY_ID],
    ["GHL_SELLER_STAGE_NEW_INQUIRY_ID", process.env.GHL_SELLER_STAGE_NEW_INQUIRY_ID],
  ]
  return checks.filter(([, v]) => !opt(v)).map(([name]) => name)
}
