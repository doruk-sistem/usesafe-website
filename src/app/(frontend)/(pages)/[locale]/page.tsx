import { initPayload } from "@/app/api/utils/getPayload";
import type { PartnerContent } from "@/collections/partners/types";
import type { SliderData } from "@/collections/slider/types";
import generateMeta from "@/frontend/_utils/generate-meta";

import PageClient from "./page.client";

export default async function HomePage() {
  try {
    const payload = await initPayload();

    const sliderResponse = await payload.find({
      collection: "sliders",
      where: {
        title: { equals: "Homepage Main Slider" },
      },
    });

    const partnersResponse = await payload.find({
      collection: "partners",
      where: {
        active: { equals: true },
      },
      sort: "order",
    });

    return (
      <PageClient
        sliderData={sliderResponse.docs[0] as SliderData}
        partnersData={{ partners: partnersResponse.docs as PartnerContent[] }}
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
