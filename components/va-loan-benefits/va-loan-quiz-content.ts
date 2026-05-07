/**
 * VA loan assessment quiz — copy and scoring (inline React; legacy static HTML removed).
 */

export type VaQuizResultKey = "ready" | "learn" | "explore"

export type VaQuizQuestionId = "q1" | "q2" | "q3" | "q4" | "q5"

export type VaQuizAnswer = { val: string; label: string }

export type VaQuizAnswers = Partial<Record<VaQuizQuestionId, VaQuizAnswer>>

export const VA_QUIZ_RESULT_LINKS = {
  consult: "/contact-us?intent=buyer" as const,
  info: "/va-loan-benefits#va-faq-heading" as const,
}

export type VaQuizOption = {
  val: string
  /** Stored in CRM notes */
  label: string
  /** Shorter label shown in UI when different */
  shortLabel?: string
  icon: string
}

export type VaQuizStep = {
  id: VaQuizQuestionId
  stepLabel: string
  hint: string
  heading: string
  sub: string
  options: VaQuizOption[]
  grid2?: boolean
}

export const VA_QUIZ_WELCOME = {
  eyebrow: "VA Buyer Assessment",
  body: "Five quick questions to help you figure out where you stand with your VA home loan benefit — and what your clearest next move looks like.",
  social: "Helping active-duty service members, veterans, and military families move forward with confidence.",
} as const

export const VA_QUIZ_BRIDGE = {
  heading: "You've earned this benefit. Let's make sure you use it right.",
  body: "Most service members never get a clear explanation of how their VA benefit actually works in a real purchase. That changes here. Three more questions and we'll give you a clear next step.",
  cta: "Keep Going →",
} as const

export const VA_QUIZ_CAPTURE = {
  badge: "Your results are ready",
  heading: "Where should we send your personalized next steps?",
  sub: "One email with a clear path forward — no spam, no obligation.",
  submit: "Show My Results →",
  privacy: "Private & confidential. Never sold.",
} as const

export const VA_QUIZ_CALCULATING = "Analyzing your situation…" as const

export const VA_QUIZ_STEPS: VaQuizStep[] = [
  {
    id: "q1",
    stepLabel: "1 of 5",
    hint: "No wrong answers here",
    heading: "What best describes your current situation?",
    sub: "This shapes how we interpret the rest of your answers.",
    options: [
      { val: "active", label: "I'm active-duty military", icon: "🎖️" },
      { val: "veteran", label: "I'm a veteran", icon: "⭐" },
      { val: "family", label: "I'm a military family member / surviving spouse", icon: "🏠" },
      { val: "unsure", label: "I'm not sure where I fit", icon: "❓" },
    ],
  },
  {
    id: "q2",
    stepLabel: "2 of 5",
    hint: "Used it before? Still options available",
    heading: "Have you used your VA home loan benefit before?",
    sub: "Your entitlement can often be restored or used again — even if you've bought before.",
    options: [
      { val: "no", label: "No — this would be my first time", icon: "🆕" },
      { val: "yes-sold", label: "Yes — and I've since sold that home", icon: "✓" },
      { val: "yes-still", label: "Yes — and I still own that property", icon: "🏡" },
      { val: "unsure", label: "I'm not sure", icon: "❓" },
    ],
  },
  {
    id: "q3",
    stepLabel: "3 of 5",
    hint: "Be honest — it helps us help you",
    heading: "Where are you in the homebuying process right now?",
    sub: "There's no wrong place to be. We work with people at every stage.",
    options: [
      {
        val: "ready",
        label: "Ready to move — I need to act soon (PCS, transition, or just decided)",
        icon: "🚀",
      },
      {
        val: "researching",
        label: "Actively researching — I'm learning what I need before I pull the trigger",
        shortLabel: "Actively researching — learning before I pull the trigger",
        icon: "🔍",
      },
      {
        val: "early",
        label: "Early stage — I'm thinking about it but not in a rush",
        icon: "📅",
      },
    ],
  },
  {
    id: "q4",
    stepLabel: "4 of 5",
    hint: "One more after this",
    heading: "What's your biggest concern or question right now?",
    sub: "Pick the one that feels most true — we'll address it in your results.",
    options: [
      { val: "eligible", label: "I'm not sure if I'm actually eligible", icon: "📋" },
      { val: "process", label: "I don't understand how the VA loan process works", icon: "🗺️" },
      { val: "compete", label: "I'm worried about competing in this market with a VA loan", icon: "⚡" },
      { val: "credit", label: "I'm not sure my credit or finances are ready", icon: "💳" },
    ],
  },
  {
    id: "q5",
    stepLabel: "5 of 5",
    hint: "Last one — your results are almost ready",
    heading: "What would help you the most right now?",
    sub: "This shapes the recommendation we'll give you.",
    grid2: true,
    options: [
      { val: "consult", label: "Talk with a VA specialist", icon: "📞" },
      { val: "info", label: "Learn more about how it works first", icon: "📖" },
      { val: "plan", label: "A clear plan to follow at my own pace", shortLabel: "A clear plan at my own pace", icon: "🗺" },
      { val: "all", label: "All of the above", icon: "✦" },
    ],
  },
]

