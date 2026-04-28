/**
 * Copy and image constants for `/improve-your-credit`.
 *
 * Imagery: `credit*` keys in `lib/m2m-media.ts` — momentum (sides), trust (center), goal (right).
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

/** Anchor for in-page CTAs until a PDF URL exists. */
export const CREDIT_PLAYBOOK_SECTION_ID = "credit-playbook" as const

export const HERO_HEADLINE =
  "Crush Credit Along Your Path to Homeownership" as const

/** Hero collage — left: forward path / suburban momentum */
export const HERO_IMAGE_LEFT = M2M_MEDIA.creditHeroLeft

/** Hero — center: team trust overlay */
export const HERO_IMAGE_CENTER = M2M_MEDIA.creditHeroCenter

/** Hero collage — right: aspirational home / life goal */
export const HERO_IMAGE_RIGHT = M2M_MEDIA.creditHeroRight

export const HERO_FEATURE_OVERLAY_LINE_1 = "improve your credit" as const
export const HERO_FEATURE_OVERLAY_LINE_2 = "TO BUY A NEW HOME." as const

export const HERO_TEXT_CARD = {
  kicker: "Be ready to buy",
  scriptLine: "when that perfect house hits the market",
  body: [
    "Financial health matters more than ever when you’re preparing to buy a home. Strong credit helps you qualify for better loan terms and keeps your monthly payment in a comfortable range.",
    "Many lenders look for solid credit profiles — often a FICO score of 670 or higher is a useful benchmark, though requirements vary by program and lender.",
    "The Marching 2 More Real Estate Team helps you connect the dots between credit, budget, and the right home — so you can move confidently when the right listing appears.",
  ],
} as const

export const CREDIT_REVIEW_HEADING = "Review your credit report" as const

export const CREDIT_REVIEW_INTRO =
  "Understanding the information in your credit report is a key part of addressing a poor credit score. A few critical factors go into determining your score, including:" as const

export const CREDIT_FACTORS = [
  {
    n: "1",
    title: "The age of your credit",
    body: "Long-maintained accounts in good standing can support your profile. Avoid closing old cards without a strategy.",
  },
  {
    n: "2",
    title: "The amount of debt you have",
    body: "High balances relative to limits can weigh on scores. Paying down revolving debt often helps over time.",
  },
  {
    n: "3",
    title: "Your payment history",
    body: "On-time payments are one of the strongest signals. Set reminders or autopay for at least the minimums.",
  },
  {
    n: "4",
    title: "The number of credit lines open",
    body: "Too many new accounts in a short window can be a red flag. Be intentional about new applications.",
  },
] as const

export const CREDIT_REVIEW_OUTRO =
  "Knowing how these pieces fit together is an important step toward improving credit — and toward a smoother mortgage process." as const

export const CREDIT_HOMEWORK_HEADING = "Credit repair" as const
export const CREDIT_HOMEWORK_SCRIPT = "homework" as const

export const CREDIT_HOMEWORK_STEPS = [
  "Pull your credit report from the official Annual Credit Report site.",
  "Verify all information on the report is current and accurate.",
  "If something is inaccurate, dispute it with the credit bureaus using their documented process.",
] as const

/** Tall column beside review/homework — editorial uplift */
export const EDUCATION_LARGE_IMAGE = M2M_MEDIA.creditEducationLarge

/** Small collage under homework card — varied interior / progress cues */
export const HOMEWORK_COLLAGE_IMAGES = [
  M2M_MEDIA.creditHomeworkA,
  M2M_MEDIA.creditHomeworkB,
  M2M_MEDIA.creditHomeworkC,
] as const

export const DOWNLOAD_GUIDE_CTA = "Download your guide today" as const

export const TAKEAWAYS_HEADING = "Core Credit Takeaways" as const
export const TAKEAWAYS_SUBHEAD = "Are You Ready To Crush Credit" as const
export const TAKEAWAYS_START_CTA = "Start" as const

export const TAKEAWAY_ITEMS = [
  { label: "Pay your bills on time" },
  { label: "Reduce your debt-to-income ratio" },
  { label: "Monitor credit report" },
  { label: "Avoid opening new credit accounts" },
] as const

/** Full-bleed banner behind takeaways + icon row */
export const TAKEAWAYS_BACKGROUND = M2M_MEDIA.creditTakeawaysBanner

export const VIDEO_HEADING = "Marching 2 More & crushing credit" as const
export const VIDEO_SUBHEAD =
  "Hear straight talk on credit, homebuying, and how to prepare before you write an offer." as const

export const YOUTUBE_EMBED_SRC =
  "https://www.youtube.com/embed/kFpsCfoem24?start=91" as const

export const PLAYBOOK_HEADING = "Credit Improvement Playbook" as const

export const PLAYBOOK_PARAGRAPHS = [
  "Unlock the gateway to your dream home with the Marching 2 More Real Estate Team’s Credit Improvement Playbook.",
  "Gain a competitive edge in the homebuying journey by receiving expert advice directly in your inbox.",
  "This comprehensive guide empowers you to navigate the complexities of credit repair, ensuring you’re primed for success in one of life’s significant investments.",
] as const

export const PLAYBOOK_CARD_TITLE =
  "Prepare with confidence and secure your copy today to embark on your path to homeownership." as const

export const PLAYBOOK_DOWNLOAD_BUTTON = "Click here to download" as const

/** Closing band — goal-forward warmth */
export const CLOSING_HERO_IMAGE = M2M_MEDIA.creditClosingBanner
