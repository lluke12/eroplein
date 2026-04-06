import type { CollectionConfig } from "payload";

export const Businesses: CollectionConfig = {
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
    {
      name: "priceRange",
      type: "select",
      options: [
        { label: "€", value: "1" },
        { label: "€€", value: "2" },
        { label: "€€€", value: "3" },
        { label: "€€€€", value: "4" },
      ],
      defaultValue: "2",
    },
    { name: "isVerified", type: "checkbox", defaultValue: false },
    { name: "isFeatured", type: "checkbox", defaultValue: false },
    { name: "openingHours", type: "text" },
  ],
};
