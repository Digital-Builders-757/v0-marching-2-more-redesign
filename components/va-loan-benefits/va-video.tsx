import { M2mContainer } from "@/components/m2m-layout"

import { VIDEO_ATTRIBUTION, YOUTUBE_EMBED_SRC } from "./content"

export function VaVideo() {
  return (
    <section
      className="border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-24"
      aria-labelledby="va-video-heading"
    >
      <h2 id="va-video-heading" className="sr-only">
        VA home loan video
      </h2>
      <M2mContainer className="max-w-4xl">
        <div className="overflow-hidden rounded-lg ring-1 ring-m2m-gold/25 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-video w-full bg-m2m-deep">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={YOUTUBE_EMBED_SRC}
              title="In Their Own Words — VA home loan video (U.S. Department of Veterans Affairs)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <p
          className="mt-6 text-center text-sm leading-relaxed text-m2m-cream/88 sm:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {VIDEO_ATTRIBUTION}
        </p>
      </M2mContainer>
    </section>
  )
}
