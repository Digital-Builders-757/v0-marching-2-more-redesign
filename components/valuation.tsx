"use client"

import Link from "next/link"

export function Valuation() {
  return (
    <section id="valuation" className="bg-m2m-black px-6 py-16 md:px-[60px] md:py-[120px] relative overflow-hidden">
      {/* Subtle gold gradient overlay */}
      <div 
        data-gsap="parallax"
        data-gsap-speed="0.2"
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(205,176,95,0.03) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-m2m-gold mb-7">
            <div 
              data-gsap="line-reveal"
              className="w-6 h-px bg-m2m-gold" 
            />
            <span data-gsap="fade-right">Free Home Valuation</span>
          </div>

          {/* Headline */}
          <h2 
            data-gsap="blur-in"
            className="font-light text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.95] text-m2m-cream mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sell with confidence. <br />
            Learn your home&apos;s <em className="italic text-m2m-gold">true value.</em>
          </h2>

          {/* Row 1: CTAs */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch"
            data-gsap="stagger-children"
            data-gsap-direction="up"
          >
            <Link
              data-gsap-child
              data-gsap="magnetic"
              href="/contact"
              className="flex items-center justify-center text-sm px-6 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Get Your Free Home Valuation
            </Link>
            <Link
              data-gsap-child
              data-gsap="magnetic"
              href="/sell"
              className="flex items-center justify-center text-sm px-6 py-4 border border-m2m-gold/30 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Learn More
            </Link>
            <Link
              data-gsap-child
              data-gsap="magnetic"
              href="/sell#checklist"
              className="flex items-center justify-center text-sm px-6 py-4 border border-m2m-gold/30 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Get The Pre-Listing Checklist
            </Link>
          </div>

          {/* Row 2: Guide description */}
          <div data-gsap="fade-up" className="mt-6 text-right">
            <p 
              className="text-sm text-m2m-gold italic"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Our 20 page guide to assist you with<br />
              every phase of selling your home.
            </p>
          </div>
        </div>

        {/* Right - Stats with stagger */}
        <div 
          className="flex flex-col gap-4 lg:gap-8"
          data-gsap="stagger-children"
          data-gsap-direction="left"
        >
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
      data-gsap-child
      className="bg-m2m-panel border border-m2m-gold/20 rounded-xl p-8 flex flex-col gap-2 transition-all duration-500 hover:border-m2m-gold/40 hover:bg-m2m-panel/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-m2m-gold/5"
    >
      <span 
        className="text-4xl lg:text-5xl font-light text-m2m-cream tracking-tight"
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
