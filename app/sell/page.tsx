import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { SellPageHero } from "@/components/sell/sell-page-hero"
import { SellValuation } from "@/components/sell/sell-valuation"
import { SellProcess } from "@/components/sell/sell-process"
import { SellChecklist } from "@/components/sell/sell-checklist"
import { SellCTA } from "@/components/sell/sell-cta"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Sell Your Home | Marching 2 More",
  description:
    "Sell with confidence in Hampton Roads — valuations, pricing strategy, marketing, and support from Marching 2 More.",
  path: "/sell",
})

export default function SellPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <SellPageHero />
        <SellValuation />
        <SellProcess />
        <SellChecklist />
        <SellCTA />
      </main>
      <Footer />
    </>
  )
}
