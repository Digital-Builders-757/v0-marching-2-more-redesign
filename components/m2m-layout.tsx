import type { ComponentProps, CSSProperties } from "react"

import { cn } from "@/lib/utils"

/** Dual-gradient scrim for home hero readability over photography (matches prior inline treatment). */
export const M2M_HOME_HERO_SCRIM_STYLE: CSSProperties = {
  background:
    "linear-gradient(to right, rgba(5,13,6,0.92) 0%, rgba(5,13,6,0.75) 35%, rgba(5,13,6,0.45) 60%, rgba(5,13,6,0.2) 100%), linear-gradient(to bottom, rgba(5,13,6,0.4) 0%, transparent 40%, transparent 70%, rgba(5,13,6,0.55) 100%)",
}

export type M2mInsetHeroScrimVariant = "home" | "60" | "70" | "75" | "80"

const insetHeroScrimSolid: Record<Exclude<M2mInsetHeroScrimVariant, "home">, string> = {
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
        "relative mx-auto w-[95%] max-w-[1600px] overflow-hidden rounded-xl shadow-[0_2px_28px_-6px_rgba(5,13,6,0.18)] ring-1 ring-m2m-black/10",
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

export function M2mSection({
  variant = "transparent",
  className,
  ...props
}: ComponentProps<"section"> & { variant?: M2mSectionVariant }) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
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
        tone === "onLight" && "text-m2m-deep/90",
        tone === "onDark" && "text-m2m-cream/90",
        className,
      )}
      {...props}
    />
  )
}
