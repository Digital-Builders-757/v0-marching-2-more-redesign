import type { ReactNode } from "react"
import Link from "next/link"

const ORDERED_ITEM = /^(\d+)\.\s+(.*)$/

function formatInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((p) => p !== "")
  return parts.map((part, i) => {
    const k = `${keyPrefix}-${i}`
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={k}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={k}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function isMarkdownLink(line: string): { label: string; href: string } | null {
  const t = line.trim()
  const standalone = /^\[([^\]]+)\]\((\/[^)\s]+|https?:\/\/[^)\s]+)\)$/.exec(t)
  if (standalone) return { label: standalone[1]!, href: standalone[2]! }
  const listItem = /^[-*]\s+\[([^\]]+)\]\((\/[^)\s]+|https?:\/\/[^)\s]+)\)\s*$/.exec(t)
  if (listItem) return { label: listItem[1]!, href: listItem[2]! }
  return null
}

/** Subset used by lib/blog/posts.ts — no external markdown library. */
export function BlogPostContentBlocks({ content }: { content: string }): ReactNode {
  const lines = content.replace(/\r\n/g, "\n").split("\n")
  const out: ReactNode[] = []
  let i = 0
  let blockKey = 0

  const nextKey = () => `b${blockKey++}`

  while (i < lines.length) {
    const raw = lines[i] ?? ""
    const line = raw.trimEnd()
    const trimmed = line.trim()

    if (trimmed === "") {
      i++
      continue
    }

    if (trimmed.startsWith("## ")) {
      out.push(
        <h2 key={nextKey()} className="mt-10 text-2xl font-normal text-m2m-deep first:mt-0">
          {formatInline(trimmed.slice(3), `h2-${i}`)}
        </h2>
      )
      i++
      continue
    }

    if (trimmed.startsWith("### ")) {
      out.push(
        <h3 key={nextKey()} className="mt-8 text-xl font-normal text-m2m-deep">
          {formatInline(trimmed.slice(4), `h3-${i}`)}
        </h3>
      )
      i++
      continue
    }

    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i]!.trimStart().startsWith(">")) {
        const q = lines[i]!.trimStart().replace(/^>\s?/, "")
        quoteLines.push(q)
        i++
      }
      out.push(
        <blockquote
          key={nextKey()}
          className="my-6 border-l-4 border-m2m-gold/50 pl-4 text-m2m-deep/90 italic"
        >
          {quoteLines.map((q, qi) => (
            <p key={qi} className="my-2 first:mt-0 last:mb-0">
              {formatInline(q, `q-${qi}`)}
            </p>
          ))}
        </blockquote>
      )
      continue
    }

    const bullet = /^[-*]\s+(.*)$/.exec(trimmed)
    if (bullet) {
      const items: string[] = []
      while (i < lines.length) {
        const t = lines[i]!.trim()
        const b = /^[-*]\s+(.*)$/.exec(t)
        if (!b) break
        items.push(b[1]!)
        i++
      }
      out.push(
        <ul key={nextKey()} className="my-4 list-disc space-y-2 pl-6">
          {items.map((item, li) => (
            <li key={li} className="text-m2m-deep/90">
              {formatInline(item, `li-${li}`)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    const ordered = ORDERED_ITEM.exec(trimmed)
    if (ordered) {
      const items: string[] = []
      while (i < lines.length) {
        let t = lines[i]!.trim()
        while (t === "" && i + 1 < lines.length) {
          i++
          t = lines[i]!.trim()
        }
        const om = ORDERED_ITEM.exec(t)
        if (!om) break
        items.push(om[2]!)
        i++
      }
      out.push(
        <ol key={nextKey()} className="my-4 list-decimal space-y-2 pl-6">
          {items.map((item, li) => (
            <li key={li} className="text-m2m-deep/90">
              {formatInline(item, `oli-${li}`)}
            </li>
          ))}
        </ol>
      )
      continue
    }

    const singleLink = isMarkdownLink(trimmed)
    if (singleLink && trimmed === `[${singleLink.label}](${singleLink.href})`) {
      const href = singleLink.href
      const inner = <>{formatInline(singleLink.label, `a-${i}`)}</>
      out.push(
        <p key={nextKey()} className="my-4 leading-relaxed text-m2m-deep/90">
          {href.startsWith("/") ? (
            <Link href={href} className="text-m2m-gold no-underline hover:underline">
              {inner}
            </Link>
          ) : (
            <a href={href} className="text-m2m-gold no-underline hover:underline" rel="noreferrer" target="_blank">
              {inner}
            </a>
          )}
        </p>
      )
      i++
      continue
    }

    const para: string[] = [trimmed]
    i++
    while (i < lines.length) {
      const nt = lines[i]!.trim()
      if (nt === "") break
      if (
        nt.startsWith("## ") ||
        nt.startsWith("### ") ||
        nt.startsWith("> ") ||
        /^[-*]\s/.test(nt) ||
        ORDERED_ITEM.test(nt) ||
        isMarkdownLink(nt)
      ) {
        break
      }
      para.push(nt)
      i++
    }
    out.push(
      <p key={nextKey()} className="my-4 leading-relaxed text-m2m-deep/90">
        {formatInline(para.join(" "), `p-${i}`)}
      </p>
    )
  }

  return <>{out}</>
}
