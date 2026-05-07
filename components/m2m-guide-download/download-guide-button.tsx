import type { ReactNode } from "react"

import {
  DOWNLOAD_GUIDE_BUTTON_LABEL,
  M2M_GUIDE_FORM_SECTION_ID,
} from "@/lib/m2m-guide-download"
import { cn } from "@/lib/utils"

const VARIANT_CLASSES = {
  heroGold:
    "inline-flex min-h-[52px] w-full items-center justify-center bg-m2m-gold px-10 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-m2m-deep shadow-[0_8px_24px_rgba(205,176,95,0.25)] transition hover:bg-m2m-gold-lt sm:w-auto",
} as const

export type DownloadGuideButtonVariant = keyof typeof VARIANT_CLASSES

export type DownloadGuideButtonProps = {
  href?: string
  variant?: DownloadGuideButtonVariant
  className?: string
  children?: ReactNode
}

/**
 * Scroll target for “download the guide” funnels — defaults to the shared `#guide-form` anchor.
 */
export function DownloadGuideButton({
  href = `#${M2M_GUIDE_FORM_SECTION_ID}`,
  variant = "heroGold",
  className,
  children = DOWNLOAD_GUIDE_BUTTON_LABEL,
}: DownloadGuideButtonProps) {
  return (
    <a
      href={href}
      className={cn(VARIANT_CLASSES[variant], className)}
      style={{ fontFamily: "var(--font-nav)" }}
    >
      {children}
    </a>
  )
}
