"use client"

import Link from "next/link"

import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

/**
 * Wix parity: /contact-us page body.
 *
 * Keep this surface mostly presentational and route users to the same next steps
 * as the Wix site (book, call, introduce yourself).
 */
export function ContactUsParity() {
  return (
    <section className="bg-m2m-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:px-16 lg:px-24">
        <div>
          <h2
            className="text-3xl font-light text-m2m-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduce Yourself
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
            Tell us a bit about your goals. One of our agents will review your request and follow up with your next
            steps within 24hrs.
          </p>

          <p className="mt-6">
            <a
              href={M2M_PHONE_HREF}
              className="text-xs tracking-[0.2em] uppercase text-m2m-deep hover:text-m2m-gold transition-colors"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Or give us a call — {M2M_PHONE_DISPLAY}
            </a>
          </p>

          <div className="mt-10">
            <ContactInfo />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-deep transition-colors"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
