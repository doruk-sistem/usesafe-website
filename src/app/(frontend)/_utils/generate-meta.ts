import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/constants/site";
import { deepMerge } from "@/utils/deep-merge";

type GenerateMetaConfig = {
  /**
   * The path of the page, without locale prefix (the site uses `localePrefix: "never"`).
   *
   * @example
   *
   * return generateMeta({}, { path: '/about' })
   *
   * // output:
   * <meta property="og:url" content="https://usesafe.com/about" />
   * <link rel="canonical" href="https://usesafe.com/about" />
   */
  path?: string;
  /**
   * Can define a static locale for the meta tags
   *
   * ref: https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#use-the-locale-param-in-metadata
   */
  locale?: string;
};

const generateMeta = async (
  overrides: Metadata | null = null,
  { path = "/", locale: staticLocale = "" }: GenerateMetaConfig = {},
): Promise<Metadata> => {
  const dynamicLocale = await getLocale();

  const locale = staticLocale || dynamicLocale;

  const t = await getTranslations({ locale });

  const url = absoluteUrl(path);
  const defaultSiteName = t("site.name");

  const defaultMeta: Metadata = {
    title: t("meta.common.title"),
    description: t("meta.common.description"),
    keywords: t("meta.common.keywords"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: t("meta.common.og_title"),
      description: t("meta.common.og_description"),
      url,
      siteName: defaultSiteName,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: t("meta.common.og_image_alt"),
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.common.twitter_title"),
      description: t("meta.common.twitter_description"),
      images: [DEFAULT_OG_IMAGE],
    },
  };

  // Check if overrides is null for the performance because deep merge is a heavy operation
  return overrides ? deepMerge(defaultMeta, overrides) : defaultMeta;
};

export default generateMeta;
