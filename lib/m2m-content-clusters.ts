/**
 * Internal link clusters for SEO, content paths, and related-page bands.
 * Keep labels short; avoid duplicating full nav.
 */

export const M2M_CLUSTER_IDS = ["buy", "sell", "military", "life", "invest", "learn"] as const
export type M2mClusterId = (typeof M2M_CLUSTER_IDS)[number]

export type M2mClusterLink = { href: string; label: string }

export type M2mClusterDefinition = { title: string; intro: string; links: M2mClusterLink[] }

export const M2M_CONTENT_CLUSTERS: Record<M2mClusterId, M2mClusterDefinition> = {
  buy: {
    title: "Buying in Hampton Roads",
    intro:
      "From search to closing: financing context, local neighborhoods, and a team that answers the phone — start anywhere below.",
    links: [
      { href: "/buy", label: "Buying overview" },
      { href: "/home-search", label: "Home search & buyer help" },
      { href: "/va-loan-benefits", label: "VA loan benefits" },
      { href: "/fha-loan", label: "FHA home loans" },
      { href: "/blog", label: "Buyer-focused articles" },
      { href: "/contact-us?intent=buyer", label: "Work with an agent" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
      { href: "/reviews", label: "Client reviews" },
    ],
  },
  sell: {
    title: "Selling & equity",
    intro:
      "Know what your home could bring, prep with confidence, and line up the right listing strategy — no pressure, just clear options.",
    links: [
      { href: "/sell", label: "Selling overview" },
      { href: "/free-home-valuation", label: "Free home valuation" },
      { href: "/cma-form", label: "Request a CMA" },
      { href: "/resources", label: "Pre-listing resources" },
      { href: "/blog", label: "Selling insights" },
      { href: "/contact-us?intent=seller", label: "Talk about listing" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
      { href: "/reviews", label: "Seller success stories" },
    ],
  },
  military: {
    title: "Military & VA buyers",
    intro:
      "PCS timelines, VA leverage, and offers that compete in Hampton Roads — we help you translate benefits into a winning strategy.",
    links: [
      { href: "/buy", label: "Buying overview" },
      { href: "/va-loan-benefits", label: "VA loan hub" },
      { href: "/home-search", label: "Start your search" },
      { href: "/blog", label: "Relocation & loan articles" },
      { href: "/contact-us?intent=buyer", label: "Buyer intake" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
      { href: "/our-team", label: "Meet the team" },
    ],
  },
  life: {
    title: "Life transitions & housing",
    intro:
      "When life shifts—divorce, downsizing, credit repair, or hardship—clear options beat panic. These guides are a starting point; the team meets you where you are.",
    links: [
      { href: "/navigating-divorce", label: "Divorce & real estate" },
      { href: "/facing-foreclosure", label: "Facing foreclosure" },
      { href: "/downsizing-your-home", label: "Downsizing" },
      { href: "/improve-your-credit", label: "Credit playbook & homebuying" },
      { href: "/free-home-valuation", label: "Home valuation" },
      { href: "/reviews", label: "Client reviews" },
      { href: "/contact-us", label: "Contact the team" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
    ],
  },
  invest: {
    title: "Real estate investing",
    intro:
      "Inventory, underwriting basics, and local rental context—useful whether you are buying your first rental or your next flip.",
    links: [
      { href: "/more-investments", label: "Investing overview" },
      { href: "/home-search", label: "Inventory & search" },
      { href: "/contact-us?intent=buyer", label: "Investor consult" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
      { href: "/blog", label: "Market notes" },
    ],
  },
  learn: {
    title: "Learn & explore",
    intro:
      "Articles, guides, and team bios—then book time if you want the conversation to go deeper than the page.",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/resources", label: "Resources & checklist" },
      { href: "/buy", label: "Buying overview" },
      { href: "/sell", label: "Selling overview" },
      { href: "/our-team", label: "Our team" },
      { href: "/reviews", label: "Reviews" },
      { href: "/contact-us?intent=consultation", label: "Book a consultation" },
      { href: "/home-search", label: "Home search" },
    ],
  },
}

/** Homepage strip — highest-value internal paths across clusters. */
export const M2M_HOME_TOPIC_LINKS: M2mClusterLink[] = [
  { href: "/buy", label: "Buy — services & process" },
  { href: "/sell", label: "Sell — pricing & prep" },
  { href: "/home-search", label: "Buy — search & help" },
  { href: "/free-home-valuation", label: "Sell — free valuation" },
  { href: "/cma-form", label: "CMA request" },
  { href: "/va-loan-benefits", label: "VA loans" },
  { href: "/resources", label: "Resources" },
  { href: "/navigating-divorce", label: "Divorce & housing" },
  { href: "/facing-foreclosure", label: "Foreclosure help" },
  { href: "/downsizing-your-home", label: "Downsizing" },
  { href: "/improve-your-credit", label: "Credit playbook" },
  { href: "/more-investments", label: "Investing" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
]

/** Map blog categories (from `lib/blog/posts.ts`) to a primary cluster for related links. */
export function m2mBlogCategoryToCluster(category: string): M2mClusterId {
  const c = category.toLowerCase()
  if (c.includes("va") || c.includes("finance") || c.includes("pcs")) return "military"
  if (c.includes("sell")) return "sell"
  if (c.includes("buy") || c.includes("market") || c.includes("coastal")) return "buy"
  return "learn"
}
