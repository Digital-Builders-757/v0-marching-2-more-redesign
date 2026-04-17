import Image from "next/image"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer } from "@/components/m2m-layout"
import { m2mInteriorFormInputClass } from "@/lib/m2m-form"
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

      <main id="main-content" tabIndex={-1} className="bg-white">
        <section className="relative min-h-screen overflow-hidden bg-white py-6 md:py-8">
          {/* Inner container with background image at 95% width */}
          <div 
            className="relative mx-auto overflow-hidden rounded-xl"
            style={{ width: '95%', minHeight: 'calc(100vh - 48px)' }}
          >
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
          
            <M2mContainer className="relative max-w-5xl pt-24 pb-20">
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
            <form className="mx-auto mt-10 max-w-3xl rounded-lg bg-white/90 p-6 backdrop-blur-sm md:p-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First name"
                  className={m2mInteriorFormInputClass}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last name"
                  className={m2mInteriorFormInputClass}
                />
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className={m2mInteriorFormInputClass}
                />
              </div>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm text-m2m-deep/80 font-sans">
                  <input type="checkbox" className="size-4 rounded border-m2m-deep/20 text-m2m-panel" />
                  I agree to the terms & conditions
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center bg-m2m-panel px-8 py-3 text-[0.75rem] font-medium tracking-[0.15em] text-m2m-cream transition hover:bg-m2m-panel-lt font-nav"
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
            </M2mContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
