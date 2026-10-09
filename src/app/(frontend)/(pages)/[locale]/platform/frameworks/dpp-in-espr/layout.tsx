import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/platform/frameworks/dpp-in-espr",
  title: "Digital Product Passport for ESPR",
  description: "Prepare for the EU Ecodesign for Sustainable Products Regulation (ESPR) with UseSafe's Digital Product Passport: GTIN-based product identity, QR access to passports and verifiable supply chain data.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
