"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { M2mContainer } from "@/components/m2m-layout"
import { cn } from "@/lib/utils"

import { GUIDE_CAROUSEL_SLIDES } from "./content"

export function PreForeclosureGuideCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSnap = () => setCurrent(api.selectedScrollSnap())
    onSnap()
    api.on("select", onSnap)
    api.on("reInit", onSnap)
    return () => {
      api.off("select", onSnap)
      api.off("reInit", onSnap)
    }
  }, [api])

  return (
    <section
      className="border-b border-m2m-gold/15 bg-m2m-deep/25 py-14 sm:py-16 lg:py-20"
      aria-labelledby="foreclosure-guide-carousel-heading"
    >
      <M2mContainer className="max-w-4xl">
        <h2
          id="foreclosure-guide-carousel-heading"
          className="text-center text-[clamp(1.35rem,3vw,1.85rem)] font-medium leading-snug text-m2m-cream"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Inside the complimentary guide
        </h2>
        <p
          className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-m2m-cream/78 sm:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Flip through highlights — each slide mirrors topics we cover in clear, plain language.
        </p>

        <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="mt-10 w-full">
          <div className="relative overflow-hidden rounded-sm border border-m2m-gold/25 bg-m2m-panel/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <CarouselContent className="-ml-0">
              {GUIDE_CAROUSEL_SLIDES.map((slide) => (
                <CarouselItem key={slide.id} className="basis-full pl-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[280px]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-m2m-deep/55 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>
                    <blockquote
                      className="flex flex-col justify-center border-t border-m2m-gold/20 bg-m2m-deep/45 px-6 py-8 md:border-l md:border-t-0 md:py-10 md:pl-10 md:pr-8"
                      cite="/facing-foreclosure"
                    >
                      <p
                        className="text-[1.05rem] font-light italic leading-relaxed text-m2m-cream sm:text-[1.15rem]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        &ldquo;{slide.quote}&rdquo;
                      </p>
                      <footer className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-m2m-gold/90">
                        — Guide excerpt
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className={cn(
                "absolute left-2 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border-0 bg-m2m-deep/35 text-m2m-gold shadow-none",
                "hover:bg-m2m-deep/55 hover:text-m2m-gold-lt disabled:opacity-30",
              )}
            />
            <CarouselNext
              variant="ghost"
              className={cn(
                "absolute right-2 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border-0 bg-m2m-deep/35 text-m2m-gold shadow-none",
                "hover:bg-m2m-deep/55 hover:text-m2m-gold-lt disabled:opacity-30",
              )}
            />
          </div>
          <div className="flex justify-center gap-2.5 pb-1 pt-5" role="tablist" aria-label="Guide highlights">
            {GUIDE_CAROUSEL_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border transition-all duration-300",
                  i === current
                    ? "scale-110 border-m2m-gold bg-m2m-gold"
                    : "border-m2m-cream/45 bg-m2m-cream/15 hover:border-m2m-gold/50",
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </Carousel>
      </M2mContainer>
    </section>
  )
}
