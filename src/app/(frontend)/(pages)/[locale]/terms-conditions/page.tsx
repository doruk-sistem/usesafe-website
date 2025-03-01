import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import TermsConditionsClient from "./page.client";

export default function TermsConditionsPage() {
  return <TermsConditionsClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return await generateMeta(null, { path: "/terms-conditions", locale: params.locale });
}
