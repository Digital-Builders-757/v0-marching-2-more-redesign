"use client"

import Link from "next/link"

import { BuyLeadMini } from "@/components/buy/buy-lead-mini"
import { M2mContainer } from "@/components/m2m-layout"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export function BuyCTA() {
  return (
    <section className="bg-white py-24" data-gsap-section>
      <M2mContainer className="max-w-4xl text-center" data-gsap="blur-in">
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
            href="/contact-us?intent=consultation"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-deep text-m2m-cream font-medium transition-all duration-300 hover:bg-m2m-deep/90"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Book a Consultation
          </Link>
          <a
            href={M2M_PHONE_HREF}
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-deep text-m2m-deep transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Call {M2M_PHONE_DISPLAY}
          </a>
        </div>

        <BuyLeadMini />
      </M2mContainer>
    </section>
  )
}
