import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/stakeholders/end-consumers",
  title: "For Consumers",
  description: "Scan the product QR code to check compliance, safety and sustainability information before and after purchase.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
