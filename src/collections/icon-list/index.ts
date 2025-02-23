import { CollectionConfig } from "payload";

// Basit icon listesi
const ICON_LIST = [
  { label: "World Icon", value: "GiWorld" },
  { label: "Discount Icon", value: "CiDiscount1" },
  { label: "Recycling Icon", value: "GiWaterRecycling" },
  { label: "Footprints Icon", value: "LuFootprints" },
  { label: "QR Code Icon", value: "IoQrCodeOutline" },
  { label: "Conversation Icon", value: "GiConversation" },
];

export const IconList: CollectionConfig = {
  slug: "icon-list",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "active"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: false,
      localized: true,
    },
    {
      name: "items",
      type: "array",
      required: true,
      localized: true,
      fields: [
        {
          name: "icon",
          type: "select",
          required: true,
          options: ICON_LIST,
          hasMany: false,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
      ],
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
