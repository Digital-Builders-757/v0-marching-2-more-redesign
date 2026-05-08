import Link from "next/link"

import { M2mLeadQuizSection } from "@/components/m2m-lead-quiz-section"
import { M2mContainer } from "@/components/m2m-layout"
import { BrrrrDealAnalyzer } from "@/components/more-investments/brrrr-deal-analyzer"
import { getConsultationRequestUrl, GOHIGHLEVEL_QUIZ_INVESTOR_URL, M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

import {
  INVESTOR_BRRRR_BLURB,
  INVESTOR_PLACEHOLDER_TOOLS,
  INVESTOR_TOOLS_INTRO,
  INVESTOR_TOOLS_QUIZ_TITLE,
  INVESTOR_TOOLS_SECTION_ID,
  INVESTOR_TOOLS_SUBHEAD,
} from "./content"

export function InvestmentsTools() {
  return (
    <div id={INVESTOR_TOOLS_SECTION_ID} className="scroll-mt-28 border-b border-m2m-gold/15">
      <M2mLeadQuizSection
        id="investor-quiz"
        title={INVESTOR_TOOLS_QUIZ_TITLE}
        description={
          <p className="text-m2m-cream/88 font-sans">
            {INVESTOR_TOOLS_INTRO} {INVESTOR_TOOLS_SUBHEAD}
          </p>
        }
        embedSrc={GOHIGHLEVEL_QUIZ_INVESTOR_URL}
        embedTitle="Investor path quiz"
        embedVariant="tall"
        ctaHref={GOHIGHLEVEL_QUIZ_INVESTOR_URL}
        ctaLabel="Open investor quiz"
        className="border-0 pb-10 md:pb-12"
        footnote={
          <>
            Quiz submissions use the same secure{" "}
            <code className="text-[0.8rem] text-m2m-gold-lt">POST /api/submit-lead</code> pipeline as other Marching 2 More
            forms—nothing posts to a third-party webhook from your browser. Prefer to talk first? Call{" "}
            <a className="text-m2m-gold-lt underline decoration-m2m-gold/55 underline-offset-4" href={M2M_PHONE_HREF}>
              {M2M_PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <Link
              href="/contact-us?intent=consultation"
              className="text-m2m-gold-lt underline decoration-m2m-gold/55 underline-offset-4"
            >
              contact the team
            </Link>
            .
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

          <div className="mt-8">
            <BrrrrDealAnalyzer />
          </div>

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
            The BRRRR analyzer runs on-site below; the investor quiz above uses the same secure lead API as our other
            assessment tools.
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
