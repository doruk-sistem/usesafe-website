import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/platform/products/usesafe-certification",
  title: "Digital Product Compliance & Traceability",
  description: "UseSafe digitises product compliance, certificates and traceability data and gives every product a verifiable digital identity.",
  canonicalPath: "/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
