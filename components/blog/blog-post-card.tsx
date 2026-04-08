import Link from "next/link"
import Image from "next/image"

import type { BlogPost } from "@/lib/blog/posts"

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-md border border-m2m-deep/10 bg-white shadow-sm">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-m2m-black">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        </div>
      </Link>

      <div className="p-5">
        <p
          className="text-[0.62rem] tracking-[0.25em] uppercase text-m2m-gold"
          style={{ fontFamily: "var(--font-nav)" }}
        >
          {post.category}
        </p>

        <h2
          className="mt-3 text-xl leading-snug text-m2m-deep"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-m2m-muted" style={{ fontFamily: "var(--font-sans)" }}>
            {post.author} • {post.readTime}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-[0.65rem] tracking-[0.2em] uppercase text-m2m-deep hover:text-m2m-gold transition-colors"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  )
}
