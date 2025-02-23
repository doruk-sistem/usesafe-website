import { CollectionConfig } from "payload";

export const Counter: CollectionConfig = {
  slug: "counter",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "active"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "items",
      label: "Items",
      type: "array",
      required: true,
      admin: {
        description: undefined  // Description'ı kaldır
      },
      fields: [
        {
          name: "description",
          type: "text",
          required: true,
          localized: true,  // Array yerine field'ları localized yap
        },
        {
          name: "value",
          type: "number",
          required: true,
        }
      ]
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
