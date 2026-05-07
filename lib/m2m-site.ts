/** Site-wide URLs and contact constants (Wix parity). */

/**
 * Canonical origin for metadataBase, JSON-LD, and OG URLs (no trailing slash).
 * Adjust if the primary production host changes.
 */
export const M2M_SITE_ORIGIN = "https://www.marching2more.com" as const

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

/**
 * Last-resort public scheduler when GHL booking URL is unset (`NEXT_PUBLIC_GOHIGHLEVEL_BOOKING_URL` / {@link GOHIGHLEVEL_BOOKING_URL}).
 * Google Calendar appointments (not Calendly).
 *
 * Legacy export name retained for imports / docs that reference `CALENDLY_BOOK_URL`.
 */
export const M2M_PUBLIC_BOOKING_FALLBACK_URL =
  "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0ySwtuGTI2v_rj3ODYeT6OfHwehQTsN8k7m3E=" as const

/** @deprecated Prefer {@link M2M_PUBLIC_BOOKING_FALLBACK_URL} — same URL; name reflects historical Calendly use. */
export const CALENDLY_BOOK_URL = M2M_PUBLIC_BOOKING_FALLBACK_URL

/**
 * GoHighLevel public booking/scheduling URL (single primary calendar link).
 * Prefer setting **`NEXT_PUBLIC_GOHIGHLEVEL_BOOKING_URL`** in Vercel so production uses GHL without a redeploy;
 * otherwise replace this placeholder with the real `https://` link from the GHL sub-account.
 */
export const GOHIGHLEVEL_BOOKING_URL = "REPLACE_WITH_GOHIGHLEVEL_BOOKING_URL" as const

function bookingUrlFromEnv(): string {
  if (typeof process === "undefined") return ""
  return (process.env.NEXT_PUBLIC_GOHIGHLEVEL_BOOKING_URL ?? "").trim()
}

/**
 * **Public scheduling calendar**
 *
 * Use for “Schedule online” / pick-a-time flows. Primary “Book a consultation” **button** surfaces
 * (header, footer) use {@link getConsultationRequestUrl} (`/contact-us?intent=consultation`) with
 * expectation copy; this helper remains for secondary calendar links wherever scheduling is explicitly offered.
 *
 * Resolution order: **`NEXT_PUBLIC_GOHIGHLEVEL_BOOKING_URL`** → {@link GOHIGHLEVEL_BOOKING_URL} →
 * {@link M2M_PUBLIC_BOOKING_FALLBACK_URL} (temporary fallback when GHL URL is not configured yet).
 * Do not hardcode raw scheduling URLs in page components.
 */
export function getPrimaryConsultationBookUrl(): string {
  const envUrl = bookingUrlFromEnv()
  if (isGohighlevelUrlConfigured(envUrl)) return envUrl
  if (isGohighlevelUrlConfigured(GOHIGHLEVEL_BOOKING_URL)) return GOHIGHLEVEL_BOOKING_URL
  return M2M_PUBLIC_BOOKING_FALLBACK_URL
}

/**
 * True when pick-a-time links resolve to GoHighLevel (env or {@link GOHIGHLEVEL_BOOKING_URL}), not the public fallback scheduler.
 * When checking an arbitrary URL string, pass it as the first argument.
 */
export function isGohighlevelBookingConfigured(url?: string): boolean {
  if (url !== undefined) {
    return isGohighlevelUrlConfigured(url)
  }
  const envUrl = bookingUrlFromEnv()
  if (isGohighlevelUrlConfigured(envUrl)) return true
  return isGohighlevelUrlConfigured(GOHIGHLEVEL_BOOKING_URL)
}

/** True when a public URL is set — not empty and not a `REPLACE_WITH_*` placeholder. */
export function isGohighlevelUrlConfigured(url: string): boolean {
  const u = url.trim()
  if (!u || u.startsWith("REPLACE_WITH_")) return false
  return u.startsWith("https://") || u.startsWith("http://")
}

/**
 * Quiz iframe source is “live”: external https URL, or a same-origin static quiz under `/public/quizzes/`.
 */
export function isQuizEmbedSrcConfigured(url: string): boolean {
  const u = url.trim()
  if (!u || u.startsWith("REPLACE_WITH_")) return false
  if (u.startsWith("/quizzes/")) return true
  return isGohighlevelUrlConfigured(u)
}

/**
 * GoHighLevel quiz / survey embed or form URLs (lead-gen landings).
 * Replace with real https:// links when marketing provides them.
 */
