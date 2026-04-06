import { buildConfig } from "payload";
import type { CollectionConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

// ── Collections ─────────────────────────────────────────────────────────

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email", group: "Instellingen" },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", label: "Naam" },
    { name: "role", type: "select", label: "Rol", defaultValue: "admin", required: false, options: [{ label: "Admin", value: "admin" }, { label: "Redacteur", value: "editor" }] },
  ],
};

const Categories: CollectionConfig = {
  slug: "categories",
  admin: { useAsTitle: "name", group: "Directory" },
  labels: { singular: "Categorie", plural: "Categorieën" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "icon", type: "text" },
    { name: "color", type: "select", options: [{ label: "Fuchsia", value: "fuchsia" }, { label: "Pink", value: "pink" }, { label: "Purple", value: "purple" }, { label: "Rose", value: "rose" }] },
    { name: "description", type: "textarea" },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};

const Cities: CollectionConfig = {
  slug: "cities",
  admin: { useAsTitle: "name", group: "Directory" },
  labels: { singular: "Stad", plural: "Steden" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "province", type: "text", required: true },
    { name: "lat", type: "number" },
    { name: "lng", type: "number" },
    { name: "population", type: "number" },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "description", type: "textarea" },
  ],
};

const Businesses: CollectionConfig = {
  slug: "businesses",
  admin: { useAsTitle: "name", group: "Directory" },
  labels: { singular: "Bedrijf", plural: "Bedrijven" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "city", type: "relationship", relationTo: "cities", required: true },
    { name: "primaryCategory", type: "relationship", relationTo: "categories", required: true },
    { name: "categories", type: "relationship", relationTo: "categories", hasMany: true },
    { name: "description", type: "textarea", required: true },
    { name: "shortDescription", type: "text", maxLength: 160 },
    { name: "address", type: "text" },
    { name: "postalCode", type: "text" },
    { name: "phone", type: "text" },
    { name: "website", type: "text" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "externalImageUrl", type: "text" },
    { name: "priceRange", type: "select", options: [{ label: "€", value: "1" }, { label: "€€", value: "2" }, { label: "€€€", value: "3" }, { label: "€€€€", value: "4" }], defaultValue: "2" },
    { name: "isVerified", type: "checkbox", defaultValue: false },
    { name: "isFeatured", type: "checkbox", defaultValue: false },
    { name: "openingHours", type: "text" },
  ],
};

const Reviews: CollectionConfig = {
  slug: "reviews",
  admin: { useAsTitle: "title", group: "Community" },
  labels: { singular: "Review", plural: "Reviews" },
  access: {
    create: () => true,
    read: ({ req }) => {
      if (req.user) return true;
      return { status: { equals: "approved" } };
    },
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "business", type: "relationship", relationTo: "businesses", required: true },
    { name: "status", type: "select", required: true, defaultValue: "pending", options: [{ label: "In afwachting", value: "pending" }, { label: "Goedgekeurd", value: "approved" }, { label: "Afgewezen", value: "rejected" }], admin: { position: "sidebar" } },
    { name: "authorName", type: "text", required: true },
    { name: "rating", type: "number", required: true, min: 1, max: 5 },
    { name: "title", type: "text" },
    { name: "content", type: "textarea", required: true },
    { name: "pros", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "cons", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "authorEmail", type: "email", admin: { position: "sidebar" } },
  ],
};

const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title", group: "Content" },
  labels: { singular: "Pagina", plural: "Pagina's" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "template", type: "select", required: true, defaultValue: "default", options: [{ label: "Standaard", value: "default" }, { label: "Contact", value: "contact" }, { label: "FAQ", value: "faq" }, { label: "Info", value: "info" }] },
    { name: "content", type: "richText" },
    { name: "metaDescription", type: "textarea", maxLength: 160, admin: { position: "sidebar" } },
    { name: "status", type: "select", defaultValue: "published", options: [{ label: "Concept", value: "draft" }, { label: "Gepubliceerd", value: "published" }], admin: { position: "sidebar" } },
  ],
};

const Articles: CollectionConfig = {
  slug: "articles",
  admin: { useAsTitle: "title", group: "Content" },
  labels: { singular: "Artikel", plural: "Artikelen" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "author", type: "text", defaultValue: "Redactie Eroplein" },
    { name: "publishedAt", type: "date", admin: { position: "sidebar" } },
    { name: "status", type: "select", defaultValue: "draft", options: [{ label: "Concept", value: "draft" }, { label: "Gepubliceerd", value: "published" }], admin: { position: "sidebar" } },
  ],
};

const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Instellingen" },
  labels: { singular: "Bestand", plural: "Media" },
  upload: { mimeTypes: ["image/*"] },
  fields: [{ name: "alt", type: "text" }],
};

// ── Config ──────────────────────────────────────────────────────────────

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: { titleSuffix: " — Eroplein Admin" },
  },
  collections: [Users, Businesses, Reviews, Categories, Cities, Pages, Articles, Media],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
  }),
  sharp,
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-in-production",
});
