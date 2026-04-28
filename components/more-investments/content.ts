/**
 * Copy and image URLs for `/more-investments`.
 * Updated with lifestyle + outcome-driven imagery that feels less stock, more real-world investor energy.
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
    /** Wealth-building, strategic success imagery. */
    centerImage: "/images/investments/investor-hero-wealth-building.jpg" as const,
    centerImageAlt: "Successful real estate investor surveying investment properties",
  },
  {
    id: "fix-flip",
    variant: "fixFlip" as const,
    title: "FIX N' FLIP INVESTING",
    topLeftText:
      "PURCHASING A DISTRESSED PROPERTY, TYPICALLY AT A DISCOUNTED PRICE,",
    topRightImage: "/images/investments/investor-fix-flip-before.jpg" as const,
    topRightAlt: "Investor assessing renovation potential in fixer-upper",
    bridgeText: "YOU CAN TURN TRASH...",
    collageLeft: "/images/investments/investor-fix-flip-after.jpg" as const,
    collageLeftAlt: "Beautifully renovated home interior",
    collageRight: "/images/investments/investor-portfolio-success.jpg" as const,
    collageRightAlt: "Successful investor reviewing portfolio",
    bridgeText2: "...INTO TREASURE!",
    bottomText:
      "WITH THE INTENTION OF RENOVATING OR IMPROVING DISTRESSED PROPERTIES AND THEN SELLING THEM QUICKLY, YOU CAN MAKE A SIZEABLE PROFIT.",
  },
  {
    id: "multifamily",
    variant: "multifamily" as const,
    title: "MULTI-FAMILY INVESTING",
    row1Text: "INVESTORS CAN LIVE IN ONE UNIT AND RENT OUT THE OTHERS",
    row1Image: "/images/investments/investor-multifamily-property.jpg" as const,
    row1Alt: "Modern multi-family residential investment property",
    row2Image: "/images/investments/investor-hero-wealth-building.jpg" as const,
    row2Alt: "Strategic investor surveying properties",
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
    imageTopAlt: "Charming vacation rental property",
    imageMain: "/images/investments/investor-portfolio-success.jpg" as const,
    imageMainAlt: "Successful short-term rental investor",
  },
] as const

export type HeroSlide = (typeof HERO_SLIDES)[number]

export const INVESTOR_VALUE_SECTION_ID = "investor-value" as const

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
