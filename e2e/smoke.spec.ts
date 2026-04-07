import { expect, test } from "@playwright/test"

const BASE = "http://127.0.0.1:3000"

test.describe("marketing smoke", () => {
  test("home loads hero and primary CTAs", async ({ page }) => {
    await page.goto(`${BASE}/`)
    await expect(page.getByRole("heading", { name: /marching 2 more real estate team/i })).toBeVisible()
    await expect(page.getByRole("heading", { name: /where you find your next home/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /^work with us$/i }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: /contact us/i }).first()).toBeVisible()
  })

  test("resources pre-listing checklist", async ({ page }) => {
    await page.goto(`${BASE}/resources`)
    await expect(page.locator("main h1")).toContainText(/pre-listing/i)
    await expect(page.locator("main h1")).toContainText(/checklist/i)
    await expect(page.getByRole("link", { name: /download checklist/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /email me the checklist/i })).toBeVisible()
  })

  test("contact page loads", async ({ page }) => {
    await page.goto(`${BASE}/contact-us`)
    await expect(page.getByRole("heading", { name: /contact us/i })).toBeVisible()
  })
})
