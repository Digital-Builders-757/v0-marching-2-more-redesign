import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { SellPageHero } from "@/components/sell/sell-page-hero"
import { SellValuation } from "@/components/sell/sell-valuation"
import { SellProcess } from "@/components/sell/sell-process"
import { SellChecklist } from "@/components/sell/sell-checklist"
import { SellCTA } from "@/components/sell/sell-cta"

export const metadata = {
  title: "Sell Your Home | Marching 2 More Real Estate",
  description: "Sell your home with confidence. Free home valuations, expert marketing, and dedicated support from Marching 2 More Real Estate in Hampton Roads, Virginia.",
}

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
        <Footer />
      </main>
    </>
  )
}
