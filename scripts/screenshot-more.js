import { chromium } from "playwright"

const sites = [
  { name: "ponder", url: "https://ponder.page/" },
  { name: "seamless-studio", url: "https://seamless-studio.com/" },
  { name: "selected-site", url: "https://selected.site/" },
  { name: "oakandgrid", url: "https://oakandgrid.com/" },
  { name: "noteworthy-studio", url: "https://noteworthy.studio/" },
  { name: "bureau-tonalli", url: "https://bureautonalli.com/" },
  { name: "tamaki-yoshida", url: "https://tamakiyoshida.com/" },
]

const browser = await chromium.launch({
  executablePath: "/usr/bin/helium",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
})

const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
})

for (const site of sites) {
  try {
    const page = await context.newPage()
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 20000 })
    await page.waitForTimeout(3000)
    await page.screenshot({
      path: `scripts/screenshots/${site.name}.png`,
      fullPage: false,
    })
    console.log(`✓ ${site.name}`)
    await page.close()
  } catch (e) {
    console.log(`✗ ${site.name}: ${e.message}`)
  }
}

await browser.close()
