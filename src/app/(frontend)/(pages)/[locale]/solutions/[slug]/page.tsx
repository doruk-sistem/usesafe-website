import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  // Since Payload CMS is removed, all solution pages will return 404
  return notFound();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await Promise.resolve(params);

  return generateMeta(null, {
    path: `/solutions/${slug}`,
    locale: locale,
  });
}
