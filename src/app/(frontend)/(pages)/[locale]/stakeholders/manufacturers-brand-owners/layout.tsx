import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/manufacturers-brand-owners",
  title: "For Manufacturers & Brand Owners",
  description: "Digitise compliance evidence, certificates and Digital Product Passports for your products and prove them to marketplaces, regulators and consumers.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
