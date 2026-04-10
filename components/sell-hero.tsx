"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

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
        const parallaxOffset = (scrollProgress - 0.5) * 100 // Move by up to 50px in either direction
        image.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`
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
      className="relative bg-m2m-black px-6 py-20 md:px-16 lg:px-24 md:py-28 overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/sell-with-confidence-bg.png')",
        }}
      />
      {/* Dark overlay for text readability with parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          background: 'linear-gradient(to left, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.7) 50%, rgba(10,22,40,0.5) 100%)',
          transform: "translateY(0)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl ml-auto text-right">
          <div className="flex flex-col gap-6 items-end" data-gsap="stagger-children" data-gsap-direction="up">
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
              className="text-m2m-cream text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Learn your home&apos;s<br />
              <em className="italic text-m2m-gold">true value.</em>
            </h2>

            {/* Body */}
            <p 
              data-gsap-child
              className="text-base leading-relaxed text-white max-w-xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get an accurate, no-obligation home valuation from our experienced team. We&apos;ll help you understand your home&apos;s true market value and guide you through every step of the selling process.
            </p>

            {/* CTAs */}
            <div data-gsap-child className="flex flex-col sm:flex-row gap-4 mt-4 justify-end">
              <div className="flex flex-col gap-2">
                <Link
                  href="/contact"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 bg-m2m-gold text-m2m-deep font-medium rounded-lg transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02] text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get Your Free Home Valuation
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/sell#checklist"
                  data-gsap="magnetic"
                  className="inline-block text-[0.7rem] tracking-[0.2em] uppercase px-8 py-4 border border-m2m-gold/20 text-m2m-cream rounded-lg transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold text-center"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Get The Pre-Listing Checklist
                </Link>
                <p 
                  className="text-xs text-white/80 italic text-center"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Our 20 page guide to assist you with every phase of selling your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
