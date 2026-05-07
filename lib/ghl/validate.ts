import { z } from "zod"

import { M2M_DOB_MIN_YEAR } from "@/lib/m2m-dob"
import type { NormalizedLead } from "./types"

export { M2M_DOB_MIN_YEAR } from "@/lib/m2m-dob"

const leadTypeSchema = z.enum(["buyer", "seller"])

const optionalTrimmed = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })

const optionalPhone = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })
  .refine((s) => s === undefined || s.replace(/\D/g, "").length >= 10, {
    message: "Enter a valid phone number",
  })

const optionalDob = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })

const optionalGuideName = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })
  .refine((s) => s === undefined || s.length <= 200, {
    message: "Guide name is too long",
  })

/** Quiz attribution strings — bounded length; stored on lead + operator note (optional GHL CF wiring later). */
const optionalQuizMeta = z
  .string()
  .optional()
  .transform((s) => {
    const t = s?.trim()
    return t === "" || t === undefined ? undefined : t
  })
  .refine((s) => s === undefined || s.length <= 400, {
    message: "Quiz field value is too long",
  })

export const submitLeadRequestSchema = z
  .object({
    lead_type: leadTypeSchema,
    name: z.string().min(1, "Name is required").transform((s) => s.trim()),
    email: z.string().min(1).email("Invalid email").transform((s) => s.trim().toLowerCase()),
    phone: optionalPhone,
    date_of_birth: optionalDob,
    address: optionalTrimmed,
    urgency: optionalTrimmed,
    urgency_explicit: z.boolean().optional(),
    utm_source: optionalTrimmed,
    utm_medium: optionalTrimmed,
    utm_campaign: optionalTrimmed,
    utm_content: optionalTrimmed,
    source_page: optionalTrimmed,
    source_path: optionalTrimmed,
    guide_name: optionalGuideName,
    quiz_score_range: optionalQuizMeta,
    quiz_main_issue: optionalQuizMeta,
    quiz_goal: optionalQuizMeta,
    quiz_timeline: optionalQuizMeta,
    quiz_prior_attempt: optionalQuizMeta,
    quiz_result: optionalQuizMeta,
    quiz_source: optionalQuizMeta,
    quiz_q1_buyer_type: optionalQuizMeta,
    quiz_q2_credit: optionalQuizMeta,
    quiz_q3_down_payment: optionalQuizMeta,
    quiz_q4_timeline: optionalQuizMeta,
    quiz_q5_concern: optionalQuizMeta,
    foreclosure_intent: z.enum(["guide", "speak_now", "both"]).optional(),
    notes: optionalTrimmed,
  })
  .superRefine((data, ctx) => {
    if (data.date_of_birth) {
      const s = data.date_of_birth
      if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter your full date of birth",
          path: ["date_of_birth"],
        })
        return
      }
      const [ys, ms, ds] = s.split("-")
      const y = Number(ys)
      const m = Number(ms)
      const d = Number(ds)
      const now = new Date()
      const maxY = now.getUTCFullYear()
      if (y < M2M_DOB_MIN_YEAR || y > maxY) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Year must be between ${M2M_DOB_MIN_YEAR} and ${maxY}`,
          path: ["date_of_birth"],
        })
        return
      }
      const date = new Date(Date.UTC(y, m - 1, d))
      if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "That calendar date isn’t valid — double-check month and day",
          path: ["date_of_birth"],
        })
        return
      }
      const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
      if (date.getTime() > todayUtc) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Date of birth can’t be in the future",
          path: ["date_of_birth"],
        })
      }
    }

    if (data.foreclosure_intent) {
      const digits = (data.phone ?? "").replace(/\D/g, "")
      if (digits.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter a valid phone number",
          path: ["phone"],
        })
      }
      if (!data.address?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter your property address or ZIP code",
          path: ["address"],
        })
      }
    }
  })

export type SubmitLeadInput = z.infer<typeof submitLeadRequestSchema>

/** Keep digits only; assume US if 10 digits. Returns empty string if no digits (caller should omit phone). */
export function normalizePhoneToE164(input: string): string {
  const digits = input.replace(/\D/g, "")
  if (digits.length === 0) return ""
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
  const rawPhone = parsed.phone
  const e164 = rawPhone ? normalizePhoneToE164(rawPhone) : ""
  return {
    leadType: parsed.lead_type,
    fullName: parsed.name,
    firstName,
    lastName,
    email: parsed.email,
    phoneE164: e164 || undefined,
    dateOfBirth: parsed.date_of_birth ? normalizeDob(parsed.date_of_birth) : undefined,
    address: parsed.address,
    urgency: parsed.urgency,
    urgencyExplicit: parsed.urgency_explicit,
    utm: {
      source: parsed.utm_source,
      medium: parsed.utm_medium,
      campaign: parsed.utm_campaign,
      content: parsed.utm_content,
    },
    sourcePage: parsed.source_page,
    sourcePath: parsed.source_path,
    guideName: parsed.guide_name,
    quizScoreRange: parsed.quiz_score_range,
    quizMainIssue: parsed.quiz_main_issue,
    quizGoal: parsed.quiz_goal,
    quizTimeline: parsed.quiz_timeline,
    quizPriorAttempt: parsed.quiz_prior_attempt,
    quizResult: parsed.quiz_result,
    quizSource: parsed.quiz_source,
    quizQ1BuyerType: parsed.quiz_q1_buyer_type,
    quizQ2Credit: parsed.quiz_q2_credit,
    quizQ3DownPayment: parsed.quiz_q3_down_payment,
    quizQ4Timeline: parsed.quiz_q4_timeline,
    quizQ5Concern: parsed.quiz_q5_concern,
    foreclosureIntent: parsed.foreclosure_intent,
    notes: parsed.notes,
  }
}

export function parseSubmitLeadBody(json: unknown):
  | { ok: true; data: NormalizedLead }
  | { ok: false; error: string; code?: string } {
  const r = submitLeadRequestSchema.safeParse(json)
  if (!r.success) {
    const msg = r.error.flatten().fieldErrors
    const first = Object.values(msg)[0]?.[0] ?? r.error.issues[0]?.message ?? "Invalid request"
    return { ok: false, error: first, code: "validation_error" }
  }
  return { ok: true, data: toNormalizedLead(r.data) }
}
