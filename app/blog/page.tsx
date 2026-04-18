import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { M2mContainer, M2mSection } from "@/components/m2m-layout"
import { BLOG_POSTS } from "@/lib/blog/posts"

export const metadata = {
  title: "Blog | Marching 2 More",
  description:
    "Stories, guides, and practical insights for buying and selling homes in Hampton Roads.",
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="bg-white">
        <M2mSection variant="light" className="pt-28 pb-20">
          <M2mContainer className="max-w-4xl">
            <p className="m2m-eyebrow-gold">Hampton Roads</p>
            <h1 className="m2m-section-title text-m2m-deep mt-4">Blog</h1>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-m2m-muted"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Stories, guides, and practical insights for buying and selling homes in Hampton Roads.
            </p>

            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.slug}
                className={`py-12 ${index !== BLOG_POSTS.length - 1 ? "border-b border-m2m-deep/10" : ""}`}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  {/* Title */}
                  <h2
                    className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-medium text-m2m-deep transition-colors group-hover:text-m2m-deep/80"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="mt-4 text-base leading-relaxed text-m2m-muted"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    className="mt-4 flex flex-wrap items-center gap-2 text-sm text-m2m-muted"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <span>{post.author}</span>
                    <span className="text-m2m-deep/20">|</span>
                    <span>{post.publishedAt}</span>
                    <span className="text-m2m-deep/20">|</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </M2mContainer>
        </M2mSection>
      </main>
      <Footer />
    </>
  )
}
