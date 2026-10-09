import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/constants/site";

type PageMetaInput = {
  /** Route path without locale prefix, e.g. "/platform/frameworks/dpp-in-espr" */
  path: string;
  /** Page title. The root layout appends " | UseSafe". */
  title: string;
  description: string;
  /** Path to canonicalise to when the page duplicates another one. Defaults to `path`. */
  canonicalPath?: string;
  type?: "website" | "article";
};

/**
 * Static per-page metadata for routes whose page.tsx is a client component
 * (client components cannot export `metadata`, so it lives in a sibling layout.tsx).
 */
export const pageMeta = ({ path, title, description, canonicalPath, type = "website" }: PageMetaInput): Metadata => {
  const url = absoluteUrl(canonicalPath ?? path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | UseSafe`,
      description,
      url,
      siteName: "UseSafe",
      type,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "UseSafe Digital Product Passport Platform" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | UseSafe`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
};
