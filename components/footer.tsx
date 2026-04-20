"use client"

import Link from "next/link"
import Image from "next/image"

import { M2mConsultationCta } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"
import { ABOUT_COPY } from "@/lib/m2m-constants"
import {
  GOOGLE_REVIEW_URL,
  M2M_ADDRESS_SINGLE_LINE,
  M2M_EMAIL_DISPLAY,
  M2M_EMAIL_HREF,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

import { M2M_FOOTER_POLICY_LINKS, M2M_FOOTER_QUICK_LINKS } from "@/lib/m2m-nav"
import { M2M_MEDIA } from "@/lib/m2m-media"

const agentLinks = [
  {
    name: "Donavan McFadden",
    href: "/profile-page",
    img: M2M_MEDIA.headshotDonavan,
  },
  {
    name: "Roger Lee",
    href: "/roger-lee",
    img: M2M_MEDIA.headshotRoger,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-m2m-gold/20 bg-m2m-black">
      <M2mContainer className="py-16">
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
              {M2M_FOOTER_QUICK_LINKS.map((l) => (
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

            <M2mConsultationCta variant="gold" className="mt-4 w-fit" />
          </div>

          {/* About */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              About Marching 2 More
            </h3>
            <p className="text-xs leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              {ABOUT_COPY}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              {agentLinks.map((a) => (
                <Link
                  key={a.name}
                  href={a.href}
                  className="flex items-center gap-2 text-xs text-m2m-muted hover:text-m2m-cream transition-colors"
                >
                  <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-m2m-gold/25">
                    <Image src={a.img} alt="" fill className="object-cover object-top" sizes="32px" />
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
              {M2M_FOOTER_POLICY_LINKS.map((l) => (
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
              className="mt-3 w-fit text-xs tracking-wider text-m2m-muted underline decoration-m2m-gold/40 underline-offset-4 transition-colors hover:text-m2m-cream"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Leave a Google review →
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
              {M2M_ADDRESS_SINGLE_LINE}
            </p>
            <a
              href={M2M_PHONE_HREF}
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_PHONE_DISPLAY}
            </a>
            <a
              href={M2M_EMAIL_HREF}
              className="text-xs tracking-wider text-m2m-muted hover:text-m2m-cream transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_EMAIL_DISPLAY}
            </a>
          </div>
        </div>
      </M2mContainer>

      <div className="border-t border-m2m-gold/20">
        <M2mContainer className="py-6">
        <p className="text-[0.65rem] tracking-wider text-m2m-muted font-nav">
          ©2018 — {new Date().getFullYear()} MARCHING 2 MORE REALTY GROUP
        </p>
        </M2mContainer>
      </div>
    </footer>
  )
}
