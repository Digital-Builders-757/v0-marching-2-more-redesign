import type { Metadata } from "next"

import { Header } from "@/components/header"
import { DownsizingHero } from "@/components/downsizing-your-home/downsizing-hero"
import { DownsizingProblems } from "@/components/downsizing-your-home/downsizing-problems"
import { DownsizingQuiz } from "@/components/downsizing-your-home/downsizing-quiz"
import { DownsizingServices } from "@/components/downsizing-your-home/downsizing-services"
import { DOWNSIZING_FAQ_ITEMS } from "@/components/downsizing-your-home/content"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Downsizing Your Home | Hampton Roads | Marching 2 More",
  description:
    "Thoughtful downsizing support in Virginia Beach and Hampton Roads — lifestyle, equity, timing, and a free guide from the veteran-owned Marching 2 More team.",
  path: "/downsizing-your-home",
})

export default function DownsizingYourHomePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/downsizing-your-home"]}
        tabIndex={-1}
        className="bg-m2m-panel text-m2m-cream"
      >
        <DownsizingHero />
        <DownsizingQuiz />
        <DownsizingProblems />
        <DownsizingServices />
        <M2mCampaignFaq
          id="downsizing-faq-heading"
          eyebrow="Objections & timing"
          heading="Questions we hear from downsizers"
          items={[...DOWNSIZING_FAQ_ITEMS]}
        />
        <M2mRelatedPages cluster="life" omitHref="/downsizing-your-home" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
