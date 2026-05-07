import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { GOHIGHLEVEL_QUIZ_VA_LOAN_URL } from "@/lib/m2m-site"

import { VA_QUIZ_DESCRIPTION, VA_QUIZ_HEADING, VA_QUIZ_SECTION_ID } from "./content"

export function VaLoanQuiz() {
  return (
    <M2mLeadQuizSection
      id={VA_QUIZ_SECTION_ID}
      title={VA_QUIZ_HEADING}
      description={VA_QUIZ_DESCRIPTION}
      embedVariant="tall"
      embedSrc={GOHIGHLEVEL_QUIZ_VA_LOAN_URL}
      className="border-t border-m2m-gold/10 md:border-m2m-gold/15"
      footnote="Your answers help us tailor follow-up — we’ll never pressure you to move faster than you want."
    />
  )
}