/** Local static quiz — `/improve-your-credit` iframe (`public/quizzes/credit-repair/index.html`). */
export const GOHIGHLEVEL_QUIZ_CREDIT_URL = "/quizzes/credit-repair/index.html" as const
/** Local static quiz — `/downsizing-your-home` iframe embed (`public/quizzes/downsizing-your-home/quiz.html`). */
export const GOHIGHLEVEL_QUIZ_DOWNSIZING_URL = "/quizzes/downsizing-your-home/quiz.html" as const
/** Local static quiz — `/fha-loan` buyer quiz (`public/quizzes/fha-loan/index.html`). */
export const GOHIGHLEVEL_QUIZ_FHA_LOAN_URL = "/quizzes/fha-loan/index.html" as const
export const GOHIGHLEVEL_QUIZ_FORECLOSURE_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_FORECLOSURE_URL" as const
/** Investor readiness / education quiz (e.g. GHL survey) — `/more-investments#investor-tools`. */
export const GOHIGHLEVEL_QUIZ_INVESTOR_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_INVESTOR_URL" as const
/** Static divorce quiz embed — `/navigating-divorce` (`public/quizzes/navigating-divorce/index.html`). */
export const GOHIGHLEVEL_QUIZ_NAVIGATING_DIVORCE_URL = "/quizzes/navigating-divorce/index.html" as const
/** @deprecated VA assessment is inline React on `/va-loan-benefits`. Optional GHL-hosted replacement only. */
export const GOHIGHLEVEL_QUIZ_VA_LOAN_URL = "REPLACE_WITH_GOHIGHLEVEL_QUIZ_VA_LOAN_URL" as const
/**
 * @deprecated BRRRR analyzer ships first-party on `/more-investments`. Kept only if an external embed is needed later.
 */
export const GOHIGHLEVEL_BRRRR_ANALYZER_URL = "REPLACE_WITH_GOHIGHLEVEL_BRRRR_ANALYZER_URL" as const

/**
 * Downsizing / right-sizing guide PDF — served from `public/downloads/m2m-downsizing-guide.pdf`.
 * Set **`NEXT_PUBLIC_M2M_DOWNSIZING_GUIDE_PDF_URL`** to a full `https://` link (for example Vercel Blob) if the asset is hosted outside the repo.
 */
export const M2M_DOWNSIZING_GUIDE_PDF_DEFAULT_HREF = "/downloads/m2m-downsizing-guide.pdf" as const

/** Suggested filename when triggering a browser download (same-origin or when `download` is honored). */
export const M2M_DOWNSIZING_GUIDE_PDF_FILENAME = "M2M-Downsizing-Guide.pdf" as const

export function getM2mDownsizingGuidePdfHref(): string {
  if (typeof process === "undefined") return M2M_DOWNSIZING_GUIDE_PDF_DEFAULT_HREF
  const env = (process.env.NEXT_PUBLIC_M2M_DOWNSIZING_GUIDE_PDF_URL ?? "").trim()
  if (env && (env.startsWith("https://") || env.startsWith("http://") || env.startsWith("/"))) return env
  return M2M_DOWNSIZING_GUIDE_PDF_DEFAULT_HREF
}

/**
 * Divorce & real estate guide PDF — served from `public/downloads/m2m-divorce-sell-home-guide.pdf`.
 * Set **`NEXT_PUBLIC_M2M_DIVORCE_GUIDE_PDF_URL`** to a full `https://` link (for example Vercel Blob) if the asset is hosted outside the repo.
 */
export const M2M_DIVORCE_GUIDE_PDF_DEFAULT_HREF = "/downloads/m2m-divorce-sell-home-guide.pdf" as const

/** Suggested filename when triggering a browser download (same-origin or when `download` is honored). */
export const M2M_DIVORCE_GUIDE_PDF_FILENAME = "M2M-Divorce-Sell-Home-Guide.pdf" as const

export function getM2mDivorceGuidePdfHref(): string {
  if (typeof process === "undefined") return M2M_DIVORCE_GUIDE_PDF_DEFAULT_HREF
  const env = (process.env.NEXT_PUBLIC_M2M_DIVORCE_GUIDE_PDF_URL ?? "").trim()
  if (env && (env.startsWith("https://") || env.startsWith("http://") || env.startsWith("/"))) return env
  return M2M_DIVORCE_GUIDE_PDF_DEFAULT_HREF
}

/**
 * Pre-foreclosure / foreclosure options guide — default `public/downloads/m2m-pre-foreclosure-guide.pdf`.
 * Override with **`NEXT_PUBLIC_M2M_PRE_FORECLOSURE_GUIDE_PDF_URL`** when hosted outside the repo.
 */
export const M2M_PRE_FORECLOSURE_GUIDE_PDF_DEFAULT_HREF = "/downloads/m2m-pre-foreclosure-guide.pdf" as const

export const M2M_PRE_FORECLOSURE_GUIDE_PDF_FILENAME = "M2M-Pre-Foreclosure-Guide.pdf" as const

export function getM2mPreForeclosureGuidePdfHref(): string {
  if (typeof process === "undefined") return M2M_PRE_FORECLOSURE_GUIDE_PDF_DEFAULT_HREF
  const env = (process.env.NEXT_PUBLIC_M2M_PRE_FORECLOSURE_GUIDE_PDF_URL ?? "").trim()
  if (env && (env.startsWith("https://") || env.startsWith("http://") || env.startsWith("/"))) return env
  return M2M_PRE_FORECLOSURE_GUIDE_PDF_DEFAULT_HREF
}

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
