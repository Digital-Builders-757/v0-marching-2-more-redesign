import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { TermsOfUseContent } from "@/components/policy/terms-of-use-content"
import { M2M_SITE_ORIGIN } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Terms and Conditions | Marching 2 More",
  description:
    "Terms of Use for marching2more.com — agreement, IP, prohibited activities, arbitration, disclaimers, and contact information for Marching 2 More LLC.",
  path: "/terms-and-conditions",
})

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage
        title="Terms and Conditions"
        lastUpdated="January 1, 2024"
        sourceUrl={`${M2M_SITE_ORIGIN}/terms-and-conditions`}
        showLegacyMigrationNotice={false}
      >
        <TermsOfUseContent />
      </PolicyPage>
      <Footer />
    </>
  )
}
