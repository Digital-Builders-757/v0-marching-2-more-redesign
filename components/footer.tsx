"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ABOUT_COPY,
  GOOGLE_REVIEW_URL,
  M2M_ADDRESS,
  M2M_INBOX_EMAIL,
  M2M_PHONE_DISPLAY,
  CALENDLY_URL,
} from "@/lib/m2m-constants"

const quickLinks = [
  { label: "Home Valuation", href: "/free-home-valuation" },
  { label: "Pre-Listing Checklist", href: "/resources" },
  { label: "Work With Us", href: "/home-search" },
  { label: "Our Team", href: "/our-team" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
]

const policyLinks = [
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimers", href: "/copy-of-privacy-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
]

const agentLinks = [
  {
    name: "Donavan McFadden",
    href: "/profile-page",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donavan%20copy-R9RwXLWqjd9OnQw4gBl6EiAVWOj9x1.avif",
  },
  {
    name: "Roger Lee",
    href: "/roger-lee",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roger%20Lee%20copy-ZbhqIDwo7JeGrBkKFa6Sv0ylWIuI1D.avif",
  },
]

export function Footer() {
  return (
    <footer className="bg-m2m-black border-t border-m2m-gold/20">
      <div className="px-6 py-16 md:px-[60px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              BOOK A HOME CONSULTATION
            </a>
          </div>

          {/* About */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              About Marching 2 More
            </h3>
            <p
              className="text-xs leading-relaxed text-m2m-muted"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {ABOUT_COPY}
            </p>

            <div className="mt-2 flex items-center gap-3">
              {agentLinks.map((a) => (
                <Link
                  key={a.name}
                  href={a.href}
                  className="flex items-center gap-2 text-xs text-m2m-muted hover:text-m2m-cream transition-colors"
                >
                  <span className="relative h-8 w-8 overflow-hidden rounded-full border border-m2m-gold/20">
                    <Image src={a.img} alt="" fill className="object-cover" />
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)" }}>{a.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Policies
            </h3>
            <nav className="flex flex-col gap-2">
              {policyLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center justify-center border border-m2m-gold/30 bg-black/30 text-m2m-cream text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:border-m2m-gold/60"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Review us on Google ▸
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Contact
            </h3>
            <p className="text-xs text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              {M2M_ADDRESS}
            </p>
            <a
              href={`tel:${M2M_PHONE_DISPLAY}`}
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${M2M_INBOX_EMAIL}`}
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_INBOX_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-m2m-gold/20 px-6 py-6 md:px-[60px]">
        <p className="text-[0.65rem] tracking-wider text-m2m-muted" style={{ fontFamily: "var(--font-nav)" }}>
          ©2018 — {new Date().getFullYear()} MARCHING 2 MORE REALTY GROUP
        </p>
      </div>
    </footer>
  )
}
