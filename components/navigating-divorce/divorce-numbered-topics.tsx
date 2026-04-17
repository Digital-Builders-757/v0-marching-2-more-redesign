import { NUMBERED_TOPICS } from "./content"

export function DivorceNumberedTopics() {
  return (
    <section className="border-b border-m2m-gold/15 bg-m2m-panel px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-10">
        {NUMBERED_TOPICS.map((item) => (
          <article key={item.n} className="relative pl-0 lg:pl-2">
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <span
                className="text-[3.25rem] font-medium leading-none text-m2m-cream/90 lg:text-[3.75rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.n}
              </span>
              <h2
                className="max-w-[14rem] text-xl font-semibold leading-tight text-m2m-cream lg:text-[1.35rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-m2m-cream/85" style={{ fontFamily: "var(--font-sans)" }}>
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
