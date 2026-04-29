import type { Metadata } from "next"

import { Header } from "@/components/header"
import { InvestmentsHero } from "@/components/more-investments/investments-hero"
import { InvestmentsSocialProof } from "@/components/more-investments/investments-social-proof"
import { InvestmentsTools } from "@/components/more-investments/investments-tools"
import { InvestmentsValue } from "@/components/more-investments/investments-value"
import { INVESTMENTS_FAQ_ITEMS } from "@/components/more-investments/content"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Real Estate Investing in Hampton Roads | Rentals & Wealth",
  description:
    "Local investing context — buy-and-hold, equity plays, and working with a team that understands military schedules and Hampton Roads neighborhoods.",
  alternates: { canonical: "/more-investments" },
}

export default function MoreInvestmentsPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel">
        <InvestmentsHero />
        <InvestmentsTools />
        <InvestmentsValue />
        <InvestmentsSocialProof />
        <M2mCampaignFaq
          id="investments-faq-heading"
          eyebrow="Investor reality checks"
          heading="Before your first offer"
          items={[...INVESTMENTS_FAQ_ITEMS]}
        />
        <M2mRelatedPages cluster="invest" omitHref="/more-investments" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
