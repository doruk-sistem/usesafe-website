import { CollectionConfig } from 'payload';

export const ContentWithImage: CollectionConfig = {
  slug: 'content-with-image',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active'],
  },
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
      name: 'imagePosition',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
    },
    {
      name: 'showCounters',
      type: 'checkbox',
      label: 'Show Counters',
      defaultValue: false,
    },
    {
      name: 'counters',
      type: 'group',
      fields: [
        {
          name: 'products',
          type: 'number',
          label: 'Products Count',
        },
        {
          name: 'partners',
          type: 'number',
          label: 'Partners Count',
        }
      ]
    },
    {
      name: 'buttonText',
      type: 'text',
    },
    {
      name: 'translations',
      type: 'group',
      fields: [
        {
          name: 'tr',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'buttonText',
              type: 'text',
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
      }
    }
  ]
};