import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from "@/utils/getPayload";

import PageClient from "./page.client";

export default async function SolutionPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  try {
    const locale = await getLocale();
    const payload = await initPayload();

    const solution = await payload.find({
      collection: "solutions",
      where: {
        slug: {
          equals: slug,
        },
      },
      locale: locale as any,
      depth: 2 
    });

    if (!solution.docs.length) {
      notFound();
    }

    return <PageClient solution={solution.docs[0]} />;
  } catch (error) {
    console.error("Error loading solution:", error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return await generateMeta(null, {
    path: `/solutions/${params.slug}`,
  });
}
