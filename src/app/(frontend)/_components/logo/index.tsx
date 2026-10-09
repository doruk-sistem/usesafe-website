import Image from "next/image";
import React from "react";

import { cn } from "@/utils/cn";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/UseSafe_By_Doruksistem_v3_beyaz.png"
      alt="UseSafe by Doruksistem - Digital Product Certification"
      className={cn("tw-h-full tw-w-auto tw-object-contain", className)}
      width={800}
      height={200}
      priority
    />
  );
}
