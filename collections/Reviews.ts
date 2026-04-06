import type { CollectionConfig } from "payload";

export const Reviews: CollectionConfig = {
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
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "In afwachting", value: "pending" },
        { label: "Goedgekeurd", value: "approved" },
        { label: "Afgewezen", value: "rejected" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "authorName", type: "text", required: true },
    { name: "rating", type: "number", required: true, min: 1, max: 5 },
    { name: "title", type: "text" },
    { name: "content", type: "textarea", required: true },
    { name: "pros", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "cons", type: "array", fields: [{ name: "text", type: "text" }] },
    { name: "authorEmail", type: "email", admin: { position: "sidebar" } },
  ],
};
