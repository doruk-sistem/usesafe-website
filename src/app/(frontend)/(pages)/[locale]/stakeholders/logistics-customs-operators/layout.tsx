import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/logistics-customs-operators",
  title: "For Logistics & Customs Operators",
  description: "Clear compliance documentation digitally with verifiable product data linked to each shipment and product identity.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
