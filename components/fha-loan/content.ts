/**
 * Copy and asset paths for `/fha-loan` only.
 */

/** Hero: approachable first-time homebuyer aspirational imagery. */
export const HERO_BACKGROUND = "/images/fha-loan/fha-hero-first-time-buyer.jpg" as const

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
    name: "Alexa Young, CA",
    quote:
      "Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own.",
  },
  {
    name: "Morgan James, NY",
    quote: "A great testimonial can boost your brand's image. Click to edit and add your own.",
  },
  {
    name: "Lisa Driver, MI",
    quote: "Have customers review you and share what they had to say. Click to edit and add your testimonial.",
  },
] as const

export const QUOTE_FORM = {
  title: "Request a Quote",
  subtitle: "Please take a moment to fill out the form.",
  submitLabel: "Submit",
} as const
