import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import PrivacyPolicyPageClient from "./page.client";

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(
    { title: "Privacy Policy", description: "How UseSafe collects, uses and protects personal data.", openGraph: { title: "Privacy Policy | UseSafe", description: "How UseSafe collects, uses and protects personal data." } },
    { path: "/privacy-policy", locale: params.locale },
  );
}
