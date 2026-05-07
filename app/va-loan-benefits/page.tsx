import type { Metadata } from "next"

import { Header } from "@/components/header"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { VaBenefitsContent } from "@/components/va-loan-benefits/va-benefits-content"
import { VaCtaBanner } from "@/components/va-loan-benefits/va-cta-banner"
import { VaHero } from "@/components/va-loan-benefits/va-hero"
import { VaLeadForm } from "@/components/va-loan-benefits/va-lead-form"
import { VaLoanQuiz } from "@/components/va-loan-benefits/va-loan-quiz"
import { VaVideo } from "@/components/va-loan-benefits/va-video"
import { VA_FAQ_ITEMS } from "@/components/va-loan-benefits/content"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "VA Home Loan Benefits | Hampton Roads | Marching 2 More",
  description:
    "Zero-down basics, funding fee context, and PCS-friendly buying in Virginia Beach and Hampton Roads — VA loan education and support from Marching 2 More.",
  path: "/va-loan-benefits",
})

export default function VaLoanBenefitsPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel text-m2m-cream">
        <VaHero />
        <VaVideo />
        <VaBenefitsContent />
        <VaCtaBanner />
        <VaLeadForm />
        <VaLoanQuiz />
        <M2mCampaignFaq
          id="va-faq-heading"
          eyebrow="VA misconceptions"
          heading="What military buyers worry about"
          items={[...VA_FAQ_ITEMS]}
        />
        <M2mRelatedPages cluster="military" omitHref="/va-loan-benefits" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
