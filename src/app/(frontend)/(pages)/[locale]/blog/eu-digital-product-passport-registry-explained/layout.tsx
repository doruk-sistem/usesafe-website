import type { Metadata } from "next";

import { blogPostMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = blogPostMeta("eu-digital-product-passport-registry-explained");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
