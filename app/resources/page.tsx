import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import { RESOURCE_EXTERNAL_LINKS } from "@/lib/m2m-site"

import { ResourcesChecklistForm } from "./resources-checklist-form"

export const metadata = {
  title: "Resources | Marching 2 More",
  description:
    "More resources for buyers and sellers, including the pre-listing checklist and helpful housing links.",
}

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

            <M2mContainer className="relative z-10 max-w-5xl pt-20 pb-16 sm:pt-24 sm:pb-20">
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
              Prepare Your Home<br />for the Market
            </h1>

            {/* Subheading */}
            <p
              className="mt-6 sm:mt-8 text-center text-base sm:text-lg md:text-xl leading-relaxed text-m2m-cream [text-shadow:0_1px_10px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Use our 20 page guide to assist you with<br className="hidden md:block" />
              every phase of selling your home.
            </p>

            {/* Form */}
            <ResourcesChecklistForm />

            {/* Resources Section */}
            <div className="mt-16">
              <h2
                className="text-center text-lg md:text-xl text-m2m-cream/90"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Guidelines and resources — all in one place
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
      </main>
      <Footer />
    </>
  )
}
