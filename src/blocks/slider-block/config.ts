import { Block } from "payload";

export const Slider: Block = {
  slug: "sliderBlock",
  interfaceName: "SliderBlock",
  fields: [
    {
      name: "sliders",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          localized: true,
        },
        {
          name: "buttonText",
          type: "text",
          localized: true,
        },
        {
          name: "buttonLink",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "clients",
      label: "Clients Footer Area",
      type: "array",
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
