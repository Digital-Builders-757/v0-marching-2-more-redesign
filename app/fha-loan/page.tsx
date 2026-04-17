import type { Metadata } from "next"

import { Header } from "@/components/header"
import { FhaFeatures } from "@/components/fha-loan/fha-features"
import { FhaHero } from "@/components/fha-loan/fha-hero"
import { FhaQuoteForm } from "@/components/fha-loan/fha-quote-form"
import { FhaTestimonials } from "@/components/fha-loan/fha-testimonials"
import { FhaWhySplit } from "@/components/fha-loan/fha-why-split"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "FHA Loans & Home Buying | Marching 2 More",
  description:
    "Explore FHA financing with a Hampton Roads team focused on clear guidance, trusted partners, and a premium homebuying experience.",
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
        <FhaQuoteForm />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
