// Takes aerial/map screenshots for all cities without photos
// Uses OpenStreetMap static map tiles
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const cities = require("../data/cities.json").cities;

const EXISTING = new Set([
  "amsterdam", "rotterdam", "utrecht", "den-haag", "eindhoven", "groningen",
  "tilburg", "breda", "nijmegen", "arnhem", "haarlem", "maastricht", "leiden", "delft",
]);

const SCREENSHOT_DIR = path.join(__dirname, "../public/cities");
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const missing = cities.filter((c) => !EXISTING.has(c.slug));
console.log(`${missing.length} cities need photos`);

async function screenshotCity(browser, city) {
  const outFile = path.join(SCREENSHOT_DIR, `${city.slug}.jpg`);
  if (fs.existsSync(outFile)) {
    console.log(`  SKIP ${city.name}`);
    return;
  }

  const page = await browser.newPage();
  await page.setViewportSize({ width: 800, height: 500 });

  // Use OpenStreetMap with nice zoom level showing the city
  const zoom = city.population > 200000 ? 13 : city.population > 100000 ? 14 : 15;
  const url = `https://www.openstreetmap.org/export/embed.html?bbox=${city.lng - 0.03},${city.lat - 0.015},${city.lng + 0.03},${city.lat + 0.015}&layer=mapnik`;

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: outFile,
      type: "jpeg",
      quality: 85,
    });
    console.log(`  ✓ ${city.name}`);
  } catch (e) {
    console.log(`  ✗ ${city.name}: ${e.message.substring(0, 60)}`);
  } finally {
    await page.close();
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  for (let i = 0; i < missing.length; i += 3) {
    const batch = missing.slice(i, i + 3);
    await Promise.all(batch.map((c) => screenshotCity(browser, c)));
  }

  await browser.close();

  // Update the CITY_IMAGES mapping
  const imageMap = {};
  for (const city of cities) {
    if (EXISTING.has(city.slug)) {
      // Keep existing Unsplash URL - read from images.ts
      continue;
    }
    imageMap[city.slug] = `/cities/${city.slug}.jpg`;
  }

  console.log(`\nDone! Generated ${Object.keys(imageMap).length} city images`);
  fs.writeFileSync(
    path.join(SCREENSHOT_DIR, "metadata.json"),
    JSON.stringify(imageMap, null, 2)
  );
}

main().catch(console.error);
