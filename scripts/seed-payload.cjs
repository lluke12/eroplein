// Seed all data into Payload CMS via REST API
// Run: DATABASE_URL=... PAYLOAD_SECRET=... node scripts/seed-payload.cjs <admin-token>

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.eroplein.com/api";

// Get token from command line or env
const TOKEN = process.argv[2] || process.env.PAYLOAD_TOKEN;
if (!TOKEN) {
  console.error("Usage: node scripts/seed-payload.cjs <admin-token>");
  console.error("Get token by logging in at /admin and checking the cookie, or via API:");
  console.error('curl -s -X POST "https://www.eroplein.com/api/users/login" -H "Content-Type: application/json" -d \'{"email":"...","password":"..."}\'');
  process.exit(1);
}

const headers = {
  "Content-Type": "application/json",
  Authorization: `JWT ${TOKEN}`,
};

async function api(collection, data) {
  const res = await fetch(`${BASE_URL}/${collection}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(`${collection}: ${JSON.stringify(json.errors)}`);
  }
  return json.doc;
}

async function main() {
  console.log("Seeding Payload CMS...\n");

  // 1. Categories
  const categoriesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/categories.json"), "utf-8")
  );
  const categoryMap = {};
  console.log("=== Categories ===");
  for (const cat of categoriesData.categories) {
    try {
      const doc = await api("categories", {
        name: cat.name,
        slug: cat.slug,
        icon: cat.icon,
        color: cat.color,
        description: cat.description,
        sortOrder: cat.sort_order,
      });
      categoryMap[cat.slug] = doc.id;
      console.log(`  ✓ ${cat.name} (${doc.id})`);
    } catch (e) {
      console.log(`  ✗ ${cat.name}: ${e.message}`);
    }
  }

  // 2. Cities
  const citiesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/cities.json"), "utf-8")
  );
  const cityMap = {};
  console.log("\n=== Cities ===");
  for (const city of citiesData.cities) {
    try {
      const doc = await api("cities", {
        name: city.name,
        slug: city.slug,
        province: city.province,
        lat: city.lat,
        lng: city.lng,
        population: city.population,
        featured: city.featured || false,
      });
      cityMap[city.slug] = doc.id;
      console.log(`  ✓ ${city.name} (${doc.id})`);
    } catch (e) {
      console.log(`  ✗ ${city.name}: ${e.message}`);
    }
  }

  // 3. Businesses
  // Parse the TS file manually
  const bizFile = fs.readFileSync(
    path.join(__dirname, "../lib/real-businesses-data.ts"),
    "utf-8"
  );

  // Extract businesses using regex
  const bizBlocks = bizFile.split(/\n  \{/).slice(1);
  const businessMap = {};
  console.log("\n=== Businesses ===");

  for (const block of bizBlocks) {
    const get = (field) => {
      const m = block.match(new RegExp(`${field}:\\s*"([^"]*)"`, "s"));
      return m ? m[1] : null;
    };
    const getNum = (field) => {
      const m = block.match(new RegExp(`${field}:\\s*([\\d.]+)`));
      return m ? parseFloat(m[1]) : null;
    };
    const getBool = (field) => {
      const m = block.match(new RegExp(`${field}:\\s*(true|false)`));
      return m ? m[1] === "true" : false;
    };
    const getArr = (field) => {
      const m = block.match(new RegExp(`${field}:\\s*\\[([^\\]]+)\\]`));
      if (!m) return [];
      return m[1].match(/"([^"]+)"/g)?.map((s) => s.replace(/"/g, "")) || [];
    };

    const id = get("id");
    const name = get("name");
    const slug = get("slug");
    const citySlug = get("city_slug");
    const primaryCat = get("primary_category");
    const catSlugs = getArr("category_slugs");

    if (!name || !slug) continue;

    const cityId = cityMap[citySlug];
    const primaryCatId = categoryMap[primaryCat];
    const catIds = catSlugs.map((s) => categoryMap[s]).filter(Boolean);

    if (!cityId || !primaryCatId) {
      console.log(`  ⚠ Skip ${name} (no city/cat mapping)`);
      continue;
    }

    // Get image - check for screenshot path or URL
    const imageUrl = get("image_url") || block.match(/image_url:\s*"([^"]+)"/)?.[1];

    try {
      const doc = await api("businesses", {
        name,
        slug,
        city: cityId,
        primaryCategory: primaryCatId,
        categories: catIds,
        description: get("description") || "",
        shortDescription: get("short_description") || "",
        address: get("address") || "",
        postalCode: get("postal_code") || "",
        phone: get("phone") || undefined,
        website: get("website") || undefined,
        externalImageUrl: imageUrl || undefined,
        priceRange: String(getNum("price_range") || 2),
        isVerified: getBool("is_verified"),
        isFeatured: getBool("is_featured"),
      });
      businessMap[id] = doc.id;
      console.log(`  ✓ ${name} (${doc.id})`);
    } catch (e) {
      console.log(`  ✗ ${name}: ${e.message.substring(0, 100)}`);
    }
  }

  // 4. Reviews
  console.log("\n=== Reviews ===");
  const reviewsFile = fs.readFileSync(
    path.join(__dirname, "../lib/placeholder-data.ts"),
    "utf-8"
  );

  // Simple parse of review objects
  const reviewRegex =
    /\{\s*id:\s*"([^"]+)"[\s\S]*?business_id:\s*"([^"]+)"[\s\S]*?user_display_name:\s*"([^"]+)"[\s\S]*?rating:\s*(\d+)[\s\S]*?content:\s*\n?\s*"([\s\S]*?)"[\s\S]*?\}/g;

  let match;
  while ((match = reviewRegex.exec(reviewsFile)) !== null) {
    const [, , bizId, authorName, rating, content] = match;
    const payloadBizId = businessMap[bizId];

    // Get title if exists
    const titleMatch = reviewsFile
      .substring(match.index, match.index + match[0].length)
      .match(/title:\s*"([^"]+)"/);

    if (!payloadBizId) {
      console.log(`  ⚠ Skip review by ${authorName} (business ${bizId} not found)`);
      continue;
    }

    try {
      await api("reviews", {
        business: payloadBizId,
        status: "approved",
        authorName,
        rating: parseInt(rating),
        title: titleMatch ? titleMatch[1] : undefined,
        content,
      });
      console.log(`  ✓ Review by ${authorName}`);
    } catch (e) {
      console.log(`  ✗ Review by ${authorName}: ${e.message.substring(0, 100)}`);
    }
  }

  console.log("\n✅ Seeding complete!");
  console.log(`  Categories: ${Object.keys(categoryMap).length}`);
  console.log(`  Cities: ${Object.keys(cityMap).length}`);
  console.log(`  Businesses: ${Object.keys(businessMap).length}`);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
