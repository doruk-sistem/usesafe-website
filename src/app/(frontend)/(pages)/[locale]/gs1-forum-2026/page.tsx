import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

import Gs1ForumPageClient from "./page.client";

export const metadata: Metadata = pageMeta({
  path: "/gs1-forum-2026",
  title: "Meet UseSafe at the GS1 in Europe Forum 2026, Istanbul",
  description:
    "UseSafe is a proud sponsor of the GS1 in Europe Forum 2026 in Istanbul (12–15 October). Book a meeting to see how GTIN-based product data becomes a verifiable Digital Product Passport.",
});

export default function Gs1ForumPage() {
  return <Gs1ForumPageClient />;
}
