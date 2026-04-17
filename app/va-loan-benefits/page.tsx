import type { Metadata } from "next"

import { Header } from "@/components/header"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { VaBenefitsContent } from "@/components/va-loan-benefits/va-benefits-content"
import { VaCtaBanner } from "@/components/va-loan-benefits/va-cta-banner"
import { VaHero } from "@/components/va-loan-benefits/va-hero"
import { VaLeadForm } from "@/components/va-loan-benefits/va-lead-form"
import { VaVideo } from "@/components/va-loan-benefits/va-video"

export const metadata: Metadata = {
  title: "VA Loan Benefits | Marching 2 More",
  description:
    "Understand VA home loan benefits and how the Marching 2 More team supports veterans and military families in Hampton Roads.",
}

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
      </main>
      <DivorceLandingFooter />
    </>
  )
}
