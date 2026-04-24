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
      ? "border-amber-400/35 bg-m2m-black/20 text-m2m-cream/95"
      : "border-amber-700/20 bg-amber-50/90 text-m2m-deep"

  const linkCls =
    variant === "onDark"
      ? "text-m2m-cream underline-offset-[3px] hover:text-m2m-gold hover:underline"
      : "text-m2m-deep underline-offset-[3px] hover:text-m2m-gold hover:underline"

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("rounded-xl border px-4 py-3.5 sm:px-5", shell, className)}
    >
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] font-nav opacity-90">
        Heads up
      </p>
      <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed font-sans">
        {warnings.map((w) => {
          const c = warningCopy(w)
          return (
            <li key={w}>
              <span className="font-medium">{c.title}</span>
              <span className="block opacity-95">{c.body}</span>
            </li>
          )
        })}
      </ul>
      <p className="mt-3 text-[0.68rem] leading-snug font-mono break-all opacity-90">
        Reference: {correlationId}
      </p>
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
