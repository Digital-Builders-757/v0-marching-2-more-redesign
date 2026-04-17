"use client"

import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

import { INVESTMENTS_TESTIMONIALS } from "./content"

export function InvestmentsTestimonials() {
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
      className="border-b border-m2m-gold/15 bg-m2m-panel py-20 lg:py-28"
      aria-labelledby="investments-testimonials-heading"
    >
      <h2 id="investments-testimonials-heading" className="sr-only">
        Client testimonials
      </h2>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="w-full">
          <div className="relative min-h-[280px] sm:min-h-[300px]">
            <CarouselContent className="-ml-0">
              {INVESTMENTS_TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="basis-full pl-0">
                  <blockquote className="flex flex-col items-center px-4 text-center sm:px-12 md:px-16">
                    <span
                      className="mb-10 text-[5rem] leading-[0.85] text-m2m-cream/85 sm:mb-12 sm:text-[6rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                      aria-hidden
                    >
                      “
                    </span>
                    <p
                      className="max-w-2xl text-lg font-normal italic leading-[1.65] text-m2m-cream sm:text-xl md:text-[1.35rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t.quote}
                    </p>
                    <footer
                      className="mt-10 text-sm font-medium uppercase tracking-[0.12em] text-m2m-gold-lt sm:mt-12"
                      style={{ fontFamily: "var(--font-nav)" }}
                    >
                      {t.name}
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className={cn(
                "absolute left-0 top-[42%] z-10 size-10 -translate-y-1/2 border-0 bg-transparent text-m2m-cream/90 shadow-none",
                "hover:bg-white/5 hover:text-m2m-cream md:-left-3",
              )}
            />
            <CarouselNext
              variant="ghost"
              className={cn(
                "absolute right-0 top-[42%] z-10 size-10 -translate-y-1/2 border-0 bg-transparent text-m2m-cream/90 shadow-none",
                "hover:bg-white/5 hover:text-m2m-cream md:-right-3",
              )}
            />
          </div>
          <div
            className="mt-12 flex justify-center gap-3 sm:mt-14"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {INVESTMENTS_TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Show testimonial ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border transition-all duration-300",
                  i === current
                    ? "border-m2m-gold bg-m2m-gold"
                    : "border-m2m-cream/55 bg-transparent hover:border-m2m-cream",
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
