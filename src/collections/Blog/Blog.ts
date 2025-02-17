import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Blog Title",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Blog Content",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Blog Image",
    },
    {
      name: "published",
      type: "checkbox",
      label: "Published",
      defaultValue: false,
    },
    {
      name: "createdAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
};

export default Blogs;
