import { chromium } from "playwright"

const sites = [
  { name: "alike", url: "https://alike.page/" },
  { name: "matthaeusjandl", url: "https://matthaeusjandl.com/" },
  { name: "dashcreative", url: "https://dashcreative.co/" },
  { name: "tingyan", url: "https://tingyan.me/" },
  { name: "forrm-studio", url: "https://forrm.studio/" },
  { name: "diffusion-studio-scroll", url: "https://diffusion.studio/" },
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
