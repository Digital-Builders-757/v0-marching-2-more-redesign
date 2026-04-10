import { Header } from "@/components/header"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { PropertySearch } from "@/components/property-search"
import { SellHero } from "@/components/sell-hero"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        {/* Wix parity section order: Hero → Reviews → Search → Sell → Partners */}
        <Hero />
        <Testimonials />
        <PropertySearch />
        <SellHero />
        <Partners />
      </main>

      <Footer />
    </>
  )
}
