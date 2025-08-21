import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from "@/utils/getPayload";

import PageClient from "./page.client";

export default async function HomePage() {
  try {
    const locale = await getLocale();
    const payload = await initPayload();

    const homepage = await payload.findGlobal({
      slug: "homepage" as any,
      locale: locale as any,
    });
    return <PageClient layout={homepage.layout} />;
  } catch (error) {
    console.error("Error loading homepage:", error);
    return <PageClient layout={[]} />;
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
