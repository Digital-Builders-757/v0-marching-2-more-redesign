import type { Metadata } from "next"

import { Header } from "@/components/header"
import { DownsizingHero } from "@/components/downsizing-your-home/downsizing-hero"
import { DownsizingProblems } from "@/components/downsizing-your-home/downsizing-problems"
import { DownsizingServices } from "@/components/downsizing-your-home/downsizing-services"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Downsizing Your Home | Marching 2 More",
  description:
    "Thoughtful downsizing support in Hampton Roads — common challenges, a free guide, and a path toward your next home with the Marching 2 More team.",
}

export default function DownsizingYourHomePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel text-m2m-cream">
        <DownsizingHero />
        <DownsizingProblems />
        <DownsizingServices />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
