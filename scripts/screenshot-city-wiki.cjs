// Takes screenshots of city Wikipedia pages (the main hero image)
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const cities = require("../data/cities.json").cities;

const SCREENSHOT_DIR = path.join(__dirname, "../public/cities");
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

// Wikipedia article names for Dutch cities (some differ from city name)
const wikiNames = {
  "s-hertogenbosch": "'s-Hertogenbosch",
  "den-haag": "Den_Haag",
  "sittard-geleen": "Sittard-Geleen",
  "alphen-aan-den-rijn": "Alphen_aan_den_Rijn",
  haarlemmermeer: "Hoofddorp",
  zaanstad: "Zaandam",
  westland: "Westland_(gemeente)",
};

async function screenshotCity(browser, city) {
  const outFile = path.join(SCREENSHOT_DIR, `${city.slug}.jpg`);
  const wikiName = wikiNames[city.slug] || city.name.replace(/ /g, "_");
  const url = `https://nl.wikipedia.org/wiki/${encodeURIComponent(wikiName)}`;

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 800 });

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(1500);

    // Try to find the main infobox image (the city photo)
    const infoboxImage = page.locator('.infobox img, .thumb img, .mw-file-element').first();

    if (await infoboxImage.isVisible({ timeout: 3000 })) {
      // Get the image src and download it directly for better quality
      const imgSrc = await infoboxImage.getAttribute('src');
      if (imgSrc) {
        // Wikipedia thumbnails - get larger version
        const largeUrl = imgSrc
          .replace(/\/thumb\//, '/')
          .replace(/\/\d+px-[^/]+$/, '')
          .replace(/^\/\//, 'https://');

        // Take a screenshot of just the image area with some padding
        const box = await infoboxImage.boundingBox();
        if (box) {
          // Screenshot the top portion of the page which includes the city image
          await page.screenshot({
            path: outFile,
            type: "jpeg",
            quality: 85,
            clip: { x: 0, y: 0, width: 1200, height: 600 },
          });
          console.log(`  ✓ ${city.name} (wiki page)`);
          await page.close();
          return "ok";
        }
      }
    }

    // Fallback: screenshot the top of the wiki article
    await page.screenshot({
      path: outFile,
      type: "jpeg",
      quality: 85,
      clip: { x: 0, y: 0, width: 1200, height: 600 },
    });
    console.log(`  ✓ ${city.name} (wiki fallback)`);
    await page.close();
    return "ok";
  } catch (e) {
    console.log(`  ✗ ${city.name}: ${e.message.substring(0, 60)}`);
    await page.close();
    return "fail";
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  console.log(`Screenshotting ${cities.length} cities from Wikipedia...\n`);

  let ok = 0, fail = 0;
  for (let i = 0; i < cities.length; i += 3) {
    const batch = cities.slice(i, i + 3);
    const results = await Promise.all(batch.map((c) => screenshotCity(browser, c)));
    ok += results.filter((r) => r === "ok").length;
    fail += results.filter((r) => r === "fail").length;
  }

  await browser.close();
  console.log(`\nDone! OK: ${ok}, Failed: ${fail}`);
}

main().catch(console.error);
