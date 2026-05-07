import type { ReactNode } from "react"
import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { Button } from "@/components/ui/button"
import { isGohighlevelUrlConfigured, isQuizEmbedSrcConfigured } from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

export type M2mLeadQuizSectionProps = {
  id?: string
  /**
   * Upper label above the title. Pass `null` to hide (default is “Quick Assessment”).
   */
  eyebrow?: string | null
  title: string
  description?: ReactNode
  /** When set and URL is live, renders a responsive iframe. */
  embedSrc?: string
  /** Override iframe `title` (a11y + stable e2e); defaults to section `title`. */
  embedTitle?: string
  /** Iframe sizing: embedded quiz strips vs taller full-shell static pages. Defaults to standard. */
  embedVariant?: "standard" | "tall"
  /** External quiz / form page (GHL). Used when embed is not configured or as fallback CTA. */
  ctaHref?: string
  ctaLabel?: string
  footnote?: ReactNode
  className?: string
  children?: ReactNode
}

/**
 * Lead-gen quiz / survey block — embeds when `embedSrc` is https (e.g. GHL) or a `/quizzes/...` static asset,
 * otherwise shows a manual fallback CTA and optional `children` (e.g. local form).
 */
const embedIframeWrapperClasses = {
  standard:
    "relative min-h-[min(62vh,540px)] w-full sm:min-h-[520px] lg:min-h-[540px]",
  tall: "relative min-h-[min(72vh,780px)] w-full sm:min-h-[640px] lg:min-h-[700px]",
} as const

export function M2mLeadQuizSection({
  id,
  eyebrow,
  title,
  description,
  embedSrc,
  embedTitle,
  embedVariant = "standard",
  ctaHref,
  ctaLabel = "Start the quiz",
  footnote,
  className,
  children,
}: M2mLeadQuizSectionProps) {
  const eyebrowText = eyebrow === null ? null : (eyebrow ?? "Quick Assessment")
  const showEmbed = Boolean(embedSrc && isQuizEmbedSrcConfigured(embedSrc))
  const showExternalCta = Boolean(
    ctaHref?.trim() &&
      (isGohighlevelUrlConfigured(ctaHref) || isQuizEmbedSrcConfigured(ctaHref)),
  )
  const variant = embedVariant === "tall" ? "tall" : "standard"

  return (
    <section
      id={id}
      className={cn("scroll-mt-28 border-b border-m2m-gold/10 py-20 md:py-28", className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <M2mContainer className="max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrowText ? (
            <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold sm:text-[0.68rem] font-nav">
              {eyebrowText}
            </p>
          ) : null}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="m2m-section-title text-balance text-m2m-cream"
          >
            {title}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-m2m-gold/60" aria-hidden />
          {description ? (
            <div className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-m2m-cream/90 font-sans">
              {description}
            </div>
          ) : null}
        </div>

        {showEmbed ? (
          <>
            <div className="mx-auto mt-10 max-w-full sm:mt-12">
              <div
                className={cn(
                  "max-w-full overflow-hidden rounded-md border border-m2m-gold/30 bg-gradient-to-b from-m2m-deep/45 to-m2m-deep",
                  "shadow-[0_28px_72px_-12px_rgba(0,0,0,0.4)] ring-1 ring-m2m-gold/25 ring-inset",
                )}
              >
                <div className={cn(embedIframeWrapperClasses[variant])}>
                  <iframe
                    src={embedSrc}
                    title={embedTitle ?? title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full min-h-full rounded-[inherit] border-0 bg-m2m-black/20"
                    allow="clipboard-write"
                  />
                </div>
              </div>
            </div>
            {showExternalCta ? (
              <div className="mt-8 flex justify-center px-1">
                <Button
                  asChild
                  variant="m2mGold"
                  size="lg"
                  className="min-h-12 w-full max-w-sm px-8 sm:w-auto sm:max-w-none"
                >
                  <Link href={ctaHref!} target="_blank" rel="noreferrer">
                    {ctaLabel}
                  </Link>
                </Button>
              </div>
            ) : null}
          </>
        ) : null}

        {!showEmbed && children ? (
          <div className="mx-auto mt-10 max-w-3xl sm:mt-12">{children}</div>
        ) : null}

        {!showEmbed && !children && showExternalCta ? (
          <div className="mt-10 flex justify-center px-1 sm:mt-12">
            <Button
              asChild
              variant="m2mGold"
              size="lg"
              className="min-h-12 w-full max-w-xs px-8 sm:w-auto sm:max-w-none sm:px-10"
            >
              <Link href={ctaHref!} target="_blank" rel="noreferrer">
                {ctaLabel}
              </Link>
            </Button>
          </div>
        ) : null}

        {!showEmbed && !children && !showExternalCta ? (
          <div className="mx-auto mt-10 max-w-xl rounded-md border border-m2m-gold/25 bg-m2m-deep/35 px-5 py-6 text-center text-base leading-relaxed text-m2m-cream/86 font-sans sm:px-6">
            <p>
              This quiz is being handled manually for now. Use the consultation CTA and we’ll walk you through the same
              questions directly.
            </p>
          </div>
        ) : null}

        {footnote ? (
          <p className="mx-auto mt-9 max-w-xl text-center text-xs leading-relaxed text-m2m-cream/65 font-sans sm:mt-10">
            {footnote}
          </p>
        ) : null}
      </M2mContainer>
    </section>
  )
}
