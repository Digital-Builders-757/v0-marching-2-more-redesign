import Link from "next/link"

import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { M2mContainer } from "@/components/m2m-layout"
import {
  getConsultationRequestUrl,
  GOHIGHLEVEL_BRRRR_ANALYZER_URL,
  GOHIGHLEVEL_QUIZ_INVESTOR_URL,
  isGohighlevelUrlConfigured,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

import {
  INVESTOR_BRRRR_BLURB,
  INVESTOR_BRRRR_TITLE,
  INVESTOR_PLACEHOLDER_TOOLS,
  INVESTOR_TOOLS_INTRO,
  INVESTOR_TOOLS_QUIZ_TITLE,
  INVESTOR_TOOLS_SECTION_ID,
  INVESTOR_TOOLS_SUBHEAD,
} from "./content"

export function InvestmentsTools() {
  const brrrrLive = isGohighlevelUrlConfigured(GOHIGHLEVEL_BRRRR_ANALYZER_URL)

  return (
    <div id={INVESTOR_TOOLS_SECTION_ID} className="scroll-mt-28 border-b border-m2m-gold/15">
      <M2mLeadQuizSection
        title={INVESTOR_TOOLS_QUIZ_TITLE}
        description={
          <p className="text-m2m-cream/88 font-sans">
            {INVESTOR_TOOLS_INTRO} {INVESTOR_TOOLS_SUBHEAD}
          </p>
        }
        embedSrc={GOHIGHLEVEL_QUIZ_INVESTOR_URL}
        embedVariant="tall"
        ctaHref={GOHIGHLEVEL_QUIZ_INVESTOR_URL}
        ctaLabel="Open investor quiz"
        className="border-0 pb-10 md:pb-12"
        footnote={
          <>
            Hosted in GoHighLevel when <code className="text-[0.8rem] text-m2m-gold">GOHIGHLEVEL_QUIZ_INVESTOR_URL</code>{" "}
            is configured in lib/m2m-site.ts.
          </>
        }
      />

      <div className="border-t border-m2m-gold/15 bg-m2m-deep/35 pb-16 pt-12 md:pb-20 md:pt-16">
        <M2mContainer className="max-w-6xl">
          <h3 className="text-center text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-snug text-m2m-cream font-display">
            M2M BRRRR deal analyzer
          </h3>
          <p
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-m2m-cream/82 sm:text-base"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {INVESTOR_BRRRR_BLURB}
          </p>

          {brrrrLive ? (
            <div className="mt-8 overflow-hidden rounded-sm border border-m2m-gold/25 bg-m2m-deep/40 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[16/10] w-full min-h-[420px] sm:min-h-[480px]">
                <iframe
                  src={GOHIGHLEVEL_BRRRR_ANALYZER_URL}
                  title={INVESTOR_BRRRR_TITLE}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="clipboard-write"
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-2xl rounded-sm border border-m2m-gold/25 bg-m2m-panel/60 px-6 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:px-8">
              <p className="text-center text-sm font-medium text-m2m-gold-lt font-sans">{INVESTOR_BRRRR_TITLE}</p>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-m2m-cream/82 font-sans">
                Bring a deal and we’ll work the numbers with you manually for now, purchase through refinance, so you can
                pressure-test the assumptions before you commit.
              </p>
              <div className="mx-auto mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={M2M_PHONE_HREF}
                  data-m2m-track="investments_brrrr_phone"
                  className="inline-flex min-h-11 items-center justify-center rounded-sm border border-m2m-gold/30 px-4 text-sm font-medium text-m2m-cream transition-colors hover:border-m2m-gold hover:text-m2m-gold"
                >
                  Call {M2M_PHONE_DISPLAY}
                </a>
                <Link
                  href={getConsultationRequestUrl()}
                  data-m2m-track="consultation_request"
                  className="inline-flex min-h-11 items-center justify-center rounded-sm bg-m2m-gold px-4 text-sm font-semibold text-m2m-deep transition-colors hover:bg-m2m-gold-lt"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {INVESTOR_PLACEHOLDER_TOOLS.map((t) => (
              <article
                key={t.id}
                className="flex flex-col rounded-sm border border-m2m-gold/20 bg-m2m-panel/70 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.2)] sm:p-6"
              >
                <h4
                  className="text-base font-medium leading-snug text-m2m-gold-lt sm:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h4>
                <p
                  className="mt-2 flex-1 text-sm leading-relaxed text-m2m-cream/80"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {t.body}
                </p>
                <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-cream/55">
                  In product backlog — ask the team for a manual walkthrough today
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-m2m-cream/65 font-sans">
            As each tool gets a stable URL, we will wire it the same way as the quiz and BRRRR embeds — no redesign
            required.
          </p>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-xs leading-relaxed text-m2m-cream/62 font-sans">
              Prefer to walk through deals with someone?
            </p>
            <div className="m2m-quiet-action-row mt-3 justify-center">
              <a href={M2M_PHONE_HREF} data-m2m-track="investments_phone_tools">
                Call {M2M_PHONE_DISPLAY}
              </a>
              <span className="text-m2m-cream/35" aria-hidden>
                ·
              </span>
              <Link href={getConsultationRequestUrl()} data-m2m-track="consultation_request">
                Book a consultation
              </Link>
            </div>
          </div>
        </M2mContainer>
      </div>
    </div>
  )
}
