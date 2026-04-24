"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import type { SubmitLeadWarningCode } from "@/lib/ghl/types"
import { M2M_PHONE_DISPLAY, M2M_PHONE_HREF } from "@/lib/m2m-site"

function warningCopy(w: SubmitLeadWarningCode): { title: string; body: string } {
  switch (w) {
    case "tags_failed":
      return {
        title: "Saved — tags didn’t apply automatically",
        body: "Your contact details were saved, but we couldn’t apply routing tags in the background. Our team can add them manually — share your reference ID if you reach out.",
      }
    case "opportunity_failed":
      return {
        title: "Saved — pipeline card didn’t create",
        body: "Your contact details were saved, but we couldn’t create the opportunity card in our pipeline system. We still received your request — call or message us with your reference if you want confirmation right away.",
      }
    case "note_failed":
      return {
        title: "Saved — your message note didn’t attach",
        body: "Your contact details were saved, but we couldn’t attach your full message as a note. If your message was important, reply to our follow-up or call us with your reference below.",
      }
    default:
      return {
        title: "Saved — one follow-up step needs attention",
        body: "Your request was received, but something on our side needs a quick manual fix. You can still reach us directly if you’d like faster confirmation.",
      }
  }
}

export type M2mLeadSubmitWarningsVariant = "onLight" | "onDark"

/** Shown after successful submit when the API returned non-fatal `warnings`. */
export function M2mLeadSubmitWarnings({
  warnings,
  correlationId,
  variant,
  className,
}: {
  warnings: SubmitLeadWarningCode[]
  correlationId: string
  variant: M2mLeadSubmitWarningsVariant
  className?: string
}) {
  if (!warnings.length) return null

  const shell =
    variant === "onDark"
      ? "border-amber-400/30 bg-m2m-black/25 text-m2m-cream/95 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.35)]"
      : "border-amber-600/20 bg-amber-50/95 text-m2m-deep shadow-[0_1px_0_rgba(0,0,0,0.04),0_2px_16px_-6px_rgba(180,83,9,0.12)]"

  const linkCls =
    variant === "onDark"
      ? "text-m2m-cream underline-offset-[3px] hover:text-m2m-gold hover:underline"
      : "text-m2m-deep underline-offset-[3px] hover:text-m2m-gold hover:underline"

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("rounded-xl border px-4 py-4 sm:px-5 sm:py-[1.125rem]", shell, className)}
    >
      <p
        className={cn(
          "text-[0.62rem] font-medium uppercase tracking-[0.2em] font-nav",
          variant === "onDark" ? "text-amber-200/95" : "text-amber-900/85",
        )}
      >
        Heads up
      </p>
      <ul
        className={cn(
          "mt-3 list-outside list-disc space-y-3 pl-[1.1rem] text-sm leading-[1.55] font-sans",
          variant === "onDark" ? "marker:text-amber-300/50" : "marker:text-amber-700/45",
        )}
      >
        {warnings.map((w) => {
          const c = warningCopy(w)
          return (
            <li key={w} className="pl-1">
              <span
                className={cn(
                  "font-semibold [text-wrap:pretty]",
                  variant === "onDark" ? "text-m2m-cream/95" : "text-m2m-deep/95",
                )}
              >
                {c.title}
              </span>
              <span
                className={cn(
                  "mt-1.5 block [text-wrap:pretty]",
                  variant === "onDark" ? "text-m2m-cream/88" : "text-m2m-deep/88",
                )}
              >
                {c.body}
              </span>
            </li>
          )
        })}
      </ul>
      <div
        className={cn(
          "mt-4 rounded-md px-3 py-2.5",
          variant === "onDark" ? "bg-m2m-black/30 ring-1 ring-m2m-cream/10" : "bg-white/80 ring-1 ring-amber-900/10",
        )}
      >
        <p
          className={cn(
            "text-[0.62rem] font-medium uppercase tracking-[0.14em]",
            variant === "onDark" ? "text-m2m-cream/65" : "text-m2m-deep/60",
          )}
        >
          Reference
        </p>
        <p
          className={cn(
            "mt-1 text-[0.72rem] leading-relaxed font-mono tracking-wide [overflow-wrap:anywhere] break-all tabular-nums",
            variant === "onDark" ? "text-m2m-cream/90" : "text-m2m-deep/95",
          )}
        >
          {correlationId}
        </p>
      </div>
      <p className={cn("mt-3 text-sm font-sans", variant === "onDark" ? "text-m2m-cream/88" : "text-m2m-deep/85")}>
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
    </div>
  )
}
