import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import AboutDppPageClient from "./page.client";

export default function AboutDppPage() {
  return <AboutDppPageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return await generateMeta(null, { path: "/resources/about-dpp", locale: params.locale });
}
