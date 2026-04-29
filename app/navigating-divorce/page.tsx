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
import { DivorceNumberedTopics } from "@/components/navigating-divorce/divorce-numbered-topics"
import { DivorceSupportCta } from "@/components/navigating-divorce/divorce-support-cta"
import { DivorceValuationProcess } from "@/components/navigating-divorce/divorce-valuation-process"

export const metadata: Metadata = {
  title: "Divorce & Real Estate in Virginia | Free Guide",
  description:
    "Property division, equity, and timing during divorce in Hampton Roads — complimentary guide, quiz, and calm real estate guidance from Marching 2 More (Virginia Beach).",
  alternates: { canonical: "/navigating-divorce" },
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
