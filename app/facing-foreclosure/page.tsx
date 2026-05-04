import type { Metadata } from "next"

import { FacingForeclosureQuiz } from "@/components/facing-foreclosure/facing-foreclosure-quiz"
import { PreForeclosureGuideCarousel } from "@/components/facing-foreclosure/pre-foreclosure-guide-carousel"
import { PreForeclosureEducation } from "@/components/facing-foreclosure/pre-foreclosure-education"
import { PreForeclosureHero } from "@/components/facing-foreclosure/pre-foreclosure-hero"
import { PreForeclosureLead } from "@/components/facing-foreclosure/pre-foreclosure-lead"
import { FORECLOSURE_FAQ_ITEMS } from "@/components/facing-foreclosure/content"
import { Header } from "@/components/header"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Facing Foreclosure Help | Hampton Roads | Marching 2 More",
  description:
    "Behind on mortgage payments in Virginia Beach or Hampton Roads? Free guide, timelines, lender communication tips, and next steps from the veteran-owned Marching 2 More team.",
  path: "/facing-foreclosure",
})

export default function FacingForeclosurePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/facing-foreclosure"]}
        tabIndex={-1}
        className="bg-m2m-panel text-m2m-cream"
      >
        <PreForeclosureHero />
        <PreForeclosureGuideCarousel />
        <FacingForeclosureQuiz />
        <PreForeclosureEducation />
        <M2mCampaignFaq
          id="foreclosure-faq-heading"
          eyebrow="Straight answers"
          heading="Questions when you are under pressure"
          items={[...FORECLOSURE_FAQ_ITEMS]}
        />
        <PreForeclosureLead />
        <M2mRelatedPages cluster="life" omitHref="/facing-foreclosure" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
