"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CALENDLY_BOOK_URL, M2M_PHONE_TEL } from "@/lib/m2m-site"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const licensedRef = useRef<HTMLParagraphElement>(null)
  const vetRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const kickerRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 },
        0
      )

      tl.fromTo(
        licensedRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.35
      )

      tl.fromTo(
        vetRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.75 },
        0.45
      )

      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.75 },
        0.55
      )

      const lines = headlineRef.current?.querySelectorAll(".hero-line")
      if (lines?.length) {
        tl.fromTo(
          lines,
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.12 },
          0.65
        )
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.75 },
        1.05
      )

      tl.fromTo(
        kickerRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65 },
        1.15
      )

      const ctas = ctasRef.current?.querySelectorAll(".cta-btn")
      if (ctas?.length) {
        tl.fromTo(
          ctas,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
          1.25
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col px-6 pt-32 pb-12 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "#050d06" }}
      aria-labelledby="hero-heading"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20at%207.30.14%20PM-JVsmkDPrwryZHLk0Lm3Wqm4bAhGTc2.png')`,
        }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(5,13,6,0.92) 0%, rgba(5,13,6,0.75) 35%, rgba(5,13,6,0.45) 60%, rgba(5,13,6,0.2) 100%),
            linear-gradient(to bottom, rgba(5,13,6,0.4) 0%, transparent 40%, transparent 70%, rgba(5,13,6,0.5) 100%)
          `,
        }}
      />

      <div
        className="absolute -top-[100px] -right-[100px] w-[700px] h-[700px] pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(205,176,95,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[820px] flex-1 flex flex-col justify-center">
        <p
          ref={licensedRef}
          className="text-[0.65rem] md:text-sm tracking-[0.18em] uppercase text-m2m-cream/85 mb-4 opacity-0 max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Licensed Real Estate Professionals in Virginia Beach, VA, USA
        </p>

        <p
          ref={vetRef}
          className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-m2m-gold mb-6 opacity-0 flex-wrap"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          <span
            ref={lineRef}
            className="block h-px bg-m2m-gold w-8"
            style={{ transform: "scaleX(0)" }}
          />
          <span>Veteran Owned</span>
          <span className="text-m2m-cream/90 tracking-normal normal-case" aria-hidden>
            | 5.0 ★★★★★
          </span>
        </p>

        <h1
          ref={headlineRef}
          className="font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-m2m-cream mb-8"
          id="hero-heading"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">Where You Find Your Next</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              <em className="italic text-m2m-gold">Home</em>
            </span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-sm md:text-base text-m2m-muted-lt tracking-wide italic opacity-0"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ask about our Financing Options.
        </p>

        <p
          ref={kickerRef}
          className="mt-6 text-[0.7rem] md:text-sm tracking-[0.28em] uppercase text-m2m-cream/80 opacity-0"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Buy. Sell. Relocate.
        </p>

        <div
          ref={ctasRef}
          className="flex flex-col md:flex-row items-stretch gap-4 md:gap-5 mt-10 w-full"
        >
          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-gsap="magnetic"
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Speak with an Agent.
          </a>
          <a
            href={`tel:${M2M_PHONE_TEL}`}
            className="cta-btn w-full md:w-auto text-center text-[0.7rem] tracking-[0.2em] uppercase px-9 py-4 border border-white/15 text-m2m-cream transition-all duration-300 hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)", opacity: 0 }}
          >
            Call or Text — Anytime.
          </a>
        </div>
      </div>
    </section>
  )
}
