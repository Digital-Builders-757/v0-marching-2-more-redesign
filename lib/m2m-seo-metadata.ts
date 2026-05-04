import type { Metadata } from "next"

export const M2M_SEO_SITE_NAME = "Marching 2 More" as const

export type M2mStandardMetaInput = {
  title: string
  description: string
  /** App Router path, e.g. `/fha-loan` */
  path: string
  /** Share title; defaults to `title` */
  openGraphTitle?: string
}

/**
 * Canonical URL, Open Graph, and Twitter card defaults for marketing pages.
 * Absolute URLs resolve via root `metadataBase` (`lib/m2m-site` / `app/layout.tsx`).
 */
export function m2mStandardMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: M2mStandardMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`
  const ogTitle = openGraphTitle ?? title
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: M2M_SEO_SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  }
}
