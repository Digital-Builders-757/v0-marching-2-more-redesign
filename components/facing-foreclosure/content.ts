/**
 * Copy and assets for `/facing-foreclosure` — Virginia pre-foreclosure seller funnel (form-first).
 *
 * Imagery: `public/images/facing-foreclosure/` · guide PDF default: `public/downloads/m2m-pre-foreclosure-guide.pdf`
 */

export const SIGNUP_SECTION_ID = "facing-foreclosure-lead" as const

export const HERO_BACKGROUND =
  "/images/facing-foreclosure/m2m-foreclosure-hero-woman-docs-kitchen.png" as const

export const HERO_HEADLINE = "Facing Pre-Foreclosure in Virginia? You Still Have Options." as const

export const HERO_SUBHEAD =
  "Get the free foreclosure guide instantly and by email, or speak with a foreclosure specialist now to explore your next step." as const

export const HERO_REASSURANCE =
  "Compassionate, confidential guidance from a Virginia team that helps homeowners sell before auction and move forward." as const

export const HERO_LEGAL_LINE =
  "We are a licensed real estate team — not attorneys. We do not provide legal advice; we can connect you with trusted professionals when legal questions come up." as const

export const TRUST_STRIP_ITEMS = [
  { title: "Licensed real estate team", body: "Local guidance grounded in Virginia transactions and timelines." },
  {
    title: "Serving Virginia • Hampton Roads depth",
    body: "We know this market — from notice letters to listing timelines — without hype.",
  },
  { title: "Full team support", body: "You are not handed off into silence; the Marching 2 More team stays coordinated." },
  {
    title: "Confidential, no-pressure",
    body: "Your situation stays private. We listen first, then help you understand realistic paths.",
  },
] as const

export const GUIDE_VALUE_EYEBROW = "What the guide covers" as const
export const GUIDE_VALUE_TITLE = "Plain-language clarity when everything feels urgent" as const
export const GUIDE_VALUE_LEAD =
  "The complimentary guide is written for homeowners who are scared, tired, or both — without legal jargon or sales pressure." as const

export const GUIDE_VALUE_BULLETS = [
  "What pre-foreclosure means in everyday terms.",
  "Common milestones after missed payments and notices — without assuming your case is identical to anyone else’s.",
  "Options families often explore with lenders and advisors: repayment plans, reinstatement, short sale, deed in lieu, and listing before auction when timing allows.",
  "Red flags that help you avoid foreclosure rescue scams.",
] as const

/** Full-bleed photo between “Paths we discuss” and “How we help” on `/facing-foreclosure`. */
export const OPTIONS_TO_HELP_IMAGE =
  "/images/facing-foreclosure/m2m-pre-foreclosure-past-due-documents.png" as const
export const OPTIONS_TO_HELP_IMAGE_ALT =
  "A worried homeowner at a desk reviews papers stamped Past Due and Urgent, resting his forehead in his hand." as const

export const OPTIONS_SECTION = {
  eyebrow: "Paths we discuss",
  title: "There may still be time to choose your next chapter",
  lead:
    "Every situation is different. Nothing here guarantees an outcome — but many homeowners still have choices once the picture is organized.",
  items: [
    {
      title: "Sell before auction (when timing allows)",
      body: "If equity and deadlines line up, a traditional or negotiated sale can help you control closing dates and relocation.",
    },
    {
      title: "Short sale (when it is the realistic tool)",
      body: "When you owe more than the home may bring, a short sale can sometimes be coordinated with your lender — with eyes wide open.",
    },
    {
      title: "Relocation planning",
      body: "We help you think through next housing steps, timelines, and dignity — not just the contract.",
    },
  ],
} as const

