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
            }
          ]
        },
        {
          slug: 'mediaBlock',
          fields: [
            {
              name: 'mediaItems',
              type: 'array',
              label: 'Medya Öğeleri',
              minRows: 1,
              maxRows: 6,
              labels: {
                singular: 'Medya',
                plural: 'Medyalar',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Görsel',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Başlık',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Açıklama',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Bağlantı',
                }
              ],
            },
            {
              name: 'sectionOptions',
              type: 'group',
              label: 'Bölüm Seçenekleri',
              fields: [
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Buton Metni',
                  localized: true,
                  required: true,
                }
              ]
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
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  filterOptions: {
                    mimeType: { contains: 'video/' }  
                  }
                }
              ]
            }
          ]
        },
        
      ]
    }
  ]
};