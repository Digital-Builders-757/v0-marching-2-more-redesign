"use client"

import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import type { M2mClusterId } from "@/lib/m2m-content-clusters"
import { M2M_CONTENT_CLUSTERS } from "@/lib/m2m-content-clusters"

type Props = {
  cluster: M2mClusterId
  /** Strip same-path link (e.g. current page) to avoid a self-link. Match `href` exactly. */
  omitHref?: string
  id?: string
  /** `onDark` = cream text on green/panel; `onLight` = deep text on white/cream */
  variant?: "onDark" | "onLight"
}

export function M2mRelatedPages({
  cluster,
  omitHref,
  id = "m2m-related-pages-heading",
  variant = "onLight",
}: Props) {
  const def = M2M_CONTENT_CLUSTERS[cluster]
  const links = omitHref ? def.links.filter((l) => l.href !== omitHref) : def.links
  if (!links.length) return null

  const isLight = variant === "onLight"

  return (
    <section
      className={
        isLight
          ? "border-t border-m2m-deep/10 bg-m2m-cream/60 py-12 sm:py-14"
          : "border-t border-m2m-gold/15 bg-m2m-deep/25 py-12 sm:py-14"
      }
      aria-labelledby={id}
    >
      <M2mContainer className="max-w-4xl">
        <p
          className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${isLight ? "text-m2m-gold" : "text-m2m-gold-lt"}`}
          style={{ fontFamily: "var(--font-nav)" }}
        >
          Related on this site
        </p>
        <h2
          id={id}
          className={`mt-3 text-xl font-light sm:text-2xl ${isLight ? "text-m2m-deep" : "text-m2m-cream"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {def.title}
        </h2>
        <p
          className={`mt-2 max-w-2xl text-sm leading-relaxed ${isLight ? "text-m2m-deep/80" : "text-m2m-cream/85"}`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {def.intro}
        </p>
        <p
          className={`mt-3 max-w-2xl text-xs leading-relaxed ${isLight ? "text-m2m-deep/60" : "text-m2m-cream/65"}`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Same veteran-owned team, licensed in Virginia — every link stays on this site.
        </p>
        <nav aria-label={`${def.title} links`} className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              data-m2m-track="related_page"
              data-m2m-track-loc={l.href}
              className={`inline-flex min-h-11 items-center rounded-sm px-0.5 py-2 text-sm underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isLight
                  ? "text-m2m-deep underline decoration-m2m-gold/45 hover:text-m2m-gold focus-visible:outline-m2m-panel"
                  : "text-m2m-cream underline decoration-m2m-gold/40 hover:text-m2m-gold-lt focus-visible:outline-m2m-gold"
              } font-sans touch-manipulation`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </M2mContainer>
    </section>
  )
}
