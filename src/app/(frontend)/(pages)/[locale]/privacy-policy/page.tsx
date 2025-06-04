import React from "react";

import PrivacyPolicyPageClient from "./page.client";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: "/privacy-policy", locale: params.locale });
}
