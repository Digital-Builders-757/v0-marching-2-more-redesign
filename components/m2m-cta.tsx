import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { getConsultationRequestUrl } from "@/lib/m2m-site"

export type M2mConsultationCtaVariant = "gold" | "outlineCream"

export type M2mConsultationCtaProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string
  variant?: M2mConsultationCtaVariant
}

const variantClass: Record<M2mConsultationCtaVariant, string> = {
  gold: "rounded-sm bg-m2m-gold text-m2m-deep hover:bg-m2m-gold-lt",
  outlineCream:
    "rounded-sm border border-m2m-cream/90 bg-transparent text-m2m-cream hover:bg-m2m-cream/10",
}

export function M2mConsultationCta({
  href = getConsultationRequestUrl(),
  variant = "gold",
  className,
  children = "BOOK A HOME CONSULTATION",
  ...props
}: M2mConsultationCtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center px-5 py-3 text-center text-[0.62rem] font-medium uppercase tracking-[0.2em] transition font-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

/** Shared classes for `Link` or `<a>` secondary CTAs on green sections. */
export const m2mOutlineGoldLinkClass =
  "inline-flex min-h-11 items-center justify-center border border-m2m-gold px-6 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-m2m-cream transition hover:bg-m2m-gold/10 font-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold"

/** Outline gold on green — in-page secondary CTAs on campaign pages. */
export function M2mOutlineGoldCta({
  className,
  ...props
}: ComponentProps<"a">) {
  return <a className={cn(m2mOutlineGoldLinkClass, className)} {...props} />
}
