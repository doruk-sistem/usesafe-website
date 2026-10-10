import type { Metadata } from "next";

import { blogPostMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = blogPostMeta("espr-working-plan-one-year-on");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
