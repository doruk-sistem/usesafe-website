import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

import { deepMerge } from "@/utils/deep-merge";

type GenerateMetaConfig = {
  /**
   * The path of the page
   *
   * @example
   *
   * return generateMeta({}, { path: '/about' })
   *
   * // output:
   * <meta property="og:url" content="https://domain.com/en/about" />
   * <meta property="canonical" content="https://domain.com/en/about" />
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
  { path = "", locale: staticLocale = "" }: GenerateMetaConfig = {}
): Promise<Metadata> => {
  const dynamicLocale = await getLocale();

  const locale = staticLocale || dynamicLocale;

  const t = await getTranslations({ locale });

  const languages = routing.locales.reduce((acc, localeValue) => {
    return {
      ...acc,
      [localeValue]: `/${localeValue}`,
    };
  }, {});

  const url = `${process.env.NEXT_PUBLIC_SITE_URL || ""}/${locale}${path}`;
  const defaultSiteName = t("site.name");

  const defaultMeta: Metadata = {
    title: t("meta.common.title"),
    description: t("meta.common.description"),
    keywords: t("meta.common.keywords"),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: t("meta.common.og_title"),
      description: t("meta.common.og_description"),
      url,
      siteName: defaultSiteName,
      images: [
        {
          url: "/img/og-images/og-image.png",
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
      images: ["/img/og-images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Check if overrides is null for the performance because deep merge is a heavy operation
  return overrides ? deepMerge(defaultMeta, overrides) : defaultMeta;
};

export default generateMeta;
