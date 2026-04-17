import Image from "next/image"

import type { HeroSlide } from "./content"

/** Shared readable uppercase label — matches FHA / divorce marketing scale */
const label = "text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]"
const titleLg =
  "text-center text-sm font-bold uppercase tracking-[0.18em] text-m2m-gold sm:text-base sm:tracking-[0.2em]"

function SlideBrandLockup() {
  return (
    <div className="mt-auto flex flex-col items-center border-t border-m2m-gold/15 pt-5">
      <Image src="/brand/m2m-logo.avif" alt="" width={112} height={36} className="h-9 w-auto opacity-95" />
      <p
        className="mt-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-m2m-gold sm:text-[0.68rem]"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        THE MARCHING 2 MORE
      </p>
      <p className="mt-0.5 text-[0.58rem] text-m2m-cream/88" style={{ fontFamily: "var(--font-nav)" }}>
        Real Estate Team
      </p>
    </div>
  )
}

function IntroSlide({ slide }: { slide: Extract<HeroSlide, { variant: "intro" }> }) {
  return (
    <div className="flex min-h-[min(72vh,580px)] flex-col bg-m2m-panel px-5 py-8 sm:min-h-[560px] sm:px-6 sm:py-9">
      <div className="flex flex-col items-center">
        <Image src="/brand/m2m-logo.avif" alt="" width={72} height={72} className="h-16 w-auto sm:h-[4.25rem]" />
        <p
          className="mt-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-m2m-gold sm:text-[0.75rem]"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          THE MARCHING 2 MORE
        </p>
        <p className="mt-1 text-[0.62rem] text-m2m-cream/88 sm:text-[0.68rem]" style={{ fontFamily: "var(--font-nav)" }}>
          Real Estate Team
        </p>
      </div>
      <h2
        className="mt-8 text-center text-lg font-semibold uppercase leading-[1.25] tracking-[0.08em] text-m2m-gold sm:mt-10 sm:text-xl sm:leading-[1.2]"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.headlineLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[280px] sm:mt-10 sm:max-w-[300px]">
        <Image
          src={slide.centerImage}
          alt={slide.centerImageAlt}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>
      <SlideBrandLockup />
    </div>
  )
}

function FixFlipSlide({ slide }: { slide: Extract<HeroSlide, { variant: "fixFlip" }> }) {
  return (
    <div className="flex min-h-[min(72vh,580px)] flex-col border-[3px] border-m2m-gold bg-m2m-panel px-4 py-7 sm:min-h-[560px] sm:border-4 sm:px-5 sm:py-8">
      <h2 className={titleLg} style={{ fontFamily: "var(--font-nav)" }}>
        {slide.title}
      </h2>
      <div className="mt-6 grid grid-cols-2 items-start gap-3 sm:gap-4">
        <p className={`${label} text-m2m-gold`} style={{ fontFamily: "var(--font-nav)" }}>
          {slide.topLeftText}
        </p>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image src={slide.topRightImage} alt={slide.topRightAlt} fill className="object-cover" sizes="200px" />
        </div>
      </div>
      <p
        className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-m2m-gold sm:text-sm"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.bridgeText}
      </p>
      <div className="relative mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image src={slide.collageLeft} alt={slide.collageLeftAlt} fill className="object-cover" sizes="200px" />
        </div>
        <div className="relative z-10 -ml-2 mt-6 aspect-[3/4] w-[calc(100%+0.5rem)] overflow-hidden border border-m2m-gold/50 sm:-ml-3 sm:mt-10">
          <Image src={slide.collageRight} alt={slide.collageRightAlt} fill className="object-cover" sizes="200px" />
        </div>
      </div>
      <p
        className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-m2m-gold sm:text-sm"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.bridgeText2}
      </p>
      <p
        className={`mt-5 px-1 text-center ${label} text-m2m-gold sm:px-2`}
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.bottomText}
      </p>
      <SlideBrandLockup />
    </div>
  )
}

function MultifamilySlide({ slide }: { slide: Extract<HeroSlide, { variant: "multifamily" }> }) {
  return (
    <div className="flex min-h-[min(72vh,580px)] flex-col bg-m2m-panel px-5 py-8 sm:min-h-[560px] sm:px-6 sm:py-9">
      <h2 className={titleLg} style={{ fontFamily: "var(--font-nav)" }}>
        {slide.title}
      </h2>
      <div className="mt-8 grid grid-cols-2 items-center gap-3 sm:mt-10 sm:gap-4">
        <p className={`${label} pr-1 text-left text-m2m-cream`} style={{ fontFamily: "var(--font-nav)" }}>
          {slide.row1Text}
        </p>
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          <Image src={slide.row1Image} alt={slide.row1Alt} fill className="object-cover" sizes="220px" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 items-center gap-3 sm:mt-10 sm:gap-4">
        <div className="relative aspect-[5/4] w-full overflow-hidden">
          <Image src={slide.row2Image} alt={slide.row2Alt} fill className="object-cover" sizes="220px" />
        </div>
        <p className={`${label} pl-1 text-right text-m2m-gold`} style={{ fontFamily: "var(--font-nav)" }}>
          {slide.row2Text}
        </p>
      </div>
      <p
        className="mt-10 px-1 text-center text-xs font-semibold uppercase leading-relaxed tracking-[0.1em] text-m2m-gold sm:mt-12 sm:px-3 sm:text-sm"
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.summary}
      </p>
      <SlideBrandLockup />
    </div>
  )
}

function ShortTermSlide({ slide }: { slide: Extract<HeroSlide, { variant: "shortTerm" }> }) {
  return (
    <div className="flex min-h-[min(72vh,580px)] flex-col bg-m2m-panel px-5 py-8 sm:min-h-[560px] sm:px-6 sm:py-9">
      <h2
        className="text-center text-base font-semibold uppercase tracking-[0.16em] text-m2m-gold sm:text-lg sm:tracking-[0.2em]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {slide.title}
      </h2>
      <div className="mx-auto mt-6 w-full max-w-[320px] space-y-3 sm:mt-8">
        <div className="relative h-28 w-[58%] overflow-hidden sm:h-32">
          <Image src={slide.imageTop} alt={slide.imageTopAlt} fill className="object-cover" sizes="200px" />
        </div>
        <div className="relative h-44 w-full overflow-hidden sm:h-48">
          <Image src={slide.imageMain} alt={slide.imageMainAlt} fill className="object-cover" sizes="320px" />
        </div>
      </div>
      <p className={`mt-6 text-center ${label} text-m2m-gold`} style={{ fontFamily: "var(--font-nav)" }}>
        {slide.labelA}
      </p>
      <p className={`mt-3 px-1 text-center ${label} text-m2m-gold sm:px-2`} style={{ fontFamily: "var(--font-nav)" }}>
        {slide.labelB}
      </p>
      <p
        className={`mt-3 px-1 text-center ${label} text-m2m-cream/95 sm:px-2`}
        style={{ fontFamily: "var(--font-nav)" }}
      >
        {slide.labelC}
      </p>
      <SlideBrandLockup />
    </div>
  )
}

export function HeroSlideContent({ slide }: { slide: HeroSlide }) {
  switch (slide.variant) {
    case "intro":
      return <IntroSlide slide={slide} />
    case "fixFlip":
      return <FixFlipSlide slide={slide} />
    case "multifamily":
      return <MultifamilySlide slide={slide} />
    case "shortTerm":
      return <ShortTermSlide slide={slide} />
    default:
      return null
  }
}
