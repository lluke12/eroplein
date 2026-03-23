import type { MetadataRoute } from "next";
import { getCities, getCategories } from "@/lib/data";
import { placeholderBusinesses } from "@/lib/placeholder-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eroplein.com";
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
  );

  // City pages (42 cities)
  cities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: city.featured ? 0.9 : 0.7,
    });
  });

  // City + Category pages (42 x 8 = 336 pages)
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

  // Business pages
  placeholderBusinesses.forEach((biz) => {
    routes.push({
      url: `${baseUrl}/${biz.city_slug}/${biz.primary_category}/${biz.slug}`,
      lastModified: biz.updated_at,
      changeFrequency: "weekly",
      priority: 0.7,
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

  return routes;
}
