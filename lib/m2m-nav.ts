/**
 * Navigation constants for Wix parity.
 *
 * Keep this file as the single source of truth for header/footer internal nav.
 */

import { M2M_MEDIA } from "@/lib/m2m-media"

export type M2MNavLink = {
  label: string
  href: string
  /** When set, a divider + screen-reader section label appears before this row. */
  dividerBefore?: string
}

/** Wix header hamburger menu (label "=") items. */
export const M2M_WIX_HEADER_MENU_LINKS: readonly M2MNavLink[] = [
  /** Clearer first-item label than legacy “Welcome” (same `/` destination). */
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Home Search", href: "/home-search", dividerBefore: "Search, tools, and resources" },
  { label: "More Resources", href: "/resources" },
  { label: "Request a CMA", href: "/cma-form" },
  { label: "Free Home Valuation", href: "/free-home-valuation" },
  { label: "Our Team", href: "/our-team", dividerBefore: "Team and contact" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
] as const

export const M2M_FOOTER_QUICK_LINKS: readonly M2MNavLink[] = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Pre-Listing Checklist", href: "/resources" },
  { label: "Work With Us", href: "/contact-us?intent=buyer" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
] as const

export const M2M_FOOTER_POLICY_LINKS: readonly M2MNavLink[] = [
  { label: "Cookie Policy", href: "/cookie-policy" },
  /** Canonical disclaimers (`/disclaimers`); legacy Wix slug `/copy-of-privacy-policy` redirects there. */
  { label: "Disclaimers", href: "/disclaimers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
] as const

export type M2MAgentLink = {
  name: string
  href: string
  image: string
  /** Optional `object-*` crop for header thumbnails when `image` is a wide plate (e.g. team photo). */
  headerImageClassName?: string
}

/** Wix header quick links (headshots). */
export const M2M_HEADER_AGENT_LINKS: readonly M2MAgentLink[] = [
  {
    name: "Donavan McFadden",
    href: "/profile-page",
    image: M2M_MEDIA.headshotDonavan,
  },
  {
    name: "Roger Lee",
    href: "/roger-lee",
    image: M2M_MEDIA.headshotRoger,
  },
  {
    name: "Kristin Allen",
    href: "/kristin-s-profile",
    image: M2M_MEDIA.headshotKristin,
  },
  {
    name: "Jalessa Hendricks",
    href: "/jalessa-hendricks",
    image: M2M_MEDIA.headshotJalessa,
  },
] as const
