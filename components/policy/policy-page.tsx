import type { ReactNode } from "react"
import Link from "next/link"

import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"

export function PolicyPage({
  title,
  sourceUrl,
  lastUpdated,
  children,
  /** When false, hides the legacy “migrated from Wix” paragraph (full in-repo legal copy only). */
  showLegacyMigrationNotice = true,
}: {
  title: string
  sourceUrl: string
  lastUpdated?: string
  children?: ReactNode
  showLegacyMigrationNotice?: boolean
}) {
  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-clip bg-white">
      <M2mSection variant="light" className="py-12 sm:py-16 md:py-20">
        <M2mContainer className="max-w-4xl">
          <h1
            className="text-pretty text-[clamp(1.85rem,5vw,2.75rem)] font-light leading-[1.15] text-m2m-deep sm:text-[clamp(2rem,4vw,2.75rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {lastUpdated ? (
            <p className="mt-2 text-xs text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              Last updated: {lastUpdated}
            </p>
          ) : null}

          {showLegacyMigrationNotice ? (
            <p
              className="mt-6 max-w-prose text-sm leading-relaxed text-m2m-muted sm:max-w-none sm:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              This page is a migrated copy from our prior Wix site. If you need the canonical source, view it here:{" "}
              <Link
                href={sourceUrl}
                className="font-medium text-m2m-deep underline underline-offset-4 decoration-m2m-gold/55 transition-colors hover:decoration-m2m-gold"
                target="_blank"
                rel="noreferrer"
              >
                {sourceUrl}
              </Link>
              .
            </p>
          ) : null}

          {children ? (
            <div
              className={cn(
                "prose prose-sm sm:prose-base prose-headings:scroll-mt-28 prose-headings:font-normal prose-headings:text-m2m-deep prose-p:text-m2m-deep/90 prose-p:leading-relaxed prose-li:text-m2m-deep/90 prose-li:leading-relaxed prose-a:break-words prose-a:text-m2m-deep prose-a:no-underline prose-a:decoration-m2m-gold/50 prose-a:underline-offset-4 hover:prose-a:underline hover:prose-a:decoration-m2m-gold prose-table:w-full prose-table:text-left prose-th:align-top prose-td:align-top max-w-none",
                showLegacyMigrationNotice ? "mt-10" : "mt-8",
              )}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {children}
            </div>
          ) : null}
        </M2mContainer>
      </M2mSection>
    </main>
  )
}
