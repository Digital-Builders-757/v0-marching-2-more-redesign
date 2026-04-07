/** Site-wide URLs and contact constants (Wix parity). */

export const M2M_PHONE_DISPLAY = "757-206-2859"
export const M2M_PHONE_TEL = "+17572062859"

export const M2M_EMAIL_INFO = "info@marching2more.com"
export const M2M_EMAIL_HELLO = "hello@marching2more.com"

export const M2M_ADDRESS_LINES = [
  "582 Lynnhaven Pkwy Ste 400",
  "Virginia Beach, VA 23452",
] as const

export const CALENDLY_BOOK_URL = "https://calendly.com/marching2more"

export const REALSCOUT_MAP_SEARCH_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/map?for_sale=1&for_rent=0"

export const REALSCOUT_HOME_VALUATION_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/home-reports?hva_public=true"

export const GOOGLE_REVIEW_URL = "https://g.page/r/Cdr645m9lC69EBM/review"

export const WIX_MAIL_NEED_HELP_SUBJECT =
  "I need the Marching 2 More teams help with..."

export function mailtoNeedsHelp(): string {
  const q = new URLSearchParams({
    subject: WIX_MAIL_NEED_HELP_SUBJECT,
  })
  return `mailto:${M2M_EMAIL_INFO}?${q.toString()}`
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
