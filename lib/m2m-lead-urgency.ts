/**
 * Values map to GHL `GHL_CF_URGENCY` (TEXT). Keep these strings stable for reporting.
 * Aligned with seller timeline options on the CMA form.
 */
export const M2M_URGENCY_TIMELINE_OPTIONS = [
  "Immediate (0-1 month)",
  "Short Term (1-3 months)",
  "Medium Term (3-6 months)",
  "Long Term (6+ months)",
  "Undecided",
] as const

export type M2mUrgencyTimelineValue = (typeof M2M_URGENCY_TIMELINE_OPTIONS)[number]

/** Passive / exploratory — honest defaults for short forms (still sent to GHL). */
export const M2M_URGENCY_PASSIVE_OPTIONS = ["Not sure yet", "Just exploring"] as const

export type M2mUrgencyPassiveValue = (typeof M2M_URGENCY_PASSIVE_OPTIONS)[number]

/** Initial value for short-form urgency selects — user can leave as-is (not “hidden”). */
export const M2M_URGENCY_SHORT_FORM_DEFAULT = "Not sure yet" satisfies M2mUrgencyPassiveValue

/** Options shown on minimal lead forms: passive first, then shared timeline list. */
export const M2M_URGENCY_SHORT_FORM_OPTIONS = [
  ...M2M_URGENCY_PASSIVE_OPTIONS,
  ...M2M_URGENCY_TIMELINE_OPTIONS,
] as const

const PASSIVE_SET = new Set<string>(M2M_URGENCY_PASSIVE_OPTIONS)
const TIMELINE_SET = new Set<string>(M2M_URGENCY_TIMELINE_OPTIONS)

export const M2M_URGENCY_LABEL_DEFAULT = "When are you hoping to move?"

export const M2M_URGENCY_LABEL_CREDIT = "When are you planning to buy?"

export const M2M_URGENCY_LABEL_SHORT_FORM = "Timeline (optional)"

/** Short optional hint under the timeline control (one system-wide list for GHL TEXT `urgency`). */
export const M2M_URGENCY_SHARED_HINT =
  "Same options everywhere—keeps your timeline consistent in the CRM."

/** Server log bucket for urgency (no PII). */
export type M2mUrgencyLogBucket = "none" | "passive_default" | "passive_explicit" | "timeline"

/**
 * `explicit` from the client: false when user left the short-form default (“Not sure yet”).
 * When they pick “Just exploring” or any timeline value, expect explicit true from forms.
 */
export function urgencyLogBucket(urgency: string | undefined, urgencyExplicit?: boolean): M2mUrgencyLogBucket {
  const v = urgency?.trim()
  if (!v) return "none"
  if (PASSIVE_SET.has(v)) {
    return urgencyExplicit ? "passive_explicit" : "passive_default"
  }
  if (TIMELINE_SET.has(v)) return "timeline"
  return "timeline"
}
