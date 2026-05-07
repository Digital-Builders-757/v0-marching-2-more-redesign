/**
 * Copy and nav for `/navigating-divorce` only.
 *
 * Imagery: local files under `/images/divorce/` (semantics in `docs/M2M_ASSET_MAP.md`).
 */
import type { M2MNavLink } from "@/lib/m2m-nav"
import {
  M2M_COMPANY_INSTAGRAM_URL,
  M2M_DONAVAN_INSTAGRAM_PERSONAL_URL,
} from "@/lib/m2m-team-social"

/** Top footer link row (reference order). */
export const DIVORCE_FOOTER_TOP_LINKS: readonly M2MNavLink[] = [
  { label: "Work With Us", href: "/contact-us?intent=seller" },
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Pre-Listing Checklist", href: "/resources" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
] as const

/** Hero — calm transition and new-chapter tone */
export const DIVORCE_HERO_BACKGROUND = "/images/divorce/divorce-hero-hopeful-transition.jpg" as const

export const COLLAGE_IMAGES = {
  /** Panel 1 — couple in a thoughtful moment (decisions ahead) */
  sellDuringDivorce: "/images/divorce/divorce-couple-contemplative.jpg" as const,
  /** Panel 2 — keys and a fresh start with the home */
  family: "/images/divorce/divorce-new-home-keys.jpg" as const,
  /** Panel 3 — home space where practical choices take shape */
  interior: "/images/divorce/divorce-modern-interior.jpg" as const,
  /** Panel 4 — professional reviewing documents shoulder-to-shoulder */
  legal: "/images/divorce/m2m-divorce-collage-consultant-documents-table.png" as const,
} as const

/** Full-bleed section backgrounds */
export const VALUATION_BACKGROUND =
  "/images/divorce/m2m-divorce-valuation-renovation-planning.png" as const
export const AERIAL_BACKGROUND =
  "/images/divorce/m2m-divorce-aerial-evening-consult-home.png" as const

export const SUPPORT_PARAGRAPH =
  "This comprehensive resource offers valuable insights and expert advice on managing real estate matters during divorce proceedings." as const

export const NUMBERED_TOPICS = [
  {
    n: "01",
    title: "Property Division",
    body: "One of the most significant concerns is how to divide the real estate property acquired during the marriage. This involves determining who will keep the property, whether it will be sold and the proceeds divided, or if there will be some other arrangement.",
  },
  {
    n: "02",
    title: "Equity and Valuation",
    body: "Assessing the current market value of the real estate is crucial for equitable division. Couples may need to obtain professional appraisals to determine the fair market value of the property and calculate the equity each party holds.",
  },
  {
    n: "03",
    title: "Tax Implications",
    body: "Divorcing couples should consider the tax implications of any decisions regarding the real estate. This includes potential capital gains taxes upon sale, tax deductions related to mortgage interest, and any other tax considerations that may arise from transferring ownership or selling the property.",
  },
] as const

export const VALUATION_BLOCKS = [
  {
    title: "Schedule a Walkthrough",
    body: "Share your home's unique features and any concerns you have. We're here to listen and address your specific needs.",
  },
  {
    title: "Review Market Positioning Options",
    body: "Comprehensive Market Analysis: Gain insights with a detailed Comparative Market Analysis (CMA), understanding how your home stacks up in the current market.",
  },
  {
    title: "Personalized Value Enhancement Checklist",
    body: "Whether improving your home's value or listing as is, we provide expert guidance every step of the way.",
  },
  {
    title: "No pressure, only support.",
    body: "From contracts to closing, we handle everything. We coordinate with partners, manage projects, and keep your sale on track.",
  },
] as const

export const AERIAL_COPY = {
  headline: "Navigating Divorce?",
  subhead: "Let Us Help You Find Your New Beginning with Our Expert Real Estate Solutions",
  blocks: [
    {
      title: "We understand how you feel",
      body: "Our complimentary Divorce & Real Estate Guide was written to help you move forward with clarity—without adding more noise to an already difficult season.",
    },
    {
      title: "We are here to be your guide",
      body: "When you're ready, we can walk you through options with calm, one-on-one consultations focused on your timeline, equity, and next chapter.",
    },
  ],
} as const

export const DIVORCE_QUIZ_SECTION_ID = "navigating-divorce-quiz" as const

export const DIVORCE_QUIZ_HEADING = "Not sure what to do next?" as const

export const DIVORCE_QUIZ_DESCRIPTION =
  "Answer a few quick questions and get a practical read on whether a guide, a neutral conversation, or timing work is your best next step — no pressure, no obligation." as const

export const TEAM_SOCIAL = {
  donavan: {
    linkedin: "https://www.linkedin.com/in/donavan-mcfadden",
    instagram: M2M_DONAVAN_INSTAGRAM_PERSONAL_URL,
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
  roger: {
    linkedin: "https://www.linkedin.com/in/roger-lee",
    instagram: M2M_COMPANY_INSTAGRAM_URL,
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
  company: {
    facebook: "https://www.facebook.com/marching2more",
    instagram: M2M_COMPANY_INSTAGRAM_URL,
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
} as const

export const DIVORCE_FAQ_ITEMS = [
  {
    id: "dv-1",
    question: "Can we talk before anything is finalized in court?",
    answer:
      "Yes. Many people reach out early for a neutral read on equity, timing, and how a sale could work alongside legal counsel. We stay in our lane as real estate advisors and coordinate respectfully with attorneys when needed.",
  },
  {
    id: "dv-2",
    question: "Will we have to sell immediately?",
    answer:
      "Not necessarily. Sometimes a buyout, deferred sale, or staged listing makes sense. We help you understand practical market options so you can align with your legal strategy.",
  },
  {
    id: "dv-3",
    question: "How do we get a fair value on the home?",
    answer:
      "We use comparable sales, condition, and current Hampton Roads demand — often with a CMA — so decisions are grounded in data, not guesswork.",
  },
] as const
