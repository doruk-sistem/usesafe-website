import { type Field } from "payload";

import deepMerge from "@/utils/deepMerge";

type BlockOptionsType = (options?: {
  overrides?: Partial<Extract<Field, { type: "collapsible" }>>;
}) => Field;

const blockOptionsField: BlockOptionsType = ({ overrides = {} } = {}) => {
  const blockOptionsResult: Field = {
    type: "collapsible",
    label: "Block Options",
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        name: "blockOptions",
        label: "Block Options",
        admin: {
          description: "Block'a özel ayarlar.",
        },
        type: "group",
        fields: [
          {
            name: "title",
            type: "text",
          },
          {
            name: "description",
            type: "textarea",
          },
          {
            name: "heroContent",
            type: "richText",
          },
          {
            name: "footerContent",
            type: "richText",
          },
          {
            name: "innerContainer",
            type: "checkbox",
            defaultValue: true,
          },
        ],
      },
    ],
  };

  return deepMerge(blockOptionsResult, overrides);
};

export default blockOptionsField;
