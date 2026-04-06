import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
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
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Concept", value: "draft" },
        { label: "Gepubliceerd", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
