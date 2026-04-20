import type { Metadata } from "next"

import { Header } from "@/components/header"
import { CreditClosing } from "@/components/improve-your-credit/credit-closing"
import { CreditEducation } from "@/components/improve-your-credit/credit-education"
import { CreditHero } from "@/components/improve-your-credit/credit-hero"
import { CreditPlaybookForm } from "@/components/improve-your-credit/credit-playbook-form"
import { CreditTakeaways } from "@/components/improve-your-credit/credit-takeaways"
import { CreditVideo } from "@/components/improve-your-credit/credit-video"
import { DivorceLandingFooter } from "@/components/navigating-divorce/divorce-landing-footer"

export const metadata: Metadata = {
  title: "Improve Your Credit | Marching 2 More",
  description:
    "Build stronger credit on your path to homeownership — education, takeaways, and the Marching 2 More Credit Improvement Playbook for Hampton Roads buyers.",
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
      </main>
      <DivorceLandingFooter />
    </>
  )
}
