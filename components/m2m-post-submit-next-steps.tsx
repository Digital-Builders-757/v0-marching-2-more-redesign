import Link from "next/link"

export const M2M_POST_SUBMIT_NEXT_STEP_LINKS: { href: string; label: string }[] = [
  { href: "/home-search", label: "Home search & buyer help" },
  { href: "/sell", label: "Selling hub" },
  { href: "/free-home-valuation", label: "Free valuation" },
  { href: "/cma-form", label: "Request a CMA" },
  { href: "/resources", label: "Guides & checklist" },
  { href: "/reviews", label: "Client reviews" },
  { href: "/contact-us?intent=consultation", label: "Book a consultation" },
]

type Props = {
  variant: "onLight" | "onDark"
  align?: "center" | "start"
  /** Full `href` strings to omit (e.g. current page funnel). */
  omitHrefs?: readonly string[]
}

export function M2mPostSubmitNextSteps({ variant, align = "center", omitHrefs = [] }: Props) {
  const omit = new Set(omitHrefs)
  const links = M2M_POST_SUBMIT_NEXT_STEP_LINKS.filter((l) => !omit.has(l.href))

  const wrap =
    align === "center" ? "text-center" : "text-left"
  const listWrap = align === "center" ? "justify-center" : "justify-start"

  const linkClass =
    variant === "onLight"
      ? "inline-flex min-h-11 items-center text-sm font-medium text-m2m-deep underline decoration-m2m-gold/45 underline-offset-4 transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-deep font-sans touch-manipulation"
      : "inline-flex min-h-11 items-center text-sm font-medium text-m2m-cream underline decoration-m2m-gold/50 underline-offset-4 transition-colors hover:text-m2m-gold-lt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-gold font-sans touch-manipulation"

  const muted = variant === "onLight" ? "text-m2m-deep/65" : "text-m2m-cream/70"

  return (
    <nav aria-label="Next steps on this site" className={`mt-6 ${wrap}`}>
      <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${muted} font-nav`}>
        Explore while you wait
      </p>
      <ul className={`mt-3 flex flex-wrap gap-x-4 gap-y-2 ${listWrap}`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={linkClass}
              data-m2m-track="post_submit_next_step"
              data-m2m-track-loc={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
