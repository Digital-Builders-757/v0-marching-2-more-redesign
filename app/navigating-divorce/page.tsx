import type { Metadata } from "next"

import { Header } from "@/components/header"
import { DivorceAerialLead } from "@/components/navigating-divorce/divorce-aerial-lead"
import { DivorceGalleryCollage } from "@/components/navigating-divorce/divorce-gallery-collage"
import { DivorceQuiz } from "@/components/navigating-divorce/divorce-quiz"
import { DivorceHero } from "@/components/navigating-divorce/divorce-hero"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { DivorceNumberedTopics } from "@/components/navigating-divorce/divorce-numbered-topics"
import { DivorceSupportCta } from "@/components/navigating-divorce/divorce-support-cta"
import { DivorceValuationProcess } from "@/components/navigating-divorce/divorce-valuation-process"

export const metadata: Metadata = {
  title: "Divorce & Real Estate Guide | Marching 2 More",
  description:
    "Complimentary guide and calm, expert real estate guidance for navigating property decisions during divorce in Hampton Roads.",
}

export default function NavigatingDivorcePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel">
        <DivorceHero />
        <DivorceGalleryCollage />
        <DivorceSupportCta />
        <DivorceQuiz />
        <DivorceNumberedTopics />
        <DivorceValuationProcess />
        <DivorceAerialLead />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
