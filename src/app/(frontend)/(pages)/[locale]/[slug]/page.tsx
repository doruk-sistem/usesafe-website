import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import Footer from "@/app/(frontend)/_components/footer";
import { PageTitle } from "@/app/(frontend)/_components/page-title";
import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import generateMeta from "@/frontend/_utils/generate-meta";
import { Media } from "@/payload-types";
import { initPayload } from "@/utils/getPayload";

type PageProps = {
  params: {
    slug: string;
    locale: string;
  };
};
export default async function DynamicPage({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  try {
    const currentLocale = await getLocale();
    const payload = await initPayload();

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
        <RenderBlocks blocks={pageData.layout as any} />
        <NewsletterBlock />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error loading dynamic page:", error);
    return notFound();
  }
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  return await generateMeta(null, { path: `/${slug}`, locale });
}