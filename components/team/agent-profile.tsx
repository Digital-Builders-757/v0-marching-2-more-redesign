import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
  getConsultationRequestUrl,
} from "@/lib/m2m-site"
import {
  M2M_COMPANY_INSTAGRAM_URL,
  instagramUrlsEquivalent,
} from "@/lib/m2m-team-social"

type AgentProfileProps = {
  name: string
  firstName: string
  role: string
  licenseNumber?: string
  image: string
  /** Tailwind object-position helpers, e.g. `object-[center_32%]` — align with team card crops. */
  imageObjectPosition?: string
  /** Optional zoom from wide plates — same knobs as `team-members` portrait cards. */
  imageScaleClass?: string
  /** Inline object-position for wide-plate crops (pairs with `imageScaleClass`). */
  imageObjectStyle?: Pick<CSSProperties, "objectPosition">
  bio: string
  email?: string
  linkedin?: string
  /** Agent’s personal Instagram (omit when unknown — note in the page file). Company IG is always shown separately. */
  instagramPersonal?: string
}

const socialIconClass =
  "rounded-sm p-1 text-m2m-muted transition hover:text-m2m-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"

export function AgentProfile({
  name,
  firstName,
  role,
  licenseNumber,
  image,
  imageObjectPosition,
  imageScaleClass,
  imageObjectStyle,
  bio,
  email,
  linkedin,
  instagramPersonal,
}: AgentProfileProps) {
  const bioParagraphs = bio.split("\n\n").filter((p) => p.trim())

  const personalIgHref = instagramPersonal?.trim()
  const showPersonalInstagram =
    Boolean(personalIgHref) &&
    !instagramUrlsEquivalent(personalIgHref!, M2M_COMPANY_INSTAGRAM_URL)

  const portraitShell =
    "relative isolate aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm bg-m2m-deep/[0.02] ring-1 ring-m2m-deep/[0.08] sm:max-w-[320px] lg:max-w-none"

  return (
    <main id="main-content" tabIndex={-1} className="bg-white">
      <section className="border-b border-m2m-deep/[0.06] pb-14 pt-24 sm:pb-20 sm:pt-28">
        <M2mContainer>
          {/* Mobile: portrait → identity + CTAs → bio. Desktop: sidebar | bio | portrait */}
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-10">
            <div className="order-1 flex justify-center lg:order-3 lg:col-span-4 lg:block lg:self-start lg:min-w-0">
              <div className={cn(portraitShell, "lg:w-full")}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority
                  style={imageObjectStyle}
                  className={cn("object-cover", imageObjectPosition, imageScaleClass)}
                  sizes="(min-width: 1024px) 33vw, min(320px, 100vw)"
                />
              </div>
            </div>

            <div className="order-2 min-w-0 lg:order-1 lg:col-span-3">
              <Link
                href="/our-team"
                className="mb-6 inline-flex min-h-11 touch-manipulation items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-muted transition hover:text-m2m-gold focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                <ArrowLeft className="size-3.5 shrink-0" aria-hidden />
                Our team
              </Link>

              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {role}
              </p>

              <h1
                className="mb-5 font-light text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.08] text-m2m-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {name}
              </h1>

              {licenseNumber ? (
                <div className="mb-8 space-y-1 border-l-2 border-m2m-gold/35 pl-4">
                  <p className="text-sm text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                    Licensed Agent of Virginia
                  </p>
                  <p className="text-sm text-m2m-deep/85" style={{ fontFamily: "var(--font-sans)" }}>
                    {licenseNumber}
                  </p>
                </div>
              ) : (
                <div className="mb-8 h-px w-full bg-m2m-deep/10" aria-hidden />
              )}

              <div className="flex flex-col gap-3">
                <Button variant="m2mPanel" asChild className="w-full justify-center rounded-sm px-6 py-4">
                  <Link
                    href="/contact-us?intent=buyer"
                    className="touch-manipulation"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Work with {firstName}
                  </Link>
                </Button>

                <Button variant="m2mGold" asChild className="w-full justify-center rounded-sm px-6 py-4">
                  <Link
                    href={getConsultationRequestUrl()}
                    className="touch-manipulation"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    Book a consultation
                  </Link>
                </Button>

                {email ? (
                  <Button
                    variant="outline"
                    asChild
                    className="h-auto min-h-12 w-full justify-center rounded-sm border-2 border-m2m-deep/18 bg-transparent px-5 py-3.5 text-center text-sm font-normal text-m2m-deep shadow-none hover:bg-m2m-cream/45"
                  >
                    <a
                      href={`mailto:${email}`}
                      className="touch-manipulation break-all"
                      title={email}
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      Email {firstName}
                      <span className="sr-only">{`: ${email}`}</span>
                    </a>
                  </Button>
                ) : null}

                <Button
                  variant="outline"
                  asChild
                  className="h-auto min-h-12 w-full justify-center rounded-sm border-2 border-m2m-deep/12 bg-transparent px-5 py-3.5 text-sm text-m2m-muted shadow-none hover:border-m2m-deep/28 hover:bg-m2m-cream/30 hover:text-m2m-deep"
                >
                  <a
                    href={M2M_PHONE_HREF}
                    className="touch-manipulation"
                    style={{ fontFamily: "var(--font-nav)" }}
                  >
                    {M2M_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-m2m-deep/10 pt-8">
                <span
                  className="mr-2 text-[0.65rem] uppercase tracking-[0.18em] text-m2m-muted"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Connect
                </span>
                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialIconClass}
                    aria-label="LinkedIn"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                ) : null}
                {showPersonalInstagram && personalIgHref ? (
                  <a
                    href={personalIgHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialIconClass}
                    aria-label="Instagram (personal)"
                  >
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                ) : null}
                <a
                  href={M2M_COMPANY_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClass}
                  aria-label="Marching 2 More on Instagram"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="order-3 min-w-0 lg:order-2 lg:col-span-5">
              <h2 className="sr-only">About {firstName}</h2>
              <div className="max-w-prose space-y-6 border-t border-m2m-deep/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {bioParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[17px] leading-[1.65] text-m2m-deep/[0.92] last:mb-0"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </M2mContainer>
      </section>
    </main>
  )
}
