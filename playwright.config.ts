import { defineConfig, devices } from "@playwright/test"

const e2ePort = process.env.PW_SERVER_PORT ?? "3005"
const e2eHost = `http://127.0.0.1:${e2ePort}`

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 90_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"]],
  use: {
    baseURL: e2eHost,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npm run start -- -p ${e2ePort} -H 127.0.0.1`,
    url: e2eHost,
    reuseExistingServer: process.env.GITHUB_ACTIONS !== "true",
    timeout: 120_000,
    cwd: process.cwd(),
  },
})
