import Link from "next/link"

export function HomeContactPrompt() {
  return (
    <section className="bg-m2m-panel/30 px-6 py-10 md:py-12 border-b border-m2m-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <Link
          href="/contact-us"
          className="group inline-flex items-center gap-2 text-lg md:text-xl font-light text-m2m-cream hover:text-m2m-gold transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Have a question? Contact Us
          <span
            className="text-m2m-gold transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            ▸
          </span>
        </Link>
      </div>
    </section>
  )
}
