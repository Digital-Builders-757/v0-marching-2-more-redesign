import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"

import {
  GOOGLE_REVIEW_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"

export const metadata = {
  title: "Free Home Valuation | Marching 2 More",
  description:
    "Maximize your home's value before you list. Start with a free home valuation and expert guidance.",
}

const steps = [
  {
    title: "Schedule a Walkthrough",
    body: "Share your home's unique features and any concerns you have. We’re here to listen and address your specific needs.",
  },
  {
    title: "Review Market Positioning Options",
    body: "Comprehensive Market Analysis: Gain insights with a detailed Comparative Market Analysis (CMA), understanding how your home stacks up in the current market.",
  },
  {
    title: "Personalized Value Enhancement Checklist",
    body: "Whether improving your home’s value or listing as is, we provide expert guidance every step of the way.",
  },
  {
    title: "No pressure, only support.",
    body: "From contracts to closing, we handle everything. We coordinate with partners, manage projects, and keep your sale on track.",
  },
]

const valuationTestimonials = [
  {
    name: "The Sanchez Family",
    affiliation: "U.S. Navy",
    quote:
      "So excited for our new journey! I can't thank Donavan McFadden and the Marching2More team enough for finding the perfect home for my little family! He was extremely dedicated to finding a home that fit our needs and wants! Here's to new beginnings!",
  },
  {
    name: "The Cole Family",
    affiliation: "U.S. Navy",
    quote:
      "Donavan McFadden assisted my wife and I in purchasing our first home together. Buying a home for the first time can be scary and confusing, it certainly was for us. He was very responsive and really took his time to explain everything we did not know. He made it an enjoyable one. Thank you Donavan!",
  },
  {
    name: "Terri Hill",
    affiliation: "Hampton Roads Resident",
    quote:
      "When you have family and friends you care about you want to refer them to someone you can trust! Roger Lee was that person for me. He built trust. He was relatable. He was patient!",
  },
]

export default function FreeHomeValuationPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        {/* Hero */}
        <section
          className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24"
          style={{ backgroundColor: "#050d06" }}
        >
          <div className="relative z-10 mx-auto max-w-4xl">
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Home Valuation
            </p>

            <h1
              className="mt-6 font-light text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Maximize Your Home&apos;s Value Before You List.
            </h1>

            <p
              className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-m2m-muted-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Effortless Home Valuation for Top Market Results in Virginia
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={REALSCOUT_HOME_VALUATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Get Your Free Home Valuation
              </a>

              <Link
                href="/our-team"
                className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Meet Your Team
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-light text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Simple Valuation Process:
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6">
              {steps.map((s) => (
                <div key={s.title} className="border border-m2m-deep/10 bg-white p-6">
                  <h3
                    className="text-base md:text-lg text-m2m-deep"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-m2m-muted"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={REALSCOUT_HOME_VALUATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Get Your Free Home Valuation
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-m2m-black px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2
              className="text-2xl md:text-3xl font-light text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;re committed to being the best.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {valuationTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-m2m-deep/40 border border-m2m-gold/10 p-6"
                >
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-m2m-gold"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    ★ ★ ★ ★ ★
                  </p>
                  <p
                    className="mt-4 text-sm leading-relaxed text-m2m-cream/80"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {t.quote}
                  </p>
                  <p
                    className="mt-6 text-sm text-m2m-cream"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-m2m-muted"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {t.affiliation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                More Reviews
              </Link>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Review us on Google ▸
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-3xl font-light text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Discover Your Home&apos;s True Value?
            </h2>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={REALSCOUT_HOME_VALUATION_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-m2m-deep hover:text-m2m-gold transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Your Free Home Valuation
              </a>
              <a
                href={M2M_PHONE_HREF}
                className="text-sm text-m2m-deep hover:text-m2m-gold transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Or give us a call — {M2M_PHONE_DISPLAY}
              </a>
              <Link
                href="/our-team"
                className="text-sm text-m2m-deep hover:text-m2m-gold transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Meet Your Team
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
