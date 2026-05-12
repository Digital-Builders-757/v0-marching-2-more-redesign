import type { Metadata } from "next"

import { FhaBuyerQuizSection } from "@/components/fha-loan/fha-buyer-quiz-section"
import { FhaConsultationCtaBand } from "@/components/fha-loan/fha-consultation-cta-band"
import { FHA_FAQ_ITEMS } from "@/components/fha-loan/content"
import { FhaEditorialImageBand } from "@/components/fha-loan/fha-editorial-image-band"
import { FhaFinalCta } from "@/components/fha-loan/fha-final-cta"
import { FhaHero } from "@/components/fha-loan/fha-hero"
import { FhaHowWeHelp } from "@/components/fha-loan/fha-how-we-help"
import { FhaOpportunitySection } from "@/components/fha-loan/fha-opportunity-section"
import { FhaTrustStrip } from "@/components/fha-loan/fha-trust-strip"
import { FhaWhoFor } from "@/components/fha-loan/fha-who-for"
import { Header } from "@/components/header"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "FHA Loans & Down Payment Help | Hampton Roads | Marching 2 More",
  description:
    "FHA path for first-time and budget-conscious Hampton Roads buyers — low down payment context, flexible credit, grants/DPA coaching, and a no-cost consultation with Marching 2 More.",
  path: "/fha-loan",
})

export default function FhaLoanPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/fha-loan"]}
        tabIndex={-1}
        className="bg-white text-m2m-deep"
      >
        <FhaHero />
        <FhaTrustStrip />
        <FhaBuyerQuizSection />
        <FhaEditorialImageBand />
        <FhaOpportunitySection />
        <FhaHowWeHelp />
        <FhaConsultationCtaBand />
        <FhaWhoFor />
        <M2mCampaignFaq
          id="fha-faq-heading"
          variant="light"
          eyebrow="FAQ"
          heading="Straight answers before you apply"
          items={[...FHA_FAQ_ITEMS]}
        />
        <FhaFinalCta />
        <M2mRelatedPages cluster="buy" omitHref="/fha-loan" variant="onLight" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
