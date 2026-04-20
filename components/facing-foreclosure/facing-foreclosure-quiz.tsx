import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { GOHIGHLEVEL_QUIZ_FORECLOSURE_URL } from "@/lib/m2m-site"

import {
  FORECLOSURE_QUIZ_DESCRIPTION,
  FORECLOSURE_QUIZ_HEADING,
  FORECLOSURE_QUIZ_SECTION_ID,
} from "./content"

export function FacingForeclosureQuiz() {
  return (
    <M2mLeadQuizSection
      id={FORECLOSURE_QUIZ_SECTION_ID}
      title={FORECLOSURE_QUIZ_HEADING}
      description={FORECLOSURE_QUIZ_DESCRIPTION}
      embedSrc={GOHIGHLEVEL_QUIZ_FORECLOSURE_URL}
      footnote="If you need help immediately, call us — we’ll point you to the right resources."
    />
  )
}
