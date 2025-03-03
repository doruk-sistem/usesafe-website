import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "content",
      type: "group",
      localized: true,
      fields: [
        // Copyright
        {
          name: "copyright",
          type: "text",
          required: true,
          localized: true,
          label: {
            en: "Copyright Text",
            tr: "Telif Hakkı Metni",
          },
        },
        // Company Section
        {
          name: "company",
          type: "group",
          localized: true,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
              label: {
                en: "Company Section Title",
                tr: "Şirket Bölümü Başlığı",
              },
            },
            {
              name: "usesafe",
              type: "group",
              localized: true,
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                  label: {
                    en: "Usesafe Text",
                    tr: "Usesafe Metni",
                  },
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                  defaultValue: "/solutions/use-safe-certification",
                  label: {
                    en: "Usesafe Link",
                    tr: "Usesafe Linki",
                  },
                },
              ],
            },
            {
              name: "about",
              type: "group",
              localized: true,
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                  label: {
                    en: "About Text",
                    tr: "Hakkımızda Metni",
                  },
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                  defaultValue: "/resources/about-dpp",
                  label: {
                    en: "About Link",
                    tr: "Hakkımızda Linki",
                  },
                },
              ],
            },
          ],
        },
        // Legal Section
        {
          name: "legal",
          type: "group",
          localized: true,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
              label: {
                en: "Legal Section Title",
                tr: "Yasal Bölüm Başlığı",
              },
            },
            {
              name: "terms",
              type: "group",
              localized: true,
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                  label: {
                    en: "Terms Text",
                    tr: "Kullanım Koşulları Metni",
                  },
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                  defaultValue: "/terms-conditions",
                  label: {
                    en: "Terms Link",
                    tr: "Kullanım Koşulları Linki",
                  },
                },
              ],
            },
            {
              name: "privacy",
              type: "group",
              localized: true,
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  localized: true,
                  label: {
                    en: "Privacy Text",
                    tr: "Gizlilik Metni",
                  },
                },
                {
                  name: "link",
                  type: "text",
                  required: true,
                  defaultValue: "/privacy-policy",
                  label: {
                    en: "Privacy Link",
                    tr: "Gizlilik Linki",
                  },
                },
              ],
            },
          ],
        },
        // Social Section
        {
          name: "social",
          type: "group",
          localized: true,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
              label: {
                en: "Social Section Title",
                tr: "Sosyal Medya Başlığı",
              },
            },
            {
              name: "platforms",
              type: "array",
              localized: true,
              fields: [
                {
                  name: "name",
                  type: "select",
                  required: true,
                  options: [
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "Facebook", value: "facebook" },
                    { label: "Instagram", value: "instagram" },
                    { label: "X (Twitter)", value: "twitter" },
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
          localized: true,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              localized: true,
              label: {
                en: "Newsletter Section Title",
                tr: "İletişim Başlığı",
              },
            },
            {
              name: "company",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "email",
              type: "email",
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
              localized: true,
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
