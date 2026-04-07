"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, User, Calendar } from "lucide-react"
import { M2M_MEDIA } from "@/lib/m2m-media"

const blogPosts = [
  {
    slug: "virginia-beach-homes-fly-off-market",
    title: "Why Virginia Beach Homes Fly Off the Market and How to Leverage Expert Help",
    excerpt: "If you have been watching the Virginia Beach real estate scene lately, you've likely noticed a clear trend: homes priced right and presented well are selling incredibly fast. Buyers are eager, offers come quickly, and sellers often find themselves surprised by how swiftly their properties move.",
    author: "Marching 2 More Team",
    date: "Mar 24, 2026",
    readTime: "4 min read",
    image: M2M_MEDIA.heroScreenshot,
    category: "Market Insights",
  },
  {
    slug: "costly-mistakes-selling-without-realtor",
    title: "The Costly Mistakes of Selling Your Hampton Roads Home Without a Realtor",
    excerpt: "Selling your home in Hampton Roads on your own might seem like a smart way to save money. The idea of skipping the real estate agent and avoiding commission fees is tempting. But many homeowners who choose the for sale by owner Virginia route soon find out that it can cost them more than they expected.",
    author: "Marching 2 More Team",
    date: "Mar 10, 2026",
    readTime: "3 min read",
    image: M2M_MEDIA.sellHeroStill,
    category: "Selling Tips",
  },
  {
    slug: "selling-coastal-properties-hampton-roads",
    title: "Selling Coastal Properties in Hampton Roads: Strategies to Elevate Your Waterfront Listing in 2026",
    excerpt: "Selling a home near the water in Hampton Roads requires more than just listing it on the market. Coastal properties offer unique lifestyle benefits and challenges that demand a specialized approach. Whether your home is in Ocean Lakes, Fox Hill, Willoughby Spit, or Knotts Island, standing out in 2026 means showcasing both the value and the emotional appeal of waterfront living.",
    author: "Marching 2 More Team",
    date: "Feb 24, 2026",
    readTime: "3 min read",
    image: M2M_MEDIA.familyBackyard,
    category: "Coastal Living",
  },
  {
    slug: "role-of-real-estate-professional",
    title: "Unveiling the Role of a Real Estate Professional",
    excerpt: "Buying or selling a home is a big deal. It's more than just a transaction - it's about finding a place where memories will be made or moving on to a new chapter. For military families in Virginia, this process can be even more complex due to frequent relocations and unique housing needs.",
    author: "Donavan McFadden",
    date: "Feb 24, 2026",
    readTime: "4 min read",
    image: M2M_MEDIA.teamCtaBackdrop,
    category: "Buyer Tips",
  },
  {
    slug: "va-loan-guide-military-families",
    title: "The Complete VA Loan Guide for Military Families in Hampton Roads",
    excerpt: "VA loans are one of the best benefits available to military service members and veterans. With no down payment required and competitive interest rates, a VA loan can make homeownership a reality for those who have served our country. This comprehensive guide covers everything you need to know.",
    author: "Roger Lee",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    image: M2M_MEDIA.buyHeroStill,
    category: "VA Loans",
  },
  {
    slug: "pcs-relocation-checklist",
    title: "PCS Relocation Checklist: Your Complete Guide to Moving to Hampton Roads",
    excerpt: "Receiving PCS orders can be both exciting and overwhelming. Moving to a new duty station involves countless details and decisions. This comprehensive checklist will help military families navigate their relocation to the Hampton Roads area with confidence and ease.",
    author: "Kristin Allen",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    image: M2M_MEDIA.teamPhotoWide,
    category: "PCS Relocation",
  },
]

export function BlogList() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:px-24 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Featured Post */}
        <div 
          className="mb-16"
          data-gsap="fade-up"
        >
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="inline-block px-3 py-1.5 bg-m2m-gold text-m2m-deep text-[0.6rem] tracking-[0.15em] uppercase"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-m2m-muted text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl text-m2m-deep leading-tight group-hover:text-m2m-gold/80 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {blogPosts[0].title}
                </h2>
                <p 
                  className="text-m2m-muted leading-relaxed line-clamp-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-2 text-xs text-m2m-muted">
                    <User className="w-3.5 h-3.5" />
                    {blogPosts[0].author}
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
        <div className="w-full h-px bg-m2m-deep/10 mb-16" data-gsap="line-reveal" />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.slice(1).map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group flex flex-col"
              data-gsap="fade-up"
              data-gsap-delay={index * 0.1}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span 
                    className="inline-block px-2.5 py-1 bg-m2m-gold text-m2m-deep text-[0.55rem] tracking-[0.15em] uppercase"
                    style={{ fontFamily: 'var(--font-nav)' }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-m2m-muted text-[0.65rem] mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
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
      </div>
    </section>
  )
}
