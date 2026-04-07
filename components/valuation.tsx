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
          <div 
            className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-7"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            <span className="w-6 h-px bg-m2m-gold" />
            <span data-gsap="fade-right">Free Home Valuation</span>
          </div>

          {/* Headline */}
          <h2 
            data-gsap="blur-in"
            className="font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-m2m-cream mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sell with confidence.<br />
            Learn your home&apos;s <em className="italic text-m2m-gold">true value.</em>
          </h2>

          {/* Description */}
          <p 
            data-gsap="fade-up"
            className="text-sm leading-relaxed text-m2m-muted max-w-xl pl-6 border-l border-m2m-gold/20 mb-10"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Get an accurate, no-obligation home valuation from our experienced team. We&apos;ll help you understand your home&apos;s true market value and guide you through every step of the selling process.
          </p>

          {/* CTAs */}
          <div 
            data-gsap="stagger-children"
            data-gsap-direction="up"
            className="flex flex-col sm:flex-row gap-4"
          >
            <div data-gsap-child className="flex flex-col gap-2">
              <Link
                data-gsap="magnetic"
                href="/contact"
                className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Get Your Free Home Valuation
              </Link>
            </div>
            <div data-gsap-child className="flex flex-col gap-2">
              <Link
                data-gsap="magnetic"
                href="/sell"
                className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                Learn More
              </Link>
            </div>
            <div data-gsap-child className="flex flex-col gap-2">
              <Link
                data-gsap="magnetic"
                href="/sell#checklist"
                className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
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
