import { EDUCATION_COLUMNS, EDUCATION_HEADING } from "./content"

export function PreForeclosureEducation() {
  return (
    <section
      className="border-t border-m2m-gold/15 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="pre-foreclosure-education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="pre-foreclosure-education-heading"
          className="mx-auto max-w-4xl text-center text-[clamp(1.5rem,3.2vw,2.35rem)] font-medium leading-snug text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {EDUCATION_HEADING}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {EDUCATION_COLUMNS.map((col) => (
            <article
              key={col.title}
              className="flex flex-col rounded-sm border border-m2m-gold/25 bg-m2m-deep/35 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-[1px] sm:p-8"
            >
              <h3
                className="text-lg font-medium leading-snug text-m2m-gold-lt sm:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.title}
              </h3>
              <p
                className="mt-4 max-w-prose text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {col.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
