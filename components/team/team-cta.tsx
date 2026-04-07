"use client"

import Link from "next/link"
import { CALENDLY_BOOK_URL, M2M_PHONE_DISPLAY, M2M_PHONE_TEL } from "@/lib/m2m-site"

export function TeamCTA() {
  return (
    <section
      className="relative px-6 py-24 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "#050d06" }}
      data-gsap-section
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-post-ai-image-27133-aZYalaatNlbIElZkfojf18mdv5IEpZ.png')`,
        }}
      />

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
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Have a question?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Book a consultation
          </a>
          <Link
            href="/contact-us"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Contact us
          </Link>
          <a
            href={`tel:${M2M_PHONE_TEL}`}
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {M2M_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
