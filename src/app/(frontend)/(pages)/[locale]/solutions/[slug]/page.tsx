import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import generateMeta from "@/frontend/_utils/generate-meta";
import { initPayload } from "@/utils/getPayload";

import PageClient from "./page.client";

export default async function SolutionPage({
  params,
}: {
  params: any;
}) {
  try {
    const payload = await initPayload();
    const locale = await getLocale();

    const solution = await payload.find({
      collection: "solutions",
      where: {
        slug: {
          equals: params.slug,
        },
      },
      locale: locale as any,
      depth: 3
    });

    if (!solution.docs.length) {
      notFound();
    }

    // solution.docs[0] direkt olarak geçiyoruz
    return <PageClient solution={solution.docs[0] as any} />;
  } catch (error) {
    console.error("Error loading solution:", error);
    // Boş solution objesi dönüyoruz
    return <PageClient solution={{ layout: [] } as any} />;
  }
}

export async function generateMetadata({
  params,
}: {
  params: any;
}) {
  return await generateMeta(null, {
    path: `/solutions/${params.slug}`,
    locale: params.locale
  });
}
