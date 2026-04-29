import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { GOHIGHLEVEL_QUIZ_NAVIGATING_DIVORCE_URL } from "@/lib/m2m-site"

import { DIVORCE_QUIZ_DESCRIPTION, DIVORCE_QUIZ_HEADING, DIVORCE_QUIZ_SECTION_ID } from "./content"

export function DivorceQuiz() {
  return (
    <M2mLeadQuizSection
      id={DIVORCE_QUIZ_SECTION_ID}
      title={DIVORCE_QUIZ_HEADING}
      description={DIVORCE_QUIZ_DESCRIPTION}
      embedSrc={GOHIGHLEVEL_QUIZ_NAVIGATING_DIVORCE_URL}
      footnote="Your answers stay private — we’ll use them to tailor follow-up resources, not pressure."
    />
  )
}
