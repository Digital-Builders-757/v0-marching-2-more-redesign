import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { PartnersHero } from "@/components/partners/partners-hero"
import { PartnersList } from "@/components/partners/partners-list"
import { PartnersCTA } from "@/components/partners/partners-cta"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Our Partners | Marching 2 More",
  description:
    "Trusted Hampton Roads partners we refer with confidence — financing, renovations, moving, and related home services.",
  path: "/partners",
})

export default function PartnersPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />
      <main id="main-content" tabIndex={-1} className="bg-white">
        <PartnersHero />
        <PartnersList />
        <PartnersCTA />
      </main>
      <Footer />
    </>
  )
}
