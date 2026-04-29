"use client"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"
import {
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"

export function SellCTA() {
  return (
    <section className="relative overflow-hidden bg-m2m-black py-24" data-gsap-section>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.familyBackyard}')`,
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

      <M2mContainer className="relative z-[2] max-w-4xl text-center" data-gsap="blur-in">
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

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Get Free Valuation
          </a>
          <a
            href={M2M_PHONE_HREF}
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Call {M2M_PHONE_DISPLAY}
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
