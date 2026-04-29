/**
 * Copy and assets for `/facing-foreclosure`.
 *
 * SWAP: Replace placeholder imagery when client provides final hero and lifestyle art.
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

export const SIGNUP_SECTION_ID = "facing-foreclosure-lead" as const

export const FORECLOSURE_QUIZ_SECTION_ID = "facing-foreclosure-quiz" as const

export const FORECLOSURE_QUIZ_HEADING = "Not sure where to start?" as const

export const FORECLOSURE_QUIZ_DESCRIPTION =
  "This short quiz helps you organize your situation — timeline, notices, and priorities — so you can see options more clearly." as const

/** Hero — foreclosure / legal / keys mood. */
// SWAP: client hero — gavel, keys, notice document (reference composition)
export const HERO_BACKGROUND = M2M_MEDIA.contactHeroStill

/** Split section — empathetic couple / documents mood. */
// SWAP: client — couple reviewing paperwork at home (reference)
export const LEAD_SUPPORT_IMAGE = M2M_MEDIA.sellHeroStill

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

export const FORM_SUBMIT_LABEL = "Send my guide" as const

/**
 * Stand-in imagery for printed guide spreads (swap when export/PDF thumbnails exist).
 * Quotes summarize the complimentary foreclosure guide emphasis.
 */
export const GUIDE_CAROUSEL_SLIDES = [
  {
    id: "g1",
    image: M2M_MEDIA.contactHeroStill,
    imageAlt: "Foreclosure guide — understanding your timeline",
    quote:
      "Clarity starts with your timeline — notices, milestones, and what they mean in plain language before you make big decisions.",
  },
  {
    id: "g2",
    image: M2M_MEDIA.sellHeroStill,
    imageAlt: "Foreclosure guide — lender communication",
    quote:
      "Strong communication with your lender matters. The guide walks through how to get organized and what to ask at each step.",
  },
  {
    id: "g3",
    image: M2M_MEDIA.partnersCtaStill,
    imageAlt: "Foreclosure guide — options and paths",
    quote:
      "From loss-mitigation programs to short sales, you deserve to understand paths that may protect your home or your credit.",
  },
  {
    id: "g4",
    image: M2M_MEDIA.teamPhotoWide,
    imageAlt: "Marching 2 More — local guidance",
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
