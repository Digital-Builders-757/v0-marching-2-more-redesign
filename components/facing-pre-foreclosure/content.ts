/**
 * Copy and assets for `/facing-pre-foreclosure`.
 *
 * SWAP: Replace placeholder imagery when client provides final hero and lifestyle art.
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

export const SIGNUP_SECTION_ID = "pre-foreclosure-signup" as const

/** Hero — foreclosure / legal / keys mood. */
// SWAP: client hero — gavel, keys, notice document (reference composition)
export const HERO_BACKGROUND = M2M_MEDIA.contactHeroStill

/** Split section — empathetic couple / documents mood. */
// SWAP: client — couple reviewing paperwork at home (reference)
export const LEAD_SUPPORT_IMAGE = M2M_MEDIA.sellHeroStill

export const HERO_HEADLINE = "Supporting Families Facing Pre-Foreclosure" as const

export const HERO_SUBHEAD =
  "A Webinar on How to Protect Your Family’s Home and Financial Future." as const

export const HERO_CTA_LABEL = "Save My Spot" as const

export const EDUCATION_HEADING =
  "Join Us as We Navigate Pre-Foreclosure Challenges Together" as const

export const EDUCATION_COLUMNS = [
  {
    title: "What is Foreclosure?",
    body: "If you start falling behind on your payments, or stop making your mortgage payments completely, the bank or lender can foreclose on the property and sell it as a way to recover the funds that were lent.",
  },
  {
    title: "How to Avoid Foreclosure?",
    body: "If you’ve received a notice of default, don’t panic — you may still have options to avoid foreclosure. The right guidance can help you understand timelines, communicate with your lender, and explore paths that protect your family and your home.",
  },
  {
    title: "& Much More",
    body: "Can I keep the profits from a foreclosure sale? Do I owe money if the house sells for less than I owe? These are a few of the many questions we’ll discuss together in the webinar.",
  },
] as const

export const LEAD_HEADLINE = "You have options. We are your guides." as const

export const LEAD_SUBHEAD =
  "Sign up today to receive your complimentary guidebook and personalized action plan!" as const

export const FORM_LABEL_FIRST = "First Name" as const
export const FORM_LABEL_LAST = "Last Name" as const
export const FORM_LABEL_EMAIL = "Email" as const
export const FORM_LABEL_PHONE = "Phone" as const
export const FORM_LABEL_MESSAGE = "Message" as const

export const FORM_PLACEHOLDER_PHONE = "Phone" as const
export const FORM_PLACEHOLDER_MESSAGE =
  "Send us a message to receive our special promo code directly to your email." as const

export const FORM_SUBMIT_LABEL = "Submit" as const
