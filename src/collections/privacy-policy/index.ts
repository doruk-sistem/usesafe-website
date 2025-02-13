import { CollectionConfig } from 'payload';

const PrivacyPolicy: CollectionConfig = {
  slug: 'privacy-policy',
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
      label: 'Privacy Policy Title (English)'
    },
    {
      name: 'sections',
      type: 'group',
      label: 'Privacy Policy Sections (English)',
      fields: [
        {
          name: 'legalDisclaimer',
          type: 'group',
          label: 'Legal Disclaimer',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Section Title'
            },
            {
              name: 'content',
              type: 'textarea',
              required: true,
              label: 'Section Content'
            }
          ]
        },
        {
          name: 'basics',
          type: 'group',
          label: 'Basics',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Section Title'
            },
            {
              name: 'content',
              type: 'textarea',
              required: true,
              label: 'Section Content'
            }
          ]
        },
        {
          name: 'inclusion',
          type: 'group',
          label: 'Inclusion',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Section Title'
            },
            {
              name: 'content',
              type: 'textarea',
              required: true,
              label: 'Section Content'
            }
          ]
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
              name: 'title',
              type: 'text',
              label: 'Privacy Policy Title (Turkish)'
            },
            {
              name: 'sections',
              type: 'group',
              label: 'Privacy Policy Sections (Turkish)',
              fields: [
                {
                  name: 'legalDisclaimer',
                  type: 'group',
                  label: 'Legal Disclaimer',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Section Title'
                    },
                    {
                      name: 'content',
                      type: 'textarea',
                      label: 'Section Content'
                    }
                  ]
                },
                {
                  name: 'basics',
                  type: 'group',
                  label: 'Basics',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Section Title'
                    },
                    {
                      name: 'content',
                      type: 'textarea',
                      label: 'Section Content'
                    }
                  ]
                },
                {
                  name: 'inclusion',
                  type: 'group',
                  label: 'Inclusion',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Section Title'
                    },
                    {
                      name: 'content',
                      type: 'textarea',
                      label: 'Section Content'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export { PrivacyPolicy };

export interface PrivacyPolicyData {
  title: string;
  sections: {
    legalDisclaimer: {
      title: string;
      content: string;
    };
    basics: {
      title: string;
      content: string;
    };
    inclusion: {
      title: string;
      content: string;
    };
  };
  translations?: {
    tr: {
      title: string;
      sections: {
        legalDisclaimer: {
          title: string;
          content: string;
        };
        basics: {
          title: string;
          content: string;
        };
        inclusion: {
          title: string;
          content: string;
        };
      };
    };
  };
}