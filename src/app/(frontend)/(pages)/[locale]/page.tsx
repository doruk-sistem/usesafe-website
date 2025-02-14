import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from '@/app/api/utils/getPayload';
import type { SliderData } from '@/collections/slider/types';
import PageClient from "./page.client";

export default async function HomePage({ params }: { params: { locale: string } }) {
  try {
    const payload = await initPayload();
    const sliderResponse = await payload.find({
      collection: 'sliders',
      where: {
        title: { equals: 'Homepage Main Slider' }
      }
    });


    return <PageClient sliderData={sliderResponse.docs[0] as SliderData} />;
  } catch (error) {
    console.error('Error loading homepage:', error);
    return <PageClient sliderData={null} />;
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