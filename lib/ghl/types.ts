/**
 * Website ↔ GoHighLevel boundary types.
 * @see docs/M2M_GHL_INTEGRATION_MASTER_PLAN.md
 */

export type LeadType = "buyer" | "seller"

/** CRM call site when logging or returning `failed_step` (no secrets). */
export type GhlApiStep = "contacts_upsert" | "contacts_tags" | "opportunities_create" | "contacts_note"

/**
 * Legacy / forward-compat — the live API returns `ok: false` if tags, opportunity, or note fails.
 * `submitLeadToApi` still parses `warnings` when present for older responses.
 */
export type SubmitLeadWarningCode = "tags_failed" | "opportunity_failed" | "note_failed"

/** Inbound JSON from browser forms → POST /api/submit-lead */
export type SubmitLeadRequest = {
  lead_type: LeadType
  name: string
  email: string
  phone?: string
  date_of_birth?: string
  address?: string
  urgency?: string
  /**
   * When true, the user changed urgency from the short-form default (“Not sure yet”).
   * Logged server-side only for operator triage (not stored as a separate GHL field).
   */
  urgency_explicit?: boolean
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  source_page?: string
  source_path?: string
  /** Human-readable guide title for funnel attribution (also echoed in operator note). */
  guide_name?: string
  /** Free text (contact message, CMA goals, etc.) — maps to CRM note / custom handling in GHL */
  notes?: string
}

export type NormalizedLead = {
  leadType: LeadType
  fullName: string
  firstName: string
  lastName: string
  email: string
  phoneE164?: string
  dateOfBirth?: string
  address?: string
  urgency?: string
  /** Carried for server logging only */
  urgencyExplicit?: boolean
  utm: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
  }
  sourcePage?: string
  sourcePath?: string
  guideName?: string
  notes?: string
}

export type SubmitLeadErrorResponse = {
  ok: false
  error: string
  code?: string
  /** Match server logs for Vercel triage (safe to show users as a support reference). */
  correlationId?: string
  failed_step?: GhlApiStep
  /** GHL HTTP status when the failure was an error response (safe; not a secret). */
  crm_http_status?: number
}

export type SubmitLeadSuccessResponse = {
  ok: true
  contactId?: string
  opportunityId?: string
  /** Present on every response for support correlation. */
  correlationId: string
  /** Not emitted by current server; optional for forward-compat / stale proxies. */
  warnings?: SubmitLeadWarningCode[]
}

export type SubmitLeadResponse = SubmitLeadSuccessResponse | SubmitLeadErrorResponse

/** Failed lead API response — use with `M2mLeadSubmitErrorAlert`. */
export type SubmitLeadFailure = SubmitLeadErrorResponse

export type GhlCustomFieldEntry = { id: string; value: string }
