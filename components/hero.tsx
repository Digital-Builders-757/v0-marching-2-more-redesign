"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Marching 2 More Real Estate Team
          </h1>
          
          <p className="text-lg md:text-xl mb-2">
            Licensed Real Estate Professionals in Virginia Beach, VA, USA
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-lg font-semibold">Veteran Owned | 5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
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
        <div 
          ref={ctasRef}
          className="flex flex-col md:flex-row items-stretch gap-6 mt-12 w-full"
        >
          <a
            href="/contact"
            data-gsap="magnetic"
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            Work With Us
          </a>
          <a
            href="/sell#valuation"
            data-gsap="magnetic"
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            Free Home Valuation
          </a>
          <a
            href={M2M_PHONE_HREF}
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            757-206-2859
          </a>
        </div>
      </div>
    </section>
  )
}
