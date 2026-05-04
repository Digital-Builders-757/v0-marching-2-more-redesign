import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { ValuationSellerLeadForm } from "@/components/free-home-valuation/valuation-seller-lead-form"
import { Header } from "@/components/header"
import { M2mBrandLogo } from "@/components/m2m-brand-logo"
import {
  M2mContainer,
  M2mInsetHeroFrame,
  M2mInsetHeroScrim,
  M2mSection,
  M2M_PHOTO_BAND_SCRIM_STYLE,
} from "@/components/m2m-layout"
import { M2mRelatedPages } from "@/components/m2m-related-pages"
import {
  GOOGLE_REVIEW_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"
import { m2mStandardMetadata } from "@/lib/m2m-seo-metadata"

export const metadata: Metadata = m2mStandardMetadata({
  title: "Free Home Valuation & Seller Consultation | Marching 2 More",
  description:
    "Free online home valuation and optional CMA follow-up from Marching 2 More — veteran-owned listing advisors for Virginia Beach, Norfolk, Chesapeake, and Hampton Roads.",
  path: "/free-home-valuation",
  openGraphTitle: "Free Home Valuation | Marching 2 More",
})

export default function FreeHomeValuationPage() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[72vh] overflow-hidden bg-white py-5 sm:py-6 md:py-8">
          <M2mInsetHeroFrame className="min-h-[min(72vh,820px)] sm:min-h-[calc(70vh-3rem)]">
            <div className="absolute inset-0">
              <Image
                src="/images/cma-hero.png"
                alt=""
                fill
                priority
                className="object-cover object-[center_28%] sm:object-center"
                sizes="100vw"
              />
            </div>
            <M2mInsetHeroScrim variant="luminous" />

            <M2mContainer className="relative z-10 max-w-5xl text-center pt-16 pb-14 sm:pt-28 sm:pb-20">
            {/* Kicker */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 mb-6 sm:mb-8">
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Home Valuation
              </p>
              <span className="h-px w-16 bg-m2m-gold/60" />
            </div>

            {/* Heading */}
            <h1
              className="font-light italic leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)] text-m2m-cream mb-6 [text-shadow:0_2px_16px_rgba(5,13,6,0.5),0_1px_3px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Maximize Your<br />
              Home&apos;s Value Before<br />
              You List.
            </h1>

            {/* Subheading */}
            <p
              className="text-base md:text-lg italic text-m2m-cream mb-8 max-w-xl mx-auto [text-shadow:0_1px_12px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Effortless Home Valuation for Top Market<br />
              Results in Virginia
            </p>

            {/* CTA Button */}
            <a
              href={REALSCOUT_HOME_VALUATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block min-h-12 touch-manipulation bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 shadow-[0_4px_26px_-4px_rgba(5,13,6,0.45)] transition hover:bg-m2m-gold-lt mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Get Your Free Home Valuation
            </a>

            {/* Veteran Owned Badge */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <p
                className="text-xs text-m2m-cream/95"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Veteran Owned
              </p>
              <span className="text-m2m-gold">★ ★ ★ ★ ★</span>
            </div>

            {/* Contact Link */}
            <p
              className="text-sm text-m2m-cream/95"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Have a question?{" "}
            <Link href="/contact-us" className="underline hover:text-m2m-gold">
              Contact Us
            </Link>
            </p>
            </M2mContainer>
          </M2mInsetHeroFrame>
        </section>

        {/* Seller lead capture + instant estimate */}
        <M2mSection variant="light" className="border-t border-gray-100 py-16">
          <M2mContainer className="max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <ValuationSellerLeadForm />
              <div className="rounded-xl border border-m2m-deep/10 bg-m2m-cream/50 p-8">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-gold font-nav">
                  Instant online estimate
                </p>
                <h2 className="mt-2 text-2xl font-light text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                  Prefer an automated report first?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-m2m-deep/85 font-sans">
                  Open our secure RealScout home value tool anytime — then we can follow up with a human-reviewed CMA if
                  you&apos;d like.
                </p>
                <a
                  href={REALSCOUT_HOME_VALUATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center bg-m2m-gold px-8 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition hover:bg-m2m-gold-lt font-nav"
                >
                  Get Your Free Home Valuation
                </a>
              </div>
            </div>
          </M2mContainer>
        </M2mSection>

        {/* Support Section */}
        <M2mSection variant="light" className="py-20">
          <M2mContainer className="max-w-3xl text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-m2m-gold/35" aria-hidden />
              <M2mBrandLogo variant="inline" className="shrink-0 opacity-90" alt="" />
              <span className="h-px w-12 bg-m2m-gold/35" aria-hidden />
            </div>

            {/* Heading */}
            <h2
              className="mb-6 text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-[1.2] text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start your journey with personalized<br />
              guidance and dedicated support.
            </h2>

            {/* Body */}
            <p
              className="mx-auto max-w-xl text-base leading-relaxed text-m2m-deep/85"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Our team truly gets that selling your home is more than a transaction —
              it&apos;s a personal journey. That is why we are committed to guide you
              through each step. <strong>No pressure, only support.</strong>
            </p>
          </M2mContainer>
        </M2mSection>

        {/* Process Section */}
        <M2mSection variant="light" className="border-t border-gray-100 py-16">
          <M2mContainer className="max-w-5xl">
            {/* Heading */}
            <h2
              className="mb-12 text-center text-[clamp(1.5rem,3vw,2rem)] font-light text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Simple Valuation Process:
            </h2>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Step 1 */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-m2m-gold font-nav">Schedule a Walkthrough</h3>
                <p className="text-sm leading-relaxed text-m2m-deep/80" style={{ fontFamily: "var(--font-sans)" }}>
                  Share your home&apos;s unique features and any concerns you have. We&apos;re here to listen and address your specific needs.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-m2m-gold font-nav">Review Market Positioning Options</h3>
                <p className="text-sm leading-relaxed text-m2m-deep/80" style={{ fontFamily: "var(--font-sans)" }}>
                  Comprehensive Market Analysis: Gain insights with a detailed Comparative Market Analysis (CMA), understanding how your home stacks up in the current market.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-m2m-gold font-nav">
                  Personalized Value Enhancement Checklist
                </h3>
                <p className="text-sm leading-relaxed text-m2m-deep/80" style={{ fontFamily: "var(--font-sans)" }}>
                  Whether improving your home&apos;s value or listing as is, we provide expert guidance every step of the way.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-m2m-gold font-nav">No pressure, only support.</h3>
                <p className="text-sm leading-relaxed text-m2m-deep/80" style={{ fontFamily: "var(--font-sans)" }}>
                  From contracts to closing, we handle everything. We coordinate with lawyers, manage projects, and keep your sale on track.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={REALSCOUT_HOME_VALUATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold hover:text-m2m-deep"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Get Your Free Home Valuation
              </a>
            </div>
          </M2mContainer>
        </M2mSection>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-20">
          <M2mContainer className="max-w-6xl">
            {/* Heading */}
            <h2
              className="mb-12 text-center text-[clamp(1.25rem,3vw,1.75rem)] font-light text-m2m-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We&apos;re committed to being the best.
            </h2>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testi-sanchez.avif"
                      alt="Kristin Jacob"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-m2m-deep">Kristin Jacob</p>
                    <p className="text-xs text-m2m-gold">U.S. Navy</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed text-m2m-deep/80">
                  Donavan and his team were above and beyond in the care and details they took getting my home sold. The process was streamlined and explained every step of the way. I highly recommend them to anyone interested in selling or purchasing a home.
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testi-cole.avif"
                      alt="Timothy L. Cunningham"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-m2m-deep">Timothy L. Cunningham</p>
                    <p className="text-xs text-m2m-gold">U.S Navy</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed text-m2m-deep/80">
                  My wife and I have bought 3 houses and sold 2, but our experience with Mr. McFadden has been hands down the smoothest, fastest, and easiest. He took care of everything we needed while selling our home. I would recommend in a heart beat.
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/testi-tami.avif"
                      alt="Dwayne Jenkins"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-m2m-deep">Dwayne Jenkins</p>
                    <p className="text-xs text-m2m-gold">Credit Advocate</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed text-m2m-deep/80">
                  Donny and Roger are an amazing 1-2 punch for both buyers and sellers in the VA Beach area. They are constantly providing valuable information through seminars and education in the community. They are going to make sure the home you buy fits your financial needs.
                </p>
              </div>
            </div>

            {/* More Reviews */}
            <div className="text-center">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-3 transition hover:bg-m2m-gold-lt mb-3"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                More Reviews
              </Link>
              <p className="text-sm">
                <Link
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-m2m-gold hover:underline"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Review us on Google &rsaquo;
                </Link>
              </p>
            </div>
          </M2mContainer>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative overflow-hidden py-20 sm:py-24">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cma-hero.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-[1] pointer-events-none" style={M2M_PHOTO_BAND_SCRIM_STYLE} aria-hidden />

          <M2mContainer className="relative z-10 max-w-3xl px-4 text-center sm:px-6">
            <h2
              className="font-light italic leading-[1.1] text-[clamp(2rem,5vw,3rem)] text-m2m-cream mb-8 sm:mb-10 [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Discover Your<br />
              Home&apos;s True Value?
            </h2>

            <div className="flex flex-col items-stretch gap-3 sm:items-center sm:gap-4">
              <a
                href={REALSCOUT_HOME_VALUATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 shadow-[0_4px_22px_-4px_rgba(5,13,6,0.4)] transition hover:bg-m2m-gold-lt sm:min-w-[280px]"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Your Free Home Valuation
              </a>

              <a
                href={M2M_PHONE_HREF}
                className="inline-block border border-m2m-cream/45 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-gold hover:text-m2m-gold sm:min-w-[280px]"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Or give us a call — {M2M_PHONE_DISPLAY}
              </a>

              <Link
                href="/our-team"
                className="inline-block border border-m2m-cream/45 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-gold hover:text-m2m-gold sm:min-w-[280px]"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Meet Your Team
              </Link>
            </div>
          </M2mContainer>
        </section>
        <M2mRelatedPages cluster="sell" omitHref="/free-home-valuation" variant="onLight" />
      </main>

      <Footer />
    </>
  )
}
