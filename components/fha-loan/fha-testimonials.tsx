import { TESTIMONIALS } from "./content"

export function FhaTestimonials() {
  return (
    <section className="border-b border-m2m-gold/10 bg-m2m-panel py-16 lg:py-24" aria-labelledby="fha-testimonials-heading">
      <h2 id="fha-testimonials-heading" className="sr-only">
        Client testimonials
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 md:grid-cols-3 md:gap-10 lg:px-8">
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.name} className="flex flex-col items-center text-center">
            <span
              className="mb-6 font-serif text-7xl leading-none text-m2m-cream/90"
              style={{ fontFamily: "var(--font-display)" }}
              aria-hidden
            >
              “
            </span>
            <p
              className="mb-4 text-base font-medium text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.name}
            </p>
            <p className="text-sm leading-relaxed text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
              {t.quote}
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
