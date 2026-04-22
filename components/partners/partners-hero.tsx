"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import { M2mContainer, M2M_HOME_HERO_SCRIM_STYLE } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function PartnersHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-m2m-black py-32"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.partnersHeroStill}')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={M2M_HOME_HERO_SCRIM_STYLE} />

      {/* Content */}
      <M2mContainer className="relative z-[2] max-w-4xl">
        {/* Tag */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-m2m-gold mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-8 h-px bg-m2m-gold" />
          You&apos;re in Great Hands
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8 [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">Financing, Renovations,</span>
          <span className="block"><em className="italic text-m2m-gold">Moving Solutions</em></span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-cream/92 leading-relaxed max-w-2xl opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 1px 3px rgba(5,13,6,0.5)' }}
        >
          And so much more. Access a network of trusted local leaders. We&apos;ve experienced their 
          professionalism and standard of excellence first hand, and we&apos;re proud to recommend them to you.
        </p>
      </M2mContainer>
    </section>
  )
}
