import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { BuyHero } from "@/components/buy/buy-hero"
import { BuyServices } from "@/components/buy/buy-services"
import { BuyProcess } from "@/components/buy/buy-process"
import { BuyCTA } from "@/components/buy/buy-cta"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Buy a Home | Marching 2 More",
  description:
    "Buy with Marching 2 More in Hampton Roads — VA loan-friendly guidance, PCS moves, local search support, and military family experience.",
  path: "/buy",
})

export default function BuyPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <BuyHero />
        <BuyServices />
        <BuyProcess />
        <BuyCTA />
      </main>
      <Footer />
    </>
  )
}
