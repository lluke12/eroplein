import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Instellingen" },
  labels: { singular: "Bestand", plural: "Media" },
  upload: { mimeTypes: ["image/*"] },
  fields: [{ name: "alt", type: "text" }],
};
