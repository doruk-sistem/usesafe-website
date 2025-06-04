import React from "react";

import TermsOfServicePageClient from "./page.client";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: "/terms-of-service", locale: params.locale });
}
