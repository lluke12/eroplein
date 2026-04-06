import type { CollectionConfig } from "payload";

export const Cities: CollectionConfig = {
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
