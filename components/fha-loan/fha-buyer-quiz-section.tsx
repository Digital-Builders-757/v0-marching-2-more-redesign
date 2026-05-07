import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { GOHIGHLEVEL_QUIZ_FHA_LOAN_URL, getPrimaryConsultationBookUrl } from "@/lib/m2m-site"

export function FhaBuyerQuizSection() {
  const book = getPrimaryConsultationBookUrl()

  return (
    <M2mLeadQuizSection
      id="fha-buyer-quiz"
      eyebrow={null}
      title="Not sure if FHA is your best next move?"
      description={
        <>
          Take a quick 60-second quiz to see whether FHA, grants, or a readiness path fits — every outcome includes a gentle invite
          to the same no-cost consultation, because personal context always beats a web score.
        </>
      }
      embedSrc={GOHIGHLEVEL_QUIZ_FHA_LOAN_URL}
      embedTitle="FHA buyer quiz"
      embedVariant="tall"
      ctaHref={book}
      ctaLabel="Book consultation instead"
      className="bg-m2m-panel"
      footnote={
        <>
          Prefer human-first?{" "}
          <a
            href={book}
            target="_blank"
            rel="noopener noreferrer"
            className="text-m2m-gold underline decoration-m2m-gold/35 underline-offset-[3px] hover:text-m2m-gold-lt"
          >
            Open the calendar
          </a>{" "}
          anytime — quiz optional.
        </>
      }
    />
  )
}
