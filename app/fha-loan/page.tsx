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

export const metadata: Metadata = {
  title: "FHA Loans for First-Time & Low Down Payment Buyers | HR",
  description:
    "FHA basics for Hampton Roads buyers — credit nuances, 3.5% down context, mortgage insurance, and how Marching 2 More pairs education with local inventory search.",
  alternates: { canonical: "/fha-loan" },
}

export default function FhaLoanPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-white">
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
