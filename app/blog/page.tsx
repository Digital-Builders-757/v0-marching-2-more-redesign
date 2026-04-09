import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
        {/* Blog posts list */}
        <section className="px-6 pt-28 pb-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-4xl">
            {BLOG_POSTS.map((post, index) => (
              <article 
                key={post.slug}
                className={`py-12 ${index !== BLOG_POSTS.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  {/* Title */}
                  <h2
                    className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] font-medium text-[#1B4332] group-hover:text-[#1B4332]/80 transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="mt-4 text-base leading-relaxed text-gray-600"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div 
                    className="mt-4 flex items-center gap-2 text-sm text-gray-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <span>{post.author}</span>
                    <span className="text-gray-300">|</span>
                    <span>{post.publishedAt}</span>
                    <span className="text-gray-300">|</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
