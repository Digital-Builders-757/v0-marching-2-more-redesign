/**
 * Website ↔ GoHighLevel boundary types.
 * @see docs/M2M_GHL_INTEGRATION_MASTER_PLAN.md
 */

export type LeadType = "buyer" | "seller"

/** Inbound JSON from browser forms → POST /api/submit-lead */
export type SubmitLeadRequest = {
  lead_type: LeadType
  name: string
  email: string
  phone: string
  date_of_birth: string
  address?: string
  urgency?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  source_page?: string
  source_path?: string
  /** Free text (contact message, CMA goals, etc.) — maps to CRM note / custom handling in GHL */
  notes?: string
}

export type NormalizedLead = {
  leadType: LeadType
  fullName: string
  firstName: string
  lastName: string
  email: string
  phoneE164: string
  dateOfBirth: string
  address?: string
  urgency?: string
  utm: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
  }
  sourcePage?: string
  sourcePath?: string
  notes?: string
}

export type SubmitLeadResponse =
  | { ok: true; contactId?: string; opportunityId?: string }
  | { ok: false; error: string; code?: string }

export type GhlCustomFieldEntry = { id: string; value: string }
