import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Accessibility Statement | Marching 2 More",
  description:
    "Digital accessibility commitment for the Marching 2 More real estate website.",
  path: "/accessibility-statement",
})

export default function AccessibilityStatementPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage title="Accessibility Statement" sourceUrl="https://www.marching2more.com/accessibility-statement" />
      <Footer />
    </>
  )
}
