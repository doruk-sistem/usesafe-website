import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import TermsOfServicePageClient from "./page.client";

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(
    { title: "Terms of Service", description: "Terms and conditions for using the UseSafe website and services.", openGraph: { title: "Terms of Service | UseSafe", description: "Terms and conditions for using the UseSafe website and services." } },
    { path: "/terms-of-service", locale: params.locale },
  );
}
