import { CollectionConfig } from "payload";

export const Slider: CollectionConfig = {
  slug: 'slider',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slides',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          localized: true,
        },
        {
          name: 'buttonLink',
          type: 'text',
          localized: true,
        }
      ]
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};