import Image from "next/image"
import Link from "next/link"

import {
  CALENDLY_BOOK_URL,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"

type AgentProfileProps = {
  name: string
  subtitle: string
  image: string
  bio: string
}

export function AgentProfile({ name, subtitle, image, bio }: AgentProfileProps) {
  return (
    <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
      <section className="px-6 pt-24 pb-12 md:px-16 lg:px-24" style={{ backgroundColor: "#050d06" }}>
        <div className="mx-auto max-w-5xl">
          <p
            className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Agent Profile
          </p>
          <h1
            className="mt-4 font-light text-[clamp(2.5rem,5vw,4rem)] text-m2m-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h1>
          <p className="mt-4 text-sm text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
            {subtitle}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[280px_1fr]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-m2m-deep/10 bg-white">
            <Image src={image} alt={name} fill className="object-cover" sizes="(min-width: 768px) 280px, 100vw" />
          </div>

          <div>
            <p className="text-sm leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
              {bio}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:bg-m2m-gold-lt"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                BOOK A HOME CONSULTATION
              </a>

              <a
                href={M2M_PHONE_HREF}
                className="inline-flex items-center justify-center border border-m2m-deep/20 bg-white text-m2m-deep text-[0.62rem] tracking-[0.2em] uppercase font-medium px-5 py-3 rounded-sm transition hover:border-m2m-gold/50"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Call {M2M_PHONE_DISPLAY}
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center text-[0.62rem] tracking-[0.2em] uppercase font-medium text-m2m-deep hover:text-m2m-gold"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Introduce Yourself
              </Link>
            </div>

            <div className="mt-10">
              <Link
                href="/our-team"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-deep transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Back to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
