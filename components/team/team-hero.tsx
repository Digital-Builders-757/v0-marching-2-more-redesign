"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function TeamHero() {
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
      className="relative min-h-[70vh] flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#050d06' }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56d085e3a24effcebd880c3f6b20700c-b9nQPT49tOe3Bawn6ymNxBTkFMP2sW.jpg')`,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(5,13,6,0.7) 0%, rgba(5,13,6,0.5) 40%, rgba(5,13,6,0.6) 70%, rgba(5,13,6,0.85) 100%),
            linear-gradient(to right, rgba(5,13,6,0.3) 0%, rgba(5,13,6,0.2) 50%, rgba(5,13,6,0.3) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <div 
          ref={tagRef}
          className="inline-flex items-center justify-center gap-3 text-sm tracking-[0.3em] uppercase text-m2m-gold mb-8 opacity-0"
          style={{ fontFamily: 'var(--font-nav)' }}
        >
          <span className="block w-8 h-px bg-m2m-gold" />
          Meet Your Team
          <span className="block w-8 h-px bg-m2m-gold" />
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block">Serving with <em className="italic text-m2m-gold">Integrity</em></span>
          <span className="block">Leading with <em className="italic text-m2m-gold">Experience</em></span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-m2m-muted-lt leading-relaxed max-w-2xl mx-auto opacity-0"
          style={{ fontFamily: 'var(--font-sans)', textShadow: '0 2px 8px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)' }}
        >
          Our unique balance of disciplined leadership, honed from military experience, combined with 
          our local market expertise and personalized care, ensures a real estate experience that is 
          seamless and feels effortless.
        </p>
      </div>
    </section>
  )
}
