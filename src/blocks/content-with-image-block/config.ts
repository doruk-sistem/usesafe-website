import { Block } from "payload";

import blockOptionsField from "@/fields/block-options";

export const ContentWithImage: Block = {
  slug: "contentWithImageBlock",
  interfaceName: "ContentWithImageBlock",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description: {
          tr: "Başlık",
          en: "Title",
        },
      },
    },
    {
      name: "description",
      type: "richText",
      localized: true,
      admin: {
        description: {
          tr: "Açıklama",
          en: "Description",
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      localized: true,
      admin: {
        description: {
          tr: "Buton Metni",
          en: "Button Text",
        },
      },
    },
    {
      name: "buttonLink",
      type: "text",
      localized: true,
      admin: {
        description: {
          tr: "Buton Linki",
          en: "Button Link",
        },
      },
    },
    {
      name: "position",
      type: "select",
      options: ["left", "right"],
      defaultValue: "left",
      admin: {
        description: {
          tr: "Görselin konumu",
          en: "Image Position",
        },
      },
    },
    blockOptionsField(),
  ],
};