export type VaQuizSituationOption = {
  value: string
  label: string
  disabled?: boolean
}

export const VA_QUIZ_SITUATION_OPTIONS: VaQuizSituationOption[] = [
  { value: "", label: "Choose one…", disabled: true },
  { value: "active-duty", label: "I'm active duty" },
  { value: "veteran", label: "I'm a veteran" },
  { value: "military-family", label: "I'm a military family member" },
  { value: "pcs", label: "I'm relocating / PCS'ing" },
  { value: "unsure", label: "I'm not sure where I fit" },
]

export const VA_QUIZ_AUDIENCE_TAGS: Record<string, string> = {
  active: "m2m|source:va|audience:active-duty",
  veteran: "m2m|source:va|audience:veteran",
  family: "m2m|source:va|audience:military-family",
  unsure: "m2m|source:va|audience:unknown",
}

export type VaQuizResultCopy = {
  badgeClass: string
  badge: string
  headline: string
  explain: string
  quote: string
  focus: string[]
  ctaLabel: string
  ctaTitle: string
  ctaDesc: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  tags: string[]
}

export const VA_QUIZ_RESULT_COPY: Record<VaQuizResultKey, VaQuizResultCopy> = {
  ready: {
    badgeClass: "border border-[#c0cbe0] bg-[#e8ecf5] text-[#1a2e5c]",
    badge: "Ready to Move",
    headline: "Based on your answers, you're in a strong position to take action on your VA benefit.",
    explain:
      "Your timeline, status, and interest all point toward making a move. The most valuable thing you can do right now is get a clear picture of your eligibility, your purchasing power, and the Virginia market — before you're under pressure to decide.",
    quote:
      '"The buyers who compete and win are the ones who got prepared before everyone else. Your VA benefit is a weapon — let\'s make sure it\'s loaded."',
    focus: [
      "Confirm your Certificate of Eligibility (COE) status early — we can help you understand this step",
      "Connect with a VA-friendly lender through our network so you know your actual numbers",
      "Build a market strategy that lets you compete confidently — VA offers do win",
      "Get clear on timing so you can make a decision, not just a wish",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Request a VA Buyer Consultation",
    ctaDesc:
      "A no-pressure conversation with our VA specialist team. We'll walk through your eligibility, your timeline, and exactly what a successful purchase looks like for your situation.",
    primaryCta: { text: "Book a VA Consultation →", href: VA_QUIZ_RESULT_LINKS.consult },
    secondaryCta: { text: "Learn More First", href: VA_QUIZ_RESULT_LINKS.info },
    tags: [
      "m2m|source:va",
      "m2m|team:full-team",
      "m2m|team:donavan-veteran",
      "m2m|channel:landing-page",
      "m2m|source:va|result:ready",
      "m2m|source:va|intent:consult",
      "m2m|source:va|status:consult-requested",
      "m2m|source:va|priority:high-touch",
    ],
  },
  learn: {
    badgeClass: "border border-[#e6d09a] bg-[#fdf4dc] text-[#7a5010]",
    badge: "Getting Oriented",
    headline: "You're in the right place — and closer than you might think.",
    explain:
      "Your answers show real interest and some urgency, but a few key pieces of the picture aren't fully clear yet. That's completely normal. The families who have the smoothest VA purchases are the ones who got informed before they were under pressure.",
    quote:
      '"Understanding how your benefit works before you need it is the single most powerful thing you can do. A 30-minute conversation can clear up months of confusion."',
    focus: [
      "Get clear on what VA eligibility actually means for your specific situation",
      "Understand how the COE process works and what comes next after that",
      "Learn how VA loans compete in the current Virginia market — the rules have changed",
      "Know your numbers before you talk to a lender — we can guide you through that process",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Talk With a VA Specialist",
    ctaDesc:
      "One conversation with our team and most of the fog clears. We explain the benefit in plain English, walk through your situation honestly, and give you a clear picture of what's possible.",
    primaryCta: { text: "Talk With a VA Specialist →", href: VA_QUIZ_RESULT_LINKS.consult },
    secondaryCta: { text: "Read More About the VA Process", href: VA_QUIZ_RESULT_LINKS.info },
    tags: [
      "m2m|source:va",
      "m2m|team:full-team",
      "m2m|team:donavan-veteran",
      "m2m|channel:landing-page",
      "m2m|source:va|result:learn",
      "m2m|source:va|intent:info",
      "m2m|source:va|status:quiz-completed",
    ],
  },
  explore: {
    badgeClass: "border border-[#9ab8e0] bg-[#eaeff6] text-[#1a3660]",
    badge: "Early Stage",
    headline: "You're not in a rush — and that's completely fine.",
    explain:
      "Based on your answers, you're in the early thinking stage. The best thing you can do right now isn't to move fast — it's to get informed so that when your timeline does shift, you're already ahead. Many VA buyers wish they had started learning sooner.",
    quote:
      "\"The benefit doesn't have an expiration date — but your window to prepare does. Getting the basics now costs you nothing and gives you a major advantage later.\"",
    focus: [
      "Understand the core VA loan benefits so there are no surprises when you're ready",
      "Start thinking about your COE and what eligibility looks like for your status",
      "Know what a VA-friendly lender looks for — so you can prepare your finances in advance",
      "Keep us in your network — when your timeline shifts, we're here and ready",
    ],
    ctaLabel: "Your recommended next step",
    ctaTitle: "Learn How the VA Benefit Works",
    ctaDesc:
      "Start with the basics — no commitment required. We'll point you to the right information and make sure you know exactly where to come back when you're ready to move.",
    primaryCta: { text: "Get Started →", href: VA_QUIZ_RESULT_LINKS.info },
    secondaryCta: { text: "Talk With Our Team Anytime", href: VA_QUIZ_RESULT_LINKS.consult },
    tags: [
      "m2m|source:va",
      "m2m|team:full-team",
      "m2m|team:donavan-veteran",
      "m2m|channel:landing-page",
      "m2m|source:va|result:explore",
      "m2m|source:va|status:quiz-completed",
    ],
  },
}

export function computeVaQuizResult(answers: VaQuizAnswers): VaQuizResultKey {
  const q3 = answers.q3?.val
  const q5 = answers.q5?.val
  if (q3 === "ready") return "ready"
  if (q3 === "researching" && (q5 === "consult" || q5 === "all")) return "ready"
  if (q3 === "researching") return "learn"
  return "explore"
}

export function buildVaQuizLeadNotes(params: {
  result: VaQuizResultKey
  answers: VaQuizAnswers
  situationValue: string
  situationLabel: string
}): string {
  const { result, answers, situationValue, situationLabel } = params
  const r = VA_QUIZ_RESULT_COPY[result]
  const q1val = answers.q1?.val ?? "unknown"
  const audTag = VA_QUIZ_AUDIENCE_TAGS[q1val] ?? "m2m|source:va|audience:unknown"
  const sitTag = situationValue ? `m2m|source:va|audience:${situationValue}` : null
  const allTags = [...r.tags, audTag, ...(sitTag ? [sitTag] : [])]

  return [
    'VA loan quiz (“Is a VA Loan Your Best Next Step?”)',
    `Result: ${result}`,
    `Situation (form): ${situationLabel || "not specified"}`,
    `Q1: ${answers.q1?.label ?? ""}`,
    `Q2: ${answers.q2?.label ?? ""}`,
    `Q3: ${answers.q3?.label ?? ""}`,
    `Q4: ${answers.q4?.label ?? ""}`,
    `Q5: ${answers.q5?.label ?? ""}`,
    `Tag hints (CRM): ${allTags.join("; ")}`,
  ].join("\n")
}
