import { CollectionConfig } from 'payload';

export const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    group: 'Pages',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      blocks: [
        {
          slug: 'pageTitle',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'topTitle',
              type: 'text',
              localized: true,
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'downSectionId',
              type: 'text',
            }
          ]
        },
        {
          slug: 'contentWithImage',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'image',
              type: 'group',
              fields: [
                {
                  name: 'src',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'alt',
                  type: 'text',
                  localized: true,
                },
                {
                  name: 'width',
                  type: 'number',
                },
                {
                  name: 'height',
                  type: 'number',
                },
                {
                  name: 'imgClassName',
                  type: 'text',
                }
              ]
            },
            {
              name: 'imagePosition',
              type: 'select',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' }
              ]
            }
          ]
        },
        {
          slug: 'backgroundVideo',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'video',
              type: 'group',
              fields: [
                {
                  name: 'src',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'poster',
                  type: 'upload',
                  relationTo: 'media',
                }
              ]
            }
          ]
        },
        {
          slug: 'clients',
          fields: [
            {
              name: 'clients',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  localized: true,
                },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                }
              ]
            },
            {
              name: 'type',
              type: 'select',
              options: [
                { label: 'Grid', value: 'grid' },
                { label: 'Slider', value: 'slider' }
              ]
            }
          ]
        },
        {
          slug: 'pricing',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
            }
          ]
        },
        {
          slug: 'newsletter',
          fields: []
        }
      ]
    }
  ]
};