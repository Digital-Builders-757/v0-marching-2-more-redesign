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
    label: "VA Home Loans",
    href: RESOURCE_EXTERNAL_LINKS.vaHomeLoans,
  },
  {
    label: "HUD",
    href: RESOURCE_EXTERNAL_LINKS.hud,
  },
  {
    label: "Virginia Housing",
    href: RESOURCE_EXTERNAL_LINKS.virginiaHousing,
  },
  {
    label: "USDA Eligibility",
    href: RESOURCE_EXTERNAL_LINKS.usda,
  },
  {
    label: "NACA",
    href: RESOURCE_EXTERNAL_LINKS.naca,
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section
          className="relative px-6 pt-28 pb-10 md:px-16 lg:px-24 overflow-hidden"
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
            style={{ backgroundColor: "rgba(5, 13, 6, 0.75)" }}
          />
          <div className="relative mx-auto max-w-5xl">
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              More Resources
            </p>
            <h1
              className="mt-6 font-light text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pre-Listing Checklist
            </h1>
            <p
              className="mt-6 max-w-2xl text-sm leading-relaxed text-m2m-muted-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Our 20 page guide to assist you with every phase of selling your home.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Request the Checklist
              </Link>
              <Link
                href="/free-home-valuation"
                className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Free Home Valuation
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-light text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Helpful Links
            </h2>
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed text-m2m-muted"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              A few trusted starting points for buyers and sellers.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {resourceLinks.map((l) => (
                <li key={l.href} className="border border-m2m-deep/10 bg-white p-6">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-m2m-deep hover:text-m2m-gold transition-colors"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {l.label} ▸
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
