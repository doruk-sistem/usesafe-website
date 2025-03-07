"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || ""; // Null güvenli hale getirildi
  const isAdmin = pathname.startsWith("/admin"); // Artık null olamaz

  if (isAdmin) {
    return <>{children}</>;
  }

  return children;
}

// "use client";

// import { usePathname } from "next/navigation";
// import React from "react";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname();
//   const isAdmin = pathname?.startsWith("/admin");

//   if (isAdmin) {
//     return <>{children}</>;
//   }

//   return children;
// }
