import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer } from "@/components/m2m-layout"

import { BLOG_POSTS, getPostBySlug } from "@/lib/blog/posts"
import { getPrimaryConsultationBookUrl } from "@/lib/m2m-site"

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
        <main id="main-content" tabIndex={-1} className="bg-white py-28">
          <M2mContainer className="max-w-2xl">
            <h1 className="text-2xl text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
              Post not found
            </h1>
            <p className="mt-4">
              <Link href="/blog" className="text-m2m-gold underline underline-offset-4 hover:text-m2m-deep">
                Back to Blog
              </Link>
            </p>
          </M2mContainer>
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
        <section className="bg-m2m-black pt-28 pb-10">
          <M2mContainer className="max-w-4xl">
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
                href={getPrimaryConsultationBookUrl()}
                target="_blank"
                rel="noreferrer"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-gold hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Book Consultation
              </a>
            </div>
          </M2mContainer>
        </section>

        <section className="pb-16">
          <M2mContainer className="max-w-4xl">
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-md bg-m2m-black">
              <Image src={post.coverImage} alt="" fill className="object-cover" sizes="100vw" />
            </div>

            <article className="prose prose-neutral mt-10 max-w-none text-m2m-deep prose-headings:font-normal prose-headings:text-m2m-deep prose-p:text-m2m-deep/90 prose-li:text-m2m-deep/90 prose-a:text-m2m-gold prose-a:no-underline hover:prose-a:underline">
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
                  href={getPrimaryConsultationBookUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-m2m-deep/20 px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase font-medium text-m2m-deep"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </M2mContainer>
        </section>
      </main>
      <Footer />
    </>
  )
}
