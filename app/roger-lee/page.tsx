import Link from "next/link"
import { M2mInnerPageShell } from "@/components/m2m-inner-page-shell"

export const metadata = { title: "Roger Lee | Marching 2 More" }

const bio = `Roger Lee is a seasoned professional who brings a wealth of knowledge and expertise to the table. As a graduate of Norfolk State University and a successful real estate investor, Roger has a deep understanding of the local market and a proven track record of success. Inspired by his personal journey of buying and selling homes since 2001, Roger became a real estate professional to help home buyers and sellers navigate the often-complex process of buying or selling a home with ease. His experience has given him a wealth of wisdom, which he shares with his clients to help them make informed decisions and avoid common pitfalls. At the heart of Roger's approach is his dedication to listening to his client's needs and working closely with them to achieve their goals. Whether you're looking to buy your first home, sell your current property, or invest in real estate, he's here to guide you through every step of the process. When he's not assisting clients, Roger enjoys spending time with his family, volunteering in his community, and staying fit at the gym. He is a trusted and reliable real estate professional with a proven track record of success, committed to providing the highest level of service and expertise.`

export default function RogerProfilePage() {
  return (
    <M2mInnerPageShell>
      <article className="pt-28 px-6 md:px-16 lg:px-24 max-w-3xl pb-20">
        <p className="text-m2m-gold text-sm tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-nav)" }}>
          Founding Partner
        </p>
        <h1 className="text-4xl font-light text-m2m-deep mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Roger Lee
        </h1>
        <p className="text-sm text-m2m-muted mb-8" style={{ fontFamily: "var(--font-sans)" }}>
          Licensed Agent of Virginia 0225-247-150
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
