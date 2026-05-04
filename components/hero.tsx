"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { M2mContainer, M2mInsetHeroFrame, M2mInsetHeroScrim } from "@/components/m2m-layout"
import {
  getConsultationRequestUrl,
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
      <M2mInsetHeroFrame className="min-h-[calc(100dvh-3rem)]">
        {/* Background image with horizontal parallax */}
        <div
          ref={imageRef}
          className="absolute inset-[-5%] z-0 overflow-hidden will-change-transform"
          style={{ transform: "translateX(0) scale(1.1)" }}
        >
          <Image
            src="/images/site/m2m-home-hero-military-keys-porch.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <M2mInsetHeroScrim variant="home" />

        <M2mContainer className="relative z-10 flex max-w-3xl flex-col justify-center pb-16 pt-28 sm:pt-32 lg:pt-36">
        <div
          className="flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 text-[0.6rem] tracking-[0.22em] text-m2m-gold sm:text-[0.65rem] sm:tracking-[0.3em]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          <span className="flex shrink-0 items-center gap-3">
            <span className="block h-px w-8 bg-m2m-gold" aria-hidden />
          </span>
            <span className="min-w-0 max-w-full text-pretty break-words leading-snug">
              Licensed Real Estate Professionals in Virginia Beach, VA, USA • Veteran Owned
              <span aria-hidden="true"> | 5.0 ★ ★ ★ ★ ★</span>
              <span className="sr-only"> Five out of five star client rating.</span>
            </span>
        </div>

        <h1
          id="hero-heading"
          className="mt-8 text-balance font-light leading-[1.1] text-m2m-cream text-[clamp(2.5rem,5vw,4.5rem)] [text-shadow:0_1px_4px_rgba(5,13,6,0.4)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where You Find Your Next Home
        </h1>

        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-m2m-cream [text-shadow:0_1px_10px_rgba(5,13,6,0.35)] sm:text-[1.05rem]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Hampton Roads advisors for military families and discerning buyers—PCS moves, VA loans, luxury search, and a
          calm plan from tour to closing.
        </p>

        <div className="mt-10 grid w-full gap-4 sm:mt-12 sm:max-w-2xl sm:grid-cols-2 sm:gap-4">
          <a
            href="/contact-us?intent=buyer"
            data-m2m-track="hero_work_with_us"
            data-m2m-track-loc="home_hero"
            aria-label="Work with Marching 2 More — contact us as a buyer"
            className="flex min-h-12 w-full items-center justify-center px-9 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream shadow-[0_4px_18px_-6px_rgba(5,13,6,0.45)] transition-all duration-300 border border-m2m-gold/45 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold touch-manipulation"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Work With Us
          </a>
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            data-m2m-track="hero_free_valuation_realscout"
            data-m2m-track-loc="home_hero"
            aria-label="Open RealScout free home valuation (opens in a new tab)"
            className="flex min-h-12 w-full items-center justify-center px-9 py-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep shadow-[0_4px_20px_-4px_rgba(5,13,6,0.35)] transition-all duration-300 bg-m2m-gold hover:bg-m2m-gold-lt hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold touch-manipulation"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Free Home Valuation
          </a>
        </div>

        <p
          className="mt-8 flex max-w-xl flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-snug text-m2m-cream/88 [text-shadow:0_1px_8px_rgba(5,13,6,0.35)]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <span className="text-m2m-cream/65">Prefer to talk?</span>
          <a
            href={M2M_PHONE_HREF}
            data-m2m-track="hero_phone"
            data-m2m-track-loc="home_hero"
            aria-label={`Call Marching 2 More at ${M2M_PHONE_DISPLAY}`}
            className="inline-flex min-h-11 items-center font-medium text-m2m-cream underline decoration-m2m-gold/45 underline-offset-[5px] transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
          >
            {M2M_PHONE_DISPLAY}
          </a>
          <span className="text-m2m-cream/35" aria-hidden>
            ·
          </span>
          <a
            href={getConsultationRequestUrl()}
            data-m2m-track="hero_consultation_request"
            data-m2m-track-loc="home_hero"
            aria-label="Book a home consultation with Marching 2 More"
            className="inline-flex min-h-11 items-center font-medium text-m2m-cream underline decoration-m2m-gold/45 underline-offset-[5px] transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
          >
            Book a consultation
          </a>
        </p>

          {/* Partner logos section */}
          <div className="mt-12 pb-10 md:mt-16 md:pb-14">
            {/* Horizontal line */}
            <div className="mb-10 h-px w-full bg-m2m-cream/20 md:mb-12" />
            
            {/* Logos row */}
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {/* U.S. Veteran Owned Business */}
              <div className="relative h-12 w-24">
                <Image
                  src="/images/hero-icon-1.avif"
                  alt="U.S. Veteran Owned Business"
                  fill
                  className="object-contain brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]"
                  sizes="96px"
                />
              </div>
              
              {/* CreedRealty.com */}
              <div className="relative h-12 w-32">
                <Image
                  src="/images/hero-icon-2.avif"
                  alt="CreedRealty.com - Client Focused. Agent Owned."
                  fill
                  className="object-contain brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]"
                  sizes="128px"
                />
              </div>
              
              {/* Equal Housing Opportunity */}
              <div className="relative h-12 w-24">
                <Image
                  src="/images/hero-icon-3.avif"
                  alt="Equal Housing Opportunity"
                  fill
                  className="object-contain brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]"
                  sizes="96px"
                />
              </div>
              
              {/* National Association of Realtors */}
              <div className="relative h-12 w-32">
                <Image
                  src="/images/hero-icon-4.avif"
                  alt="National Association of Realtors"
                  fill
                  className="object-contain brightness-0 invert sepia saturate-[10] hue-rotate-[10deg]"
                  sizes="128px"
                />
              </div>
            </div>

            {/* Have a question? Contact Us */}
            <div className="mt-10 text-center md:mt-14">
              <span 
                className="text-sm text-m2m-cream/70"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Have a question?{" "}
              </span>
              <a
                href="/contact-us"
                aria-label="Contact Marching 2 More — have a question"
                className="inline-flex min-h-11 items-center px-1 text-sm font-medium text-m2m-cream underline decoration-m2m-gold/55 underline-offset-4 transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Contact Us &#9656;
              </a>
            </div>
          </div>
        </M2mContainer>
      </M2mInsetHeroFrame>
    </section>
  )
}
