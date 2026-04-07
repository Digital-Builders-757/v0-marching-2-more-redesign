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
      <main>
        <Hero />
        <Testimonials />
        <PropertySearch />
        <SellHero />
        <Services />
        <TeamCTA />
      </main>
      <Footer />
    </>
  )
}
