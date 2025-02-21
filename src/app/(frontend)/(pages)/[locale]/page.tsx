import { CollectionSlug } from "payload";

import { initPayload } from "@/app/api/utils/getPayload";
import { AccordionData } from "@/collections/accordion/types";
import { ContentWithImageData } from "@/collections/content-with-image/types";
import { CounterData } from "@/collections/counter/types";
import { IconListData } from "@/collections/icon-list/types";
import { MediaBlockData } from "@/collections/media-block/types";
import type { PartnerContent } from "@/collections/partners/types";
import type { SliderData } from "@/collections/slider/types";
import generateMeta from "@/frontend/_utils/generate-meta";

import PageClient from "./page.client";
export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  try {
    const payload = await initPayload();

    const sliderResponse = await payload.find({
      collection: "slider",
      locale: params.locale as "tr" | "all" | "en" | undefined, // Mevcut locale
      where: {
        active: {
          equals: true,
        },
      },
    });

    const partnersResponse = await payload.find({
      collection: "partners",
      where: {
        active: { equals: true },
      },
      sort: "order",
    });

    const contentWithImageResponse = await payload.find({
      collection: "content-with-image",
      locale: params.locale as "tr" | "all" | "en" | undefined, // Mevcut locale
      depth: 2,
      where: {
        active: { equals: true },
      },
    });

    const mediaBlockResponse = await payload.find({
      collection: "media-block",
      locale: params.locale as "tr" | "all" | "en" | undefined, // Mevcut locale
      where: {
        active: { equals: true },
      },
    });

    const counterResponse = await payload.find({
      collection: "counter" as const,
      locale: params.locale as "tr" | "all" | "en" | undefined, // Mevcut locale
      where: {
        active: { equals: true },
      },
    });

    const accordionResponse = await payload.find({
      collection: "accordion" as CollectionSlug, // CollectionSlug tipini kullanalım
      locale: params.locale as "tr" | "all" | "en" | undefined,
      where: {
        active: {
          equals: true,
        },
      },
    });

    const iconListResponse = await payload.find({
      collection: "icon-list",
      locale: params.locale as "tr" | "all" | "en" | undefined,
      where: {
        active: {
          equals: true,
        },
      },
    });

    return (
      <PageClient
        sliderData={sliderResponse.docs[0] as SliderData}
        partnersData={{ partners: partnersResponse.docs as PartnerContent[] }}
        contentWithImageData={
          contentWithImageResponse.docs as unknown as ContentWithImageData[]
        }
        mediaBlockData={mediaBlockResponse.docs as unknown as MediaBlockData[]}
        counterData={counterResponse.docs as unknown as CounterData[]}
        accordionData={accordionResponse.docs as unknown as AccordionData[]}
        iconListData={iconListResponse.docs as unknown as IconListData[]}
      />
    );
  } catch (error) {
    console.error("Error loading homepage:", error);
    return <PageClient sliderData={undefined} partnersData={undefined} />;
  }
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return await generateMeta(null, { path: "/", locale: params.locale });
}
