import type { Metadata } from "next"

import { Header } from "@/components/header"
import { FhaFeatures } from "@/components/fha-loan/fha-features"
import { FhaHero } from "@/components/fha-loan/fha-hero"
import { FhaQuoteForm } from "@/components/fha-loan/fha-quote-form"
import { FhaTestimonials } from "@/components/fha-loan/fha-testimonials"
import { FhaWhySplit } from "@/components/fha-loan/fha-why-split"
import { FHA_FAQ_ITEMS } from "@/components/fha-loan/content"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "FHA Loans & Low Down Payments | Hampton Roads | Marching 2 More",
  description:
    "FHA basics for Hampton Roads buyers — credit nuances, low down payment context, mortgage insurance, and local inventory support from Marching 2 More.",
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
        className="bg-white"
      >
        <FhaHero />
        <FhaWhySplit />
        <FhaFeatures />
        <FhaTestimonials />
        <M2mCampaignFaq
          id="fha-faq-heading"
          variant="light"
          eyebrow="FHA basics"
          heading="Common questions"
          items={[...FHA_FAQ_ITEMS]}
        />
        <FhaQuoteForm />
        <M2mRelatedPages cluster="buy" omitHref="/fha-loan" variant="onLight" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
