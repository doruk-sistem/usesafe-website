import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/platform/frameworks/textile-passport",
  title: "Textile Digital Product Passport",
  description: "Digital Product Passports for textiles and apparel: material, chemical and lifecycle data for every garment, ready for the upcoming EU textile requirements under ESPR.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
