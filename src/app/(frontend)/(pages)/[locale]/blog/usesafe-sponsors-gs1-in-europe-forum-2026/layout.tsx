import type { Metadata } from "next";

import { blogPostMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = blogPostMeta("usesafe-sponsors-gs1-in-europe-forum-2026");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
