import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

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
