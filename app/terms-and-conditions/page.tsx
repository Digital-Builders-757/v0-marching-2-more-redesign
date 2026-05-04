import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PolicyPage } from "@/components/policy/policy-page"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Terms and Conditions | Marching 2 More",
  description:
    "Terms of use for the Marching 2 More website and marketing services.",
  path: "/terms-and-conditions",
})

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <PolicyPage title="Terms and Conditions" sourceUrl="https://www.marching2more.com/terms-and-conditions" />
      <Footer />
    </>
  )
}
