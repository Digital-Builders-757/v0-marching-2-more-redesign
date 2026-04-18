"use client"

import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function PartnersCTA() {
  return (
    <section className="relative overflow-hidden bg-m2m-black py-24" data-gsap-section>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.partnersCtaStill}')`,
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
          Need a Recommendation?
        </p>
        <h2 
          className="font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-m2m-cream mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          We Can <em className="italic">Connect You</em>
        </h2>
        <p 
          className="text-m2m-muted-lt text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Looking for a specific service not listed here? Let us know and we&apos;ll help connect 
          you with trusted professionals in our network.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Contact Us
          </Link>
          <Link
            href="/our-team"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Meet Your Team
          </Link>
        </div>
      </M2mContainer>
    </section>
  )
}
