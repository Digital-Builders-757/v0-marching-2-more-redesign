/**
 * Copy and image URLs for `/more-investments`.
 * Hero carousel: seven semantic picks from `public/images/_original-client-delivery/` (URL-encoded) plus
 * one curated STR photo — each slot matches the slide topic (prep → fix/flip → multifamily → short-term).
 */

export const INVESTMENTS_HERO_INTRO = {
  headline: "Unlock Your Path to Financial Freedom",
  subhead:
    "Check out the ways we help our clients overcome common challenges faced by aspiring real estate investors and get started with confidence.",
} as const

/** Center "story" slides (inside carousel). Order matches pagination dots. */
export const HERO_SLIDES = [
  {
    id: "intro",
    variant: "intro" as const,
    headlineLines: ["DIFFERENT", "TYPES OF", "REAL ESTATE", "INVESTING"] as const,
    /** Home goals, credit, and financing prep — “getting ready to invest.” */
    centerImage:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2002_44_53%20AM.png" as const,
    centerImageAlt: "Household reviewing credit, savings goals, and homeowner readiness on a laptop",
  },
  {
    id: "fix-flip",
    variant: "fixFlip" as const,
    title: "FIX N' FLIP INVESTING",
    topLeftText:
      "PURCHASING A DISTRESSED PROPERTY, TYPICALLY AT A DISCOUNTED PRICE,",
    topRightImage:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2002_48_42%20AM.png" as const,
    topRightAlt: "Investor and contractor reviewing blueprints and samples during an active renovation",
    bridgeText: "YOU CAN TURN TRASH...",
    collageLeft:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2002_48_58%20AM.png" as const,
    collageLeftAlt: "Agent touring clients through a bright finished home after improvements",
    collageRight:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2001_47_23%20AM.png" as const,
    collageRightAlt: "Advisor and client reviewing floor plans and investment documents at a table",
    bridgeText2: "...INTO TREASURE!",
    bottomText:
      "WITH THE INTENTION OF RENOVATING OR IMPROVING DISTRESSED PROPERTIES AND THEN SELLING THEM QUICKLY, YOU CAN MAKE A SIZEABLE PROFIT.",
  },
  {
    id: "multifamily",
    variant: "multifamily" as const,
    title: "MULTI-FAMILY INVESTING",
    row1Text: "INVESTORS CAN LIVE IN ONE UNIT AND RENT OUT THE OTHERS",
    row1Image:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2001_53_10%20AM.png" as const,
    row1Alt: "Advisor reviewing options with clients in a modern home with multi-unit neighborhood context",
    row2Image:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2001_40_31%20AM.png" as const,
    row2Alt: "Family on the lawn in front of a suburban home — live-in ownership with rental income in mind",
    row2Text: "ALLOWING THEM TO OFFSET THEIR OWN HOUSING EXPENSES WITH RENTAL INCOME.",
    summary:
      "MULTI-FAMILY INVESTING IS AN EXCELLENT WAY TO GENERATE MONTHLY CASH FLOW AND BUILD LONG-TERM WEALTH WITH REAL ESTATE.",
  },
  {
    id: "short-term",
    variant: "shortTerm" as const,
    title: "SHORT TERM RENTALS",
    labelA: "VACATION RENTALS, AIRBNB, VRBO...",
    labelB: "SHORT-TERM RENTAL PROPERTIES CAN BE LUCRATIVE REAL ESTATE INVESTMENTS",
    labelC: "THESE ARE GREAT TO HAVE IN AREAS WITH HIGH TOURIST DEMAND OR BUSINESS TRAVEL.",
    imageTop: "/images/investments/investor-short-term-rental.jpg" as const,
    imageTopAlt: "Inviting short-term or vacation-style rental property exterior",
    imageMain:
      "/images/_original-client-delivery/ChatGPT%20Image%20May%203%2C%202026%2C%2001_40_25%20AM.png" as const,
    imageMainAlt: "Advisor walking through strategy at a kitchen table with plans and a laptop",
  },
] as const

export type HeroSlide = (typeof HERO_SLIDES)[number]

export const INVESTOR_VALUE_SECTION_ID = "investor-value" as const

export const INVESTOR_TOOLS_SECTION_ID = "investor-tools" as const

export const INVESTOR_TOOLS_QUIZ_TITLE = "Investor readiness quiz" as const

export const INVESTOR_TOOLS_INTRO =
  "A short questionnaire helps clarify your experience level, focus neighborhoods, and how actively you want to pursue deals." as const

export const INVESTOR_TOOLS_SUBHEAD =
  "We’ll use what you share to suggest practical next steps. This isn’t tax or legal advice — always confirm strategy with licensed professionals." as const

export const INVESTOR_BRRRR_TITLE = "BRRRR deal analyzer" as const

export const INVESTOR_BRRRR_BLURB =
  "Work through buy, rehab, rent, refinance, and repeat assumptions in one place before you vet specific listings with the team." as const

/** Stubs for future hosted tools — copy stays honest until URLs ship in lib/m2m-site.ts. */
export const INVESTOR_PLACEHOLDER_TOOLS = [
  {
    id: "p1",
    title: "Rental yield snapshot",
    body: "Compare rough rent and cash-flow assumptions across Hampton Roads submarkets before you underwrite.",
  },
  {
    id: "p2",
    title: "Scope-of-work estimator",
    body: "Frame cosmetic vs. heavier rehab tiers so lender and contractor conversations start in the right range.",
  },
  {
    id: "p3",
    title: "Hold timeline planner",
    body: "Map exit timing against lease seasons and military-market cycles when that fits your strategy.",
  },
] as const

export const INVESTOR_VALUE_HEADING = "How we help you invest with intention" as const

export const INVESTOR_VALUE_SUBHEAD =
  "Whether you are exploring your first deal or scaling a portfolio, we focus on clarity, local market context, and a plan that fits your timeline — not generic hype." as const

export const INVESTOR_VALUE_COLUMNS = [
  {
    title: "Strategy before spreadsheets",
    body: "We start with your goals and risk comfort, then map realistic paths — fix-and-flip, rentals, or long-term holds — so every next step feels grounded.",
  },
  {
    title: "Hampton Roads on the ground",
    body: "Neighborhood nuance matters. We bring local pricing, rental demand, and military-market context so you are not guessing from national headlines.",
  },
  {
    title: "Partners in the long game",
    body: "Investing is a relationship, not a transaction. We stay available for questions, introductions, and course corrections as your portfolio evolves.",
  },
] as const

/** Pulled from real client voice on /reviews — condensed for scannability. */
export const INVESTMENTS_TRUST_QUOTE =
  "Donavan was patient and diligent throughout the entire process and was readily available at all times… Highly recommend! Him and his team will take care of you!" as const

export const INVESTMENTS_TRUST_ATTRIBUTION = "Marching 2 More client review" as const

export const INVESTMENTS_FAQ_ITEMS = [
  {
    id: "inv-1",
    question: "I have never owned a rental — where do I start?",
    answer:
      "We begin with your budget, risk comfort, and how hands-on you want to be. Then we map realistic Hampton Roads submarkets before you chase shiny spreadsheets.",
  },
  {
    id: "inv-2",
    question: "Do you guarantee returns or cash flow?",
    answer:
      "No ethical advisor can. We bring local context and deal discipline; your CPA, attorney, and lender sign off on numbers that affect your taxes and borrowing.",
  },
  {
    id: "inv-3",
    question: "What if I am active duty or PCS soon?",
    answer:
      "Military timelines change strategy — we factor lease-up seasons, property management options, and whether you need long-distance reliability from partners.",
  },
] as const
