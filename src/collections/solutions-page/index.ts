import { CollectionConfig } from "payload";

import { ContentWithImage } from "@/blocks/content-with-image-block/config";
import { IconList } from "@/blocks/icon-list-block/config";
import { MediaBlock } from "@/blocks/media-block/config";

export const Solutions: CollectionConfig = {
  slug: "solutions",
  admin: {
    group: "Pages",
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "layout",
      type: "blocks",
      localized: true,
      blocks: [
        ContentWithImage,
        MediaBlock,
        IconList,
        {
          slug: "backgroundVideo",
          fields: [
            {
              name: "title",
              type: "text",
              localized: true,
            },
            {
              name: "description",
              type: "textarea",
              localized: true,
            },
            {
              name: "video",
              type: "group",
              fields: [
                {
                  name: "src",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                  filterOptions: {
                    mimeType: { contains: "video/" },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
