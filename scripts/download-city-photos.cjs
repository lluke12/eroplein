// Downloads the main Wikipedia image for each Dutch city via Wikimedia API
const fs = require("fs");
const path = require("path");
const https = require("https");

const cities = require("../data/cities.json").cities;
const DIR = path.join(__dirname, "../public/cities");
fs.mkdirSync(DIR, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const follow = (u) => {
      https.get(u, { headers: { "User-Agent": "EropleinBot/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); return; }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => { file.close(); resolve(); });
      }).on("error", reject);
    };
    follow(url);
  });
}

const wikiNames = {
  "s-hertogenbosch": "'s-Hertogenbosch",
  "den-haag": "Den Haag",
  "sittard-geleen": "Sittard-Geleen",
  "alphen-aan-den-rijn": "Alphen aan den Rijn",
  haarlemmermeer: "Hoofddorp",
  zaanstad: "Zaandam",
  westland: "Naaldwijk",
};

async function getWikiImage(cityName) {
  const name = wikiNames[cityName] || cityName;
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
  const res = await fetch(url, { headers: { "User-Agent": "EropleinBot/1.0" } });
  const data = await res.json();
  if (data.originalimage && data.originalimage.source) {
    // Get a 800px wide version
    const src = data.originalimage.source;
    const thumb = src.replace(/\/commons\//, "/commons/thumb/") + "/800px-" + path.basename(src);
    return { original: src, thumb };
  }
  if (data.thumbnail && data.thumbnail.source) {
    // Scale up the thumbnail URL
    return { original: data.thumbnail.source.replace(/\/\d+px-/, "/800px-"), thumb: data.thumbnail.source };
  }
  return null;
}

async function main() {
  console.log(`Downloading real city photos for ${cities.length} cities...\n`);
  let ok = 0, fail = 0;

  for (const city of cities) {
    const outFile = path.join(DIR, `${city.slug}.jpg`);
    const name = wikiNames[city.slug] || city.name;

    try {
      const img = await getWikiImage(name);
      if (!img) { console.log(`  ✗ ${city.name}: no image found`); fail++; continue; }

      // Try thumbnail first (more reliable), then original
      try {
        await download(img.thumb, outFile);
      } catch {
        await download(img.original, outFile);
      }

      const size = fs.statSync(outFile).size;
      if (size < 5000) {
        // Too small, probably an error page
        fs.unlinkSync(outFile);
        // Try original
        await download(img.original, outFile);
      }

      console.log(`  ✓ ${city.name} (${(fs.statSync(outFile).size / 1024).toFixed(0)}KB)`);
      ok++;
    } catch (e) {
      console.log(`  ✗ ${city.name}: ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone! OK: ${ok}, Failed: ${fail}`);
}

main().catch(console.error);
