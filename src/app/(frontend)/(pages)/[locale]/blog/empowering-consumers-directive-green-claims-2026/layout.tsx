import type { Metadata } from "next";

import { blogPostMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = blogPostMeta("empowering-consumers-directive-green-claims-2026");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
