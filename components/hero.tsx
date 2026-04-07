"use client"

import Link from "next/link"
import {
  CALENDLY_BOOK_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden px-6 pb-16 pt-32 md:px-16 lg:px-24"
      style={{ backgroundColor: "#050d06" }}
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg/v1/fill/w_1903,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg')",
        }}
      />

      {/* Readability overlays */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(5,13,6,0.92) 0%, rgba(5,13,6,0.75) 35%, rgba(5,13,6,0.45) 60%, rgba(5,13,6,0.2) 100%), linear-gradient(to bottom, rgba(5,13,6,0.4) 0%, transparent 40%, transparent 70%, rgba(5,13,6,0.55) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col justify-center">
        <div
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          <span className="block h-px w-8 bg-m2m-gold" aria-hidden />
          Licensed Real Estate Professionals in Virginia Beach, VA, USA • Veteran Owned | 5.0 ★ ★ ★ ★ ★
        </div>

        <h1
          className="mt-8 text-balance font-serif text-2xl font-semibold tracking-tight text-m2m-cream sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Marching 2 More Real Estate Team
        </h1>

        <h2
          id="hero-heading"
          className="mt-4 text-balance font-light leading-[1.05] tracking-tight text-m2m-cream text-[clamp(2.5rem,6vw,5.25rem)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where You Find Your Next Home
        </h2>

        <p
          className="mt-6 max-w-xl text-sm tracking-wider italic text-m2m-muted-lt"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ask about our Financing Options.
        </p>

        <div className="mt-12 grid w-full gap-4 sm:max-w-2xl sm:grid-cols-2">
          <Link
            href="/home-search"
            className="w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Work With Us
          </Link>
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Free Home Valuation
          </a>
          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Speak with an Agent.
          </a>
          <a
            href={M2M_PHONE_HREF}
            className="w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Call or Text — {M2M_PHONE_DISPLAY}
          </a>
          <Link
            href="/contact-us"
            className="sm:col-span-2 w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold/15 text-m2m-cream border border-m2m-gold/40 transition-all duration-300 hover:bg-m2m-gold/25 hover:scale-[1.01]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Contact Us ▸
          </Link>
        </div>
      </div>
    </section>
  )
}
