import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/ecommerce-sellers-distributors",
  title: "For E-commerce Sellers & Distributors",
  description: "Demonstrate product compliance to marketplaces and authorities with verifiable product data, documents and Digital Product Passports.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
