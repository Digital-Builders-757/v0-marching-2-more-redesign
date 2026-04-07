import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { PropertySearch } from "@/components/property-search"
import { SellHero } from "@/components/sell-hero"
import { Services } from "@/components/services"
import { TeamCTA } from "@/components/team-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1}>
        {/* Wix parity section order: Hero → Reviews → Search → Sell → Partners */}
        <Hero />
        <Testimonials />
        <PropertySearch />
        <PropertySearchNew />
        <SellHero />
        <Valuation />
        <Services />
        <TeamCTA />
      </main>
      <Footer />
    </>
  )
}
