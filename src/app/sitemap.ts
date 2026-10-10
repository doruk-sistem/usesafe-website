import type { MetadataRoute } from "next";

import { BLOG_POSTS, getBlogListPage } from "@/constants/blogPosts";
import { PUBLIC_ROUTES, absoluteUrl } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = PUBLIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const { totalPages } = getBlogListPage(1);
  const blogListPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalPages - 1) },
    (_, index) => {
      const page = index + 2;
      return {
        url: absoluteUrl(`/blog?page=${page}`),
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      };
    },
  );

  return [...pages, ...blogListPages, ...posts];
}
