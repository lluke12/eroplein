import citiesData from "@/data/cities.json";
import categoriesData from "@/data/categories.json";
import type { City, Category } from "./types";

export function getCities(): City[] {
  return citiesData.cities as City[];
}

export function getFeaturedCities(): City[] {
  return getCities().filter((c) => c.featured);
}

export function getCityBySlug(slug: string): City | undefined {
  return getCities().find((c) => c.slug === slug);
}

export function getCategories(): Category[] {
  return (categoriesData.categories as Category[]).sort(
    (a, b) => a.sort_order - b.sort_order
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getNearbyCities(citySlug: string, limit = 5): City[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];

  return getCities()
    .filter((c) => c.slug !== citySlug)
    .map((c) => ({
      ...c,
      distance: Math.sqrt(
        Math.pow(c.lat - city.lat, 2) + Math.pow(c.lng - city.lng, 2)
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

export function getProvinces(): string[] {
  return [...new Set(getCities().map((c) => c.province))].sort();
}

export function getCitiesByProvince(province: string): City[] {
  return getCities()
    .filter((c) => c.province.toLowerCase() === province.toLowerCase())
    .sort((a, b) => b.population - a.population);
}

export function provinceSlug(province: string): string {
  return province.toLowerCase().replace(/['\s]+/g, "-");
}

export function provinceFromSlug(slug: string): string | undefined {
  return getProvinces().find((p) => provinceSlug(p) === slug);
}

// Category SEO helpers
export function formatCategoryTitle(
  category: Category,
  cityName: string,
  count?: number
): string {
  const template =
    category.seo_title_template ||
    `${category.name} ${cityName} - Reviews & ervaringen`;
  return template.replace("{city}", cityName).replace("{count}", String(count ?? ""));
}

export function formatCategoryDescription(
  category: Category,
  cityName: string,
  count: number
): string {
  const template =
    category.seo_description_template ||
    `Beste ${category.name.toLowerCase()} in ${cityName}. Vergelijk beoordelingen en lees eerlijke reviews.`;
  return template.replace("{city}", cityName).replace("{count}", String(count));
}
