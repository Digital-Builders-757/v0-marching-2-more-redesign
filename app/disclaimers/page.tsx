import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { DisclaimersContent } from "@/components/policy/disclaimers-content"
import { PolicyPage } from "@/components/policy/policy-page"
import { M2M_SITE_ORIGIN } from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Disclaimers | Marching 2 More",
  description:
    "General disclaimers for marching2more.com including external links, professional information, and testimonials.",
  path: "/disclaimers",
})

export default function DisclaimersPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage
        title="Disclaimers"
        lastUpdated="January 1, 2024"
        sourceUrl={`${M2M_SITE_ORIGIN}/disclaimers`}
        showLegacyMigrationNotice={false}
      >
        <DisclaimersContent />
      </PolicyPage>
      <Footer />
    </>
  )
}
