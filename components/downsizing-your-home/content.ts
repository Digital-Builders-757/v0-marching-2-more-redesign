/**
 * Copy and assets for `/downsizing-your-home`.
 *
 * SWAP: Replace placeholder `M2M_MEDIA` when final campaign art exists.
 */
import { M2M_MEDIA } from "@/lib/m2m-media"

/** Hero lifestyle background — warm interior / family moment. */
// SWAP: client hero — couple downsizing / packing kitchen scene
export const HERO_BACKGROUND = M2M_MEDIA.familyBackyard

export const HERO_HEADLINE = "Is It Time To Downsize?" as const

export const HERO_BODY =
  "The Marching 2 More real estate team is not simply selling houses; we’re guiding families through a profound journey of downsizing, where each step is infused with our ethos of more giving, more community, and more prosperity for YOU." as const

export const HERO_CTA_LABEL = "Download the guide" as const

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

export const DOWNSIZING_QUIZ_SECTION_ID = "downsizing-quiz" as const

export const DOWNSIZING_QUIZ_HEADING = "Wondering if now is the right time to downsize?" as const

export const DOWNSIZING_QUIZ_DESCRIPTION =
  "A short quiz helps you think through timing, lifestyle, and equity — so your next step feels clear, not rushed." as const

export const DOWNSIZING_GUIDE_SECTION_ID = "downsizing-guide" as const

export const GUIDE_HEADING = "Downsizing Guide" as const

export const GUIDE_INTRO =
  "Request the guide for practical steps, timing considerations, and how we support your move — delivered by email or mailed to your home." as const

export const GUIDE_CTA_LABEL = "Get your guide" as const

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

export const GUIDE_CALLOUT_SECTION_ID = "downsizing-guide-next" as const

export const GUIDE_CALLOUT_HEADING = "Your personalized roadmap starts with the guide" as const

export const GUIDE_CALLOUT_BODY =
  "Download the guide for a calm, step-by-step look at preparing your home, timing the market, and planning your next chapter — then connect with our team when you are ready to talk specifics." as const

export const DOWNSIZING_FAQ_ITEMS = [
  {
    id: "ds-1",
    question: "Do we need to buy our next home before we sell?",
    answer:
      "Not always. We help you compare bridge options, lease-backs, and contingent offers in Hampton Roads so the sequence matches your comfort level and equity picture — not a one-size-fits-all rule.",
  },
  {
    id: "ds-2",
    question: "How do we know if downsizing will actually save money?",
    answer:
      "We walk through current carrying costs, expected net proceeds, and your target monthly budget. The goal is clarity before you pack a single box.",
  },
  {
    id: "ds-3",
    question: "What if the house needs updates before listing?",
    answer:
      "We prioritize changes that buyers notice first and suggest a staging and pricing strategy so you are not over-improving for the neighborhood.",
  },
] as const
