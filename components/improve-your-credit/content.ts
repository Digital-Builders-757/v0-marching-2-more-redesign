/**
 * Copy and image constants for `/improve-your-credit`.
 */

/** Anchor for in-page CTAs until a PDF URL exists. */
export const CREDIT_PLAYBOOK_SECTION_ID = "credit-playbook" as const

export const HERO_HEADLINE = "Crushing Credit on Your Path to Homeownership" as const

/** Hero collage — family credit planning scene (multicultural, inclusive). */
export const HERO_IMAGE_LEFT = "/images/credit/m2m-credit-family-planning-goals.png" as const

/** Hero — multicultural couple coordinating documents and timing. */
export const HERO_IMAGE_CENTER = "/images/credit/m2m-credit-couple-plan-together.png" as const

/** Hero — professional consultation at kitchen table */
export const HERO_IMAGE_RIGHT = "/images/credit/m2m-credit-professional-consultation.png" as const

export const HERO_FEATURE_OVERLAY_LINE_1 = "Improve your credit" as const
export const HERO_FEATURE_OVERLAY_LINE_2 = "to buy with confidence." as const

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

/** Tall column beside review/homework — inclusive family financial planning moment. */
export const EDUCATION_LARGE_IMAGE = "/images/credit/m2m-credit-family-collaborative-home.png" as const

/** Small collage under homework card */
export const HOMEWORK_COLLAGE_IMAGES = [
  "/images/credit/m2m-credit-professional-consultation.png",
  "/images/credit/m2m-credit-family-planning-goals.png",
  "/images/credit/m2m-credit-couple-plan-together.png",
] as const

export const DOWNLOAD_GUIDE_CTA = "Download your guide today" as const

export const TAKEAWAYS_HEADING = "Core Credit Takeaways" as const
export const TAKEAWAYS_SUBHEAD =
  "Are you ready to build stronger credit step by step before you apply?" as const
export const TAKEAWAYS_START_CTA = "Go to playbook" as const

export const TAKEAWAY_ITEMS = [
  { label: "Pay your bills on time" },
  { label: "Reduce your debt-to-income ratio" },
  { label: "Monitor credit report" },
  { label: "Avoid opening new credit accounts" },
] as const

/** Full-bleed banner behind takeaways + icon row */
export const TAKEAWAYS_BACKGROUND = "/images/site/m2m-partners-consult-evening-home.png" as const

export const VIDEO_HEADING = "Marching 2 More and Crushing Credit" as const
export const VIDEO_SUBHEAD =
  "Hear straight talk on credit, homebuying, and how to prepare before you write an offer." as const

export const YOUTUBE_EMBED_SRC =
  "https://www.youtube.com/embed/kFpsCfoem24?start=91" as const

export const PLAYBOOK_HEADING = "Credit Improvement Playbook" as const

export const PLAYBOOK_PARAGRAPHS = [
  "Marching 2 More helps you tie credit readiness to real offers and closing timelines — starting with practical steps delivered straight to your inbox.",
  "You will hear from our team when it matters: what to prioritize first, questions to ask a loan officer, and how to spot errors on your report.",
  "This guide is educational, not legal or credit repair advice — we connect you with the right specialists when needed.",
] as const

export const PLAYBOOK_CARD_TITLE = "Tell us where to send your playbook." as const

export const PLAYBOOK_DOWNLOAD_BUTTON = "Send my playbook" as const

/** Closing band — approachable guidance moment */
export const CLOSING_HERO_IMAGE = "/images/credit/m2m-credit-couple-plan-together.png" as const

export const CREDIT_FAQ_ITEMS = [
  {
    id: "cr-1",
    question: "Will checking my credit hurt my score?",
    answer:
      "Soft checks for your own review typically do not hurt scores the way a hard inquiry from a new loan application can. We still recommend staggering applications and talking with your loan officer before multiple pulls.",
  },
  {
    id: "cr-2",
    question: "How long until I see a change on my report?",
    answer:
      "It depends on what is dragging the score down — late payments, high utilization, or errors. Disputes and pay-downs can take weeks to months to reflect. We help you prioritize the levers that matter for mortgage timing.",
  },
  {
    id: "cr-3",
    question: "Do you replace a lender or credit repair company?",
    answer:
      "No. We are your real estate team — we help you understand how credit fits your homebuying timeline and connect you with reputable partners. Legal or specialized repair questions belong with licensed professionals.",
  },
] as const
