import type { Metadata } from "next";
import { redirect } from "next/navigation";

import {
  getBlogListPage,
  parseBlogListPageParam,
} from "@/constants/blogPosts";
import { pageMeta } from "@/frontend/_utils/page-meta";

import BlogPageClient from "./page.client";

const BLOG_LIST_DESCRIPTION =
  "Guides on Digital Product Passports, ESPR, the EU Battery Regulation, GS1 standards and product compliance for EU and Türkiye markets.";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const requestedPage = parseBlogListPageParam(pageParam);
  const { currentPage } = getBlogListPage(requestedPage);

  if (currentPage <= 1) {
    return pageMeta({
      path: "/blog",
      title: "Blog: DPP, ESPR & Product Compliance Insights",
      description: BLOG_LIST_DESCRIPTION,
    });
  }

  return pageMeta({
    path: `/blog?page=${currentPage}`,
    title: `Blog: Page ${currentPage}`,
    description: BLOG_LIST_DESCRIPTION,
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage = parseBlogListPageParam(pageParam);
  const { posts, currentPage, totalPages } = getBlogListPage(requestedPage);

  if (pageParam === "1") {
    redirect("/blog");
  }

  if (requestedPage !== currentPage) {
    const query = currentPage > 1 ? `?page=${currentPage}` : "";
    redirect(`/blog${query}`);
  }

  return (
    <BlogPageClient
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
