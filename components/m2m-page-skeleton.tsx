/**
 * Lightweight branded placeholders for route transitions and deferred home sections.
 * Keeps layout stable (reduces blank flashes) without pulling client-only UI.
 */
export function M2mRouteLoading() {
  return (
    <div
      className="flex min-h-[100dvh] flex-col bg-m2m-panel"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-20 w-full shrink-0 border-b border-m2m-gold/15 bg-m2m-panel" />
      <div className="flex flex-1 flex-col px-4 py-8 sm:px-6">
        <div className="mx-auto w-full max-w-3xl animate-pulse space-y-4 pt-16">
          <div className="h-3 w-24 rounded-sm bg-m2m-gold/25" />
          <div className="h-14 w-full max-w-lg rounded-sm bg-m2m-cream/10" />
          <div className="h-24 w-full max-w-xl rounded-sm bg-m2m-cream/10" />
          <div className="h-12 w-40 rounded-sm bg-m2m-cream/10" />
        </div>
      </div>
    </div>
  )
}

/** Approximates a white “band” section height so the home page does not jump when chunks hydrate. */
export function M2mHomeSectionSkeleton() {
  return (
    <div className="bg-white py-16 md:py-24" aria-hidden>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl animate-pulse space-y-4">
          <div className="h-3 w-28 rounded bg-m2m-gold/30" />
          <div className="h-10 w-full max-w-md rounded bg-m2m-deep/10" />
          <div className="h-24 w-full rounded bg-m2m-deep/10" />
          <div className="h-12 w-48 rounded bg-m2m-deep/12" />
        </div>
      </div>
    </div>
  )
}
