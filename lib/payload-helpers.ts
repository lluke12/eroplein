import { getPayload } from "payload";
import config from "@payload-config";

// Helper to get Payload instance
async function getPayloadClient() {
  return getPayload({ config });
}

// ── Cities ──────────────────────────────────────────────────────────────

export async function getCitiesFromCMS() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "cities",
    limit: 100,
    sort: "-population",
  });
  return result.docs;
}

export async function getCityBySlugFromCMS(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "cities",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return result.docs[0] || null;
}

export async function getFeaturedCitiesFromCMS() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "cities",
    where: { featured: { equals: true } },
    limit: 20,
    sort: "-population",
  });
  return result.docs;
}

// ── Categories ──────────────────────────────────────────────────────────

export async function getCategoriesFromCMS() {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "categories",
    limit: 20,
    sort: "sortOrder",
  });
  return result.docs;
}

export async function getCategoryBySlugFromCMS(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "categories",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return result.docs[0] || null;
}

// ── Businesses ──────────────────────────────────────────────────────────

export async function getBusinessesFromCMS(options?: {
  cityId?: number;
  categoryId?: number;
  limit?: number;
  sort?: string;
  featured?: boolean;
}) {
  const payload = await getPayloadClient();
  const where: any = {};

  if (options?.cityId) where.city = { equals: options.cityId };
  if (options?.categoryId) {
    where.or = [
      { primaryCategory: { equals: options.categoryId } },
      { categories: { contains: options.categoryId } },
    ];
  }
  if (options?.featured) where.isFeatured = { equals: true };

  const result = await payload.find({
    collection: "businesses",
    where,
    limit: options?.limit || 100,
    sort: options?.sort || "-createdAt",
    depth: 1, // Populate relationships
  });
  return result.docs;
}

export async function getBusinessBySlugFromCMS(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "businesses",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return result.docs[0] || null;
}

// ── Reviews ─────────────────────────────────────────────────────────────

export async function getReviewsFromCMS(options?: {
  businessId?: number;
  status?: string;
  limit?: number;
}) {
  const payload = await getPayloadClient();
  const where: any = {};

  if (options?.businessId) where.business = { equals: options.businessId };
  if (options?.status) where.status = { equals: options.status };

  const result = await payload.find({
    collection: "reviews",
    where,
    limit: options?.limit || 50,
    sort: "-createdAt",
    depth: 1,
  });
  return result.docs;
}

// ── Articles ────────────────────────────────────────────────────────────

export async function getArticlesFromCMS(options?: {
  status?: string;
  limit?: number;
}) {
  const payload = await getPayloadClient();
  const where: any = {};
  if (options?.status) where.status = { equals: options.status };

  const result = await payload.find({
    collection: "articles",
    where,
    limit: options?.limit || 20,
    sort: "-publishedAt",
    depth: 1,
  });
  return result.docs;
}

export async function getArticleBySlugFromCMS(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "articles",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return result.docs[0] || null;
}

// ── Pages ───────────────────────────────────────────────────────────────

export async function getPageBySlugFromCMS(slug: string) {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    limit: 1,
  });
  return result.docs[0] || null;
}
