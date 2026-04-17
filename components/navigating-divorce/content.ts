/**
 * Copy and nav for `/navigating-divorce` only.
 *
 * Image swap points (replace with final campaign art):
 * - `COLLAGE_IMAGES.*` — four-panel hero gallery beneath headline
 * - `VALUATION_BACKGROUND` — full-bleed mood image behind “A Simple Valuation Process”
 * - `AERIAL_BACKGROUND` — neighborhood / aerial behind lead section
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

import type { M2MNavLink } from "@/lib/m2m-nav"

/** Top footer link row (reference order). */
export const DIVORCE_FOOTER_TOP_LINKS: readonly M2MNavLink[] = [
  { label: "Work With Us", href: "/home-search" },
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Pre-Listing Checklist", href: "/resources" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
] as const

export const COLLAGE_IMAGES = {
  /** Panel 1 — couple / interior (gold panel overlay). */
  sellDuringDivorce: M2M_MEDIA.familyBackyard,
  /** Panel 2 — family imagery. */
  family: M2M_MEDIA.familyBackyard,
  /** Panel 3 — interior / lifestyle. */
  interior: M2M_MEDIA.sellHeroStill,
  /** Panel 4 — legal / symbolic (replace with gavel + house when available). */
  legal: M2M_MEDIA.contactHeroStill,
} as const

/** Full-bleed section backgrounds (local paths or blob). */
export const VALUATION_BACKGROUND = "/images/sell-with-confidence-bg.png" as const
export const AERIAL_BACKGROUND = "/images/home-search-hero.png" as const

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

/** Partner marks — replace with official SVG/PNG logos when available. */
export const PARTNER_PLACEHOLDERS = [
  { label: "U.S. Military On the Move", abbr: "MM" },
  { label: "Creed Realty", abbr: "CR" },
  { label: "Equal Housing Opportunity", abbr: "EQ" },
  { label: "National Association of Realtors®", abbr: "NAR" },
] as const

export const TEAM_SOCIAL = {
  donavan: {
    linkedin: "https://www.linkedin.com/in/donavan-mcfadden",
    instagram: "https://www.instagram.com/marching2more",
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
  roger: {
    linkedin: "https://www.linkedin.com/in/roger-lee",
    instagram: "https://www.instagram.com/marching2more",
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
  company: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/marching2more",
    youtube: "https://www.youtube.com/results?search_query=Marching+2+More+real+estate",
  },
} as const