export const HOW_WE_HELP = {
  eyebrow: "How we help",
  title: "Your advocates in the real estate lane",
  items: [
    {
      title: "Understand the full picture",
      body: "We start with what you have received, what you owe, and what matters most to your household — without judgment.",
    },
    {
      title: "Review options honestly",
      body: "We explain real estate paths in plain language and when other professionals need to be at the table.",
    },
    {
      title: "See if selling is the right fit",
      body: "Sometimes staying put while working with your lender is the answer; sometimes listing is. We help you weigh both without pressure.",
    },
    {
      title: "Support your move-forward plan",
      body: "From staging timelines to mover conversations, we stay beside you through the practical details.",
    },
    {
      title: "Attorney referrals when needed",
      body: "We are not lawyers. If you need legal counsel, we can point you toward trusted real estate attorneys in Virginia.",
    },
  ],
} as const

export const TEAM_SECTION = {
  eyebrow: "Your team",
  title: "Marching 2 More — full team behind you",
  lead: "The same people you see here answer the phone, tour homes, and coordinate timelines across Hampton Roads.",
} as const

export const FORM_INTENT_OPTIONS = [
  { value: "guide", label: "I want the free guide" },
  { value: "speak_now", label: "I want to speak with a foreclosure specialist now" },
  { value: "both", label: "I want both" },
] as const

export type ForeclosureFormIntent = (typeof FORM_INTENT_OPTIONS)[number]["value"]

export const FORM_LABEL_FIRST = "First name" as const
export const FORM_LABEL_LAST = "Last name" as const
export const FORM_LABEL_EMAIL = "Email" as const
export const FORM_LABEL_PHONE = "Phone" as const
export const FORM_LABEL_ADDRESS = "Property address or ZIP" as const
export const FORM_LABEL_INTENT = "How can we help?" as const
export const FORM_LABEL_MESSAGE = "Anything else we should know? (optional)" as const

export const FORM_PLACEHOLDER_LAST = "Optional" as const
export const FORM_PLACEHOLDER_ADDRESS = "Street address and city — or at least your ZIP" as const
export const FORM_PLACEHOLDER_MESSAGE =
  "Optional: auction date, lender, or what you hope to learn." as const

export const FORM_SUBMIT_LABEL = "Get the guide & send my request" as const

export const FORM_SUCCESS_MESSAGE =
  "Your guide is available now and has been sent to your email. If you requested help now, our team will contact you immediately." as const

export const FORM_CARD_TITLE = "Request your guide or talk with us" as const
export const FORM_CARD_SUB =
  "One form — choose the guide, a conversation, or both. We respond with calm, practical next steps." as const

export const FINAL_CTA_TITLE = "Ready for your next step?" as const
export const FINAL_CTA_BODY =
  "Scroll up to the form anytime — the guide stays free, and there is no obligation to list with us." as const
export const FINAL_CTA_BUTTON = "Back to the form" as const

export const FORECLOSURE_FAQ_ITEMS = [
  {
    id: "fc-faq-1",
    question: "Do I still have options if I received a Notice of Default?",
    answer:
      "Often yes — timelines and remedies depend on your loan, lender, and Virginia process. The guide helps you organize dates and questions so you can see what might still be possible. Your lender and any attorney you hire confirm the legal detail.",
  },
  {
    id: "fc-faq-2",
    question: "Do I have to move out right away?",
    answer:
      "Not necessarily. Occupancy rules vary by stage and agreement. We help you understand move timing in the context of listing or loss-mitigation options — not legal eviction advice.",
  },
  {
    id: "fc-faq-3",
    question: "Can I still sell my home before auction?",
    answer:
      "Sometimes, if the calendar and paperwork allow. That is why we start with clarity on deadlines and property condition — then map an orderly sale if it is the right path.",
  },
  {
    id: "fc-faq-4",
    question: "What happens after I submit my information?",
    answer:
      "You will receive the guide on-screen and by email when that path is selected. If you asked for immediate help, our team reaches out as quickly as possible during business hours.",
  },
  {
    id: "fc-faq-5",
    question: "Do you provide legal advice?",
    answer:
      "No. Marching 2 More is a real estate team. For liens, bankruptcy, or legal contests, we recommend speaking with a Virginia attorney — and we can help you find one if you need a referral.",
  },
] as const
