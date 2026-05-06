import { cn } from "@/lib/utils"

/**
 * Header chrome approximated for route transitions — avoids a full blank screen
 * and tracks live `Header` (h-20, panel, gold hairline).
 */
function M2mLoadingHeaderBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 h-20 w-full shrink-0 border-b border-m2m-gold/15 bg-m2m-panel pt-[env(safe-area-inset-top,0px)]",
        className,
      )}
      aria-hidden
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="m2m-loading-block h-9 w-28 rounded-sm bg-m2m-cream/18 max-[380px]:w-24" />
        <div className="hidden items-center gap-3 md:flex">
          <div className="m2m-loading-block h-3 w-[4.5rem] rounded-sm bg-m2m-cream/12" />
          <div className="m2m-loading-block h-3 w-[3.25rem] rounded-sm bg-m2m-cream/12" />
          <div className="m2m-loading-block h-10 min-w-[10rem] rounded-sm bg-m2m-gold/28" />
        </div>
        <div className="m2m-loading-block h-11 w-11 shrink-0 rounded-sm bg-m2m-cream/14 md:hidden" />
      </div>
    </div>
  )
}

/** Footer band approximated (dark + columns) so the global shell does not “pop in”. */
function M2mLoadingFooterStub() {
  return (
    <div
      className="mt-auto w-full shrink-0 border-t border-m2m-gold/20 bg-m2m-black pb-[env(safe-area-inset-bottom,0px)]"
      aria-hidden
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="m2m-loading-block h-2.5 w-16 rounded-sm bg-m2m-gold/22" />
              <div className="m2m-loading-block h-2 w-full max-w-[7rem] rounded-sm bg-m2m-cream/12" />
              <div className="m2m-loading-block h-2 w-4/5 max-w-[5.5rem] rounded-sm bg-m2m-cream/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function M2mLoadingHeroBody() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
      <div className="mx-auto min-h-[min(52dvh,520px)] w-full max-w-3xl space-y-5">
        <div className="m2m-loading-block h-2.5 w-24 rounded-sm bg-m2m-gold/35" />
        <div className="m2m-loading-block h-12 w-full max-w-lg rounded-md bg-m2m-deep/[0.08]" />
        <div className="m2m-loading-block h-24 w-full max-w-xl rounded-md bg-m2m-deep/[0.07]" />
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="m2m-loading-block h-12 w-40 rounded-sm bg-m2m-deep/[0.1]" />
          <div className="m2m-loading-block h-12 w-44 rounded-sm bg-m2m-deep/[0.08]" />
        </div>
        <div className="m2m-loading-block h-px w-full max-w-md bg-m2m-deep/[0.06]" />
        <div className="m2m-loading-block h-20 w-full max-w-2xl rounded-md bg-m2m-deep/[0.05]" />
      </div>
    </div>
  )
}

function M2mLoadingContactBody() {
  return (
    <section className="pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="mx-auto w-full max-w-2xl space-y-6 px-4 sm:px-6">
        <div className="m2m-loading-block h-2.5 w-20 rounded-sm bg-m2m-gold/40" />
        <div className="m2m-loading-block h-10 w-full max-w-sm rounded-md bg-m2m-deep/[0.08]" />
        <div className="m2m-loading-block h-16 w-full rounded-md bg-m2m-deep/[0.06]" />
        <div className="space-y-3 rounded-lg border border-m2m-deep/8 bg-m2m-cream/35 p-5">
          <div className="m2m-loading-block h-10 w-full rounded-md bg-white/80" />
          <div className="m2m-loading-block h-10 w-full rounded-md bg-white/80" />
          <div className="m2m-loading-block h-24 w-full rounded-md bg-white/70" />
        </div>
        <div className="m2m-loading-block h-11 w-full max-w-[12rem] rounded-md bg-m2m-deep/[0.12]" />
      </div>
    </section>
  )
}

/**
 * Lightweight branded placeholders for route transitions (`app/loading.tsx`) and Suspense fallbacks.
 * Mirrors core marketing shell: sticky panel header · white body · dark footer band — minimizes color flash vs most routes.
 */
export function M2mRouteLoading() {
  return (
    <div
      className="flex min-h-[100dvh] flex-col bg-white"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading page"
    >
      <M2mLoadingHeaderBar />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-0 flex-1 bg-gradient-to-b from-m2m-cream/30 via-white to-white"
      >
        <M2mLoadingHeroBody />
      </main>
      <M2mLoadingFooterStub />
    </div>
  )
}

/** Contact `/contact-us` Suspense fallback — same shell as route loading, form-shaped body (no duplicate Header/Footer client trees). */
export function M2mContactShellFallback() {
  return (
    <div
      className="flex min-h-[100dvh] flex-col bg-white"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading contact form"
    >
      <M2mLoadingHeaderBar />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-0 flex-1 bg-gradient-to-b from-m2m-cream/30 via-white to-white"
      >
        <M2mLoadingContactBody />
      </main>
      <M2mLoadingFooterStub />
    </div>
  )
}

/**
 * Home dynamic sections (`app/page.tsx`) — matches `M2mSection` default vertical rhythm (~py-14 md:py-20).
 */
export function M2mHomeSectionSkeleton() {
  return (
    <div className="bg-white py-14 md:py-20" aria-hidden>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5">
          <div className="m2m-loading-block h-2.5 w-28 rounded-sm bg-m2m-gold/35" />
          <div className="m2m-loading-block h-9 w-full max-w-md rounded-md bg-m2m-deep/[0.09]" />
          <div className="m2m-loading-block min-h-[5.5rem] w-full rounded-md bg-m2m-deep/[0.07]" />
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="m2m-loading-block h-11 w-36 rounded-md bg-m2m-deep/[0.1]" />
            <div className="m2m-loading-block h-11 w-40 rounded-md bg-m2m-deep/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  )
}
