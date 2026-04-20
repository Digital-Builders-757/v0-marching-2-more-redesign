import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { GOHIGHLEVEL_QUIZ_DOWNSIZING_URL } from "@/lib/m2m-site"

import { DOWNSIZING_QUIZ_DESCRIPTION, DOWNSIZING_QUIZ_HEADING, DOWNSIZING_QUIZ_SECTION_ID } from "./content"

export function DownsizingQuiz() {
  return (
    <M2mLeadQuizSection
      id={DOWNSIZING_QUIZ_SECTION_ID}
      title={DOWNSIZING_QUIZ_HEADING}
      description={DOWNSIZING_QUIZ_DESCRIPTION}
      embedSrc={GOHIGHLEVEL_QUIZ_DOWNSIZING_URL}
      footnote="Results help us tailor resources and follow-up — no pressure, just clarity."
    />
  )
}
