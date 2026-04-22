#!/usr/bin/env node
/**
 * GoHighLevel operator sanity check (no secrets printed).
 * Loads .env.local then .env from repo root if present; merges with process.env.
 *
 * Usage:
 *   node scripts/ghl-operator-check.mjs
 *   node scripts/ghl-operator-check.mjs --ping   # optional: HTTP check (still no body logged)
 *
 * Does not submit leads. Does not print GHL_API_KEY or any token value.
 */

import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"

const root = resolve(process.cwd())

/** @param {string} filePath */
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return {}
  /** @type {Record<string, string>} */
  const out = {}
  const raw = readFileSync(filePath, "utf8")
  for (const line of raw.split("\n")) {
    const t = line.trim()
    if (!t || t.startsWith("#")) continue
    const eq = t.indexOf("=")
    if (eq === -1) continue
    const k = t.slice(0, eq).trim()
    let v = t.slice(eq + 1).trim()
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1)
    }
    out[k] = v
  }
  return out
}

const fileEnv = {
  ...loadEnvFile(resolve(root, ".env.local")),
  ...loadEnvFile(resolve(root, ".env")),
}
/** @type {Record<string, string | undefined>} */
const env = { ...fileEnv, ...process.env }

const CF_KEYS = [
  "GHL_CF_DOB",
  "GHL_CF_ADDRESS",
  "GHL_CF_URGENCY",
  "GHL_CF_LEAD_TYPE",
  "GHL_CF_UTM_SOURCE",
  "GHL_CF_UTM_MEDIUM",
  "GHL_CF_UTM_CAMPAIGN",
  "GHL_CF_UTM_CONTENT",
]

const PIPE_KEYS = [
  "GHL_BUYER_PIPELINE_ID",
  "GHL_SELLER_PIPELINE_ID",
  "GHL_BUYER_STAGE_NEW_INQUIRY_ID",
  "GHL_SELLER_STAGE_NEW_INQUIRY_ID",
]

function isDryRun() {
  const v = env.GHL_DRY_RUN
  return v === "1" || v === "true"
}

function nonEmpty(name) {
  const v = env[name]?.trim()
  return v ? v : null
}

function warnTypographicDash(name, value) {
  if (!value) return
  if (/[\u2013\u2014]/.test(value)) {
    console.warn(
      `[warn] ${name} contains an en/em dash (Unicode). GHL tags must use the exact characters from the GHL UI — usually ASCII hyphen/minus. Copy-paste from GHL, not Word.`,
    )
  }
}

console.log("[ghl-operator-check] repo root:", root)
console.log("[ghl-operator-check] GHL_DRY_RUN:", isDryRun() ? "true (no live API key required for config shape)" : "false / unset (live checks apply)")

let exitCode = 0

if (isDryRun()) {
  console.log("[ok] Dry run mode: website will skip CRM HTTP calls. Use for UI QA only.")
} else {
  const need = ["GHL_API_KEY", "GHL_LOCATION_ID", ...CF_KEYS]
  for (const k of need) {
    if (!nonEmpty(k)) {
      console.error(`[missing] ${k} — required for live submit (or set GHL_DRY_RUN=true)`)
      exitCode = 1
    }
  }
  if (nonEmpty("GHL_API_KEY") && env.GHL_API_KEY.length < 20) {
    console.warn("[warn] GHL_API_KEY looks unusually short — confirm it is the full Private Integration token.")
  }
}

for (const k of CF_KEYS) {
  const v = nonEmpty(k)
  if (!v && isDryRun()) continue
  if (v && v.startsWith("dry-run__")) {
    console.warn(`[warn] ${k} looks like a dry-run placeholder — unset GHL_DRY_RUN for production.`)
  }
}

const tagBuyer = nonEmpty("GHL_TAG_LEAD_BUYER")
const tagSeller = nonEmpty("GHL_TAG_LEAD_SELLER")
if (!isDryRun()) {
  if (!tagBuyer) {
    console.warn(
      "[warn] GHL_TAG_LEAD_BUYER empty — upsert will succeed but add-tags step is skipped for buyer leads (no tags).",
    )
  }
  if (!tagSeller) {
    console.warn(
      "[warn] GHL_TAG_LEAD_SELLER empty — same for seller leads.",
    )
  }
}
warnTypographicDash("GHL_TAG_LEAD_BUYER", tagBuyer ?? "")
warnTypographicDash("GHL_TAG_LEAD_SELLER", tagSeller ?? "")

const pipes = PIPE_KEYS.map((k) => (nonEmpty(k) ? k : null)).filter(Boolean)
if (!isDryRun() && pipes.length > 0 && pipes.length < PIPE_KEYS.length) {
  console.warn(
    `[warn] Partial pipeline env (${pipes.length}/4 set) — opportunities will be skipped; only contact + tags run. Vars: ${PIPE_KEYS.join(", ")}`,
  )
}

if (exitCode === 0 && !isDryRun()) {
  console.log("[ok] Required live env keys present (values not shown).")
}

const ping = process.argv.includes("--ping")
if (ping) {
  if (isDryRun()) {
    console.log("[ping] skipped in GHL_DRY_RUN mode (no token required).")
  } else {
    const key = nonEmpty("GHL_API_KEY")
    const loc = nonEmpty("GHL_LOCATION_ID")
    if (!key || !loc) {
      console.error("[ping] need GHL_API_KEY and GHL_LOCATION_ID")
      exitCode = 1
    } else {
      const base = (env.GHL_API_BASE_URL?.trim() || "https://services.leadconnectorhq.com").replace(/\/$/, "")
      const ver = env.GHL_API_VERSION?.trim() || "2021-07-28"
      const url = `${base}/locations/${encodeURIComponent(loc)}`
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${key}`,
            Version: ver,
            Accept: "application/json",
          },
        })
        console.log(`[ping] ${res.status} ${res.statusText} (GET location — no response body logged)`)
        if (res.status === 401 || res.status === 403) {
          console.error("[ping] Auth failed — token scope, expiry, or wrong environment.")
          exitCode = 1
        } else if (res.status === 404) {
          console.error("[ping] Location not found — check GHL_LOCATION_ID matches the sub-account the token can access.")
          exitCode = 1
        } else if (!res.ok) {
          console.error("[ping] Unexpected status — see HighLevel API docs or Vercel logs for details.")
          exitCode = 1
        }
      } catch (e) {
        console.error("[ping] network error:", e instanceof Error ? e.message : e)
        exitCode = 1
      }
    }
  }
}

console.log(
  "\nNext: submit a test lead, then match correlationId from the JSON error/success to Vercel logs [ghl] lines.",
)
console.log("Doc: docs/M2M_GHL_OPERATOR_VERIFICATION.md")

process.exit(exitCode)
