// Takes screenshots of all business websites
// Run: npx playwright install chromium && node scripts/screenshot-sites.cjs

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

// Extract all businesses with websites from the data file
const dataFile = fs.readFileSync(
  path.join(__dirname, "../lib/real-businesses-data.ts"),
  "utf-8"
);

const businesses = [];
const blocks = dataFile.split(/\n  \{/);
for (const block of blocks) {
  const name = block.match(/name:\s*"([^"]+)"/);
  const slug = block.match(/slug:\s*"([^"]+)"/);
  const website = block.match(/website:\s*"([^"]+)"/);
  const citySlug = block.match(/city_slug:\s*"([^"]+)"/);
  if (name && slug && website) {
    businesses.push({
      name: name[1],
      slug: slug[1],
      website: website[1],
      citySlug: citySlug ? citySlug[1] : "unknown",
    });
  }
}

console.log(`Found ${businesses.length} businesses with websites`);

const SCREENSHOT_DIR = path.join(__dirname, "../public/screenshots");
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

async function screenshotSite(browser, biz, index) {
  const outFile = path.join(SCREENSHOT_DIR, `${biz.slug}.jpg`);

  // Skip if already exists
  if (fs.existsSync(outFile)) {
    console.log(`  [${index}] SKIP ${biz.name} (exists)`);
    return { slug: biz.slug, status: "skipped" };
  }

  const page = await browser.newPage();
  page.setDefaultTimeout(15000);

  try {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(biz.website, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(2000); // Let images/CSS load

    // Dismiss cookie banners
    try {
      const cookieBtn = page.locator(
        'button:has-text("accepteer"), button:has-text("akkoord"), button:has-text("accept"), button:has-text("OK"), [class*="cookie"] button'
      );
      if (await cookieBtn.first().isVisible({ timeout: 2000 })) {
        await cookieBtn.first().click();
        await page.waitForTimeout(500);
      }
    } catch {}

    await page.screenshot({
      path: outFile,
      type: "jpeg",
      quality: 80,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });

    console.log(`  [${index}] OK ${biz.name} -> ${biz.slug}.jpg`);
    return { slug: biz.slug, status: "ok", name: biz.name };
  } catch (err) {
    console.log(`  [${index}] FAIL ${biz.name}: ${err.message.substring(0, 80)}`);
    return { slug: biz.slug, status: "failed", error: err.message };
  } finally {
    await page.close();
  }
}

async function main() {
  console.log("Installing Chromium if needed...");

  const browser = await chromium.launch({ headless: true });
  console.log(`\nTaking screenshots of ${businesses.length} websites...\n`);

  const results = [];
  // Process 3 at a time
  for (let i = 0; i < businesses.length; i += 3) {
    const batch = businesses.slice(i, i + 3);
    const batchResults = await Promise.all(
      batch.map((biz, j) => screenshotSite(browser, biz, i + j + 1))
    );
    results.push(...batchResults);
  }

  await browser.close();

  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status === "failed").length;

  console.log(`\nDone! OK: ${ok}, Skipped: ${skipped}, Failed: ${failed}`);

  // Write metadata JSON
  const metadata = {};
  for (const biz of businesses) {
    metadata[biz.slug] = {
      alt: `${biz.name} - ${biz.citySlug.replace(/-/g, " ")}`,
      src: `/screenshots/${biz.slug}.jpg`,
      website: biz.website,
    };
  }
  fs.writeFileSync(
    path.join(SCREENSHOT_DIR, "metadata.json"),
    JSON.stringify(metadata, null, 2)
  );
  console.log("Metadata written to public/screenshots/metadata.json");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
