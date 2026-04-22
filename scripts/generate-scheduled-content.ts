// ── Dagelijkse content-generator ────────────────────────────────────────
// Genereert content voor items in de calendar waarvan de datum binnen de
// target-window valt, en die nog niet bestaan in generated-data files.
//
// Usage:
//   npm run generate           (genereert alles voor de komende 7 dagen)
//   npm run generate -- 14     (komende 14 dagen)
//
// Output:
//   lib/generated-articles.ts
//   lib/generated-landings.ts

import fs from "fs";
import path from "path";
import calendarData from "../data/content-calendar.json";
import categoriesData from "../data/categories.json";
import citiesData from "../data/cities.json";
import { realBusinesses } from "../lib/real-businesses-data";
import {
  generateBlogArticle,
  generateLandingPage,
} from "./content-templates";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const ARTICLES_OUT = path.join(PROJECT_ROOT, "lib", "generated-articles.ts");
const LANDINGS_OUT = path.join(PROJECT_ROOT, "lib", "generated-landings.ts");

const args = process.argv.slice(2);
const DAYS_AHEAD = parseInt(args[0] || "7", 10);
const DATE_WINDOW_END = new Date();
DATE_WINDOW_END.setDate(DATE_WINDOW_END.getDate() + DAYS_AHEAD);

function isInWindow(dateStr: string): boolean {
  const d = new Date(dateStr);
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - 2); // Ook items van de afgelopen 2 dagen (catch-up)
  return d >= start && d <= DATE_WINDOW_END;
}

function escapeString(s: string | undefined): string {
  if (s === undefined) return "undefined";
  return JSON.stringify(s);
}

function serializeArticle(article: ReturnType<typeof generateBlogArticle>) {
  return `  {
    id: ${escapeString(article.id)},
    title: ${escapeString(article.title)},
    slug: ${escapeString(article.slug)},
    excerpt: ${escapeString(article.excerpt)},
    content: ${escapeString(article.content)},
    category_slug: ${article.category_slug ? escapeString(article.category_slug) : "undefined"},
    city_slug: ${article.city_slug ? escapeString(article.city_slug) : "undefined"},
    author_name: ${escapeString(article.author_name)},
    author_initial: ${escapeString(article.author_initial)},
    image_url: undefined,
    published_at: ${escapeString(article.published_at)},
    reading_time: ${article.reading_time},
    tags: ${JSON.stringify(article.tags)},
  }`;
}

function serializeLanding(page: ReturnType<typeof generateLandingPage>) {
  return `  {
    slug: ${escapeString(page.slug)},
    title: ${escapeString(page.title)},
    metaTitle: ${escapeString(page.metaTitle)},
    metaDescription: ${escapeString(page.metaDescription)},
    h1: ${escapeString(page.h1)},
    intro: ${escapeString(page.intro)},
    filterType: ${escapeString(page.filterType)} as const,
    ${page.citySlug ? `citySlug: ${escapeString(page.citySlug)},` : ""}
    ${page.categorySlug ? `categorySlug: ${escapeString(page.categorySlug)},` : ""}
    ${page.customBusinessIds ? `customBusinessIds: ${JSON.stringify(page.customBusinessIds)},` : ""}
    sections: ${JSON.stringify(page.sections, null, 4).replace(/\n/g, "\n    ")},
    faq: ${JSON.stringify(page.faq, null, 4).replace(/\n/g, "\n    ")},
    relatedLandings: ${JSON.stringify(page.relatedLandings || [])},
    publishedAt: ${escapeString(page.publishedAt)},
    updatedAt: ${escapeString(page.updatedAt)},
  }`;
}

// ── Main ──

const blogs = calendarData.blogs.filter((b: { date: string; status?: string }) =>
  isInWindow(b.date)
);
const landings = calendarData.landings.filter((l: { date: string }) =>
  isInWindow(l.date)
);

console.log(`Generating ${blogs.length} blog articles and ${landings.length} landing pages...`);

const categories = categoriesData.categories as Parameters<typeof generateBlogArticle>[1]["categories"];
const cities = citiesData.cities as Parameters<typeof generateBlogArticle>[1]["cities"];

const generatedBlogs = blogs.map((b: Parameters<typeof generateBlogArticle>[0]) =>
  generateBlogArticle(b, { categories, cities, businesses: realBusinesses })
);

const generatedLandings = landings.map((l) =>
  generateLandingPage(
    {
      date: l.date,
      slug: l.slug,
      title: l.title,
      filterType: l.filterType as "city_category" | "category" | "city" | "custom",
      citySlug: l.citySlug,
      categorySlug: l.categorySlug,
      customBusinessIds: (l as { customBusinessIds?: string[] }).customBusinessIds,
      keyword: l.keyword,
      volume: l.volume,
    },
    { categories, cities }
  )
);

// Write articles file
const articlesFile = `// ── AUTO-GENERATED — do not edit manually ────────────────────────────────
// Generated: ${new Date().toISOString()}
// Source: data/content-calendar.json
//
// Regenerate with: npm run generate

import type { Article } from "./types";

export const generatedArticles: Article[] = [
${generatedBlogs.map(serializeArticle).join(",\n")}
];
`;

fs.writeFileSync(ARTICLES_OUT, articlesFile);
console.log(`✓ Wrote ${generatedBlogs.length} articles to ${path.relative(PROJECT_ROOT, ARTICLES_OUT)}`);

// Write landings file
const landingsFile = `// ── AUTO-GENERATED — do not edit manually ────────────────────────────────
// Generated: ${new Date().toISOString()}
// Source: data/content-calendar.json
//
// Regenerate with: npm run generate

import type { LandingPage } from "./landing-pages-data";

export const generatedLandings: LandingPage[] = [
${generatedLandings.map(serializeLanding).join(",\n")}
];
`;

fs.writeFileSync(LANDINGS_OUT, landingsFile);
console.log(`✓ Wrote ${generatedLandings.length} landings to ${path.relative(PROJECT_ROOT, LANDINGS_OUT)}`);

console.log(`\nDone. Commit to publish.`);
