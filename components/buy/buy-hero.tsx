"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function BuyHero() {
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
      className="relative min-h-screen flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#050d06' }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-post-ai-image-8571-mvKDwg9ZGPGx8B8S6cFxpCIRAUDjk1.png')`,
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
      <div className="relative z-10 max-w-4xl">
        {/* Tag */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-m2m-gold mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-8 h-px bg-m2m-gold" />
          Find Your New Home
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">Your Dream Home</span>
          <span className="block">Is <em className="italic text-m2m-gold">Within Reach</em></span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-muted-lt leading-relaxed max-w-2xl mb-12 opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
        >
          Whether you&apos;re a first-time buyer, relocating for military service, or searching for your forever home, 
          we&apos;re here to guide you every step of the way. VA loan specialists. PCS relocation experts.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            Start Your Search
          </Link>
          <Link
            href="#va-loans"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            VA Loan Information
          </Link>
          <a
            href="tel:7572062859"
            className="inline-block text-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-white/10 text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: 'var(--font-nav)' }}
          >
            757-206-2859
          </a>
        </div>
      </div>
    </section>
  )
}
