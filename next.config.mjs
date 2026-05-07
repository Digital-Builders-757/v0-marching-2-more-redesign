import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/plans-and-pricing", destination: "/get-license-in-va", permanent: true },
      { source: "/facing-pre-foreclosure", destination: "/facing-foreclosure", permanent: true },
      { source: "/facing-pre-foreclorure", destination: "/facing-foreclosure", permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      /** Legacy Wix CDN — Jalessa portrait until uploaded to Blob (`docs/M2M_ASSET_MAP.md`). */
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
}

export default nextConfig
