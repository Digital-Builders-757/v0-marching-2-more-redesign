import { M2mContainer } from "@/components/m2m-layout"
import { VaLoanAssessmentQuiz } from "@/components/va-loan-benefits/va-loan-assessment-quiz"

import { VA_QUIZ_DESCRIPTION, VA_QUIZ_HEADING, VA_QUIZ_SECTION_ID } from "./content"

export function VaLoanQuiz() {
  return (
    <section
      id={VA_QUIZ_SECTION_ID}
      className="scroll-mt-28 border-t border-m2m-gold/10 md:border-m2m-gold/15"
      aria-labelledby={`${VA_QUIZ_SECTION_ID}-heading`}
    >
      <M2mContainer className="max-w-4xl pb-8 md:pb-12 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold sm:text-[0.68rem] font-nav">
            Quick Assessment
          </p>
          <h2
            id={`${VA_QUIZ_SECTION_ID}-heading`}
            className="m2m-section-title text-balance text-m2m-cream"
          >
            {VA_QUIZ_HEADING}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-m2m-gold/60" aria-hidden />
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-m2m-cream/90 font-sans">
            {VA_QUIZ_DESCRIPTION}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-full overflow-hidden rounded-md border border-m2m-gold/30 shadow-[0_28px_72px_-12px_rgba(0,0,0,0.4)] ring-1 ring-m2m-gold/25 ring-inset sm:mt-12">
          <VaLoanAssessmentQuiz />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-m2m-cream/70 font-sans">
          Your answers help us tailor follow-up — we&apos;ll never pressure you to move faster than you want.
        </p>
      </M2mContainer>
    </section>
  )
}
