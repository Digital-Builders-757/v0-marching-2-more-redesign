export function HomeTrustRow() {
  return (
    <section
      className="bg-m2m-black/80 border-y border-m2m-gold/15 px-6 py-6 md:py-8"
      aria-label="Credentials"
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-m2m-cream/90">
        <span style={{ fontFamily: "var(--font-nav)" }}>Veteran Owned</span>
        <span className="hidden sm:inline text-m2m-gold/40" aria-hidden>
          |
        </span>
        <span style={{ fontFamily: "var(--font-nav)" }}>Equal Housing Opportunity</span>
        <span className="hidden sm:inline text-m2m-gold/40" aria-hidden>
          |
        </span>
        <span style={{ fontFamily: "var(--font-nav)" }}>Realtor®</span>
      </div>
    </section>
  )
}
