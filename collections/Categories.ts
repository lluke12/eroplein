import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: { useAsTitle: "name", group: "Directory" },
  labels: { singular: "Categorie", plural: "Categorieën" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "icon", type: "text" },
    {
      name: "color",
      type: "select",
      options: [
        { label: "Fuchsia", value: "fuchsia" },
        { label: "Pink", value: "pink" },
        { label: "Purple", value: "purple" },
        { label: "Rose", value: "rose" },
      ],
    },
    { name: "description", type: "textarea" },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
