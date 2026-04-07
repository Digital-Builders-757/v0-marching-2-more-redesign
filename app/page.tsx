import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PropertySearchNew } from "@/components/property-search-new"
import { SellHero } from "@/components/sell-hero"
import { Testimonials } from "@/components/testimonials"
import { PropertySearch } from "@/components/property-search"
import { Valuation } from "@/components/valuation"
import { Services } from "@/components/services"
import { TeamCTA } from "@/components/team-cta"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-[-100%] left-1/2 -translate-x-1/2 bg-m2m-gold text-m2m-black text-sm font-medium tracking-wider uppercase px-7 py-3.5 z-[9999] transition-[top] duration-300 focus:top-3"
      >
        Skip to main content
      </a>

      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1}>
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
