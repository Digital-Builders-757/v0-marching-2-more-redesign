import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PartnersHero } from "@/components/partners/partners-hero"
import { PartnersList } from "@/components/partners/partners-list"
import { PartnersCTA } from "@/components/partners/partners-cta"

export const metadata = {
  title: "Our Partners | Marching 2 More Real Estate",
  description: "Access our network of trusted local partners. Financing, renovations, moving solutions and more from professionals we trust.",
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1}>
        <PartnersHero />
        <PartnersList />
        <PartnersCTA />
        <Footer />
      </main>
    </>
  )
}
