"use client"

import Link from "next/link"

import { REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

export function Valuation() {
  return (
    <section id="valuation" className="relative bg-m2m-black px-6 py-20 md:px-16 lg:px-24 md:py-28 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/sell-with-confidence-bg.png')",
        }}
      />
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.7) 50%, rgba(10,22,40,0.5) 100%)',
        }}
      />

      {/* Background - Stat cards on right with parallax */}
      <div 
        data-gsap="parallax" 
        data-gsap-speed="0.3"
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 pointer-events-none pr-8 xl:pr-16"
      >
        <StatCard number="$485K" label="Average Sale Price" note="Hampton Roads 2024" />
        <StatCard number="18" label="Days on Market" note="For Our Listings" />
        <StatCard number="102%" label="List-to-Sale Ratio" note="We Maximize Value" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-6" data-gsap="stagger-children" data-gsap-direction="up">
            {/* Section label */}
            <div 
              data-gsap-child
              className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              <span className="w-6 h-px bg-m2m-gold" />
              Free Home Valuation
            </div>

            {/* Title */}
            <h2 
              data-gsap-child
              className="text-m2m-cream text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-light"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sell with confidence.<br />
              Learn your home&apos;s <em className="italic text-m2m-gold">true value.</em>
            </h2>

            {/* Body */}
            <p 
              data-gsap-child
              className="text-sm leading-relaxed text-m2m-cream/88 max-w-xl pl-6 border-l border-m2m-gold/20"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get an accurate, no-obligation home valuation from our experienced team. We&apos;ll help you understand your home&apos;s true market value and guide you through every step of the selling process.
            </p>

            {/* CTAs */}
            <div
              data-gsap-child
              className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <div className="flex flex-col gap-2">
                <a
                  href={REALSCOUT_HOME_VALUATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-gsap="magnetic"
                  className="inline-block w-full rounded-lg bg-m2m-gold px-8 py-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition-all duration-300 hover:scale-[1.02] hover:bg-m2m-gold-lt sm:w-auto"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get Your Free Home Valuation
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/free-home-valuation"
                  data-gsap="magnetic"
                  className="inline-block w-full rounded-lg border border-m2m-gold/20 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell#checklist"
                  data-gsap="magnetic"
                  className="inline-block w-full rounded-lg border border-m2m-gold/20 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get The Pre-Listing Checklist
                </Link>
                <p 
                  className="text-xs text-m2m-muted italic text-center"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Our 20 page guide to assist you with every phase of selling your home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats - only visible on small screens */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          <StatCard number="$485K" label="Average Sale Price" note="Hampton Roads 2024" />
          <StatCard number="18" label="Days on Market" note="For Our Listings" />
          <StatCard number="102%" label="List-to-Sale Ratio" note="We Maximize Value" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  number,
  label,
  note,
}: {
  number: string
  label: string
  note: string
}) {
  return (
    <div 
      className="bg-m2m-panel border border-m2m-gold/20 rounded-xl p-6 flex flex-col gap-2 transition-all duration-500 hover:border-m2m-gold/40 hover:bg-m2m-panel/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-m2m-gold/5"
    >
      <span 
        className="text-3xl lg:text-4xl font-light text-m2m-cream tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {number}
      </span>
      <span 
        className="text-[0.6rem] tracking-[0.2em] uppercase text-m2m-muted"
        style={{ fontFamily: 'var(--font-nav)' }}
      >
        {label}
      </span>
      <span 
        className="text-xs text-m2m-gold-dim italic mt-1"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {note}
      </span>
    </div>
  )
}
