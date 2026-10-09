import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/platform/integrations/api-integrations",
  title: "API Integrations",
  description: "Connect UseSafe with your ERP, PIM, e-commerce, logistics and customs systems through APIs to automate product compliance and traceability data.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
