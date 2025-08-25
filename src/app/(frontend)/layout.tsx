"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
