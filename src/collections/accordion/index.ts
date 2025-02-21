import { CollectionConfig } from "payload";

export const Accordion: CollectionConfig = {
  slug: 'accordion',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active'],
  },
  fields: [
    {
        name: 'sectionTitle',  // Yeni alan ekledik
        type: 'text',
        required: true,
        localized: true,
        admin: {
          description: 'Bu başlık accordion üzerinde görünecek'
        }
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
        name: 'image',  
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
    {
      name: 'items',
      type: 'array',
      required: true,
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
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