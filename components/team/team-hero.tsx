"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function TeamHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const line1Ref = useRef<HTMLParagraphElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.25
      )

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.45
      )

      tl.fromTo(
        bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.65
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex flex-col justify-center px-6 py-32 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "#050d06" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56d085e3a24effcebd880c3f6b20700c-b9nQPT49tOe3Bawn6ymNxBTkFMP2sW.jpg')`,
        }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(5,13,6,0.7) 0%, rgba(5,13,6,0.5) 40%, rgba(5,13,6,0.6) 70%, rgba(5,13,6,0.85) 100%),
            linear-gradient(to right, rgba(5,13,6,0.3) 0%, rgba(5,13,6,0.2) 50%, rgba(5,13,6,0.3) 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-m2m-cream mb-8 opacity-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet Your Team
        </h1>

        <p
          ref={line1Ref}
          className="text-xl md:text-2xl text-m2m-cream font-light mb-8 opacity-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Serving with integrity. Leading with experience.
        </p>

        <p
          ref={bodyRef}
          className="text-base md:text-lg text-m2m-muted-lt leading-relaxed max-w-2xl mx-auto opacity-0"
          style={{ fontFamily: "var(--font-sans)", textShadow: "0 2px 8px rgba(255,255,255,0.2)" }}
        >
          Our unique balance of disciplined leadership, honed from military experience, combined with
          our local market expertise and personalized care, ensures a real estate experience that is
          seamless and feels effortless.
        </p>
      </div>
    </section>
  )
}
