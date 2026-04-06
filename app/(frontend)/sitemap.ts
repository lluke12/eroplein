import type { MetadataRoute } from "next";
import { getCities, getCategories } from "@/lib/data";
import { placeholderBusinesses } from "@/lib/placeholder-data";
import { guides } from "@/lib/guides-data";
import { placeholderArticles } from "@/lib/placeholder-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.eroplein.com";
  const cities = getCities();
  const categories = getCategories();
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [];

  // Static pages
  routes.push(
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/steden`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/categorieen`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/nieuws`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/vergelijk`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/gids`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/adverteren`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  );

  // City pages
  cities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: city.featured ? 0.9 : 0.7,
    });
  });

  // City + Category pages
  cities.forEach((city) => {
    categories.forEach((cat) => {
      routes.push({
        url: `${baseUrl}/${city.slug}/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: city.featured ? 0.8 : 0.6,
      });
    });
  });

  // Category overview pages
  categories.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/categorieen/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // FAQ per category
  categories.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/faq/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  // ALL business pages
  placeholderBusinesses.forEach((biz) => {
    routes.push({
      url: `${baseUrl}/${biz.city_slug}/${biz.primary_category}/${biz.slug}`,
      lastModified: biz.updated_at,
      changeFrequency: "weekly",
      priority: biz.is_featured ? 0.8 : 0.7,
    });
  });

  // Province pages
  const provinces = [...new Set(cities.map((c) => c.province))];
  provinces.forEach((prov) => {
    const slug = prov.toLowerCase().replace(/['\s]+/g, "-");
    routes.push({
      url: `${baseUrl}/provincie/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  });

  // Guide pages
  if (typeof guides !== "undefined" && Array.isArray(guides)) {
    guides.forEach((guide: { slug: string }) => {
      routes.push({
        url: `${baseUrl}/gids/${guide.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  }

  // News articles
  if (typeof placeholderArticles !== "undefined" && Array.isArray(placeholderArticles)) {
    placeholderArticles.forEach((article) => {
      routes.push({
        url: `${baseUrl}/nieuws/${article.slug}`,
        lastModified: article.published_at,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    });
  }

  return routes;
}
