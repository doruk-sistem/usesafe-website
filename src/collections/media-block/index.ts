import { CollectionConfig } from 'payload';   

export const MediaBlock: CollectionConfig = {
  slug: 'media-block',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active'],
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Media',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      admin: {
        description: 'Enter the URL for button (e.g., /contact, https://example.com)',
      }
    },
    {
      name: 'translations',
      type: 'group',
      label: 'Translations',
      fields: [
        {
          name: 'tr',
          type: 'group',
          label: 'Turkish',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title (TR)',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description (TR)',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text (TR)',
            },
            {
              name: 'buttonLink',
              type: 'text',
              label: 'Button Link (TR)',
            }
          ]
        }
      ]
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
      admin: {
        position: 'sidebar',
        description: 'Toggle to show/hide this media block'
      }
    }
  ]
};