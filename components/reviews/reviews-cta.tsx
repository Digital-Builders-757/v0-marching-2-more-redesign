"use client"

import Link from "next/link"

export function ReviewsCta() {
  return (
    <section className="bg-m2m-deep relative overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(205,176,95,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative px-6 py-20 md:px-16 lg:px-24 md:py-28 text-center">
        {/* Headline */}
        <h2 
          data-gsap="blur-in"
          className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-light text-m2m-cream mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Ready to start your journey?
        </h2>

        {/* CTA Button */}
        <Link
          href="/contact"
          data-gsap="fade-up"
          data-gsap-delay="0.2"
          className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Work With Us
        </Link>
      </div>
    </section>
  )
}
