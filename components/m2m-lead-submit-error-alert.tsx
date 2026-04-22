"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { getLeadSubmitFailureMessaging } from "@/lib/m2m-lead-submit-error-copy"
import type { SubmitLeadFailure } from "@/lib/ghl/types"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

export type M2mLeadSubmitErrorVariant = "onLight" | "onDark"

export function M2mLeadSubmitErrorAlert({
  failure,
  variant,
  className,
  showContactLink = true,
}: {
  failure: SubmitLeadFailure
  variant: M2mLeadSubmitErrorVariant
  className?: string
  /** When false, omit phone / contact row (e.g. embedded contexts with their own CTAs). */
  showContactLink?: boolean
}) {
  const m = getLeadSubmitFailureMessaging(failure)

  const shell =
    variant === "onDark"
      ? "border-m2m-gold/30 bg-m2m-deep/50 text-m2m-cream shadow-[inset_0_1px_0_rgba(205,176,95,0.12)] backdrop-blur-[2px]"
      : "border-m2m-deep/10 bg-white text-m2m-deep shadow-[0_2px_16px_-4px_rgba(5,13,6,0.1)]"

  const eyebrowCls =
    variant === "onDark" ? "text-m2m-gold/95" : "text-m2m-gold-dim"
  const dividerCls = variant === "onDark" ? "border-m2m-cream/12" : "border-m2m-deep/10"
  const linkCls =
    variant === "onDark"
      ? "text-m2m-cream underline-offset-[3px] hover:text-m2m-gold hover:underline"
      : "text-m2m-deep underline-offset-[3px] hover:text-m2m-gold hover:underline"

  const showPaths = showContactLink && m.showEscalationPath

  const nextStepBorder =
    variant === "onDark" ? "border-l-m2m-gold/40" : "border-l-m2m-gold/50"
  const nextStepMuted = variant === "onDark" ? "text-m2m-cream/88" : "text-m2m-deep/88"

  const refWell =
    variant === "onDark"
      ? "bg-m2m-black/25 ring-1 ring-m2m-cream/10"
      : "bg-m2m-cream/80 ring-1 ring-m2m-deep/8"

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "rounded-xl border px-4 py-4 sm:px-5 sm:py-[1.125rem]",
        shell,
        className,
      )}
    >
      <p className={cn("text-[0.62rem] font-medium uppercase tracking-[0.2em] font-nav", eyebrowCls)}>
        {m.eyebrow}
      </p>
      <p className="mt-2 text-[0.98rem] font-medium leading-snug font-sans">{m.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-pretty font-sans opacity-[0.96]">{m.body}</p>

      {m.nextStep ? (
        <div
          className={cn(
            "mt-3 border-l-2 pl-3.5",
            nextStepBorder,
            nextStepMuted,
          )}
        >
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] font-nav opacity-90">What you can do</p>
          <p className="mt-1 text-sm leading-relaxed font-sans">{m.nextStep}</p>
        </div>
      ) : null}

      {showPaths ? (
        <p
          className={cn(
            "mt-4 border-t pt-3.5 text-sm leading-relaxed font-sans",
            dividerCls,
            variant === "onDark" ? "text-m2m-cream/90" : "text-m2m-deep/85",
          )}
        >
          <a href={M2M_PHONE_HREF} className={linkCls}>
            {M2M_PHONE_DISPLAY}
          </a>
          <span className="mx-2 opacity-45" aria-hidden>
            ·
          </span>
          <Link href="/contact-us" className={linkCls}>
            Contact us
          </Link>
        </p>
      ) : null}

      {m.referenceId ? (
        <div
          className={cn(
            "mt-4 border-t pt-3.5 font-sans",
            dividerCls,
            variant === "onDark" ? "text-m2m-cream/70" : "text-m2m-deep/55",
          )}
        >
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.14em]">Reference</p>
          <div className={cn("mt-2 rounded-md px-3 py-2", refWell)}>
            <p className="font-mono text-[0.72rem] leading-relaxed tracking-wide break-all text-left select-all">
              {m.referenceId}
            </p>
          </div>
          <p className="mt-2 text-[0.68rem] leading-snug opacity-90">
            If you call or email, share this so we can match your request quickly.
          </p>
        </div>
      ) : null}
    </div>
  )
}
