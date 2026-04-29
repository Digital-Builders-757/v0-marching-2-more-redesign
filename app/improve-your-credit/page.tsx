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

export const metadata: Metadata = {
  title: "Credit & Homebuying Readiness | Hampton Roads",
  description:
    "Improve credit before you buy — education, checklist-style takeaways, and the Credit Improvement Playbook from Marching 2 More for military and civilian buyers in Hampton Roads.",
  alternates: { canonical: "/improve-your-credit" },
}

export default function ImproveYourCreditPage() {
  return (
    <>
      <Header consultationCtaVariant="outlineCream" />
      <main id="main-content" tabIndex={-1} className="bg-m2m-panel text-m2m-cream">
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
