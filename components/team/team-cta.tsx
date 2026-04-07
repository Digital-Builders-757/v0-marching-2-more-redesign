"use client"

import Link from "next/link"

import {
  CALENDLY_BOOK_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

/** Wix parity: CTA cluster on /our-team. */
export function TeamCTA() {
  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-24"
      style={{ backgroundColor: "#050d06" }}
      data-gsap-section
    >
      <div className="mx-auto max-w-4xl text-center" data-gsap="blur-in">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CALENDLY_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Book a Consultation
          </a>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center border border-m2m-gold/30 text-m2m-cream text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-gold hover:text-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Introduce Yourself
          </Link>

          <a
            href={M2M_PHONE_HREF}
            className="inline-flex items-center justify-center border border-white/10 text-m2m-muted-lt text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:border-m2m-muted-lt hover:text-m2m-cream"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Call Us {M2M_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
