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

      <M2mContainer className="relative py-20 text-center md:py-28">
        <h2
          data-gsap="blur-in"
          className="mb-6 text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.1] text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to start your journey?
        </h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-m2m-cream/78 font-sans">
          If you want the same calm process these clients got, we&apos;ll map the next step together and keep it simple.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row" data-gsap="fade-up" data-gsap-delay="0.2">
          <Link
            href="/contact-us?intent=buyer"
            data-m2m-track="reviews_work_with_us"
            data-m2m-track-loc="reviews_cta_band"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-[0.7rem] tracking-[0.2em] uppercase bg-m2m-gold text-m2m-deep font-medium transition-all duration-300 hover:bg-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Work With Us
          </Link>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            data-m2m-track="reviews_google_leave_review"
            data-m2m-track-loc="reviews_cta_band"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center px-10 py-4 text-[0.7rem] tracking-[0.2em] uppercase border border-m2m-gold/30 text-m2m-cream transition-all duration-300 hover:border-m2m-gold hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Review us on Google ▸
          </a>
        </div>
      </M2mContainer>
    </section>
  )
}
