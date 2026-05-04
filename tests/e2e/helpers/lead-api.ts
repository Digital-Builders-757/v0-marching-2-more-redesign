import type { Page } from "@playwright/test"

/** Minimal success body accepted by `submitLeadToApi` (requires non-empty `correlationId`). */
export const M2M_SUBMIT_LEAD_OK_BODY = {
  ok: true,
  contactId: "e2e-contact",
  opportunityId: "e2e-opportunity",
  correlationId: "e2e-correlation-id",
} as const

/**
 * Stub `POST /api/submit-lead` so e2e does not call GHL.
 * Other methods pass through to the app.
 */
export async function stubSubmitLeadPost(
  page: Page,
  body: Record<string, unknown>,
  status = 200,
): Promise<void> {
  await page.route("**/api/submit-lead", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue()
      return
    }
    await route.fulfill({
      status,
      contentType: "application/json",
      body: JSON.stringify(body),
    })
  })
}
