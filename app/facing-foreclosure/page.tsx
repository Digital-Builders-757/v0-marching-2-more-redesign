import type { Metadata } from "next"

import { FacingForeclosureQuiz } from "@/components/facing-foreclosure/facing-foreclosure-quiz"
import { PreForeclosureEducation } from "@/components/facing-foreclosure/pre-foreclosure-education"
import { PreForeclosureHero } from "@/components/facing-foreclosure/pre-foreclosure-hero"
import { PreForeclosureLead } from "@/components/facing-foreclosure/pre-foreclosure-lead"
import { Header } from "@/components/header"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Facing Foreclosure | Marching 2 More",
  description:
    "Supportive guidance for Hampton Roads families — free guide, clear options, and a team that puts clarity first when you are facing foreclosure.",
}

export default function FacingForeclosurePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel text-m2m-cream">
        <PreForeclosureHero />
        <FacingForeclosureQuiz />
        <PreForeclosureEducation />
        <PreForeclosureLead />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
