import Link from "next/link"

import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { M2mContainer } from "@/components/m2m-layout"
import { GOHIGHLEVEL_BRRRR_ANALYZER_URL, GOHIGHLEVEL_QUIZ_INVESTOR_URL, isGohighlevelUrlConfigured } from "@/lib/m2m-site"
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
          <h3
            className="text-center text-[clamp(1.35rem,2.8vw,1.85rem)] font-medium leading-snug text-m2m-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
                  className="absolute inset-0 h-full w-full border-0"
                  allow="clipboard-write"
                />
              </div>
            </div>
          ) : (
            <div
              className={cn(
                "mx-auto mt-8 max-w-xl rounded-sm border border-dashed border-m2m-gold/40 bg-m2m-panel/50 px-6 py-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:px-8",
              )}
            >
              <p className="text-sm font-medium text-m2m-gold-lt font-sans">{INVESTOR_BRRRR_TITLE}</p>
              <p className="mt-3 text-sm leading-relaxed text-m2m-cream/82 font-sans">
                Embed URL wiring lives in{" "}
                <code className="text-[0.8rem] text-m2m-gold">GOHIGHLEVEL_BRRRR_ANALYZER_URL</code> in{" "}
                <code className="text-[0.8rem] text-m2m-gold">lib/m2m-site.ts</code> once marketing hosts the analyzer.
              </p>
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
                  Details coming soon
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-m2m-cream/65 font-sans">
            Additional tools discussed in email campaigns will be linked here as URLs are finalized — same pattern as
            quiz and analyzer embeds.
          </p>

          <p className="mt-6 text-center">
            <Link
              href="/contact-us?intent=buyer"
              className="text-sm font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-4 transition hover:text-m2m-cream"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Contact the team about an investor plan →
            </Link>
          </p>
        </M2mContainer>
      </div>
    </div>
  )
}
