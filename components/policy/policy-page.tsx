import Link from "next/link"

export function PolicyPage({
  title,
  sourceUrl,
  lastUpdated,
  children,
}: {
  title: string
  sourceUrl: string
  lastUpdated?: string
  children?: React.ReactNode
}) {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold text-m2m-green">{title}</h1>
      {lastUpdated ? <p className="mt-2 text-xs text-m2m-sage">Last updated: {lastUpdated}</p> : null}

      <p className="mt-6 text-sm leading-relaxed text-m2m-sage">
        This page is a migrated copy from our prior Wix site. If you need the canonical source, view it here:{" "}
        <Link href={sourceUrl} className="underline underline-offset-4" target="_blank" rel="noreferrer">
          {sourceUrl}
        </Link>
        .
      </p>

      {children ? <div className="prose prose-sm mt-10 max-w-none text-m2m-deep">{children}</div> : null}
    </main>
  )
}
