import generateMeta from "@/frontend/_utils/generate-meta";

import PageClient from "./page.client";

export default function HomePage() {
  return <PageClient />;
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return await generateMeta(null, { path: "/", locale: params.locale });
}
