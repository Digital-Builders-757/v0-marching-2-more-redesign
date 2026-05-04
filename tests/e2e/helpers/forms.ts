import type { Page } from "@playwright/test"

/** Radix `Select` triggers used by `M2mLeadDobField` (`${id}-month` / `-day` / `-year`). */
export async function fillM2mDobField(page: Page, idPrefix: string): Promise<void> {
  await page.locator(`#${idPrefix}-month`).click()
  await page.locator("[role=listbox]").getByRole("option", { name: "January" }).click()

  await page.locator(`#${idPrefix}-day`).click()
  await page.locator("[role=listbox]").getByRole("option", { name: "15", exact: true }).click()

  await page.locator(`#${idPrefix}-year`).click()
  await page.locator("[role=listbox]").getByRole("option", { name: "1990" }).click()
}
