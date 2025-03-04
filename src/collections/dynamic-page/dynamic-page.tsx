import { CollectionConfig } from "payload";

import { Accordion } from "@/blocks/accordion-block/config";
import { ContentWithImage } from "@/blocks/content-with-image-block/config";
import { IconList } from "@/blocks/icon-list-block/config";
import { MediaBlock } from "@/blocks/media-block/config";
import { Slider } from "@/blocks/slider-block/config";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "showInMenu", "menuOrder", "isActive"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Sayfa Başlığı",
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      label: "URL (Tüm diller için aynı)",
      unique: true,
      admin: {
        description: 'URL tüm diller için aynı olmalıdır (örn: "about-us")',
      },
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Arka Plan Görseli",
      localized: false, // Eğer her dil için farklı bir arka plan resmi istersen true yap
    },
    {
        name: "layout",
        type: "blocks",
        required: true,
        label: "Sayfa İçeriği",
        localized: true,
        blocks: [
          ContentWithImage,
          Slider,
          MediaBlock,
          Accordion,
          IconList,
        ],
      },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Sayfa İçeriği",
      localized: true,
    },
    {
      name: "showInMenu",
      type: "checkbox",
      label: "Menüde Göster",
      defaultValue: false,
    },
    {
      name: "menuOrder",
      type: "number",
      label: "Menü Sırası",
      defaultValue: 0,
    },
    {
      name: "isActive",
      type: "checkbox",
      label: "Aktif",
      defaultValue: true,
    },
    {
      name: "metaTitle",
      type: "text",
      label: "Meta Başlık",
      localized: true,
    },
    {
      name: "metaDescription",
      type: "textarea",
      label: "Meta Açıklama",
      localized: true,
    },
  ],
};
