/**
 * Copy and asset paths for `/fha-loan` only.
 *
 * Swap points:
 * - `HERO_BACKGROUND` — advisor + clients in office (replace with final FHA hero art)
 * - `FLAG_QUOTE_BACKGROUND` — full-bleed American flag behind quote form
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

/** Hero: professional consultation scene (placeholder until FHA-specific photo). */
export const HERO_BACKGROUND = M2M_MEDIA.contactHeroStill

/**
 * Patriotic background for quote section (Unsplash placeholder).
 * Self-host: add e.g. `public/images/fha-loan/flag-hero.jpg` and set `FLAG_QUOTE_BACKGROUND` to that path.
 */
export const FLAG_QUOTE_BACKGROUND =
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2400&q=80" as const

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
    key: "eco",
    title: "Eco-Friendly Design",
    body: "One of the ways in which we provide exceptional value is through the wide range of features that we offer. Our team created them to provide every customer with the best possible experience. Explore some of the main features below, and please get in touch to receive additional information.",
    icon: "smile" as const,
  },
  {
    key: "support",
    title: "24/7 Support",
    body: "Our customers deserve the highest level of support, and we work tirelessly to maintain those standards. When you choose to work with our team, know that you are consistently choosing quality and excellence. Customer service is at the heart of everything that we do.",
    icon: "star" as const,
  },
  {
    key: "lang",
    title: "Multilingual Functionality",
    body: "In today's globalized world, chances are you are interacting with people from more than just one country. This is where our multilingual functionality comes into play. Take advantage of this unique capability to expand your reach.",
    icon: "globe" as const,
  },
  {
    key: "tech",
    title: "Advanced Tech",
    body: "We are constantly working to improve our offerings and expand upon our technological capabilities. Our expert team of professionals is passionate about developing the most advanced tech on the market. Ready to experience the future? Get in touch.",
    icon: "zap" as const,
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
