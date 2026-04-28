"use client"

import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { GOOGLE_REVIEW_URL } from "@/lib/m2m-site"

export function ReviewsCta() {
  return (
    <section className="bg-m2m-deep relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(205,176,95,0.05) 0%, transparent 60%)",
        }}
      />

      <M2mContainer className="relative py-20 md:py-28 text-center">
        <h2
          data-gsap="blur-in"
          className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-light text-m2m-cream mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to start your journey?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-gsap="fade-up" data-gsap-delay="0.2">
          <Link
            href="/contact-us?intent=buyer"
            className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Work With Us
          </Link>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.2em] uppercase px-10 py-4 border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Review us on Google ▸
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
