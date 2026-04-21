import { z } from "zod"

import type { NormalizedLead } from "./types"

const leadTypeSchema = z.enum(["buyer", "seller"])

const optionalTrimmed = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })

export const submitLeadRequestSchema = z.object({
  lead_type: leadTypeSchema,
  name: z.string().min(1, "Name is required").transform((s) => s.trim()),
  email: z.string().min(1).email("Invalid email").transform((s) => s.trim().toLowerCase()),
  phone: z.string().min(1, "Phone is required"),
  date_of_birth: z.string().min(1, "Date of birth is required").transform((s) => s.trim()),
  address: optionalTrimmed,
  urgency: optionalTrimmed,
  utm_source: optionalTrimmed,
  utm_medium: optionalTrimmed,
  utm_campaign: optionalTrimmed,
  utm_content: optionalTrimmed,
  source_page: optionalTrimmed,
  source_path: optionalTrimmed,
  notes: optionalTrimmed,
})

export type SubmitLeadInput = z.infer<typeof submitLeadRequestSchema>

/** Keep digits only; assume US if 10 digits. */
export function normalizePhoneToE164(input: string): string {
  const digits = input.replace(/\D/g, "")
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`
  if (input.trim().startsWith("+") && digits.length >= 10) return `+${digits}`
  return `+${digits}`
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return { firstName: "Lead", lastName: "" }
  if (parts.length === 1) return { firstName: parts[0]!, lastName: "" }
  return {
    firstName: parts[0]!,
    lastName: parts.slice(1).join(" "),
  }
}

/** Normalize DOB to YYYY-MM-DD when possible. */
export function normalizeDob(input: string): string {
  const s = input.trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s
  const d = new Date(s)
  if (!Number.isNaN(d.getTime())) {
    const y = d.getUTCFullYear()
    const m = String(d.getUTCMonth() + 1).padStart(2, "0")
    const day = String(d.getUTCDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }
  return s
}

export function toNormalizedLead(parsed: SubmitLeadInput): NormalizedLead {
  const { firstName, lastName } = splitName(parsed.name)
  return {
    leadType: parsed.lead_type,
    fullName: parsed.name,
    firstName,
    lastName,
    email: parsed.email,
    phoneE164: normalizePhoneToE164(parsed.phone),
    dateOfBirth: normalizeDob(parsed.date_of_birth),
    address: parsed.address,
    urgency: parsed.urgency,
    utm: {
      source: parsed.utm_source,
      medium: parsed.utm_medium,
      campaign: parsed.utm_campaign,
      content: parsed.utm_content,
    },
    sourcePage: parsed.source_page,
    sourcePath: parsed.source_path,
    notes: parsed.notes,
  }
}

export function parseSubmitLeadBody(json: unknown):
  | { ok: true; data: NormalizedLead }
  | { ok: false; error: string; code?: string } {
  const r = submitLeadRequestSchema.safeParse(json)
  if (!r.success) {
    const msg = r.error.flatten().fieldErrors
    const first = Object.values(msg)[0]?.[0] ?? "Invalid request"
    return { ok: false, error: first, code: "validation_error" }
  }
  return { ok: true, data: toNormalizedLead(r.data) }
}

