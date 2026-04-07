"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { M2M_PHONE_HREF } from "@/lib/m2m-site"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Background zoom
      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 },
        0
      )

      // Tag fade in from left
      tl.fromTo(
        tagRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        0.4
      )

      // Line reveal
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8 },
        0.6
      )

      // Headline lines reveal
      const lines = headlineRef.current?.querySelectorAll(".hero-line")
      if (lines) {
        tl.fromTo(
          lines,
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.15 },
          0.7
        )
      }

      // Subtitle fade up
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.2
      )

      // CTAs fade up with stagger
      const ctas = ctasRef.current?.querySelectorAll(".cta-btn")
      if (ctas && ctas.length > 0) {
        tl.fromTo(
          ctas,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          1.4
        )
      }

    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col px-6 pt-32 pb-12 md:px-16 lg:px-24 overflow-hidden" 
      style={{ backgroundColor: '#050d06' }} 
      aria-labelledby="hero-heading"
    >
      {/* Image Background - base layer with GSAP zoom animation */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20at%207.30.14%20PM-JVsmkDPrwryZHLk0Lm3Wqm4bAhGTc2.png')`,
        }}
      />

      {/* Gradient overlay for text readability - above video */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(5,13,6,0.92) 0%, rgba(5,13,6,0.75) 35%, rgba(5,13,6,0.45) 60%, rgba(5,13,6,0.2) 100%),
            linear-gradient(to bottom, rgba(5,13,6,0.4) 0%, transparent 40%, transparent 70%, rgba(5,13,6,0.5) 100%)
          `,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[700px] h-[700px] pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse, rgba(205,176,95,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[780px] flex-1 flex flex-col justify-center">
        {/* Tag - fade in from right */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-6 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span 
            ref={lineRef}
            className="block h-px bg-m2m-gold w-8"
            style={{ transform: 'scaleX(0)' }}
          />
          Veteran Owned | 5.0 Star Rating
        </div>

        {/* Headline - reveal animation */}
        <h1 
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-m2m-cream mb-8" 
          id="hero-heading"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">
              Where You
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              Find Your
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              <em className="italic text-m2m-gold">Next Home</em>
            </span>
          </span>
        </h1>

        {/* Subtitle - fade up */}
        <p 
          ref={subtitleRef}
          className="text-sm text-m2m-muted-lt tracking-wider italic opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
        >
          Ask about our Financing Options.
        </p>

        {/* CTAs - at bottom of content */}
        <div 
          ref={ctasRef}
          className="flex flex-col md:flex-row items-stretch gap-6 mt-12 w-full"
        >
          <a
            href="/contact"
            data-gsap="magnetic"
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-m2m-gold/20 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            Work With Us
          </a>
          <a
            href="/sell#valuation"
            data-gsap="magnetic"
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            Free Home Valuation
          </a>
          <a
            href={M2M_PHONE_HREF}
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)', opacity: 0 }}
          >
            757-206-2859
          </a>
        </div>
      </div>
    </section>
  )
}
