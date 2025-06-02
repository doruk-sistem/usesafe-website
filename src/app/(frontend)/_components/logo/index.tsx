import Image from "next/image";
import React from "react";

import { cn } from "@/utils/cn";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/usesafe-logo.png"
      alt="UseSafe Logo - Digital Product Passport and Traceability Solutions powered by DorukWell"
      className={cn("tw-w-full tw-h-full tw-object-contain", className)}
      width={100}
      height={100}
      priority
    />
  );
}
