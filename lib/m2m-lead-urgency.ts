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

export const M2M_URGENCY_LABEL_DEFAULT = "When are you hoping to move?"

export const M2M_URGENCY_LABEL_CREDIT = "When are you planning to buy?"

/** Short optional hint under the timeline control (one system-wide list for GHL TEXT `urgency`). */
export const M2M_URGENCY_SHARED_HINT =
  "Same options everywhere—keeps your timeline consistent in the CRM."
