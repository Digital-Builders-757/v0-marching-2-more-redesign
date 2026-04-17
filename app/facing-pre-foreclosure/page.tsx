import type { Metadata } from "next"

import { Header } from "@/components/header"
import { PreForeclosureEducation } from "@/components/facing-pre-foreclosure/pre-foreclosure-education"
import { PreForeclosureHero } from "@/components/facing-pre-foreclosure/pre-foreclosure-hero"
import { PreForeclosureLead } from "@/components/facing-pre-foreclosure/pre-foreclosure-lead"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Facing Pre-Foreclosure | Marching 2 More",
  description:
    "Supportive guidance for Hampton Roads families facing pre-foreclosure — webinar education, options, and a team that puts clarity first.",
}

export default function FacingPreForeclosurePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel text-m2m-cream">
        <PreForeclosureHero />
        <PreForeclosureEducation />
        <PreForeclosureLead />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
