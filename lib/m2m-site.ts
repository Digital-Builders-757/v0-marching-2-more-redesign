/** Site-wide URLs and contact constants (Wix parity). */

export const M2M_PHONE_DISPLAY = "757-206-2859"
export const M2M_PHONE_TEL = "+17572062859"
/** Wix parity: `tel:+17572062859` (RFC 3966). */
export const M2M_PHONE_HREF = `tel:${M2M_PHONE_TEL}` as const

/**
 * Wix parity note:
 * - Footer label displays `Info@marching2more.com`
 * - Footer link uses `mailto:Assistant@marching2more.com`
 */
export const M2M_EMAIL_DISPLAY = "Info@marching2more.com"
export const M2M_EMAIL_MAILTO = "Assistant@marching2more.com"
export const M2M_EMAIL_HREF = `mailto:${M2M_EMAIL_MAILTO}` as const

/** @deprecated Prefer `M2M_EMAIL_DISPLAY` / `M2M_EMAIL_MAILTO`. */
export const M2M_EMAIL_INFO = M2M_EMAIL_DISPLAY
/** @deprecated Prefer `M2M_EMAIL_DISPLAY` / `M2M_EMAIL_MAILTO`. */
export const M2M_EMAIL_HELLO = "hello@marching2more.com"

export const M2M_ADDRESS_LINES = [
  "600 Lynnhaven Pkwy, STE 106",
  "Virginia Beach, VA 23452",
  "United States",
] as const

/** Wix footer parity: single-line address. */
export const M2M_ADDRESS_SINGLE_LINE =
  "600 Lynnhaven Pkwy, STE 106 Virginia Beach, VA 23452 United States" as const

/** Wix parity primary CTA. */
export const CALENDLY_BOOK_URL = "https://calendly.com/marching2more/45min"

export const REALSCOUT_MAP_SEARCH_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/map?for_sale=1&for_rent=0"

export const REALSCOUT_HOME_VALUATION_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/home-reports?hva_public=true"

export const CREED_REALTY_SEARCH_URL =
  "https://donavan.atcoastal.com/results-gallery/?status=A"

export const GOOGLE_REVIEW_URL = "https://g.page/r/Cdr645m9lC69EBM/review"

export const WIX_MAIL_NEED_HELP_SUBJECT =
  "I need the Marching 2 More teams help with..."

export function mailtoNeedsHelp(): string {
  const q = new URLSearchParams({
    subject: WIX_MAIL_NEED_HELP_SUBJECT,
  })
  return `mailto:${M2M_EMAIL_MAILTO}?${q.toString()}`
}

export const PARTNER_LINKS = {
  newWorldBuilders: "https://www.newworldbuilders.com/",
  offLoadMoving: "https://offloadmoving.com/",
  atlanticBayCara: "https://www.atlanticbay.com/caraerickson/",
  homeWarranty210: "https://www.2-10.com/",
} as const

export const RESOURCE_EXTERNAL_LINKS = {
  vaHomeLoans: "https://www.benefits.va.gov/homeloans/realtors.asp",
  hud: "https://www.hud.gov/",
  virginiaHousing: "https://www.dhcd.virginia.gov/housing",
  usda: "https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do",
  naca: "https://www.naca.com/naca-is-reinventing-mortgage-lending/",
} as const
