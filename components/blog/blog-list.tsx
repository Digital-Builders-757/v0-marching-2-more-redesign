"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, User, Calendar } from "lucide-react"

import { M2mContainer } from "@/components/m2m-layout"
import { BLOG_POSTS } from "@/lib/blog/posts"

const cardFocusRing =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m2m-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"

export function BlogList() {
  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <M2mContainer>
        {/* Featured Post */}
        <div className="mb-14 md:mb-16" data-gsap="fade-up">
          <Link href={`/blog/${BLOG_POSTS[0].slug}`} className={`group block ${cardFocusRing}`}>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-[16/10] min-h-0 overflow-hidden rounded-sm ring-1 ring-m2m-deep/[0.08]">
                <Image
                  src={BLOG_POSTS[0].coverImage}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 42rem, 100vw"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="inline-block px-3 py-1.5 bg-m2m-gold text-m2m-deep text-[0.6rem] tracking-[0.15em] uppercase rounded-md"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {BLOG_POSTS[0].category}
                  </span>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-4">
                <div className="flex items-center gap-4 text-m2m-muted text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(BLOG_POSTS[0].publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {BLOG_POSTS[0].readTime}
                  </span>
                </div>
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl text-m2m-deep leading-tight group-hover:text-m2m-gold/80 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {BLOG_POSTS[0].title}
                </h2>
                <p 
                  className="text-m2m-muted leading-relaxed line-clamp-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-2 text-xs text-m2m-muted">
                    <User className="w-3.5 h-3.5" />
                    {BLOG_POSTS[0].author}
                  </span>
                  <span 
                    className="flex items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase text-m2m-gold group-hover:gap-3 transition-all"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px w-full bg-m2m-deep/10 md:mb-14" data-gsap="line-reveal" />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {BLOG_POSTS.slice(1).map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className={`group flex min-h-0 flex-col ${cardFocusRing}`}
              data-gsap="fade-up"
              data-gsap-delay={index * 0.1}
            >
              <div className="relative mb-5 aspect-[16/10] min-h-0 overflow-hidden rounded-sm ring-1 ring-m2m-deep/[0.08]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute top-3 left-3">
                  <span 
                    className="inline-block px-2.5 py-1 bg-m2m-gold text-m2m-deep text-[0.55rem] tracking-[0.15em] uppercase rounded-md"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-m2m-muted text-[0.65rem] mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 
                className="text-lg md:text-xl text-m2m-deep leading-snug mb-3 group-hover:text-m2m-gold/80 transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {post.title}
              </h3>
              <p 
                className="text-sm text-m2m-muted leading-relaxed line-clamp-2 mb-4 flex-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-m2m-deep/10">
                <span className="flex items-center gap-1.5 text-[0.6rem] text-m2m-muted">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
                <ArrowRight className="w-4 h-4 text-m2m-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </M2mContainer>
    </section>
  )
}
