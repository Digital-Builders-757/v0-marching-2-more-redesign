import type { Metadata } from "next"

import { Header } from "@/components/header"
import { CreditClosing } from "@/components/improve-your-credit/credit-closing"
import { CreditEducation } from "@/components/improve-your-credit/credit-education"
import { CreditHero } from "@/components/improve-your-credit/credit-hero"
import { CreditPlaybookForm } from "@/components/improve-your-credit/credit-playbook-form"
import { CreditTakeaways } from "@/components/improve-your-credit/credit-takeaways"
import { CreditVideo } from "@/components/improve-your-credit/credit-video"
import { CREDIT_FAQ_ITEMS } from "@/components/improve-your-credit/content"
import { M2mCampaignFaq } from "@/components/m2m-campaign-faq"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"
import { M2M_FUNNEL_PAGE_TESTIDS } from "@/lib/m2m-funnel-regression"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Crushing Credit for Homebuying | Marching 2 More",
  description:
    "Build credit before you buy in Hampton Roads — education, practical takeaways, and the Credit Improvement Playbook from Marching 2 More for military and civilian buyers.",
  path: "/improve-your-credit",
})

export default function ImproveYourCreditPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main
        id="main-content"
        data-testid={M2M_FUNNEL_PAGE_TESTIDS["/improve-your-credit"]}
        tabIndex={-1}
        className="bg-m2m-panel text-m2m-cream"
      >
        <CreditHero />
        <CreditPlaybookForm />
        <CreditEducation />
        <CreditTakeaways />
        <CreditVideo />
        <CreditClosing />
        <M2mCampaignFaq
          id="credit-faq-heading"
          eyebrow="Credit myths"
          heading="What buyers ask before they apply"
          items={[...CREDIT_FAQ_ITEMS]}
        />
        <M2mRelatedPages cluster="life" omitHref="/improve-your-credit" variant="onDark" />
      </main>
      <DivorceLandingFooter />
    </>
  )
}
