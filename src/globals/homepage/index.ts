import { GlobalConfig } from "payload";

import { Accordion } from "@/blocks/accordion-block/config";
import { ContentWithImage } from "@/blocks/content-with-image-block/config";
import { IconList } from "@/blocks/icon-list-block/config";
import { MediaBlock } from "@/blocks/media-block/config";
import { Slider } from "@/blocks/slider-block/config";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "layout",
      type: "blocks",
      blocks: [ContentWithImage, Slider, MediaBlock, Accordion, IconList],
    },
  ],
};
