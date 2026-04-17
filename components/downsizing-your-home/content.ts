/**
 * Copy and assets for `/downsizing-your-home`.
 *
 * SWAP: Replace placeholder imagery and WEBINAR_REGISTER_URL when final assets/links exist.
 */
import { CALENDLY_BOOK_URL } from "@/lib/m2m-site"
import { M2M_MEDIA } from "@/lib/m2m-media"

// TODO: Replace with the real webinar registration URL when marketing provides it (Calendly is a temporary stand-in).
export const WEBINAR_REGISTER_URL = CALENDLY_BOOK_URL

/** Hero lifestyle background — warm interior / family moment. */
// SWAP: client hero — couple downsizing / packing kitchen scene
export const HERO_BACKGROUND = M2M_MEDIA.familyBackyard

export const HERO_HEADLINE = "Is It Time To Downsize?" as const

export const HERO_BODY =
  "The Marching 2 More real estate team is not simply selling houses; we’re guiding families through a profound journey of downsizing, where each step is infused with our ethos of more giving, more community, and more prosperity for YOU." as const

export const HERO_CTA_LABEL = "Register For Our Webinar" as const

export const PROBLEMS_HEADING = "Common Problems" as const

/** Source had “Effecting”; using standard spelling. */
export const PROBLEMS_SUBHEAD =
  "Are These Issues Affecting Your Quality of Life?" as const

/**
 * Icon keys mapped in `downsizing-problems.tsx` to lucide-react.
 * Wix typos corrected in labels where noted.
 */
export const PROBLEM_ITEMS = [
  { key: "utilityBills", label: "Utility Bills Increasing?" },
  { key: "maintenance", label: "Home Maintenance Becoming More Difficult?" },
  { key: "stairs", label: "Challenging Going Up & Down the Stairs?" },
  { key: "family", label: "Wish to Be Closer to Family & Friends?" },
  { key: "scenery", label: "Want a Change of Scenery?" },
  { key: "mortgage", label: "Want to Eliminate Your Mortgage Payments?" },
] as const

export const DOWNSIZING_GUIDE_SECTION_ID = "downsizing-guide" as const

export const GUIDE_HEADING = "Downsizing Guide" as const

export const GUIDE_INTRO =
  "Fill out the form to receive our complete guide in your email or sent directly to your home." as const

export const GUIDE_CTA_LABEL = "Get Your Guide" as const

export const SERVICE_BLOCKS = [
  {
    n: "01",
    title: "Personalized Downsizing Consultation",
    body: "Let us guide you through the downsizing process with a customized consultation. We’ll assess your family’s unique needs and provide expert advice on decluttering, space optimization, and transitioning to a smaller home.",
  },
  {
    n: "02",
    title: "Home Staging Assistance",
    body: "Impress potential buyers with our professional home staging services. We’ll enhance your current home’s appeal with strategic arrangements and decorative touches, ensuring it stands out in the market.",
  },
  {
    n: "03",
    title: "Relocation Coordination",
    body: "Say goodbye to moving stress with our comprehensive relocation coordination services. From arranging movers to transferring utilities, we’ll handle the logistics so you can focus on settling into your new home.",
  },
  {
    n: "04",
    title: "Post-Move Support",
    body: "Your journey doesn’t end after the move. Count on us for post-move support as you adjust to your new surroundings. We’ll provide resources, recommendations, and ongoing assistance to help you feel right at home.",
  },
] as const

export const WEBINAR_ACTION_PLAN_SECTION_ID = "webinar-action-plan" as const

export const WEBINAR_HEADING =
  "Attend Our Webinar to Receive Your Personalized Action Plan" as const

export const ACTION_PLAN_BODY =
  "Each personalized action plan resonates with your aspirations and comfort levels. We navigate the complexities of downsizing by ensuring every decision reflects your goals, while fostering an environment where downsizing becomes synonymous with liberation and contentment." as const

export const WEBINAR_SECONDARY_CTA = "Save your seat" as const
