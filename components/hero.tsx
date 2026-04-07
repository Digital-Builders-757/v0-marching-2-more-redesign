"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {
  CALENDLY_BOOK_URL,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"

export function Hero() {
  return (
    <section className="relative bg-[#0a1628] text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg/v1/fill/w_1903,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-[780px] flex-1 flex flex-col justify-center">
        {/* Tag - fade in from right */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-6 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span 
            ref={lineRef}
            className="block h-px bg-m2m-gold w-8"
            style={{ transform: 'scaleX(0)' }}
          />
          Licensed Real Estate Professionals in Virginia Beach, VA, USA • Veteran Owned | 5.0 ★ ★ ★ ★ ★
        </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Where You Find Your Next Home
          </h2>
          
          <p className="text-lg mb-8 text-gray-200">
            Ask about our Financing Options.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Buy. Sell. Relocate.</h3>
              <Link
                href="/contact"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-6 py-3 rounded transition-colors"
              >
                Work With Us
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Free Home Valuation</h3>
              <Link
                href="/home-valuation"
                className="inline-block bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-6 py-3 rounded transition-colors"
              >
                Free Home Valuation
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Speak with an Agent.</h3>
              <a
                href="tel:7572062859"
                className="inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b89a52] text-black font-semibold px-6 py-3 rounded transition-colors"
              >
                <Phone className="w-4 h-4" />
                757-206-2859
              </a>
            </div>
          </div>

        {/* CTAs - at bottom of content */}
        <div ref={ctasRef} className="mt-12 grid w-full gap-4 md:max-w-2xl md:grid-cols-2">
          <a
            href="/home-search"
            data-gsap="magnetic"
            className="cta-btn w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Work With Us
          </a>
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            data-gsap="magnetic"
            className="cta-btn w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Free Home Valuation
          </a>
          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            data-gsap="magnetic"
            className="cta-btn w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Speak with an Agent.
          </a>
          <a
            href={M2M_PHONE_HREF}
            className="cta-btn w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Call or Text — Anytime.
          </a>
        </div>
      </div>
    </section>
  )
}
