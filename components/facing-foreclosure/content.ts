/**
 * Copy and assets for `/facing-foreclosure`.
 *
 * Imagery paths: `public/images/facing-foreclosure/` (see `docs/M2M_ASSET_MAP.md`).
 */

export const SIGNUP_SECTION_ID = "facing-foreclosure-lead" as const

export const FORECLOSURE_QUIZ_SECTION_ID = "facing-foreclosure-quiz" as const

export const FORECLOSURE_QUIZ_HEADING = "Not sure where to start?" as const

export const FORECLOSURE_QUIZ_DESCRIPTION =
  "This short quiz helps you organize your situation — timeline, notices, and priorities — so you can see options more clearly." as const

/** When the GHL quiz iframe is not configured, the quiz section shows this short intake instead. */
export const FORECLOSURE_QUIZ_FALLBACK_HEADLINE = "Tell us how to reach you" as const

export const FORECLOSURE_QUIZ_FALLBACK_SUB =
  "Leave your details and we’ll follow up with practical next steps for your situation — no pressure." as const

export const FORECLOSURE_QUIZ_FALLBACK_SUBMIT_LABEL = "Request Next Steps" as const

/** Hero — calm, organized homeowner reviewing important paperwork */
export const HERO_BACKGROUND =
  "/images/facing-foreclosure/m2m-foreclosure-hero-woman-docs-kitchen.png" as const

/** Split section — planning next steps with professional guidance */
export const LEAD_SUPPORT_IMAGE =
  "/images/facing-foreclosure/m2m-foreclosure-lead-renovation-planning.png" as const

export const HERO_HEADLINE = "Facing Foreclosure in Hampton Roads?" as const

export const HERO_SUBHEAD =
  "You may still have options. Start with our free guide — clear language on timelines, lender communication, and paths that protect your family." as const

export const HERO_CTA_LABEL = "Download the guide" as const

export const EDUCATION_HEADING = "Understanding your situation — without the noise" as const

export const EDUCATION_COLUMNS = [
  {
    title: "What is foreclosure?",
    body: "If payments fall behind, the lender may pursue foreclosure to recover what is owed. That does not mean you are out of choices — timelines and programs vary, and clarity is the first step.",
  },
  {
    title: "How to avoid foreclosure?",
    body: "If you have received a notice of default, pause and get organized. The right guidance helps you understand deadlines, talk with your lender, and explore paths that may protect your home or your credit.",
  },
  {
    title: "What the guide covers",
    body: "We walk through common questions — equity, deficiency risk, short sales, and what “loss mitigation” can look like — in plain language, so you can decide next steps with confidence.",
  },
] as const

export const LEAD_HEADLINE = "You have options. We are your guides." as const

export const LEAD_SUBHEAD =
  "Request the complimentary guide and tell us how to reach you — we’ll follow up with practical next steps for your situation." as const

export const FORM_LABEL_FIRST = "First Name" as const
export const FORM_LABEL_LAST = "Last Name" as const
export const FORM_LABEL_EMAIL = "Email" as const
export const FORM_LABEL_PHONE = "Phone" as const
export const FORM_LABEL_MESSAGE = "Message" as const

export const FORM_PLACEHOLDER_PHONE = "Phone" as const
export const FORM_PLACEHOLDER_MESSAGE =
  "Optional: key dates, lender name, or how you’d like us to help." as const

export const FORM_SUBMIT_LABEL = "Send My Guide" as const

/**
 * Stand-in imagery for printed guide spreads (swap when export/PDF thumbnails exist).
 * Quotes summarize the complimentary foreclosure guide emphasis.
 */
export const GUIDE_CAROUSEL_SLIDES = [
  {
    id: "g1",
    image: "/images/facing-foreclosure/m2m-foreclosure-guide-organize-finances.png",
    imageAlt: "Planning home finances — organizing timelines and commitments",
    quote:
      "Clarity starts with your timeline — notices, milestones, and what they mean in plain language before you make big decisions.",
  },
  {
    id: "g2",
    image: "/images/facing-foreclosure/m2m-foreclosure-guide-couple-planning-keys.png",
    imageAlt: "Couple reviewing next steps toward housing stability together",
    quote:
      "Strong communication with your lender matters. The guide walks through how to get organized and what to ask at each step.",
  },
  {
    id: "g3",
    image: "/images/facing-foreclosure/m2m-foreclosure-guide-timeline-professional.png",
    imageAlt: "Advisor walking through a clear step-by-step plan with homeowners",
    quote:
      "From loss-mitigation programs to short sales, you deserve to understand paths that may protect your home or your credit.",
  },
  {
    id: "g4",
    image: "/images/facing-foreclosure/m2m-foreclosure-guide-agent-tour-modern-home.png",
    imageAlt: "Local realtor touring a move-forward home option with homeowners",
    quote:
      "You are not alone in Hampton Roads. Request the guide and we will follow up with practical next steps for your situation.",
  },
] as const

export const FORECLOSURE_FAQ_ITEMS = [
  {
    id: "fc-1",
    question: "Is it too late once I have received a notice?",
    answer:
      "Not necessarily. Timelines vary by lender and loan type. The first step is organizing dates and correspondence so you know what deadlines actually apply — that is what our guide and conversation are for.",
  },
  {
    id: "fc-2",
    question: "Will talking to you affect my lender relationship?",
    answer:
      "Seeking clarity is not the same as committing to a path. We focus on education and next steps; any agreements with your lender remain valid through your own communication with them.",
  },
  {
    id: "fc-3",
    question: "Do you charge for the guide?",
    answer:
      "The guide is complimentary. If you want deeper help on listing, short sale coordination, or timing a sale, we will explain those options transparently before you commit to anything.",
  },
] as const
