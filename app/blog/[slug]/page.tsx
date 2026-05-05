import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"
import { Header } from "@/components/header"
import { M2mContainer } from "@/components/m2m-layout"
import { M2mRelatedPages } from "@/components/m2m-related-pages"

import { BLOG_POSTS, getPostBySlug } from "@/lib/blog/posts"
import { m2mBlogCategoryToCluster } from "@/lib/m2m-content-clusters"
import { BlogPostContentBlocks } from "@/lib/blog/render-post-content"
import { M2M_SEO_SITE_NAME } from "@/lib/m2m-seo-metadata"
import { getPrimaryConsultationBookUrl, M2M_SITE_ORIGIN } from "@/lib/m2m-site"

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: `Article not found | ${M2M_SEO_SITE_NAME}` }
  }
  const description =
    post.excerpt.length > 165 ? `${post.excerpt.slice(0, 162).trimEnd()}…` : post.excerpt
  const path = `/blog/${post.slug}`
  const pageTitle = `${post.title} | ${M2M_SEO_SITE_NAME}`
  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      url: path,
      siteName: M2M_SEO_SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  }
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

  const cluster = m2mBlogCategoryToCluster(post.category)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Marching 2 More" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${M2M_SITE_ORIGIN}/blog/${post.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/blog"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Back to Blog
              </Link>
              <Link
                href="/reviews"
                className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-muted hover:text-m2m-cream transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                Client reviews
              </Link>
            </div>
          </M2mContainer>
        </section>

        <section className="pb-16">
          <M2mContainer className="max-w-4xl">
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-md bg-m2m-black">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
                sizes="(min-width: 896px) 896px, 100vw"
                priority
              />
            </div>

            <article className="prose prose-neutral mt-10 max-w-none text-m2m-deep prose-headings:font-normal prose-headings:text-m2m-deep prose-p:text-m2m-deep/90 prose-li:text-m2m-deep/90 prose-a:text-m2m-gold prose-a:no-underline hover:prose-a:underline">
              <BlogPostContentBlocks content={post.content} />
            </article>

            <div className="mt-12 rounded-md border border-m2m-deep/10 bg-white p-6 sm:p-8">
              <p className="text-sm text-m2m-muted font-sans" style={{ fontFamily: "var(--font-sans)" }}>
                Want help buying or selling in Hampton Roads? Tell us your goals on the short consult form — or grab a
                calendar slot. Same licensed, veteran-owned team either way.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <Link
                  href="/contact-us?intent=buyer"
                  data-m2m-track="blog_work_with_us"
                  data-m2m-track-loc={`blog_${post.slug}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center bg-m2m-deep px-5 py-3 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-cream touch-manipulation sm:flex-none sm:px-6"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Work With Us
                </Link>
                <Link
                  href="/contact-us?intent=consultation"
                  data-m2m-track="blog_consultation_form"
                  data-m2m-track-loc={`blog_${post.slug}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center border border-m2m-deep/30 bg-white px-5 py-3 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-deep touch-manipulation sm:flex-none sm:px-6"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Request consultation
                </Link>
                <a
                  href={getPrimaryConsultationBookUrl()}
                  target="_blank"
                  rel="noreferrer"
                  data-m2m-track="blog_pick_a_time"
                  data-m2m-track-loc={`blog_${post.slug}`}
                  className="inline-flex min-h-12 flex-1 items-center justify-center border border-m2m-deep/25 px-5 py-3 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-m2m-deep touch-manipulation sm:flex-none sm:px-6"
                  style={{ fontFamily: "var(--font-nav)" }}
                >
                  Pick a time
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-m2m-muted font-sans">
                <Link href="/buy" className="text-m2m-gold underline-offset-4 hover:underline">
                  Buying path
                </Link>
                {" · "}
                <Link href="/sell" className="text-m2m-gold underline-offset-4 hover:underline">
                  Selling path
                </Link>
                {" · "}
                <Link href="/reviews" className="text-m2m-gold underline-offset-4 hover:underline">
                  Read what clients say about working with us
                </Link>
                .
              </p>
            </div>
          </M2mContainer>
        </section>

        <M2mRelatedPages cluster={cluster} variant="onLight" />
      </main>
      <Footer />
    </>
  )
}
