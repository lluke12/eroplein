import type { MetadataRoute } from "next";
import { getCities, getCategories } from "@/lib/data";
import {
  placeholderBusinesses,
  getPublishedArticles,
  getPlaceholderBusinessesByCity,
  getPlaceholderBusinessByCityAndCategory,
} from "@/lib/placeholder-data";
import { getPublishedGuides } from "@/lib/guides-data";
import { getPublishedLandingPages } from "@/lib/landing-pages-data";

export const revalidate = 3600;

const BASE = "https://www.eroplein.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const cities = getCities();
  const categories = getCategories();
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [];

  // ── Core static pages ──
  routes.push(
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/steden`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/categorieen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/nieuws`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/gids`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/vergelijk`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/adverteren`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/beste`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  );

  // ── Landing pages (alleen gepubliceerde) ──
  getPublishedLandingPages().forEach((page) => {
    routes.push({
      url: `${BASE}/beste/${page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // ── City hub pages (only cities with at least 1 business) ──
  cities.forEach((city) => {
    const bizCount = getPlaceholderBusinessesByCity(city.slug).length;
    if (bizCount === 0 && !city.featured) return;
    routes.push({
      url: `${BASE}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: city.featured ? 0.9 : 0.6,
    });
  });

  // ── City-gids pages (only featured cities have hand-written guides) ──
  cities
    .filter((c) => c.featured)
    .forEach((city) => {
      routes.push({
        url: `${BASE}/${city.slug}/gids`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

  // ── City + Category pages (ONLY non-empty combinations) ──
  cities.forEach((city) => {
    categories.forEach((cat) => {
      const businesses = getPlaceholderBusinessByCityAndCategory(
        city.slug,
        cat.slug
      );
      if (businesses.length === 0) return; // Skip thin pages
      routes.push({
        url: `${BASE}/${city.slug}/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: city.featured ? 0.8 : 0.6,
      });
    });
  });

  // ── Category overview pages ──
  categories.forEach((cat) => {
    routes.push({
      url: `${BASE}/categorieen/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // ── FAQ per category ──
  categories.forEach((cat) => {
    routes.push({
      url: `${BASE}/faq/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  // ── Individual business pages ──
  placeholderBusinesses.forEach((biz) => {
    routes.push({
      url: `${BASE}/${biz.city_slug}/${biz.primary_category}/${biz.slug}`,
      lastModified: biz.updated_at,
      changeFrequency: "weekly",
      priority: biz.is_featured ? 0.8 : 0.6,
    });
  });

  // ── Province pages ──
  const provinces = [...new Set(cities.map((c) => c.province))];
  provinces.forEach((prov) => {
    const slug = prov.toLowerCase().replace(/['\s]+/g, "-");
    routes.push({
      url: `${BASE}/provincie/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  // ── Guide pages (alleen gepubliceerde) ──
  getPublishedGuides().forEach((guide) => {
    routes.push({
      url: `${BASE}/gids/${guide.slug}`,
      lastModified: guide.updatedAt || guide.publishedAt || now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // ── News articles (alleen gepubliceerde) ──
  getPublishedArticles().forEach((article) => {
    routes.push({
      url: `${BASE}/nieuws/${article.slug}`,
      lastModified: article.published_at,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return routes;
}
