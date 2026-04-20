"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF, REALSCOUT_HOME_VALUATION_URL } from "@/lib/m2m-site"

export function SellPageHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.3
      )

      const headlineLines = headlineRef.current?.querySelectorAll("span")
      if (headlineLines) {
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.5
        )
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.9
      )

      tl.fromTo(
        ctasRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        1.1
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-m2m-black py-24 md:py-32"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.sellHeroStill}')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(5,13,6,0.92) 0%, rgba(5,13,6,0.75) 35%, rgba(5,13,6,0.45) 60%, rgba(5,13,6,0.2) 100%),
            linear-gradient(to bottom, rgba(5,13,6,0.4) 0%, transparent 40%, transparent 70%, rgba(5,13,6,0.5) 100%)
          `,
        }}
      />

      {/* Content */}
      <M2mContainer className="relative z-10 max-w-4xl">
        {/* Tag */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-m2m-gold mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-8 h-px bg-m2m-gold" />
          Sell With Confidence
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">Learn Your Home&apos;s</span>
          <span className="block"><em className="italic text-m2m-gold">True Value</em></span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-muted-lt leading-relaxed max-w-2xl mb-12 opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
        >
          Ready to sell? We provide expert guidance, professional marketing, and dedicated support 
          to help you get the best price for your home. Start with a free, no-obligation valuation.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4">
          <a
            href={REALSCOUT_HOME_VALUATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Get Free Valuation
          </a>
          <Link
            href="#checklist"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Pre-Listing Checklist
          </Link>
          <a
            href={M2M_PHONE_HREF}
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            {M2M_PHONE_DISPLAY}
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
