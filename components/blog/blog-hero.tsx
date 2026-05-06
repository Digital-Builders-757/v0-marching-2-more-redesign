"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

import { M2M_HOME_HERO_SCRIM_STYLE, M2mContainer } from "@/components/m2m-layout"
import { M2M_MEDIA } from "@/lib/m2m-media"

export function BlogHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
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
      className="relative flex min-h-[min(52vh,560px)] flex-col justify-center overflow-hidden bg-m2m-black py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={M2M_MEDIA.blogIndexBackdrop}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={M2M_HOME_HERO_SCRIM_STYLE}
      />

      <M2mContainer className="relative z-[2] max-w-4xl">
        {/* Tag */}
        <p 
          ref={tagRef}
          className="mb-6 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-m2m-gold opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block h-px w-8 bg-m2m-gold" aria-hidden />
          Insights & Resources
          <span className="block h-px w-8 bg-m2m-gold" aria-hidden />
        </p>

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
      </M2mContainer>
    </section>
  )
}
