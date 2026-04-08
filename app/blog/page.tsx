import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

import { BLOG_POSTS } from "@/lib/blog/posts"
import { BlogPostCard } from "@/components/blog/blog-post-card"

export const metadata = {
  title: "Blog | Marching 2 More",
  description:
    "Stories, guides, and practical insights for buying and selling homes in Hampton Roads.",
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section className="px-6 pt-28 pb-10 md:px-16 lg:px-24" style={{ backgroundColor: "#050d06" }}>
          <div className="mx-auto max-w-6xl">
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              Blog
            </p>
            <h1
              className="mt-6 font-light text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Guides &amp; insights
            </h1>
            <p
              className="mt-6 max-w-2xl text-sm leading-relaxed text-m2m-muted-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Structure-only demo (Supabase-backed posts coming next). For now, these posts show layout and flow.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:px-16 lg:px-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
