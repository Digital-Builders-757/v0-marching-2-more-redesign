import Link from "next/link"
import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"

export const metadata = { title: "Kristin Allen | Marching 2 More" }

const bio = `Born and raised in Ohio, Kristin relocated to Hampton Roads in 2005 after college—and over time, the region became more than just a place to live; it became the foundation for her family, her purpose, and her professional evolution. In 2008, she purchased her first home, followed by an investment property in 2009. What began as a personal milestone quickly transformed into a mission—one rooted in real estate education, firsthand experience, and community connection. As a proud member of the Marching 2 More team, Kristin exemplifies the philosophy of doing more than moving houses—she's in the business of moving lives forward. Her journey into real estate has always been about more than buying or selling. It's about empowering others to build secure futures, generational wealth, and a sense of belonging in the spaces they call home. Family has always remained at the center of Kristin's "why." Her commitment to raising her children with intention and resilience fuels her drive to serve clients with empathy, patience, and purpose. Whether helping a first-time buyer take that leap or guiding a family through the emotional complexities of probate or senior transitions, Kristin shows up as a steady hand—offering clarity, compassion, and solutions when they're needed most. With over 15 years of real estate insight—from personal investing to professional practice—Kristin brings a seasoned perspective, a heart for service, and an unwavering belief in legacy over luxury. She is committed to marching alongside her clients every step of the way, helping them unlock possibilities, overcome obstacles, and take confident steps toward "more."`

export default function KristinProfilePage() {
  return (
    <M2mInnerPageShell>
      <article className="pt-28 px-6 md:px-16 lg:px-24 max-w-3xl pb-20">
        <p className="text-m2m-gold text-sm tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-nav)" }}>
          Licensed Real Estate Professional
        </p>
        <h1 className="text-4xl font-light text-m2m-deep mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Kristin Allen
        </h1>
        <p className="text-sm text-m2m-muted mb-8" style={{ fontFamily: "var(--font-sans)" }}>
          Licensed Agent of Virginia 0225-274-692
        </p>
        <p className="text-m2m-muted leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
          {bio}
        </p>
        <Link
          href="/our-team"
          className="inline-block mt-10 text-[0.7rem] tracking-[0.2em] uppercase text-m2m-gold hover:text-m2m-deep"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          ← Back to team
        </Link>
      </article>
    </M2mInnerPageShell>
  )
}
