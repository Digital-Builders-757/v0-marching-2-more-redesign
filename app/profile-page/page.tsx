import Link from "next/link"
import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"

export const metadata = { title: "Donavan McFadden | Marching 2 More" }

const bio = `Donavan's experience in the industry has given him a deep understanding of the real estate market which he is committed to employing in helping his clients achieve their goals. Donavan's passion for real estate was sparked at a young age when he saw firsthand the struggles of his mother as she worked to provide for her family. This drive led him to pursue a career in the United States Navy, where he honed his leadership skills and gained valuable life experience. While still on active duty, Donavan took advantage of the VA Home Loan program and purchased his first property, setting the foundation for his future success in real estate investing. Seeing the impact that home ownership and real estate investing had on his own life, he formed the Marching 2 More Team to help others achieve their own real estate goals. With a dedication to education and a focus on the individual needs of his clients, he is dedicated to providing the highest level of service and expertise. Whether you're looking to buy, sell, or invest in real estate, he's here to guide you through every step of the process.`

export default function DonavanProfilePage() {
  return (
    <M2mInnerPageShell>
      <article className="pt-28 px-6 md:px-16 lg:px-24 max-w-3xl pb-20">
        <p className="text-m2m-gold text-sm tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-nav)" }}>
          Founding Partner
        </p>
        <h1 className="text-4xl font-light text-m2m-deep mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Donavan McFadden
        </h1>
        <p className="text-sm text-m2m-muted mb-8" style={{ fontFamily: "var(--font-sans)" }}>
          Licensed Agent of Virginia 0225-233-714
        </p>
        <p className="text-m2m-muted leading-relaxed space-y-4" style={{ fontFamily: "var(--font-sans)" }}>
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
