import { VIDEO_HEADING, VIDEO_SUBHEAD, YOUTUBE_EMBED_SRC } from "./content"

export function CreditVideo() {
  return (
    <section
      className="border-b border-m2m-gold/15 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="credit-video-heading"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2
          id="credit-video-heading"
          className="text-2xl font-medium text-m2m-cream sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {VIDEO_HEADING}
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-m2m-cream/85 sm:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {VIDEO_SUBHEAD}
        </p>

        <div className="mt-10 overflow-hidden rounded-lg ring-1 ring-m2m-gold/25 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-video w-full bg-m2m-deep">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={YOUTUBE_EMBED_SRC}
              title="Marching 2 More — crushing credit (video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
