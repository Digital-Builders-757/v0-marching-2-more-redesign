import { expect, test } from "@playwright/test"

/**
 * Contract tests for POST /api/submit-lead against `next start` (see playwright.config webServer).
 * - Does not require live GHL credentials: CI agents typically have no GHL_* env → 503 config_error.
 * - With a full local `.env`, a 200 + ok:true is valid (may write a real contact — use GHL_DRY_RUN or omit keys for local runs).
 */

test.describe("POST /api/submit-lead", () => {
  test("rejects non-JSON body with 400", async ({ baseURL }) => {
    const origin = (baseURL ?? "http://127.0.0.1:3005").replace(/\/$/, "")
    const res = await fetch(`${origin}/api/submit-lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{not-json",
    })
    expect(res.status).toBe(400)
    const body = (await res.json()) as Record<string, unknown>
    expect(body.ok).toBe(false)
    expect(body.code).toBe("bad_request")
    expect(typeof body.correlationId).toBe("string")
  })

  test("rejects invalid email with validation_error", async ({ request }) => {
    const res = await request.post("/api/submit-lead", {
      data: {
        lead_type: "buyer",
        name: "API Test",
        email: "not-an-email",
      },
    })
    expect(res.status()).toBe(400)
    const body = (await res.json()) as Record<string, unknown>
    expect(body.ok).toBe(false)
    expect(body.code).toBe("validation_error")
    expect(typeof body.correlationId).toBe("string")
  })

  test("valid minimal payload: configured CRM off (CI) → 503 config_error; or success when fully configured", async ({
    request,
  }) => {
    const uniqueEmail = `e2e-submit-${Date.now()}-${Math.random().toString(36).slice(2, 10)}@example.com`
    const res = await request.post("/api/submit-lead", {
      data: {
        lead_type: "buyer",
        name: "Playwright API Smoke",
        email: uniqueEmail,
      },
    })

    const body = (await res.json()) as Record<string, unknown>
    expect(typeof body.correlationId).toBe("string")

    if (process.env.GITHUB_ACTIONS === "true") {
      expect(res.status()).toBe(503)
      expect(body.ok).toBe(false)
      expect(body.code).toBe("config_error")
      return
    }

    if (res.status() === 503) {
      expect(body.ok).toBe(false)
      expect(body.code).toBe("config_error")
      return
    }

    if (res.status() === 200) {
      expect(body.ok).toBe(true)
      expect(typeof body.correlationId).toBe("string")
      expect(String(body.correlationId).length).toBeGreaterThan(0)
      return
    }

    if (res.status() === 400 && body.code === "crm_duplicate_or_merge") {
      // Rare race if GHL dedupes aggressively; not a contract failure
      return
    }

    throw new Error(`Unexpected HTTP ${res.status()}: ${JSON.stringify(body)}`)
  })
})
