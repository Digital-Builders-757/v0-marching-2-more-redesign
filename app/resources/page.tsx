import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import { RESOURCE_EXTERNAL_LINKS } from "@/lib/m2m-site"

import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

import { ResourcesChecklistForm } from "./resources-checklist-form"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Seller Resources & Pre-Listing Checklist | Marching 2 More",
  description:
    "Pre-listing checklist, trusted housing links (VA, HUD, Virginia Housing), and seller tools — CMA, valuation, and Hampton Roads support from Marching 2 More.",
  path: "/resources",
  openGraphTitle: "Seller Resources | Marching 2 More",
})

const resourceLinks = [
  {
    label: "Military Home Loans",
    href: RESOURCE_EXTERNAL_LINKS.vaHomeLoans,
  },
  {
    label: "Housing & Urban Development",
    href: RESOURCE_EXTERNAL_LINKS.hud,
  },
  {
    label: "The State of Virginia Housing Resources",
    href: RESOURCE_EXTERNAL_LINKS.virginiaHousing,
  },
  {
    label: "U.S. Department of Agriculture Homes",
    href: RESOURCE_EXTERNAL_LINKS.usda,
  },
  {
    label: "Crime Check",
    href: "https://www.neighborhoodscout.com/",
  },
  {
    label: "School Rankings",
    href: "https://www.greatschools.org/",
  },
  {
    label: "Foreclosure",
    href: "https://www.hud.gov/topics/avoiding_foreclosure",
  },
  {
    label: "Affordable Home Ownership",
    href: RESOURCE_EXTERNAL_LINKS.naca,
  },
]

const internalGuides = [
  { label: "Buying overview", href: "/buy" },
  { label: "Selling overview", href: "/sell" },
  { label: "Book a consultation", href: "/contact-us?intent=consultation" },
  { label: "Reviews from clients", href: "/reviews" },
  { label: "Our team", href: "/our-team" },
  { label: "Home search & buying", href: "/home-search" },
  { label: "Free home valuation", href: "/free-home-valuation" },
  { label: "CMA request", href: "/cma-form" },
  { label: "Blog — local insights", href: "/blog" },
  { label: "Downsizing guide", href: "/downsizing-your-home" },
  { label: "Divorce & real estate", href: "/navigating-divorce" },
  { label: "Facing foreclosure — options", href: "/facing-foreclosure" },
  { label: "Credit playbook", href: "/improve-your-credit" },
  { label: "VA loan benefits", href: "/va-loan-benefits" },
  { label: "FHA loans", href: "/fha-loan" },
  { label: "Real estate investing", href: "/more-investments" },
] as const

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="relative min-h-screen overflow-hidden bg-white py-6 md:py-8">
          <M2mInsetHeroFrame className="min-h-[calc(100dvh-3rem)]">
            <div className="absolute inset-0">
              <Image
                src="/images/resources-hero.png"
                alt=""
                fill
                priority
                className="object-cover object-[center_32%] sm:object-center"
                sizes="100vw"
              />
            </div>
            <M2mInsetHeroScrim variant="luminous" />

            <M2mContainer className="relative z-10 max-w-5xl pt-16 pb-14 sm:pt-24 sm:pb-20">
            {/* Kicker with line */}
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <p
                className="text-[0.7rem] tracking-[0.2em] uppercase text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Resources
              </p>
              <span className="h-px w-24 bg-m2m-gold/50" aria-hidden />
            </div>

            {/* Main Heading */}
            <h1
              className="mt-8 sm:mt-10 font-light italic text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-m2m-cream text-center [text-shadow:0_2px_16px_rgba(5,13,6,0.5),0_1px_4px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Seller Resources<br />& Next Steps
            </h1>

            {/* Subheading */}
            <p
              className="mt-6 sm:mt-8 text-center text-base sm:text-lg md:text-xl leading-relaxed text-m2m-cream [text-shadow:0_1px_10px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Use the checklist, trusted links, and local guides below to move through the selling process with a
              clearer plan.
            </p>

            {/* Form */}
            <ResourcesChecklistForm />

            <div className="mx-auto mt-14 max-w-3xl rounded-md border border-m2m-cream/20 bg-m2m-deep/25 px-4 py-5 sm:px-7 sm:py-6">
              <p
                className="text-center text-[0.72rem] font-medium uppercase tracking-[0.17em] text-m2m-gold sm:text-[0.82rem]"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Guides on marching2more.com
              </p>
              <p
                className="mt-3 text-center text-base leading-relaxed text-m2m-cream/88 sm:text-lg"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Jump to the guide, tool, or proof that fits your next step, then come back here for the printable
                checklist.
              </p>
              <nav aria-label="Internal guides" className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3">
                {internalGuides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-m2m-cream underline decoration-m2m-gold/45 underline-offset-[6px] transition-colors hover:text-m2m-gold sm:text-base font-sans"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Resources Section */}
            <div className="mt-16">
              <h2
                className="text-center text-lg md:text-xl text-m2m-cream/90"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Trusted links and next steps
              </h2>

              {/* Resource Links Grid */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {resourceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-sm text-m2m-cream underline underline-offset-2 hover:text-m2m-gold transition-colors"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {link.label} ›
                  </a>
                ))}
              </div>
            </div>
            </M2mContainer>
          </M2mInsetHeroFrame>
        </section>
        <M2mRelatedPages cluster="learn" omitHref="/resources" variant="onLight" />
      </main>
      <Footer />
    </>
  )
}
