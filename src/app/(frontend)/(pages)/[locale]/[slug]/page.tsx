import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Since Payload CMS is removed, all dynamic pages will return 404
  return notFound();
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: `/${params.slug}` });
}
