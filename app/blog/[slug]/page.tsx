import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

import { BLOG_POSTS, getPostBySlug } from "@/lib/blog/posts"
import { CALENDLY_BOOK_URL } from "@/lib/m2m-site"

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <>
        <Header />
        <main className="px-6 py-28">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-2xl">Post not found</h1>
            <p className="mt-4">
              <Link href="/blog" className="underline">
                Back to Blog
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <GSAPAnimations />

      <main id="main-content" tabIndex={-1} className="bg-m2m-cream">
        <section className="px-6 pt-28 pb-10 md:px-16 lg:px-24" style={{ backgroundColor: "#050d06" }}>
          <div className="mx-auto max-w-4xl">
            <p
              className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {post.category} • {post.readTime}
            </p>
            <h1
              className="mt-6 font-light text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-m2m-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>
            <p
              className="mt-6 max-w-2xl text-sm leading-relaxed text-m2m-muted-lt"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Back to Blog
              </Link>
              <a
                href={CALENDLY_BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-16 lg:px-24">
          <div className="mx-auto max-w-4xl">
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-md bg-m2m-black">
              <Image src={post.coverImage} alt="" fill className="object-cover" sizes="100vw" />
            </div>

            <article className="prose prose-neutral mt-10 max-w-none">
              {/* structure-only rendering */}
              {post.content.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </article>

            <div className="mt-12 rounded-md border border-m2m-deep/10 bg-white p-6">
              <p className="text-sm text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
                Want help buying or selling in Hampton Roads? We&apos;ll make the next steps clear.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/home-search"
                  className="inline-flex items-center justify-center bg-m2m-deep px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase font-medium text-m2m-cream"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Work With Us
                </Link>
                <a
                  href={CALENDLY_BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-m2m-deep/20 px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase font-medium text-m2m-deep"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
