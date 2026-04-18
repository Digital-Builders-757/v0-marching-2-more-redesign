import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { PricingSection } from "@/components/plans-pricing/pricing-section"

export const metadata: Metadata = {
  title: "Plans & Pricing | Marching 2 More",
  description:
    "Compare Beginner, Pro, and VIP options — classes, sessions, and member benefits with Marching 2 More.",
}

export default function PlansAndPricingPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
