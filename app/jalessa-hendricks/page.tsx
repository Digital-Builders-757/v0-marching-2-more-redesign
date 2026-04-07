import Link from "next/link"
import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"

export const metadata = { title: "Jalessa Hendricks | Marching 2 More" }

export default function JalessaProfilePage() {
  return (
    <M2mInnerPageShell>
      <article className="pt-28 px-6 md:px-16 lg:px-24 max-w-3xl pb-20">
        <p className="text-m2m-gold text-sm tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-nav)" }}>
          Licensed Agent
        </p>
        <h1 className="text-4xl font-light text-m2m-deep mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Jalessa Hendricks
        </h1>
        <p className="text-m2m-muted leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
          Full biography is being migrated from our previous site. For immediate information, please{" "}
          <Link href="/contact-us" className="text-m2m-gold hover:underline">
            contact the team
          </Link>
          .
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
