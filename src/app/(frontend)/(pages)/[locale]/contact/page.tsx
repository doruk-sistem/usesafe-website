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

  return generateMeta(
    { title: "Contact Us", description: "Talk to the UseSafe team about Digital Product Passports, product compliance and traceability, or book a demo.", openGraph: { title: "Contact Us | UseSafe", description: "Talk to the UseSafe team about Digital Product Passports, product compliance and traceability, or book a demo." } },
    { path: "/contact", locale: params.locale },
  );
}
