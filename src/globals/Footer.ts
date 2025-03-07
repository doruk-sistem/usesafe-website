import { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  admin: {
    group: "Globals",
    description: "Footer settings for all languages",
  },
  fields: [
    {
      name: "content",
      type: "group",
      fields: [
        // Copyright Section
        {
          name: "copyright",
          type: "text",
          required: true,
          localized: true,
        },
        // Company Section
        {
          name: "company",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "links",
              type: "array",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "url",
                  type: "text",
                  required: true,
                },
                {
                  name: "isActive",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "order",
                  type: "number",
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
        // Legal Section
        {
          name: "legal",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "terms",
              type: "group",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "privacy",
              type: "group",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        // Social Section
        {
          name: "social",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "platforms",
              type: "array",
              fields: [
                {
                  name: "name",
                  type: "select",
                  required: true,
                  options: [
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "Facebook", value: "facebook" },
                    { label: "Instagram", value: "instagram" },
                    { label: "Twitter", value: "twitter" },
                  ],
                },
                {
                  name: "url",
                  type: "text",
                  required: true,
                },
                {
                  name: "isActive",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "order",
                  type: "number",
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
        // Newsletter/Contact Section
        {
          name: "newsletter",
          type: "group",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "company",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "email",
              type: "text",
              required: true,
            },
            {
              name: "phone",
              type: "text",
              required: true,
            },
            {
              name: "addresses",
              type: "array",
              fields: [
                {
                  name: "country",
                  type: "select",
                  required: true,
                  options: [
                    { label: "Germany", value: "germany" },
                    { label: "Turkey", value: "turkey" },
                  ],
                },
                {
                  name: "street",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "city",
                  type: "text",
                  required: true,
                  localized: true,
                },
                {
                  name: "maps",
                  type: "text",
                  required: true,
                },
                {
                  name: "order",
                  type: "number",
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Footer;
