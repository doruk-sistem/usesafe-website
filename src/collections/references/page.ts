import type { CollectionConfig } from "payload";

export const References: CollectionConfig = {
  slug: "references", // ✅ Burada slug tanımlı olmalı
  labels: {
    singular: "Referans",
    plural: "Referanslar",
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "image", "createdAt"],
    group: "Pages",
    preview: (doc) => `/references/${doc.id}`,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Başlık",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "Referans Görseli",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Taslak", value: "draft" },
        { label: "Yayınlandı", value: "published" },
      ],
      defaultValue: "draft",
      required: true,
      label: "Durum",
    },
    {
      name: "createdAt",
      type: "date",
      label: "Oluşturulma Tarihi",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
        position: "sidebar",
      },
    },
  ],
};

export default References;
