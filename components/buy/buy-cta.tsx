"use client"

import Link from "next/link"

export function BuyCTA() {
  return (
    <section className="bg-white px-6 py-24 md:px-16 lg:px-24" data-gsap-section>
      <div className="max-w-4xl mx-auto text-center" data-gsap="blur-in">
        <p 
          className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Ready to Start?
        </p>
        <h2 
          className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-deep mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let&apos;s Find Your <em className="italic">Perfect Home</em>
        </h2>
        <p 
          className="text-m2m-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Schedule a free consultation with our team. We&apos;ll discuss your needs, 
          answer your questions, and create a personalized plan to find your next home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-deep text-m2m-cream font-medium rounded-lg transition-all duration-300 hover:bg-m2m-deep/90"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Book a Consultation
          </Link>
          <a
            href="tel:7572062859"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-deep text-m2m-deep rounded-lg transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Call 757-206-2859
          </a>
        </div>
      </div>
    </section>
  )
}
