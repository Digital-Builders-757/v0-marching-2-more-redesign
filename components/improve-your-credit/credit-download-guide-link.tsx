"use client"

import { usePathname } from "next/navigation"

import { DOWNLOAD_GUIDE_CTA, getCreditPlaybookHref } from "./content"

type CreditDownloadGuideLinkProps = {
  className?: string
}

/**
 * Lead-form CTA for `/improve-your-credit`. Always a native `<a>` so `#guide-form` scroll/navigation
 * works reliably (including full-page loads to `/improve-your-credit#guide-form`).
 */
export function CreditDownloadGuideLink({ className }: CreditDownloadGuideLinkProps) {
  const pathname = usePathname()
  const href = getCreditPlaybookHref(pathname)

  return (
    <a href={href} className={className}>
      {DOWNLOAD_GUIDE_CTA}
    </a>
  )
}
