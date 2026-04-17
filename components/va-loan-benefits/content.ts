/**
 * Copy and assets for `/va-loan-benefits`.
 *
 * SWAP: Replace placeholder imagery when client provides hero and CTA banner art.
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

export const VA_LEAD_SECTION_ID = "va-lead-form" as const

/** Hero — family / home / service-oriented mood. */
// SWAP: client hero — military family reunion at home (reference composition)
export const HERO_BACKGROUND = M2M_MEDIA.familyBackyard

export const HERO_KICKER = "Know Your Benefits" as const
export const HERO_TITLE = "VA LOAN" as const

export const YOUTUBE_EMBED_SRC = "https://www.youtube.com/embed/wlA1dQcsr-g" as const

export const VIDEO_ATTRIBUTION =
  "This video has been provided by the U.S. Department of Veterans Affairs" as const

export const BENEFITS_HEADING =
  "Unlocking Homeownership With Your VA Loan Benefits and The Marching 2 More Real Estate Team" as const

export const BENEFITS_INTRO =
  "The VA home loan is a mortgage program exclusively available to eligible veterans, active-duty service members, and certain surviving spouses, guaranteed by the U.S. Department of Veterans Affairs. Its primary purpose is to help veterans and their families purchase homes with favorable terms and conditions." as const

export const BENEFITS_LIST_INTRO = "Three exclusive benefits of the VA home loan include:" as const

export const VA_BENEFIT_ITEMS = [
  {
    title: "No Down Payment",
    body: "Unlike conventional loans that typically require a down payment of 10–20%, VA loans often require no down payment, making homeownership more accessible to veterans and their families.",
  },
  {
    title: "Lower Interest Rates",
    body: "VA loans often offer lower interest rates compared to conventional mortgages, potentially saving borrowers thousands of dollars over the life of the loan.",
  },
  {
    title: "No Private Mortgage Insurance (PMI)",
    body: "VA loans do not require borrowers to pay private mortgage insurance, which is usually required on conventional loans when you put down less than 20%. That can mean a lower monthly payment and more of your budget going toward the home itself.",
  },
] as const

export const BENEFITS_CLOSING =
  "The Marching 2 More Real Estate Team is proud to support military families with clear guidance and steady advocacy—aligned with the spirit of the VA home loan program. By helping you access these benefits, we work to empower veterans and their families on the path to homeownership, with greater security, stability, and confidence in Hampton Roads and beyond." as const

/** CTA banner — patriotic / service imagery. */
// SWAP: client CTA band — uniform sleeve with flag patch or similar (reference)
export const CTA_BANNER_BACKGROUND = M2M_MEDIA.buyHeroStill

export const CTA_BANNER_HEADLINE = "Are You Ready To Use Your VA Loan?" as const
export const CTA_BANNER_BUTTON = "Start" as const

export const LEAD_HEADING = "Get on the List" as const
export const LEAD_SUBHEAD = "Sign up to receive your personalized home list!" as const
export const LEAD_HELPER = "Send us a message and we’ll get back to you shortly." as const

export const LEAD_PLACEHOLDER_EMAIL = "e.g., email@example.com" as const
export const LEAD_LABEL_EMAIL = "Email" as const
export const LEAD_LABEL_NAME = "Name" as const
export const LEAD_LABEL_MESSAGE = "Help Us Serve You" as const
export const LEAD_TEXTAREA_PLACEHOLDER =
  "Tell us about your homebuying goals. Location, size & monthly budget?" as const
export const LEAD_SUBMIT_LABEL = "Send" as const
