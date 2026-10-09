import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/blog",
  title: "Blog: DPP, ESPR & Product Compliance Insights",
  description: "Guides on Digital Product Passports, ESPR, the EU Battery Regulation, GS1 standards and product compliance for EU and Türkiye markets.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
