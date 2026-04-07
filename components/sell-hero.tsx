"use client"

import Link from "next/link"

export function SellHero() {
  return (
    <section 
      id="valuation"
      className="relative min-h-[85vh] flex flex-col justify-between px-6 py-16 md:px-16 lg:px-24 overflow-hidden bg-m2m-deep"
    >
      {/* Parallax background gradient */}
      <div 
        data-gsap="parallax" 
        data-gsap-speed="0.4"
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(205,176,95,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Kicker */}
        <p 
          data-gsap="fade-right"
          className="text-m2m-gold text-sm tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Sell with confidence.
        </p>
        
        {/* Gold line */}
        <div 
          data-gsap="line-reveal"
          className="w-full h-px bg-m2m-gold/40 mb-12" 
        />
        
        {/* Headline - character reveal */}
        <h2 
          data-gsap="blur-in"
          className="font-light text-[clamp(3rem,8vw,6rem)] leading-[1.05] text-m2m-cream"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Learn your<br />
          home&apos;s true<br />
          value.
        </h2>
      </div>

      {/* CTAs at bottom */}
      <div 
        className="relative z-10 flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 mt-auto"
        data-gsap="stagger-children"
        data-gsap-direction="up"
      >
        <Link
          data-gsap-child
          data-gsap="magnetic"
          href="#contact"
          className="px-8 py-4 bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Get Your Free Home Valuation
        </Link>
        
        <Link
          data-gsap-child
          data-gsap="magnetic"
          href="#"
          className="px-8 py-4 border border-white/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          Learn More
        </Link>
        
        <div data-gsap-child className="flex flex-col gap-2">
          <Link
            href="#"
            data-gsap="magnetic"
            className="px-8 py-4 border border-white/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Get The Pre-Listing Checklist
          </Link>
          <p 
            className="text-m2m-cream/80 text-xs italic text-center"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our 20 page guide to assist you with<br />
            every phase of selling your home.
          </p>
        </div>
      </div>
    </section>
  )
}
