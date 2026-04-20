/**
 * Copy and image URLs for `/more-investments`.
 *
 * Replace placeholder imagery with final campaign assets under `public/images/more-investments/`
 * or new entries in `lib/m2m-media.ts`.
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

export const INVESTMENTS_HERO_INTRO = {
  headline: "Unlock Your Path to Financial Freedom",
  subhead:
    "Check out the ways we help our clients overcome common challenges faced by aspiring real estate investors and get started with confidence.",
} as const

/** Center “story” slides (inside carousel). Order matches pagination dots. */
export const HERO_SLIDES = [
  {
    id: "intro",
    variant: "intro" as const,
    headlineLines: ["DIFFERENT", "TYPES OF", "REAL ESTATE", "INVESTING"] as const,
    /** Metaphor image — houses on coins / growth (swap for brand photo). */
    centerImage: M2M_MEDIA.buyHeroStill,
    centerImageAlt: "Conceptual image representing real estate investment growth",
  },
  {
    id: "fix-flip",
    variant: "fixFlip" as const,
    title: "FIX N' FLIP INVESTING",
    topLeftText:
      "PURCHASING A DISTRESSED PROPERTY, TYPICALLY AT A DISCOUNTED PRICE,",
    topRightImage: M2M_MEDIA.sellHeroStill,
    topRightAlt: "Exterior of a home ready for renovation",
    bridgeText: "YOU CAN TURN TRASH...",
    collageLeft: M2M_MEDIA.partnersHeroStill,
    collageLeftAlt: "Renovated home exterior",
    collageRight: M2M_MEDIA.blogIndexBackdrop,
    collageRightAlt: "Updated modern kitchen interior",
    bridgeText2: "...INTO TREASURE!",
    bottomText:
      "WITH THE INTENTION OF RENOVATING OR IMPROVING DISTRESSED PROPERTIES AND THEN SELLING THEM QUICKLY, YOU CAN MAKE A SIZEABLE PROFIT.",
  },
  {
    id: "multifamily",
    variant: "multifamily" as const,
    title: "MULTI-FAMILY INVESTING",
    row1Text: "INVESTORS CAN LIVE IN ONE UNIT AND RENT OUT THE OTHERS",
    row1Image: M2M_MEDIA.teamCtaBackdrop,
    row1Alt: "Modern multi-story residential building",
    row2Image: M2M_MEDIA.reviewsBackdrop,
    row2Alt: "Row of townhomes",
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
    imageTop: M2M_MEDIA.familyBackyard,
    imageTopAlt: "Coastal cottage style rental",
    imageMain: M2M_MEDIA.contactHeroStill,
    imageMainAlt: "Distinctive vacation rental home",
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
