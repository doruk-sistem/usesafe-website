import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from "@/utils/getPayload";
import PageClient from "./page.client";

export default async function SolutionPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  try {
    const { slug, locale: urlLocale } = await Promise.resolve(params);
    const payload = await initPayload();
    const locale = await getLocale();

    const solution = await payload.find({
      collection: "solutions",
      where: {
        slug: {
          equals: slug,
        },
      },
      locale: locale as any,
      depth: 3,
    });

    if (!solution.docs.length) {
      notFound();
    }

    return <PageClient solution={solution.docs[0] as any} />;
  } catch (error) {
    console.error("Error loading solution:", error);
    return <PageClient solution={{ layout: [] } as any} />;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = await Promise.resolve(params);
  return await generateMeta(null, {
    path: `/solutions/${slug}`,
    locale: locale,
  });
}
