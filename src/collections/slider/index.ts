import { CollectionConfig } from 'payload';  

export const Slider: CollectionConfig = {
    slug: 'sliders',
    access: {
      read: () => true,
    },
    admin: {
      useAsTitle: 'title', 
      defaultColumns: ['title'],
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Slider Title'
      },
      {
        name: 'slides',
        type: 'array',
        label: 'Slider Items',
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Slide Image'
          },
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
      }
    ]
  };