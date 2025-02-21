import { Block } from "payload";

import blockOptionsField from "@/fields/block-options";

const ICON_LIST = [
  { label: "World Icon", value: "GiWorld" },
  { label: "Discount Icon", value: "CiDiscount1" },
  { label: "Recycling Icon", value: "GiWaterRecycling" },
  { label: "Footprints Icon", value: "LuFootprints" },
  { label: "QR Code Icon", value: "IoQrCodeOutline" },
  { label: "Conversation Icon", value: "GiConversation" },
];

export const IconList: Block = {
  slug: "iconListBlock",
  interfaceName: "IconListBlock",
  fields: [
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
    blockOptionsField(),
  ],
};
