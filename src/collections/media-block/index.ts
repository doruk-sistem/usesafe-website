import { CollectionConfig } from "payload";

export const MediaBlock: CollectionConfig = {
  slug: "media-block",
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
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      localized: true,
    },
    {
      name: "buttonLink",
      type: "text",
      localized: true,
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
