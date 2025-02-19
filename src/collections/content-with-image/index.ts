import { CollectionConfig } from 'payload';

export const ContentWithImage: CollectionConfig = {
  slug: 'content-with-image',
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
      localized: true,
      admin: {
        description: {
          tr: 'Başlık',
          en: 'Title'
        }
      }
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: {
        description: {
          tr: 'Açıklama',
          en: 'Description'
        }
      }
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
      localized: true,
      admin: {
        description: {
          tr: 'Buton Metni',
          en: 'Button Text'
        }
      }
    },
    {
      name: 'buttonLink',
      type: 'text',
      localized: true,
      admin: {
        description: {
          tr: 'Buton Linki',
          en: 'Button Link'
        }
      }
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        hidden: true,
      }
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      }
    }
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (!data) return {};
        if (!data.order) {
          const result = await req.payload.find({
            collection: 'content-with-image',
            limit: 1,
            sort: '-order',
          });
          const highestOrder = result.docs[0]?.order || 0;
          data.order = highestOrder + 1;
        }
        return data;
      },
    ],
  },
};