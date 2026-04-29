import type { ReactNode } from "react"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { isGohighlevelUrlConfigured, isQuizEmbedSrcConfigured } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

export type M2mLeadQuizSectionProps = {
  id?: string
  title: string
  description?: ReactNode
  /** When set and URL is live, renders a responsive iframe. */
  embedSrc?: string
  /** External quiz / form page (GHL). Used when embed is not configured or as fallback CTA. */
  ctaHref?: string
  ctaLabel?: string
  footnote?: ReactNode
  className?: string
  children?: ReactNode
}

/**
 * Lead-gen quiz / survey block — embeds when `embedSrc` is https (e.g. GHL) or a `/quizzes/...` static asset,
 * otherwise shows placeholder copy and optional CTA + `children` (e.g. local form).
 */
export function M2mLeadQuizSection({
  id,
  title,
  description,
  embedSrc,
  ctaHref,
  ctaLabel = "Start the quiz",
  footnote,
  className,
  children,
}: M2mLeadQuizSectionProps) {
  const showEmbed = Boolean(embedSrc && isQuizEmbedSrcConfigured(embedSrc))
  const showExternalCta = ctaHref && isGohighlevelUrlConfigured(ctaHref)

  return (
    <section
      id={id}
      className={cn("scroll-mt-28 border-b border-m2m-gold/15 py-20 md:py-28", className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <M2mContainer className="max-w-3xl">
        {/* Eyebrow */}
        <p
          className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.7rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Quick Assessment
        </p>
        <h2
          id={id ? `${id}-heading` : undefined}
          className="m2m-section-title text-center text-m2m-cream text-balance"
        >
          {title}
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-m2m-gold/60" aria-hidden />
        {description ? (
          <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-m2m-cream/90 sm:text-base font-sans">
            {description}
          </div>
        ) : null}

        {showEmbed ? (
          <div className="mt-12 overflow-hidden rounded-sm border border-m2m-gold/30 bg-m2m-deep/50 shadow-[0_32px_80px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/[0.04]">
            <div className="relative aspect-[4/3] w-full min-h-[460px] sm:min-h-[520px]">
              <iframe
                src={embedSrc}
                title={title}
                className="absolute inset-0 h-full w-full border-0"
                allow="clipboard-write"
              />
            </div>
          </div>
        ) : null}

        {!showEmbed && children ? <div className="mt-12">{children}</div> : null}

        {!showEmbed && !children && showExternalCta ? (
          <div className="mt-12 flex justify-center">
            <Button asChild variant="m2mGold" size="lg" className="min-h-12 px-10">
              <Link href={ctaHref!} target="_blank" rel="noreferrer">
                {ctaLabel}
              </Link>
            </Button>
          </div>
        ) : null}

        {!showEmbed && !children && !showExternalCta ? (
          <p className="mx-auto mt-12 max-w-xl rounded-sm border border-dashed border-m2m-gold/35 bg-m2m-deep/30 px-6 py-5 text-center text-sm text-m2m-cream/80 font-sans">
            Quiz connection is almost ready — we&apos;ll drop in the GoHighLevel embed URL in{" "}
            <code className="text-m2m-gold-lt">lib/m2m-site.ts</code> when marketing provides it.
          </p>
        ) : null}

        {footnote ? (
          <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-m2m-cream/60 font-sans">
            {footnote}
          </p>
        ) : null}
      </M2mContainer>
    </section>
  )
}
