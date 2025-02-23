import { Block } from "payload";

import blockOptionsField from "@/fields/block-options";

export const Accordion: Block = {
  slug: "accordionBlock",
  interfaceName: "AccordionBlock",
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
      required: true,
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "items",
      type: "array",
      required: true,
      localized: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
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
