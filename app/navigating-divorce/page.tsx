import type { Metadata } from "next"

import { Header } from "@/components/header"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceAerialLead } from "@/components/navigating-divorce/divorce-aerial-lead"
import { DivorceGalleryCollage } from "@/components/navigating-divorce/divorce-gallery-collage"
import { DivorceQuiz } from "@/components/navigating-divorce/divorce-quiz"
import { DIVORCE_FAQ_ITEMS } from "@/components/navigating-divorce/content"
import { DivorceHero } from "@/components/navigating-divorce/divorce-hero"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"
import { DivorceNumberedTopics } from "@/components/navigating-divorce/divorce-numbered-topics"
import { DivorceSupportCta } from "@/components/navigating-divorce/divorce-support-cta"
import { DivorceValuationProcess } from "@/components/navigating-divorce/divorce-valuation-process"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Divorce & Real Estate | Hampton Roads | Marching 2 More",
  description:
    "Property division, equity, and timing during divorce in Hampton Roads — complimentary guide, quiz, and calm guidance from Marching 2 More in Virginia Beach.",
  path: "/navigating-divorce",
})

export default function NavigatingDivorcePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/navigating-divorce"]}
        tabIndex={-1}
        className="bg-m2m-panel"
      >
        <DivorceHero />
        <DivorceGalleryCollage />
        <DivorceSupportCta />
        <DivorceQuiz />
        <DivorceNumberedTopics />
        <DivorceValuationProcess />
        <M2mCampaignFaq
          id="divorce-faq-heading"
          eyebrow="Real worries"
          heading="Answers that protect your next step"
          items={[...DIVORCE_FAQ_ITEMS]}
        />
        <DivorceAerialLead />
        <M2mRelatedPages cluster="life" omitHref="/navigating-divorce" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
