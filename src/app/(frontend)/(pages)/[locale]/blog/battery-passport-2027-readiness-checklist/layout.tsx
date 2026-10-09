import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/blog/battery-passport-2027-readiness-checklist",
  title: "EU Battery Passport: Readiness Checklist for 18 February 2027",
  description:
    "What manufacturers, importers and suppliers need in place before the EU battery passport becomes mandatory on 18 February 2027: scope, identifiers, QR codes, data and access levels.",
  type: "article",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
