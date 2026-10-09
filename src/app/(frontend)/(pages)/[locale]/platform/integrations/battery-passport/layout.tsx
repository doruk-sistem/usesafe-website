import type { Metadata } from "next";

import { pageMeta } from "@/frontend/_utils/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/platform/integrations/battery-passport",
  title: "EU Battery Passport",
  description: "Get ready for the EU Battery Regulation battery passport, mandatory from 18 February 2027 for EV, LMT and industrial batteries above 2 kWh, with UseSafe.",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
