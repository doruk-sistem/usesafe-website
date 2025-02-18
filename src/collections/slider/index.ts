import { CollectionConfig } from 'payload';

export const Slider: CollectionConfig = {
  slug: 'sliders',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text (optional)'
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link (optional)'
        }
      ]
    },
    {
      name: 'translations',
      type: 'group',
      fields: [
        {
          name: 'tr',
          type: 'group',
          label: 'Turkish Translation',
          fields: [
            {
              name: 'slides',
              type: 'array',
              label: 'Slider Items (Turkish)',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Slide Title'
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Slide Description'
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text (optional)'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Bu slider aktif mi?'
      }
    }
  ]
};