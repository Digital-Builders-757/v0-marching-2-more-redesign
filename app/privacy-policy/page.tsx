import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { PrivacyPolicyContent } from "@/components/policy/privacy-policy-content"
import { M2M_SITE_ORIGIN } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Privacy Policy | Marching 2 More",
  description:
    "Privacy notice for Marching 2 More LLC describing how we collect, use, and share information when you use marching2more.com and related services.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage
        title="Privacy Policy"
        lastUpdated="January 1, 2024"
        sourceUrl={`${M2M_SITE_ORIGIN}/privacy-policy`}
        showLegacyMigrationNotice={false}
      >
        <PrivacyPolicyContent />
      </PolicyPage>
      <Footer />
    </>
  )
}
