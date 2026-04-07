"use client"

import Link from "next/link"

export function SellCTA() {
  return (
    <section className="relative px-6 py-24 md:px-16 lg:px-24 overflow-hidden" style={{ backgroundColor: '#050d06' }} data-gsap-section>
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20backyard-A4xyD0dmvycOgFVMeTBrduH5GxteWt.jpg')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(5,13,6,0.75) 0%, rgba(5,13,6,0.6) 50%, rgba(5,13,6,0.8) 100%),
            linear-gradient(to right, rgba(5,13,6,0.4) 0%, rgba(5,13,6,0.3) 50%, rgba(5,13,6,0.4) 100%)
          `,
        }}
      />

      <div className="relative z-[2] max-w-4xl mx-auto text-center" data-gsap="blur-in">
        <p 
          className="text-sm tracking-[0.3em] uppercase text-m2m-gold mb-4"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Ready to Sell?
        </p>
        <h2 
          className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let&apos;s Get You <em className="italic">Top Dollar</em>
        </h2>
        <p 
          className="text-m2m-muted-lt text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Our team has the expertise and local market knowledge to sell your home quickly 
          and for the best possible price. Start with a free consultation today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Get Free Valuation
          </Link>
          <a
            href="tel:7572062859"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Call 757-206-2859
          </a>
        </div>
      </div>
    </section>
  )
}
