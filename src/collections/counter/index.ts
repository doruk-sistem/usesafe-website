import { CollectionConfig } from 'payload';

export const Counter: CollectionConfig = {
  slug: 'counter',
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
      label: 'Section Title',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Counter Items',
      fields: [
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Description',
        },
        {
          name: 'value',
          type: 'number',
          required: true,
          label: 'Value',
        }
      ]
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
              label: 'Section Title (TR)',
            },
            {
              name: 'items',
              type: 'array',
              label: 'Counter Items (TR)',
              fields: [
                {
                  name: 'description',
                  type: 'text',
                  label: 'Description',
                },
                {
                  name: 'value',
                  type: 'number',
                  label: 'Value',
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
      label: 'Active',
      admin: {
        position: 'sidebar',
        description: 'Toggle to show/hide this counter section'
      }
    }
  ]
};