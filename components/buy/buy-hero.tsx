"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { M2mContainer, M2M_HOME_HERO_SCRIM_STYLE } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-m2m-black py-24 md:py-32"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.buyHeroStill}')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={M2M_HOME_HERO_SCRIM_STYLE} />

      {/* Content */}
      <M2mContainer className="relative z-10 max-w-4xl">
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
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8 [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">Your Dream Home</span>
          <span className="block">Is <em className="italic text-m2m-gold">Within Reach</em></span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-cream/92 leading-relaxed max-w-2xl mb-12 opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 1px 3px rgba(5,13,6,0.5)' }}
        >
          Whether you&apos;re a first-time buyer, relocating for military service, or searching for your forever home, 
          we&apos;re here to guide you every step of the way. VA loan specialists. PCS relocation experts.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="inline-block w-full text-center text-[0.7rem] font-medium uppercase tracking-[0.2em] text-m2m-deep shadow-[0_4px_18px_-4px_rgba(5,13,6,0.35)] transition-all duration-300 hover:bg-m2m-gold-lt sm:w-auto bg-m2m-gold px-10 py-4"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Start Your Search
          </Link>
          <Link
            href="#va-loans"
            className="inline-block w-full border border-m2m-gold/45 px-10 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold sm:w-auto"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            VA Loan Information
          </Link>
          <a
            href={M2M_PHONE_HREF}
            className="inline-block w-full border border-white/10 px-10 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-m2m-muted-lt transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream sm:w-auto"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {M2M_PHONE_DISPLAY}
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
