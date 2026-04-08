export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  content: string
}

// Structure-only demo content. Swap this module to Supabase later.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hampton-roads-home-buying-guide",
    title: "A first-time home buying guide for Hampton Roads",
    excerpt:
      "A practical walkthrough for military families and first-time buyers: budgeting, VA loans, timelines, and what to expect.",
    coverImage:
      "https://static.wixstatic.com/media/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg/v1/fill/w_1903,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_4d26d16a6b6f431c9ade77e6af8af089~mv2.jpg",
    author: "Marching 2 More",
    publishedAt: "2026-04-01",
    readTime: "6 min",
    category: "Buy",
    content: `## What to expect\n\nBuying a home doesn’t have to be overwhelming. Here’s the process we recommend:\n\n- Clarify budget + financing\n- Get a strong pre-approval\n- Identify must-haves vs nice-to-haves\n- Tour strategically\n- Negotiate confidently\n\n## Our approach\n\nWe’ll help you make clean decisions, avoid surprises, and keep the experience calm and organized.\n\n> Demo note: this is placeholder content. We’ll replace posts with Supabase-backed content later.`,
  },
  {
    slug: "va-loan-basics",
    title: "VA Loan basics: what matters and what doesn’t",
    excerpt:
      "A clear explanation of eligibility, funding fees, appraisal timelines, and common misconceptions about VA loans.",
    coverImage:
      "https://static.wixstatic.com/media/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg/v1/fill/w_1903,h_812,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_85f19a3d9c0648609ff59e4b0a4c9578~mv2.jpg",
    author: "Marching 2 More",
    publishedAt: "2026-03-21",
    readTime: "5 min",
    category: "Finance",
    content: `## The short version\n\nVA loans can be an incredible advantage. The key is making sure your timeline and paperwork are tight.\n\n### Common myths\n\n- *Myth:* VA loans always take longer\n- *Myth:* Sellers won’t accept VA\n\nWe’ll help you present a clean offer and keep everything moving.`,
  },
  {
    slug: "pre-listing-checklist",
    title: "Pre-listing checklist: maximize value before you list",
    excerpt:
      "Small upgrades + smart preparation can change your final sale price. Here’s a simple checklist that works.",
    coverImage:
      "https://static.wixstatic.com/media/63ece0_0f4f064e9f5d4f3492a21f78817e3539~mv2.jpg/v1/fill/w_1903,h_812,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/63ece0_0f4f064e9f5d4f3492a21f78817e3539~mv2.jpg",
    author: "Marching 2 More",
    publishedAt: "2026-03-10",
    readTime: "4 min",
    category: "Sell",
    content: `## The goal\n\nWe want buyers to feel certainty the moment they walk in.\n\n- Declutter\n- Deep clean\n- Fix the small obvious things\n- Make curb appeal effortless\n\nIf you want the full guide, grab the Pre-Listing Checklist page.`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
