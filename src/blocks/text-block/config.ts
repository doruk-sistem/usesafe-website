import { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import {
  HeadingFeature,
  LinkFeature,
  UploadFeature,
  OrderedListFeature,
  UnorderedListFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
} from "@payloadcms/richtext-lexical";

export const TextBlock: Block = {
  slug: "text",
  labels: {
    singular: "Text Block",
    plural: "Text Blocks",
  },
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
      label: "İçerik",
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          }),
          OrderedListFeature(),
          UnorderedListFeature(),
          LinkFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: "alt",
                    type: "text",
                    required: true,
                  },
                ],
              },
            },
          }),
        ],
        lexical: {
          namespace: "textBlock",
          theme: {
            heading: {
              h1: 'text-4xl font-bold',
              h2: 'text-3xl font-bold',
              h3: 'text-2xl font-bold',
              h4: 'text-xl font-bold',
              h5: 'text-lg font-bold',
              h6: 'text-base font-bold',
            },
          },
        },
      }),
    },
  ],
};