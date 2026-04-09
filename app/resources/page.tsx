import Link from "next/link"
import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import { RESOURCE_EXTERNAL_LINKS } from "@/lib/m2m-site"

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

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section className="relative px-6 pt-24 pb-20 md:px-16 lg:px-24 overflow-hidden min-h-screen">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/resources-hero.png"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Dark overlay */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(5, 13, 6, 0.6)" }}
          />
          
          <div className="relative mx-auto max-w-5xl">
            {/* Kicker with line */}
            <div className="flex items-center gap-4">
              <p
                className="text-[0.7rem] tracking-[0.2em] uppercase text-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Resources
              </p>
              <span className="h-px w-24 bg-m2m-cream/50" aria-hidden />
            </div>

            {/* Main Heading */}
            <h1
              className="mt-10 font-light italic text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-m2m-cream text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prepare Your Home<br />for the Market
            </h1>

            {/* Subheading */}
            <p
              className="mt-8 text-center text-lg md:text-xl leading-relaxed text-m2m-cream/90"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Use our 20 page guide to assist you with<br className="hidden md:block" />
              every phase of selling your home.
            </p>

            {/* Form */}
            <form className="mt-10 mx-auto max-w-3xl bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-m2m-gold placeholder:text-gray-600"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-m2m-gold placeholder:text-gray-600"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-m2m-gold placeholder:text-gray-600"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  I agree to the terms & conditions
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#1B4332] text-white text-[0.75rem] tracking-[0.15em] font-medium px-8 py-4 rounded transition hover:bg-[#1B4332]/90"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Email me the Checklist
                </button>
              </div>
            </form>

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
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
