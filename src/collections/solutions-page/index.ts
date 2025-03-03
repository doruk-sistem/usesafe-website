import { CollectionConfig } from "payload";

import { ContentWithImage } from "@/blocks/content-with-image-block/config";
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
      name: "layout",
      type: "blocks",
      localized: true,
      blocks: [
        ContentWithImage,
        MediaBlock,
        {
          slug: "pageTitle",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "topTitle",
              type: "text",
              localized: true,
            },
            {
              name: "backgroundImage",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "downSectionId",
              type: "text",
            },
          ],
        },
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
