/**
 * Copy and asset paths for `/fha-loan` only.
 */

/** Hero: inclusive family + advisor at home — consistent with FHA audience. */
export const HERO_BACKGROUND = "/images/site/m2m-partners-consult-evening-home.png" as const

/** Supporting line beneath headline — grants + FHA context without changing route anchors */
export const HERO_SUBLINE =
  "Understand FHA basics, down-payment assistance programs, Virginia Housing DPAL pathways, and local grants — plus whether this path fits your budget before you shop." as const

/** Quote form background — helpful, guided, confidence-building imagery. */
export const FLAG_QUOTE_BACKGROUND = "/images/fha-loan/fha-quiz-guidance.jpg" as const

export const HERO_HEADLINE = "Is the FHA Loan Right for You?" as const

export const WHY_SPLIT_LEFT = {
  title: "Empower Growth",
  ctaLabel: "Start Now",
  ctaHref: "#request-quote",
} as const

export const WHY_CHOOSE_HEADER = {
  kickerTop: "WHY CHOOSE",
  brand: "MARCHING 2 MORE",
  kickerBottom: "REAL ESTATE TEAM",
  pill: "FOR FHA PURCHASERS",
} as const

export const FHA_VALUE_POINTS = [
  {
    title: "Local Expertise in Hampton Roads",
    body: "In-depth knowledge of neighborhoods, trends & value under FHA limits.",
    icon: "map" as const,
  },
  {
    title: "Strong Network of FHA-Friendly Lenders & Inspectors",
    body: "Partnerships with specialized lenders, inspectors & contractors.",
    icon: "clipboard" as const,
  },
  {
    title: "Clear Guidance Through the FHA Process",
    body: "Assistance with requirements, documentation & deadlines.",
    icon: "handshake" as const,
  },
  {
    title: "Personalized Matching of Homes & Grant/Assistance Programs",
    body: "Targeting listings & identifying down payment help.",
    icon: "home" as const,
  },
  {
    title: "Transparent Cost Breakdowns",
    body: "Explaining monthly payments, closing costs, repairs & MIP.",
    icon: "dollar" as const,
  },
  {
    title: "Proven Track Record",
    body: "Testimonials & case studies of successful FHA closings.",
    icon: "check" as const,
  },
] as const

export const FEATURES_GRID = [
  {
    key: "milestones",
    title: "Plain-language FHA milestones",
    body: "We walk you through common steps—pre-approval, appraisal, and repair expectations—so you know what tends to come next. (Final loan decisions belong to your lender.)",
    icon: "book" as const,
  },
  {
    key: "network",
    title: "Hampton Roads–savvy partners",
    body: "We connect you with lending and inspection professionals who regularly work FHA transactions in this market—so questions get answered with local context.",
    icon: "handshake" as const,
  },
  {
    key: "communication",
    title: "Business-hours communication",
    body: "You get clear updates during business hours and timely follow-up when timing matters for offers, responses, and deadlines.",
    icon: "message" as const,
  },
  {
    key: "numbers",
    title: "Payment and cost clarity",
    body: "We help you understand how monthly payment pieces fit together—without promising outcomes only a lender can guarantee.",
    icon: "calculator" as const,
  },
] as const

export const FEATURES_CTA_STRIP = {
  headline: "If you'd like more information about our features, get in touch today.",
  buttonLabel: "Get in Touch",
  buttonHref: "/contact-us",
} as const

export const TESTIMONIALS = [
  {
    name: "The Cole Family — U.S. Navy",
    quote:
      "Donavan was very responsive and really took his time to explain everything we did not know. He took what can be a laborious and stressful process and made it an enjoyable one.",
  },
  {
    name: "Karen Gonzalez — U.S. Navy",
    quote:
      "Patient and diligent throughout the entire process and readily available at all times… Honest and a pleasure to work with. The process was so easy.",
  },
  {
    name: "Terri Hill — Hampton PD referral",
    quote:
      "Roger built trust. He was relatable. He was patient — and helped my relative in a way that earned a repeat client.",
  },
] as const

export const QUOTE_FORM = {
  title: "Tell Us About Your FHA Goals",
  subtitle:
    "Questions about FHA, down payment grants, Virginia Housing DPAL or local assistance — send a note and we’ll outline practical next steps. (Loan approval stays with your lender.)",
  submitLabel: "Send My Questions",
  ariaSummary: "FHA homebuyer intake",
} as const

export const FHA_FAQ_ITEMS = [
  {
    id: "fh-0",
    question: "Can you help with down payment grants or assistance programs?",
    answer:
      "Yes — we routinely help Hampton Roads buyers understand Virginia Housing DPAL paths, locality programs you may qualify for, and lender overlays. Program rules change often; our job is pairing you with the right introductions and timelines while your lender confirms eligibility.",
  },
  {
    id: "fh-1",
    question: "Is FHA only for first-time buyers?",
    answer:
      "No. FHA can work for many buyers who want a lower down payment path and meet program and lender requirements — not only first-time purchases.",
  },
  {
    id: "fh-2",
    question: "Will I pay FHA mortgage insurance forever?",
    answer:
      "FHA includes an upfront premium and ongoing MIP. How long MIP stays depends on your loan term and down payment — your loan officer walks through the specifics before you lock.",
  },
  {
    id: "fh-3",
    question: "Who sets my final approval — you or the lender?",
    answer:
      "The lender approves the loan. We help you choose homes, negotiate, and stay coordinated on deadlines so the file your lender needs stays clean.",
  },
] as const
