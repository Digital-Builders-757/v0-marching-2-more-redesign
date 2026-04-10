import Link from "next/link"

/** Wix parity: CTA cluster on /our-team. */
export function TeamCTA() {
  return (
    <section
      className="px-6 py-20 md:px-16 lg:px-24"
      style={{ backgroundColor: "#050d06" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2
          className="font-light italic text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-m2m-cream mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Have a question?
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-m2m-gold text-m2m-deep text-[0.7rem] tracking-[0.2em] uppercase font-medium px-10 py-4 transition hover:bg-m2m-gold-lt"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
