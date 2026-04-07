import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeTrustRow } from "@/components/home-trust-row"
import { HomeContactPrompt } from "@/components/home-contact-prompt"
import { Testimonials } from "@/components/testimonials"
import { PropertySearchNew } from "@/components/property-search-new"
import { HomeSellSection } from "@/components/home-sell-section"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export default function Home() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <HomeTrustRow />
        <HomeContactPrompt />
        <Testimonials />
        <PropertySearchNew />
        <HomeSellSection />
        <Partners />
        <Footer />
      </main>
    </>
  )
}
