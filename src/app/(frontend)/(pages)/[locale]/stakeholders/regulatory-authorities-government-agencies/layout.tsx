import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/regulatory-authorities-government-agencies",
  title: "For Regulatory Authorities",
  description: "Access verifiable product compliance data, certificates and traceability records to support market surveillance and product safety.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
