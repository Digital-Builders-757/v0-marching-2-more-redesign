"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

export function SellHero() {
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
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
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
      id="sell"
      className="relative overflow-hidden bg-m2m-black py-20 md:py-28"
    >
      {/* Background image with parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-[-10%] z-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/sell-with-confidence-bg.png')",
          transform: "translateX(0) scale(1.1)",
        }}
      />
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to left, rgba(10,22,40,0.68) 0%, rgba(10,22,40,0.48) 50%, rgba(10,22,40,0.32) 100%)",
        }}
        aria-hidden
      />

      <M2mContainer className="relative z-10">
        <div className="ml-auto max-w-3xl text-right max-md:mx-auto max-md:max-w-none max-md:text-left">
          <div
            className="flex flex-col items-end gap-6 max-md:items-stretch"
            data-gsap="stagger-children"
            data-gsap-direction="up"
          >
            {/* Kicker */}
            <p 
              data-gsap-child
              className="text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Sell with confidence.
            </p>

            {/* Heading */}
            <h2 
              data-gsap-child
              className="text-m2m-cream text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Learn your home&apos;s<br />
              <em className="italic text-m2m-gold">true value.</em>
            </h2>

            {/* Body */}
            <p 
              data-gsap-child
              className="text-base leading-relaxed text-m2m-cream/95 max-w-xl [text-shadow:0_1px_2px_rgba(5,13,6,0.4)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get an accurate, no-obligation home valuation from our experienced team. We&apos;ll help you understand your home&apos;s true market value and guide you through every step of the selling process.
            </p>

            {/* CTAs */}
            <div
              data-gsap-child
              className="mt-4 flex flex-col justify-end gap-4 max-md:items-stretch sm:flex-row sm:justify-end"
            >
              <div className="flex flex-col gap-2">
                <a
                  href={REALSCOUT_HOME_VALUATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-gsap="magnetic"
                  className="inline-block w-full text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep transition-all duration-300 hover:scale-[1.02] hover:bg-m2m-gold-lt sm:w-auto rounded-lg bg-m2m-gold px-8 py-4"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get Your Free Home Valuation
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/free-home-valuation"
                  data-gsap="magnetic"
                  className="inline-block w-full rounded-lg border border-m2m-gold/40 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell#checklist"
                  data-gsap="magnetic"
                  className="inline-block w-full rounded-lg border border-m2m-gold/40 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get The Pre-Listing Checklist
                </Link>
                <p
                  className="text-center text-xs italic text-white/80 max-md:text-left sm:text-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Our 20 page guide to assist you with every phase of selling your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
