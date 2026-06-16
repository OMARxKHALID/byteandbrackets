import { chromium } from "playwright"

const sites = [
  { name: "darkmodedesign", url: "https://www.darkmodedesign.com/" },
  { name: "awwwards-portfolio", url: "https://www.awwwards.com/websites/portfolio/" },
  { name: "diffusion-studio", url: "https://diffusion.studio/" },
  { name: "hypereffekt", url: "https://hypereffekt.com/" },
  { name: "ma5a", url: "https://ma5a.com/" },
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
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 20000 })
    await page.waitForTimeout(2000)
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
