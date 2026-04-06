// Direct database seed - no API token needed
// Run: node scripts/seed-db.cjs

const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function q(text, params) {
  const { rows } = await pool.query(text, params);
  return rows;
}

async function insert(table, data) {
  const keys = Object.keys(data);
  const vals = Object.values(data);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
  const cols = keys.map((k) => `"${k}"`).join(", ");
  const rows = await q(
    `INSERT INTO "${table}" (${cols}) VALUES (${placeholders}) RETURNING id`,
    vals
  );
  return rows[0].id;
}

async function main() {
  console.log("Seeding database directly...\n");

  // 1. Categories
  const categoriesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/categories.json"), "utf-8")
  );
  const catMap = {};
  console.log("=== Categories ===");
  for (const cat of categoriesData.categories) {
    const id = await insert("categories", {
      name: cat.name,
      slug: cat.slug,
      icon: cat.icon,
      color: cat.color,
      description: cat.description,
      sort_order: cat.sort_order,
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    });
    catMap[cat.slug] = id;
    console.log(`  ✓ ${cat.name} (${id})`);
  }

  // 2. Cities
  const citiesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/cities.json"), "utf-8")
  );
  const cityMap = {};
  console.log("\n=== Cities ===");
  for (const city of citiesData.cities) {
    const id = await insert("cities", {
      name: city.name,
      slug: city.slug,
      province: city.province,
      lat: city.lat,
      lng: city.lng,
      population: city.population,
      featured: city.featured || false,
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    });
    cityMap[city.slug] = id;
    console.log(`  ✓ ${city.name} (${id})`);
  }

  // 3. Businesses
  const bizFile = fs.readFileSync(
    path.join(__dirname, "../lib/real-businesses-data.ts"),
    "utf-8"
  );
  const bizBlocks = bizFile.split(/\n  \{/).slice(1);
  const bizMap = {};
  console.log("\n=== Businesses ===");

  for (const block of bizBlocks) {
    const get = (f) => {
      const m = block.match(new RegExp(`${f}:\\s*"([^"]*)"`, "s"));
      return m ? m[1] : null;
    };
    const getNum = (f) => {
      const m = block.match(new RegExp(`${f}:\\s*([\\d.]+)`));
      return m ? parseFloat(m[1]) : null;
    };
    const getBool = (f) => {
      const m = block.match(new RegExp(`${f}:\\s*(true|false)`));
      return m ? m[1] === "true" : false;
    };
    const getArr = (f) => {
      const m = block.match(new RegExp(`${f}:\\s*\\[([^\\]]+)\\]`));
      if (!m) return [];
      return (m[1].match(/"([^"]+)"/g) || []).map((s) => s.replace(/"/g, ""));
    };

    const id = get("id");
    const name = get("name");
    const slug = get("slug");
    const citySlug = get("city_slug");
    const primaryCat = get("primary_category");
    const catSlugs = getArr("category_slugs");
    const imageUrl = get("image_url");

    if (!name || !slug) continue;

    const cityId = cityMap[citySlug];
    const primaryCatId = catMap[primaryCat];
    if (!cityId || !primaryCatId) {
      console.log(`  ⚠ Skip ${name} (no mapping)`);
      continue;
    }

    const bizId = await insert("businesses", {
      name,
      slug,
      city_id: cityId,
      primary_category_id: primaryCatId,
      description: get("description") || "",
      short_description: get("short_description") || "",
      address: get("address") || "",
      postal_code: get("postal_code") || "",
      phone: get("phone") || null,
      website: get("website") || null,
      external_image_url: imageUrl || null,
      price_range: String(getNum("price_range") || 2),
      is_verified: getBool("is_verified"),
      is_featured: getBool("is_featured"),
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    });
    bizMap[id] = bizId;

    // Insert category relationships
    const allCatIds = catSlugs.map((s) => catMap[s]).filter(Boolean);
    for (let i = 0; i < allCatIds.length; i++) {
      await insert("businesses_rels", {
        order: i + 1,
        parent_id: bizId,
        path: "categories",
        categories_id: allCatIds[i],
      });
    }

    console.log(`  ✓ ${name} (${bizId})`);
  }

  // 4. Reviews
  console.log("\n=== Reviews ===");
  const reviewData = [
    {
      bizId: "excel-121",
      authorName: "Sammy W.",
      rating: 5,
      title: "Hete sexy date",
      content: "Vanavond de blonde stoot Livia op bezoek gehad. Moest even wachten maar het was het waard want deze meid snapt precies hoe ze flink moet verwennen. Ga haar zeker vaker bestellen. En ben benieuwd naar welke mooie meiden er nog meer te vinden zijn bij dit bedrijf.",
      pros: ["Mooie dame", "Goede service"],
      cons: ["Even wachten"],
      date: "2026-03-31T22:00:00Z",
    },
    {
      bizId: "excel-104",
      authorName: "Willem W.",
      rating: 4,
      title: "Lieve Rosie",
      content: "Leuk gehad met Rosie, zij is heel lief en vond het goed dat ik eerst met haar ging douchen. Vond wel duur dus niet te vaak maar wil haar nog een keer zien en dan weer samen onder de douche.",
      pros: ["Lieve dame", "Flexibel"],
      cons: ["Aan de dure kant"],
      date: "2026-04-01T21:00:00Z",
    },
    {
      bizId: "excel-119",
      authorName: "Carlos",
      rating: 5,
      title: "Eerste escort",
      content: "Voor het eerst escort en wilde een hele jonge meid. Het meisje aan de telefoon zei beter niet te jong omdat ik nerveus ben dus Faya en zij was ouder maar heel goed. Heel mooi is ze en kwam alleen dat was ook fijn. Mocht alles met haar doen en kreeg lekker massage.",
      pros: ["Goed advies aan telefoon", "Mooie dame", "Kwam alleen"],
      cons: [],
      date: "2026-04-01T23:00:00Z",
    },
    {
      bizId: "excel-106",
      authorName: "Anand",
      rating: 4,
      title: "Heel mooi sexy meisje",
      content: "Heel mooi sexy meisje langs gehad, ik was te snel klaar en dat was een beetje jammer maar ze was zo horny dat ik er niks aan kon doen. Ze bleef wel gezellig en ik mocht haar nog even lekker verwennen. Missy is een exotisch meisje en ze was echt heel gezellig.",
      pros: ["Mooi meisje", "Gezellig", "Bleef langer"],
      cons: [],
      date: "2026-03-30T22:00:00Z",
    },
    {
      bizId: "excel-121",
      authorName: "Steven",
      rating: 5,
      title: "Klasse dame",
      content: "Wilde vanavond echt even genieten met een mooie vrouw en na goed voorgelicht te zijn door de dienstdoende telefoniste viel de keuze op Patricia. Een hele mooie stijlvolle en uiterst verzorgde verschijning. Enige minpuntje was dat de chauffeur iets te dichtbij bleef wachten maar na een telefoontje naar het bureau werd dit opgelost. Het was zo gezellig dat Patricia nog een aantal uren langer is gebleven en na vele slechte ervaringen waarbij ik vaak dames kreeg die geen Nederlands spraken en zo snel mogelijk weer wilde vertrekken heb ik nu een ervaring gehad waarbij ik volledig ontspannen was en heerlijk de tijd kon nemen. Patricia komt volgende week weer langs en ik verheug me hier nu al op. Heel fijn ook dat de dame aan de telefoon zo uitgebreid kon helpen en me echt goed kon adviseren.",
      pros: ["Stijlvolle dame", "Goed advies telefoniste", "Nam de tijd"],
      cons: ["Chauffeur te dichtbij (werd opgelost)"],
      date: "2026-03-30T23:30:00Z",
    },
  ];

  for (const rev of reviewData) {
    const payloadBizId = bizMap[rev.bizId];
    if (!payloadBizId) {
      console.log(`  ⚠ Skip review by ${rev.authorName} (biz ${rev.bizId} not found)`);
      continue;
    }

    const reviewId = await insert("reviews", {
      business_id: payloadBizId,
      status: "approved",
      author_name: rev.authorName,
      rating: rev.rating,
      title: rev.title,
      content: rev.content,
      updated_at: rev.date,
      created_at: rev.date,
    });

    // Insert pros
    for (let i = 0; i < rev.pros.length; i++) {
      await insert("reviews_pros", {
        _order: i + 1,
        _parent_id: reviewId,
        text: rev.pros[i],
      });
    }
    // Insert cons
    for (let i = 0; i < rev.cons.length; i++) {
      await insert("reviews_cons", {
        _order: i + 1,
        _parent_id: reviewId,
        text: rev.cons[i],
      });
    }

    console.log(`  ✓ Review by ${rev.authorName}`);
  }

  console.log("\n✅ Done!");
  console.log(`  Categories: ${Object.keys(catMap).length}`);
  console.log(`  Cities: ${Object.keys(cityMap).length}`);
  console.log(`  Businesses: ${Object.keys(bizMap).length}`);
  console.log(`  Reviews: ${reviewData.length}`);

  pool.end();
}

main().catch((e) => {
  console.error("Fatal:", e);
  pool.end();
  process.exit(1);
});
