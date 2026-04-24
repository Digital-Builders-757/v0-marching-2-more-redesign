import Link from "next/link"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

import {
  ENROLL_STEPS,
  MOSELEY_VA_SALESPERSON_LICENSE_URL,
  PAGE_HERO_HEADLINE,
  PAGE_HERO_SUBHEAD,
  PAGE_KICKER,
  PRIMARY_CTA_LABEL,
  STEPS_HEADING,
  SUPPORT_LINE,
  WHY_BLOCKS,
  WHY_HEADING,
} from "./content"

export function GetLicensePage() {
  return (
    <>
      <M2mSection variant="light" className="border-b border-m2m-gold/15 py-16 md:py-20">
        <M2mContainer className="max-w-3xl">
          <p
            className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-m2m-deep/80"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {PAGE_KICKER}
          </p>
          <h1
            className="mt-4 text-[clamp(2rem,4vw,2.85rem)] font-medium leading-[1.12] text-m2m-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {PAGE_HERO_HEADLINE}
          </h1>
          <p
            className="mt-6 text-base leading-relaxed text-m2m-deep/85 sm:text-lg"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {PAGE_HERO_SUBHEAD}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={MOSELEY_VA_SALESPERSON_LICENSE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-m2m-deep px-8 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-cream transition hover:bg-m2m-panel sm:text-[0.62rem]"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {PRIMARY_CTA_LABEL}
            </a>
            <a
              href={M2M_PHONE_HREF}
              className="text-sm font-medium text-m2m-deep underline decoration-m2m-gold/50 underline-offset-4 transition hover:text-m2m-panel"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {M2M_PHONE_DISPLAY}
            </a>
          </div>
        </M2mContainer>
      </M2mSection>

      <M2mSection variant="light" className="py-16 md:py-20">
        <M2mContainer>
          <h2
            className="text-center text-[clamp(1.5rem,3vw,2rem)] font-medium text-m2m-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {WHY_HEADING}
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {WHY_BLOCKS.map((b) => (
              <article
                key={b.title}
                className="rounded-sm border border-m2m-gold/25 bg-white p-6 shadow-[0_12px_32px_rgba(5,13,6,0.08)] sm:p-7"
              >
                <h3
                  className="text-lg font-medium text-m2m-deep sm:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-m2m-deep/80 sm:text-base" style={{ fontFamily: "var(--font-sans)" }}>
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </M2mContainer>
      </M2mSection>

      <M2mSection variant="light" className="border-t border-m2m-gold/15 bg-m2m-cream/35 py-16 md:py-20">
        <M2mContainer className="max-w-3xl">
          <h2
            className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-m2m-deep"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {STEPS_HEADING}
          </h2>
          <ol className="mt-10 space-y-8">
            {ENROLL_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 sm:gap-5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-m2m-gold/40 bg-white text-sm font-semibold text-m2m-deep"
                  style={{ fontFamily: "var(--font-nav)" }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-medium text-m2m-deep sm:text-lg" style={{ fontFamily: "var(--font-display)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-m2m-deep/82 sm:text-base" style={{ fontFamily: "var(--font-sans)" }}>
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-sm leading-relaxed text-m2m-deep/80 sm:text-base" style={{ fontFamily: "var(--font-sans)" }}>
            {SUPPORT_LINE}{" "}
            <a href={M2M_PHONE_HREF} className="font-medium text-m2m-deep underline decoration-m2m-gold/45 underline-offset-4">
              {M2M_PHONE_DISPLAY}
            </a>
            .
          </p>
          <div className="mt-10">
            <a
              href={MOSELEY_VA_SALESPERSON_LICENSE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-m2m-gold px-8 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-deep transition hover:bg-m2m-gold-lt"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {PRIMARY_CTA_LABEL}
            </a>
          </div>
        </M2mContainer>
      </M2mSection>

      <M2mSection variant="light" density="tight">
        <M2mContainer className="max-w-3xl text-center">
          <p className="text-sm text-m2m-deep/75" style={{ fontFamily: "var(--font-sans)" }}>
            Prefer to browse the rest of the site?{" "}
            <Link href="/our-team" className="font-medium text-m2m-deep underline decoration-m2m-gold/45 underline-offset-4">
              Meet our team
            </Link>{" "}
            or{" "}
            <Link href="/contact-us" className="font-medium text-m2m-deep underline decoration-m2m-gold/45 underline-offset-4">
              contact us
            </Link>
            .
          </p>
        </M2mContainer>
      </M2mSection>
    </>
  )
}
