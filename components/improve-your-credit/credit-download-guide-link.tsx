"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { DOWNLOAD_GUIDE_CTA, getCreditPlaybookHref } from "./content"

type CreditDownloadGuideLinkProps = {
  className?: string
}

export function CreditDownloadGuideLink({ className }: CreditDownloadGuideLinkProps) {
  const pathname = usePathname()
  const href = getCreditPlaybookHref(pathname)

  return (
    <Link href={href} className={className}>
      {DOWNLOAD_GUIDE_CTA}
    </Link>
  )
}
