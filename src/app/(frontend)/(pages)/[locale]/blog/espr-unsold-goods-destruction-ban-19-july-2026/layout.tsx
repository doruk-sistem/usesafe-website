import type { Metadata } from "next";

import { blogPostMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = blogPostMeta("espr-unsold-goods-destruction-ban-19-july-2026");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
