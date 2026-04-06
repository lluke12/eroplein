import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: { useAsTitle: "title", group: "Content" },
  labels: { singular: "Pagina", plural: "Pagina's" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "template",
      type: "select",
      required: true,
      defaultValue: "default",
      options: [
        { label: "Standaard", value: "default" },
        { label: "Contact", value: "contact" },
        { label: "FAQ", value: "faq" },
        { label: "Info", value: "info" },
      ],
    },
    { name: "content", type: "richText" },
    {
      name: "metaDescription",
      type: "textarea",
      maxLength: 160,
      admin: { position: "sidebar" },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "published",
      options: [
        { label: "Concept", value: "draft" },
        { label: "Gepubliceerd", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
