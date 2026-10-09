import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/blog/turkey-ecommerce-regulation",
  title: "T\u00fcrkiye's E-Commerce Product Safety Regulation: A Guide for International Manufacturers",
  description: "What Türkiye's regulation on product safety for goods sold through remote communication tools means for international manufacturers, and how to comply.",
  type: "article",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
