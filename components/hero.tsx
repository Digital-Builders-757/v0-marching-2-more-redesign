"use client"

import { useEffect, useRef } from "react"
import {
  CALENDLY_BOOK_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  REALSCOUT_HOME_VALUATION_URL,
} from "@/lib/m2m-site"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Only apply parallax when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = -rect.top / rect.height
        // Move from left to right slowly (up to 50px)
        const parallaxOffset = scrollProgress * 50
        image.style.transform = `translateX(${parallaxOffset}px) scale(1.1)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-white py-6 md:py-8"
      aria-labelledby="hero-heading"
    >
      {/* Inner container with background image at 95% width */}
      <div 
        className="relative mx-auto overflow-hidden rounded-xl"
        style={{ width: '95%', minHeight: 'calc(100dvh - 48px)' }}
      >
        {/* Background image with horizontal parallax */}
        <div
          ref={imageRef}
          className="absolute inset-[-5%] z-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            transform: "translateX(0) scale(1.1)",
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

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col justify-center px-6 pb-16 pt-32 md:px-16">
        <div
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          <span className="block h-px w-8 bg-m2m-gold" aria-hidden />
          Licensed Real Estate Professionals in Virginia Beach, VA, USA • Veteran Owned | 5.0 ★ ★ ★ ★ ★
        </div>

        <h1
          id="hero-heading"
          className="mt-8 text-balance font-light leading-[1.1] text-m2m-cream text-[clamp(2.5rem,5vw,4.5rem)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where You Find Your Next Home
        </h1>

        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-m2m-cream/80"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ask about our Financing Options.
        </p>

        <div className="mt-12 grid w-full gap-4 sm:max-w-2xl sm:grid-cols-2">
          <a
            href="/home-search"
            className="w-full text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Work With Us
          </a>
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
          </div>
        </div>
      </div>
    </section>
  )
}
