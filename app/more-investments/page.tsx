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
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Real Estate Investing | Hampton Roads | Marching 2 More",
  description:
    "Buy-and-hold, equity, and rental context in Hampton Roads — work with a team that understands military schedules and local neighborhoods.",
  path: "/more-investments",
})

export default function MoreInvestmentsPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/more-investments"]}
        tabIndex={-1}
        className="bg-m2m-panel"
      >
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
