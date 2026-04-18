import { M2mContainer, M2mSection } from "@/components/m2m-layout"

export function DivorceHero() {
  return (
    <M2mSection
      variant="panel"
      className="border-b border-m2m-gold/15 py-16 sm:py-20 lg:py-28"
      aria-labelledby="divorce-hero-heading"
    >
      <M2mContainer className="max-w-4xl text-center">
        <h1
          id="divorce-hero-heading"
          className="text-m2m-cream text-[clamp(1.75rem,4.5vw,3rem)] font-medium leading-[1.2] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Claim Your Free &apos;Divorce &amp; Real Estate&apos; Guide Now!
        </h1>
      </M2mContainer>
    </M2mSection>
  )
}
