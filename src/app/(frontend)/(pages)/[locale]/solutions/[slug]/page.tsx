import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from "@/utils/getPayload";

import PageClient from "./page.client";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  try {
    const { slug } = await Promise.resolve(params);
    const payload = await initPayload();
    const locale = await getLocale();

    const solution = await payload.find({
      collection: "solutions",
      where: {
        slug: {
          equals: slug,
        },
      },
      locale: locale as "en" | "tr",
      depth: 3,
    });

    if (!solution.docs.length) {
      notFound();
    }

    return <PageClient solution={solution.docs[0]} />;
  } catch {
    // Error loading solution
    return <PageClient solution={{ layout: [], title: "", slug: "", id: "", createdAt: "", updatedAt: "" } as any} />;
  }
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
