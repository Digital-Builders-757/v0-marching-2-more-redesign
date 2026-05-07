import type { Metadata } from "next"

import { FORECLOSURE_FAQ_ITEMS } from "@/components/facing-foreclosure/content"
import { PreForeclosureGuideValue } from "@/components/facing-foreclosure/pre-foreclosure-guide-value"
import { PreForeclosureHeroWithForm } from "@/components/facing-foreclosure/pre-foreclosure-hero-with-form"
import { PreForeclosureHowWeHelp } from "@/components/facing-foreclosure/pre-foreclosure-how-we-help"
import { PreForeclosureOptions } from "@/components/facing-foreclosure/pre-foreclosure-options"
import { PreForeclosureTeam, PreForeclosureFinalCta } from "@/components/facing-foreclosure/pre-foreclosure-team-and-final"
import { PreForeclosureTrustStrip } from "@/components/facing-foreclosure/pre-foreclosure-trust-strip"
import { Header } from "@/components/header"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Facing Pre-Foreclosure in Virginia | Free Guide | Marching 2 More",
  description:
    "Behind on mortgage payments in Virginia? Free pre-foreclosure guide (instant + email), confidential help from the Marching 2 More team — options, timelines, and next steps without hype.",
  path: "/facing-foreclosure",
})

export default function FacingForeclosurePage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/facing-foreclosure"]}
        tabIndex={-1}
        className="bg-m2m-panel text-m2m-cream"
      >
        <PreForeclosureHeroWithForm />
        <PreForeclosureTrustStrip />
        <PreForeclosureGuideValue />
        <PreForeclosureOptions />
        <PreForeclosureHowWeHelp />
        <PreForeclosureTeam />
        <M2mCampaignFaq
          id="foreclosure-faq-heading"
          variant="panel"
          eyebrow="Questions along the way"
          heading="Straight answers"
          items={[...FORECLOSURE_FAQ_ITEMS]}
        />
        <PreForeclosureFinalCta />
        <M2mRelatedPages cluster="life" omitHref="/facing-foreclosure" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
