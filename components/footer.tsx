"use client"

import Link from "next/link"
import {
  M2M_ADDRESS_LINES,
  M2M_EMAIL_INFO,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_TEL,
} from "@/lib/m2m-site"

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
  { label: "Privacy (archive)", href: "/copy-of-privacy-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Accessibility", href: "/accessibility-statement" },
]

const aboutCopy = `Our unique balance of disciplined leadership, honed from military experience, combined with our local market expertise and personalized care, ensures a real estate experience that is seamless and feels effortless. Serving with integrity. Leading with experience. Licensed Real Estate Professionals in Virginia Beach, VA, USA. Veteran owned.`

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-m2m-black border-t border-m2m-gold/20">
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 py-16 md:px-[60px] border-b border-m2m-gold/20"
        data-gsap="stagger-children"
        data-gsap-direction="up"
      >
        <div data-gsap-child className="lg:col-span-5 flex flex-col gap-5">
          <p
            className="font-light text-xl tracking-wider uppercase text-m2m-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Marching <span className="text-m2m-gold">2</span> More
          </p>
          <p
            className="text-xs leading-relaxed text-m2m-muted max-w-xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {aboutCopy}
          </p>
          <div className="flex flex-col gap-2 text-xs tracking-wider text-m2m-muted">
            <span style={{ fontFamily: "var(--font-sans)" }}>
              {M2M_ADDRESS_LINES[0]}, {M2M_ADDRESS_LINES[1]}
            </span>
            <a
              href={`tel:${M2M_PHONE_TEL}`}
              className="w-fit hover:text-m2m-gold transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${M2M_EMAIL_INFO}`}
              className="w-fit hover:text-m2m-gold transition-colors break-all"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {M2M_EMAIL_INFO}
            </a>
          </div>
        </div>

        <div data-gsap-child className="lg:col-span-4">
          <h4
            className="text-[0.58rem] tracking-[0.25em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Quick links
          </h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-m2m-muted tracking-wider hover:text-m2m-cream transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-gsap-child className="lg:col-span-3">
          <h4
            className="text-[0.58rem] tracking-[0.25em] uppercase text-m2m-gold mb-4"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Policies
          </h4>
          <ul className="flex flex-col gap-2">
            {policyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-m2m-muted tracking-wider hover:text-m2m-cream transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 md:px-[60px] text-center md:text-left">
        <p
          className="text-[0.6rem] tracking-wider text-m2m-muted"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          © {year} Marching 2 More. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] tracking-[0.15em] uppercase text-m2m-muted hover:text-m2m-gold transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer as SiteFooter }
