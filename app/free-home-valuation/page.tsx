import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export const metadata: Metadata = {
  title: "Free Home Valuation | Marching 2 More",
  description:
    "Maximize your home's value before you list. Get a free home valuation from the Marching 2 More team.",
}

export default function FreeHomeValuationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="relative px-6 pt-28 pb-20 md:px-16 lg:px-24 overflow-hidden min-h-[70vh]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cma-hero.png"
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
            style={{ backgroundColor: "rgba(5, 13, 6, 0.7)" }}
          />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Kicker */}
            <div className="inline-flex items-center gap-4 mb-8">
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase text-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Home Valuation
              </p>
              <span className="h-px w-16 bg-m2m-cream/50" />
            </div>

            {/* Heading */}
            <h1
              className="font-light italic leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)] text-m2m-cream mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Maximize Your<br />
              Home&apos;s Value Before<br />
              You List.
            </h1>

            {/* Subheading */}
            <p
              className="text-base md:text-lg italic text-m2m-cream/90 mb-8 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Effortless Home Valuation for Top Market<br />
              Results in Virginia
            </p>

            {/* CTA Button */}
            <Link
              href="/cma-form"
              className="inline-block bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold-lt mb-8"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Get Your Free Home Valuation
            </Link>

            {/* Veteran Owned Badge */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <p
                className="text-xs text-m2m-cream/80"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Veteran Owned
              </p>
              <span className="text-m2m-gold">★ ★ ★ ★ ★</span>
            </div>

            {/* Contact Link */}
            <p
              className="text-sm text-m2m-cream/70"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Have a question?{" "}
              <Link href="/contact" className="underline hover:text-m2m-gold">
                Contact Us
              </Link>
            </p>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* M2M Logo/Icon */}
            <div className="mb-8">
              <Image
                src="/m2m-logo-gold.png"
                alt="Marching 2 More"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>

            {/* Heading */}
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2] font-light mb-6"
              style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}
            >
              Start your journey with personalized<br />
              guidance and dedicated support.
            </h2>

            {/* Body */}
            <p
              className="text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-sans)", color: "#555" }}
            >
              Our team truly gets that selling your home is more than a transaction —
              it&apos;s a personal journey. That is why we are committed to guide you
              through each step. <strong>No pressure, only support.</strong>
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-24 border-t border-gray-100">
          <div className="mx-auto max-w-5xl">
            {/* Heading */}
            <h2
              className="text-center text-[clamp(1.5rem,3vw,2rem)] font-light mb-12"
              style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}
            >
              A Simple Valuation Process:
            </h2>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Step 1 */}
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ fontFamily: "var(--font-nav)", color: "#B8963E" }}
                >
                  Schedule a Walkthrough
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", color: "#555" }}
                >
                  Share your home&apos;s unique features and any concerns you have. We&apos;re here to listen and address your specific needs.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ fontFamily: "var(--font-nav)", color: "#B8963E" }}
                >
                  Review Market Positioning Options
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", color: "#555" }}
                >
                  Comprehensive Market Analysis: Gain insights with a detailed Comparative Market Analysis (CMA), understanding how your home stacks up in the current market.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ fontFamily: "var(--font-nav)", color: "#B8963E" }}
                >
                  Personalized Value Enhancement Checklist
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", color: "#555" }}
                >
                  Whether improving your home&apos;s value or listing as is, we provide expert guidance every step of the way.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ fontFamily: "var(--font-nav)", color: "#B8963E" }}
                >
                  No pressure, only support.
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", color: "#555" }}
                >
                  From contracts to closing, we handle everything. We coordinate with lawyers, manage projects, and keep your sale on track.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/cma-form"
                className="inline-block border-2 border-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold hover:text-m2m-deep"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Get Your Free Home Valuation
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <h2
              className="text-center text-[clamp(1.25rem,3vw,1.75rem)] font-light mb-12"
              style={{ fontFamily: "var(--font-display)", color: "#1B4332" }}
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
                    <p className="text-sm font-semibold" style={{ color: "#1B4332" }}>Kristin Jacob</p>
                    <p className="text-xs" style={{ color: "#B8963E" }}>U.S. Navy</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
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
                    <p className="text-sm font-semibold" style={{ color: "#1B4332" }}>Timothy L. Cunningham</p>
                    <p className="text-xs" style={{ color: "#B8963E" }}>U.S Navy</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
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
                    <p className="text-sm font-semibold" style={{ color: "#1B4332" }}>Dwayne Jenkins</p>
                    <p className="text-xs" style={{ color: "#B8963E" }}>Credit Advocate</p>
                  </div>
                </div>
                <div className="text-m2m-gold text-sm mb-3">★ ★ ★ ★ ★</div>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  Donny and Roger are an amazing 1-2 punch for both buyers and sellers in the VA Beach area. They are constantly providing valuable information through seminars and education in the community. They are going to make sure the home you buy fits your financial needs.
                </p>
              </div>
            </div>

            {/* More Reviews */}
            <div className="text-center">
              <Link
                href="https://www.google.com/search?q=marching+2+more+reviews"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-8 py-3 transition hover:bg-m2m-gold-lt mb-3"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                More Reviews
              </Link>
              <p className="text-sm">
                <Link
                  href="https://www.google.com/search?q=marching+2+more+reviews"
                  target="_blank"
                  rel="noreferrer"
                  className="text-m2m-gold hover:underline"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Review us on Google &rsaquo;
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative px-6 py-24 md:px-16 lg:px-24 overflow-hidden">
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
          {/* Dark overlay */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(5, 13, 6, 0.8)" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2
              className="font-light italic leading-[1.1] text-[clamp(2rem,5vw,3rem)] text-m2m-cream mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Discover Your<br />
              Home&apos;s True Value?
            </h2>

            <div className="flex flex-col items-center gap-4">
              <Link
                href="/cma-form"
                className="inline-block bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Your Free Home Valuation
              </Link>

              <a
                href={M2M_PHONE_HREF}
                className="inline-block border border-m2m-cream/50 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Or give us a call — {M2M_PHONE_DISPLAY}
              </a>

              <Link
                href="/our-team"
                className="inline-block border border-m2m-cream/50 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-cream"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Meet Your Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
