import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { PageTitle } from "@/app/(frontend)/_components/page-title";
import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import generateMeta from "@/frontend/_utils/generate-meta";
import { Media } from "@/payload-types";
import { initPayload } from "@/utils/getPayload";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const currentLocale = await getLocale();
    const payload = await initPayload();
    const { slug } = await Promise.resolve(params);

    const page = await payload.find({
      collection: "pages",
      where: {
        slug: { equals: slug },
        isActive: { equals: true },
      },
      locale: currentLocale as "en" | "tr" | "all",
    });

    if (!page.docs || page.docs.length === 0) {
      return notFound();
    }

    const pageData = page.docs[0];

    return (
      <div>
        <PageTitle
          title={pageData.title || ""}
          backgroundImage={(pageData.backgroundImage as Media)?.url || ""}
        />
        <RenderBlocks blocks={(pageData.layout || []) as any} />
        <NewsletterBlock />
      </div>
    );
  } catch {
    // Error loading dynamic page
    return notFound();
  }
}

// export async function generateMetadata({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   return await generateMeta(null, { path: `/${slug}` });
// }

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await paramsPromise;

  return generateMeta(null, { path: `/${params.slug}` });
}
