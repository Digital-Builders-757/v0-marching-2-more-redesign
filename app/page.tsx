import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HomeTopicNav } from "@/components/home-topic-nav"
import { M2mHomeSectionSkeleton } from "@/components/m2m-page-skeleton"
import { Partners } from "@/components/partners"

export const metadata: Metadata = {
  title: "Hampton Roads Real Estate | Marching 2 More",
  description:
    "Veteran-owned Virginia Beach team for military relocation, VA loans, luxury search, selling, valuations, and local guidance across Norfolk, Chesapeake, and Hampton Roads.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marching 2 More | Hampton Roads Real Estate Advisors",
    description:
      "Military moves, VA loans, and calm guidance from offer to closing — veteran-owned in Virginia Beach.",
    url: "/",
    siteName: "Marching 2 More",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marching 2 More | Hampton Roads Real Estate Advisors",
    description:
      "Military moves, VA loans, and calm guidance from offer to closing — veteran-owned in Virginia Beach.",
  },
}

const sectionLoading = () => <M2mHomeSectionSkeleton />

const Testimonials = dynamic(
  () => import("@/components/testimonials").then((m) => ({ default: m.Testimonials })),
  { loading: sectionLoading },
)

const PropertySearch = dynamic(
  () => import("@/components/property-search").then((m) => ({ default: m.PropertySearch })),
  { loading: sectionLoading },
)

const SellHero = dynamic(
  () => import("@/components/sell-hero").then((m) => ({ default: m.SellHero })),
  { loading: sectionLoading },
)

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
