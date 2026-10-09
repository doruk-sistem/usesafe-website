import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/marketplaces-retailers",
  title: "For Marketplaces & Retailers",
  description: "Automate product vetting, listing compliance and recall response with verified product data and Digital Product Passports from your sellers.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
