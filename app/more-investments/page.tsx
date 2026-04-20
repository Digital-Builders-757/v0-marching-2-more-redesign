import type { Metadata } from "next"

import { Header } from "@/components/header"
import { InvestmentsHero } from "@/components/more-investments/investments-hero"
import { InvestmentsSocialProof } from "@/components/more-investments/investments-social-proof"
import { InvestmentsValue } from "@/components/more-investments/investments-value"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Real Estate Investing | Marching 2 More",
  description:
    "Explore paths to building wealth through real estate investing with trusted guidance from the Marching 2 More team in Hampton Roads.",
}

export default function MoreInvestmentsPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel">
        <InvestmentsHero />
        <InvestmentsValue />
        <InvestmentsSocialProof />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
