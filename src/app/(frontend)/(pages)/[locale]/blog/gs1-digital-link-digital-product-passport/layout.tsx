import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/blog/gs1-digital-link-digital-product-passport",
  title: "GS1 Digital Link Meets the Digital Product Passport",
  description:
    "How one GS1 Digital Link QR code can serve retail checkout, consumers and regulators as ESPR Digital Product Passports and 2D barcodes arrive together.",
  type: "article",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
