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
          className="text-m2m-muted text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Schedule a free consultation with our team. We&apos;ll talk through your budget, PCS timing, neighborhood fit,
          and the next step so you can move with clarity.
        </p>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-m2m-muted/85 font-sans">
          No pressure, no jargon, just a straight answer on what makes sense for your search.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us?intent=consultation"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] bg-m2m-deep text-m2m-cream transition-all duration-300 hover:bg-m2m-deep/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-deep"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Book a consultation
          </Link>
          <a
            href={M2M_PHONE_HREF}
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] border border-m2m-deep text-m2m-deep transition-all duration-300 hover:bg-m2m-deep hover:text-m2m-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-deep"
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
