import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email", group: "Instellingen" },
  fields: [
    { name: "name", type: "text", label: "Naam" },
    {
      name: "role",
      type: "select",
      label: "Rol",
      defaultValue: "admin",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Redacteur", value: "editor" },
      ],
    },
  ],
};
