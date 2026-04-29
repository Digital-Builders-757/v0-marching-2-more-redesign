import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

import { M2mBrandLogo } from "@/components/m2m-brand-logo"

import { ABOUT_COPY } from "@/lib/m2m-constants"
import {
  GOOGLE_REVIEW_URL,
  M2M_ADDRESS_SINGLE_LINE,
  M2M_EMAIL_DISPLAY,
  M2M_EMAIL_HREF,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"
import { M2M_FOOTER_POLICY_LINKS, M2M_HEADER_AGENT_LINKS } from "@/lib/m2m-nav"

import { M2mContainer } from "@/components/m2m-layout"

import { DIVORCE_FOOTER_TOP_LINKS, TEAM_SOCIAL } from "./content"

const footerAgents = M2M_HEADER_AGENT_LINKS.slice(0, 2)

export function DivorceLandingFooter() {
  return (
    <footer className="bg-m2m-panel pb-[env(safe-area-inset-bottom,0px)] text-m2m-cream">
      <M2mContainer className="py-16 lg:py-20">
        <nav
          className="mb-14 flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-m2m-gold/25 pb-12 md:justify-start"
          aria-label="Footer"
        >
          {DIVORCE_FOOTER_TOP_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.7rem] font-medium tracking-[0.16em] text-m2m-gold-lt transition hover:text-m2m-cream"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — about + team */}
          <div>
            <h2
              className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              About Marching 2 More
            </h2>
            <p className="mb-12 max-w-lg text-pretty text-sm leading-relaxed text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
              {ABOUT_COPY}
            </p>

            <div className="space-y-0">
              {footerAgents.map((agent, idx) => {
                const social =
                  idx === 0 ? TEAM_SOCIAL.donavan : TEAM_SOCIAL.roger
                return (
                  <div
                    key={agent.href}
                    className="flex flex-wrap items-center gap-4 border-t border-m2m-gold/25 py-5 first:border-t-0 first:pt-0 sm:first:pt-0"
                  >
                    <Link href={agent.href} className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-m2m-gold/35">
                      <Image src={agent.image} alt={agent.name} fill className="object-cover object-top" sizes="48px" />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-m2m-cream" style={{ fontFamily: "var(--font-nav)" }}>
                        {agent.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-m2m-gold-lt">
                      <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label={`${agent.name} on LinkedIn`}>
                        <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                      <a href={social.instagram} target="_blank" rel="noreferrer" aria-label={`${agent.name} on Instagram`}>
                        <Instagram className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                      <a href={social.youtube} target="_blank" rel="noreferrer" aria-label={`${agent.name} on YouTube`}>
                        <Youtube className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                )
              })}

              <div className="flex flex-wrap items-center gap-4 border-t border-m2m-gold/25 py-5">
                <Link href="/" className="flex flex-shrink-0 items-center gap-2" aria-label="Marching 2 More home">
                  <M2mBrandLogo variant="footer" alt="" />
                </Link>
                <span className="text-sm font-semibold tracking-wide text-m2m-cream" style={{ fontFamily: "var(--font-nav)" }}>
                  Marching 2 More
                </span>
                <div className="ml-auto flex items-center gap-3 text-m2m-gold-lt">
                  <a href={TEAM_SOCIAL.company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                    <Facebook className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a href={TEAM_SOCIAL.company.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a href={TEAM_SOCIAL.company.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                    <Youtube className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — policies + CTAs + contact */}
          <div className="lg:pl-8">
            <h2
              className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Policies
            </h2>
            <nav className="mb-8 flex flex-col gap-2" aria-label="Policies">
              {M2M_FOOTER_POLICY_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-m2m-cream/90 underline decoration-m2m-gold/40 underline-offset-4 transition hover:text-m2m-cream"
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
              className="mb-8 inline-block w-fit text-sm text-m2m-cream/90 underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Leave a Google review →
            </a>

            <div className="space-y-2 text-sm text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
              <p>{M2M_ADDRESS_SINGLE_LINE}</p>
              <a href={M2M_PHONE_HREF} className="block w-fit hover:text-m2m-cream">
                {M2M_PHONE_DISPLAY}
              </a>
              <a
                href={M2M_EMAIL_HREF}
                className="w-fit break-words underline decoration-m2m-gold/45 underline-offset-4 hover:text-m2m-cream"
              >
                {M2M_EMAIL_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </M2mContainer>

      <div className="border-t border-m2m-gold/20">
        <M2mContainer className="py-6">
          <p className="text-[0.65rem] tracking-wider text-m2m-muted-lt font-nav">
            ©2018 — {new Date().getFullYear()} MARCHING 2 MORE REALTY GROUP
          </p>
        </M2mContainer>
      </div>
    </footer>
  )
}
