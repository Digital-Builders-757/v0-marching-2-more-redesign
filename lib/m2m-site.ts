/** Site-wide URLs and contact constants (Wix parity). */

/** Canonical wordmark under `public/brand/` — swap file in place when final gold art ships. */
export const M2M_BRAND_LOGO_SRC = "/brand/m2m-logo-gold.avif" as const

export const M2M_BRAND_LOGO_ALT = "Marching 2 More Logo" as const

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

/** Wix parity primary CTA — fallback when GHL booking is not configured yet. */
export const CALENDLY_BOOK_URL = "https://calendly.com/marching2more/45min"

/**
 * GoHighLevel public booking/scheduling URL (single primary calendar link).
 * Replace the placeholder with the real `https://` link from the GHL sub-account when ready.
 */
export const GOHIGHLEVEL_BOOKING_URL = "REPLACE_WITH_GOHIGHLEVEL_BOOKING_URL" as const

/**
 * **Public scheduling calendar (optional)**
 *
 * Use for “Schedule online” / pick-a-time flows. Primary “Book a consultation” **button** surfaces
 * (header, footer) use {@link getConsultationRequestUrl} (`/contact-us?intent=consultation`) with
 * expectation copy; this helper remains for secondary calendar links wherever scheduling is explicitly offered.
 *
 * When `GOHIGHLEVEL_BOOKING_URL` is a real `http(s)` URL, that wins; otherwise the site uses
 * {@link CALENDLY_BOOK_URL}. Do not hardcode raw Calendly URLs in page components.
 */
export function getPrimaryConsultationBookUrl(): string {
  return isGohighlevelBookingConfigured(GOHIGHLEVEL_BOOKING_URL) ? GOHIGHLEVEL_BOOKING_URL : CALENDLY_BOOK_URL
}

export function isGohighlevelBookingConfigured(url: string = GOHIGHLEVEL_BOOKING_URL): boolean {
  return isGohighlevelUrlConfigured(url)
}

/** True when a GHL (or any) public URL is set — not a placeholder string. */
export function isGohighlevelUrlConfigured(url: string): boolean {
  return url.startsWith("https://") || url.startsWith("http://")
}

/**
 * GoHighLevel quiz / survey embed or form URLs (lead-gen landings).
 * Replace with real https:// links when marketing provides them.
 */
export const GOHIGHLEVEL_QUIZ_CREDIT_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_CREDIT_URL" as const
export const GOHIGHLEVEL_QUIZ_DOWNSIZING_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_DOWNSIZING_URL" as const
export const GOHIGHLEVEL_QUIZ_FORECLOSURE_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_FORECLOSURE_URL" as const
/** Investor readiness / education quiz (e.g. GHL survey) — `/more-investments#investor-tools`. */
export const GOHIGHLEVEL_QUIZ_INVESTOR_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_INVESTOR_URL" as const
/**
 * Optional embeddable BRRRR analyzer (GHL, Airtable, or hosted sheet).
 * When unset, the investor tools section shows a placeholder card.
 */
export const GOHIGHLEVEL_BRRRR_ANALYZER_URL = "REPLACE_WITH_GOHIGHLEVEL_BRRRR_ANALYZER_URL" as const

/** Short consultation request form — expectation copy on `/contact-us`. */
export const M2M_CONTACT_CONSULTATION_PATH = "/contact-us?intent=consultation" as const

export function getConsultationRequestUrl(): string {
  return M2M_CONTACT_CONSULTATION_PATH
}

/** Moseley Real Estate School — Virginia salesperson licensing (Donavan referral path). */
export const MOSELEY_VA_SALESPERSON_LICENSE_URL =
  "https://moseley.org/get-license-virginia-salesperson/" as const

export const REALSCOUT_MAP_SEARCH_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/map?for_sale=1&for_rent=0"

export const REALSCOUT_HOME_VALUATION_URL =
  "https://donavanmcfadden63.realscout.com/homesearch/home-reports?hva_public=true"

export const CREED_REALTY_SEARCH_URL =
  "https://donavan.atcoastal.com/results-gallery/?status=A"

export const GOOGLE_REVIEW_URL = "https://g.page/r/Cdr645m9lC69EAE/review"

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
  rsAndrewsTidewater: "https://www.ars.com/rs-andrews-tidewater",
  qaiHome: "https://www.qaihome.com/",
  johnEdwardsPest: "https://www.johnedwardspestcontrol.com/index.php",
  trueNorthTitle: "https://truenorthtitle.com/",
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
