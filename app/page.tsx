import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeTopicNav } from "@/components/home-topic-nav"
import { Partners } from "@/components/partners"
import { PropertySearch } from "@/components/property-search"
import { SellHero } from "@/components/sell-hero"
import { Testimonials } from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Hampton Roads Real Estate | Military, VA Loans & Luxury Homes",
  description:
    "Marching 2 More is a veteran-owned Virginia Beach team for military relocation, VA loans, luxury home search, selling, valuations, and honest local guidance across Norfolk, Virginia Beach, Chesapeake, and Hampton Roads.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marching 2 More | Hampton Roads Real Estate Advisors",
    description:
      "Military moves, VA loans, luxury search, and calm guidance from offer to closing — Virginia Beach, veteran-owned.",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        {/* Wix parity section order: Hero → Reviews → Search → Sell → Partners */}
        <Hero />
        <HomeTopicNav />
        <Testimonials />
        <PropertySearch />
        <SellHero />
        <Partners />
      </main>

      <Footer />
    </>
  )
}
