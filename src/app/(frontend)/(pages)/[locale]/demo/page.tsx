import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import DemoPageClient from "./page.client";

export default function DemoPage() {
  return <DemoPageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: "/demo", locale: params.locale });
}
