import type { Metadata } from "next";

import { getBlogPost } from "@/constants/blogPosts";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/constants/site";

type PageMetaInput = {
  /** Route path without locale prefix, e.g. "/platform/frameworks/dpp-in-espr" */
  path: string;
  /** Page title without the brand; " | UseSafe" is appended. */
  title: string;
  description: string;
  /** Path to canonicalise to when the page duplicates another one. Defaults to `path`. */
  canonicalPath?: string;
  type?: "website" | "article";
  /** Open Graph image (path under /public). Defaults to the site-wide image. */
  image?: string;
  /** ISO date for articles. */
  publishedTime?: string;
};

/**
 * Static per-page metadata for routes whose page.tsx is a client component
 * (client components cannot export `metadata`, so it lives in a sibling layout.tsx).
 */
export const pageMeta = ({
  path,
  title,
  description,
  canonicalPath,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  publishedTime,
}: PageMetaInput): Metadata => {
  const url = absoluteUrl(canonicalPath ?? path);

  return {
    // Absolute title: nested layouts (e.g. /blog) would otherwise drop the root "%s | UseSafe" template.
    title: { absolute: `${title} | UseSafe` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | UseSafe`,
      description,
      url,
      siteName: "UseSafe",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | UseSafe`,
      description,
      images: [image],
    },
  };
};

/** Metadata for a blog post, taken from the central post list. */
export const blogPostMeta = (slug: string, seoTitle?: string): Metadata => {
  const post = getBlogPost(slug);
  return pageMeta({
    path: `/blog/${slug}`,
    title: seoTitle ?? post.title,
    description: post.description,
    type: "article",
    image: post.image,
    publishedTime: post.date,
  });
};
