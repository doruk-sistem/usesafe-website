import React from "react";

import generateMeta from "@/app/(frontend)/_utils/generate-meta";

import ContactPageClient from "./page.client";

export default function ContactPage() {
  return <ContactPageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: "/contact", locale: params.locale });
}
