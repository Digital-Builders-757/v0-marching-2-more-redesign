"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import { M2M_HOME_HERO_SCRIM_STYLE } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function BlogHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.3
      )

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        0.5
      )

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] flex-col justify-center overflow-hidden bg-m2m-black px-6 py-32 md:px-16 lg:px-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${M2M_MEDIA.blogIndexBackdrop}')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={M2M_HOME_HERO_SCRIM_STYLE} />

      <div className="relative z-[2] max-w-4xl">
        {/* Tag */}
        <div 
          ref={tagRef}
          className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold mb-6 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-8 h-px bg-m2m-gold" />
          Insights & Resources
        </div>

        {/* Headline */}
        <h1 
          ref={headingRef}
          className="font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-m2m-cream mb-6 opacity-0 [text-shadow:0_1px_4px_rgba(5,13,6,0.45)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Our Blog
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-cream/92 leading-relaxed max-w-2xl opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 1px 3px rgba(5,13,6,0.5)' }}
        >
          Expert insights on Hampton Roads real estate, military relocation tips, VA loans, and proven strategies for buying and selling homes.
        </p>
      </div>
    </section>
  )
}
