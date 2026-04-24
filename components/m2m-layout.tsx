import type { ComponentProps, CSSProperties } from "react"

import { cn } from "@/lib/utils"

/**
 * Editorial full-bleed hero (home, buy, sell, partners, blog): readable text without a flat /90 mud veil.
 * Import this for any large photo hero that duplicated these stops.
 */
export const M2M_HOME_HERO_SCRIM_STYLE: CSSProperties = {
  background:
    "linear-gradient(to right, rgba(5,13,6,0.68) 0%, rgba(5,13,6,0.46) 36%, rgba(5,13,6,0.2) 62%, rgba(5,13,6,0.08) 100%), linear-gradient(to bottom, rgba(5,13,6,0.24) 0%, transparent 42%, transparent 68%, rgba(5,13,6,0.32) 100%)",
}

/** Inset-card heroes (`M2mInsetHeroFrame`): warm `m2m-deep` (#0a1a0c), photo-forward, mobile-friendly. */
export const M2M_INSET_HERO_LUMINOUS_SCRIM_STYLE: CSSProperties = {
  background:
    "linear-gradient(to right, rgba(10,26,12,0.3) 0%, rgba(10,26,12,0.17) 42%, rgba(10,26,12,0.08) 68%, rgba(10,26,12,0.04) 100%), linear-gradient(to bottom, rgba(10,26,12,0.12) 0%, transparent 40%, transparent 70%, rgba(10,26,12,0.16) 100%)",
}

/** Full-bleed band over photography (e.g. page bottom CTAs) — same family as luminous, not flat /80. */
export const M2M_PHOTO_BAND_SCRIM_STYLE: CSSProperties = {
  background:
    "linear-gradient(to bottom, rgba(10,26,12,0.26) 0%, rgba(10,26,12,0.4) 45%, rgba(10,26,12,0.5) 100%), linear-gradient(to right, rgba(10,26,12,0.18) 0%, transparent 50%, rgba(10,26,12,0.12) 100%)",
}

export type M2mInsetHeroScrimVariant = "home" | "luminous" | "60" | "70" | "75" | "80"

const insetHeroScrimSolid: Record<Exclude<M2mInsetHeroScrimVariant, "home" | "luminous">, string> = {
  "60": "bg-m2m-black/60",
  "70": "bg-m2m-black/70",
  "75": "bg-m2m-black/75",
  "80": "bg-m2m-black/80",
}

/** Rounded “card” hero shell: ~95% width, max width, ring — use with `M2mInsetHeroScrim` + content at `relative z-10`. */
export function M2mInsetHeroFrame({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[min(95%,100%)] max-w-[1600px] overflow-hidden rounded-xl shadow-[0_2px_28px_-6px_rgba(5,13,6,0.18)] ring-1 ring-m2m-black/10",
        className,
      )}
      {...props}
    />
  )
}

export function M2mInsetHeroScrim({
  variant,
  className,
}: {
  variant: M2mInsetHeroScrimVariant
  className?: string
}) {
  if (variant === "home") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
        style={M2M_HOME_HERO_SCRIM_STYLE}
        aria-hidden
      />
    )
  }
  if (variant === "luminous") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
        style={M2M_INSET_HERO_LUMINOUS_SCRIM_STYLE}
        aria-hidden
      />
    )
  }
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[1]",
        insetHeroScrimSolid[variant],
        className,
      )}
      aria-hidden
    />
  )
}

export function M2mContainer({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
}

const sectionSurface: Record<
  "light" | "panel" | "black" | "transparent",
  string
> = {
  light: "bg-white text-m2m-deep",
  panel: "bg-m2m-panel text-m2m-cream",
  black: "bg-m2m-black text-m2m-cream",
  transparent: "",
}

export type M2mSectionVariant = keyof typeof sectionSurface

const sectionY: Record<"default" | "tight", string> = {
  default: "py-16 md:py-20",
  tight: "py-10 md:py-14",
}

export function M2mSection({
  variant = "transparent",
  density = "default",
  className,
  ...props
}: ComponentProps<"section"> & { variant?: M2mSectionVariant; density?: "default" | "tight" }) {
  return (
    <section
      className={cn(
        sectionY[density],
        sectionSurface[variant],
        className,
      )}
      {...props}
    />
  )
}

export type M2mProseTone = "onLight" | "onDark"

export function M2mProse({
  tone = "onLight",
  className,
  ...props
}: ComponentProps<"div"> & { tone?: M2mProseTone }) {
  return (
    <div
      className={cn(
        "max-w-3xl text-pretty",
        "[&_p]:mb-4 [&_p]:last:mb-0",
        "[&_ul]:mb-4 [&_ul]:list-outside [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-m2m-gold/50",
        "[&_ol]:mb-4 [&_ol]:list-outside [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:my-1.5",
        "[&_a]:underline [&_a]:decoration-m2m-gold/45 [&_a]:underline-offset-[3px] [&_a]:transition-colors",
        tone === "onLight" && "text-m2m-deep/90 [&_a]:text-m2m-deep/95 hover:[&_a]:text-m2m-gold",
        tone === "onDark" && "text-m2m-cream/90 [&_a]:text-m2m-cream/95 hover:[&_a]:text-m2m-gold",
        className,
      )}
      {...props}
    />
  )
}
