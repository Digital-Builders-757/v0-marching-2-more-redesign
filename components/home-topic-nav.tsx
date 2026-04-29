import Link from "next/link"

import { M2mContainer } from "@/components/m2m-layout"
import { M2M_HOME_TOPIC_LINKS } from "@/lib/m2m-content-clusters"

export function HomeTopicNav() {
  return (
    <section className="border-t border-m2m-deep/8 bg-m2m-cream/35 py-10 sm:py-12" aria-labelledby="home-topic-nav-heading">
      <M2mContainer>
        <h2
          id="home-topic-nav-heading"
          className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-m2m-gold"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          How we help in Hampton Roads
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-m2m-deep/80"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Jump to the scenario, tool, or proof that matches you — same team across every page.
        </p>
        <nav
          aria-label="Popular real estate topics"
          className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5"
        >
          {M2M_HOME_TOPIC_LINKS.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              data-m2m-track="home_topic_link"
              data-m2m-track-loc={l.href}
              className="inline-flex min-h-10 items-center rounded-sm px-1 py-2 text-xs text-m2m-deep underline decoration-m2m-gold/40 underline-offset-[5px] transition-colors hover:text-m2m-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-m2m-panel sm:text-sm font-sans"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </M2mContainer>
    </section>
  )
}
