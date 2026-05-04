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
import { M2mConsultationCta } from "@/components/m2m-cta"
import { M2mContainer } from "@/components/m2m-layout"
import {
  getConsultationRequestUrl,
  M2M_PHONE_DISPLAY,
  M2M_PHONE_HREF,
} from "@/lib/m2m-site"
import { cn } from "@/lib/utils"

import Link from "next/link"

import { HERO_SLIDES, INVESTOR_TOOLS_SECTION_ID, INVESTMENTS_HERO_INTRO } from "./content"
import { HeroSlideContent } from "./investments-hero-slides"

function HeroCarouselInner() {
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
    <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="w-full">
      <div className="relative overflow-hidden">
        <CarouselContent className="-ml-0">
          {HERO_SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full pl-0">
              <HeroSlideContent slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="ghost"
          className={cn(
            "absolute left-1 top-1/2 z-20 size-11 -translate-y-1/2 rounded-full border-0 bg-m2m-deep/25 text-m2m-gold shadow-none backdrop-blur-[2px] touch-manipulation",
            "hover:bg-m2m-deep/45 hover:text-m2m-gold-lt",
            "disabled:opacity-30",
          )}
        />
        <CarouselNext
          variant="ghost"
          className={cn(
            "absolute right-1 top-1/2 z-20 size-11 -translate-y-1/2 rounded-full border-0 bg-m2m-deep/25 text-m2m-gold shadow-none backdrop-blur-[2px] touch-manipulation",
            "hover:bg-m2m-deep/45 hover:text-m2m-gold-lt",
            "disabled:opacity-30",
          )}
        />
      </div>
      <div
        className="flex justify-center gap-2.5 pb-1 pt-5"
        role="tablist"
        aria-label="Hero slides"
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${s.id.replace(/-/g, " ")}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-m2m-panel"
            onClick={() => api?.scrollTo(i)}
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition-all duration-300",
                i === current
                  ? "scale-110 border-m2m-gold bg-m2m-gold shadow-[0_0_12px_rgba(205,176,95,0.45)]"
                  : "border-m2m-cream/45 bg-m2m-cream/20 hover:border-m2m-gold/50 hover:bg-m2m-cream/35",
              )}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </Carousel>
  )
}

export function InvestmentsHero() {
  return (
    <section
      className="border-b border-m2m-gold/15 bg-m2m-panel pb-16 pt-12 lg:pb-24 lg:pt-16"
      aria-labelledby="investments-hero-heading"
    >
      <M2mContainer>
        <p className="mb-4 m2m-eyebrow-gold sm:mb-5 lg:max-w-xl">Real estate investing</p>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <div className="max-w-xl lg:pr-4">
            <h1
              id="investments-hero-heading"
              className="text-[clamp(2rem,4.5vw,3.35rem)] font-medium leading-[1.12] tracking-tight text-m2m-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {INVESTMENTS_HERO_INTRO.headline}
            </h1>
            <p
              className="mt-7 max-w-lg text-base leading-[1.75] text-m2m-cream/88 sm:text-[1.05rem]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {INVESTMENTS_HERO_INTRO.subhead}
            </p>
            <p className="mt-6">
              <Link
                href={`#${INVESTOR_TOOLS_SECTION_ID}`}
                className="inline-flex min-h-11 items-center text-sm font-medium text-m2m-gold-lt underline decoration-m2m-gold/45 underline-offset-[6px] transition hover:text-m2m-cream font-nav"
              >
                Investor tools & calculators
              </Link>
            </p>
            <div className="mt-10">
              <M2mConsultationCta
                variant="gold"
                className={cn(
                  "w-full max-w-sm px-8 text-[0.6rem] sm:inline-flex sm:max-w-none sm:w-auto sm:min-w-[260px]",
                )}
                data-m2m-track="consultation_request"
                data-m2m-track-loc="investments_hero"
              >
                Book investor consultation
              </M2mConsultationCta>
              <p className="m2m-quiet-action-row">
                <a href={M2M_PHONE_HREF} data-m2m-track="investments_phone_hero" data-m2m-track-loc="investments_hero">
                  Call {M2M_PHONE_DISPLAY}
                </a>
                <span className="text-m2m-cream/35" aria-hidden>
                  ·
                </span>
                <Link
                  href="/contact-us?intent=buyer"
                  data-m2m-track="investments_contact_hero"
                  data-m2m-track-loc="investments_hero"
                >
                  Contact online
                </Link>
                <span className="text-m2m-cream/35" aria-hidden>
                  ·
                </span>
                <Link href={getConsultationRequestUrl()}>Schedule a consultation</Link>
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div
              className={cn(
                "relative rounded-sm",
                "border-2 border-m2m-gold/35 bg-m2m-deep/30 p-1 shadow-[0_24px_48px_rgba(0,0,0,0.35)]",
                "lg:border-4 lg:border-white lg:bg-white lg:p-2 lg:shadow-[0_28px_64px_rgba(0,0,0,0.4)]",
              )}
            >
              <div className="overflow-hidden rounded-sm ring-1 ring-m2m-gold/25 lg:ring-m2m-gold/30">
                <HeroCarouselInner />
              </div>
            </div>
          </div>
        </div>
      </M2mContainer>
    </section>
  )
}
