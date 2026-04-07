"use client"

import Link from "next/link"

export function SellHero() {
  return (
    <section 
      id="sell"
      className="relative bg-m2m-black px-6 py-20 md:px-16 lg:px-24 md:py-28 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div 
        data-gsap="parallax" 
        data-gsap-speed="0.2"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(205,176,95,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl ml-auto text-right">
          <div className="flex flex-col gap-6 items-end" data-gsap="stagger-children" data-gsap-direction="up">
            {/* Section label */}
            <div 
              data-gsap-child
              className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Sell with confidence.
              <span className="w-6 h-px bg-m2m-gold" />
            </div>

            {/* Title */}
            <h2 
              data-gsap-child
              className="text-m2m-cream text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-light"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Learn your home&apos;s<br />
              <em className="italic text-m2m-gold">true value.</em>
            </h2>

            {/* Body */}
            <p 
              data-gsap-child
              className="text-sm leading-relaxed text-m2m-muted max-w-xl pr-6 border-r border-m2m-gold/20"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get an accurate, no-obligation home valuation from our experienced team. We&apos;ll help you understand your home&apos;s true market value and guide you through every step of the selling process.
            </p>

            {/* CTAs */}
            <div data-gsap-child className="flex flex-col sm:flex-row gap-4 mt-4 justify-end">
              <div className="flex flex-col gap-2">
                <Link
                  href="/contact"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get Your Free Home Valuation
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell#checklist"
                  data-gsap="magnetic"
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
        </div>
      </div>
    </section>
  )
}
