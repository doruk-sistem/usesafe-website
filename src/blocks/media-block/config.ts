import { Block } from "payload";

import blockOptionsField from "@/fields/block-options";

export const MediaBlock: Block = {
  slug: "mediaBlock",
  interfaceName: "MediaBlock",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    blockOptionsField(),
  ],
};
