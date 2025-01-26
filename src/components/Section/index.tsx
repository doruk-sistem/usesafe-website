import React from "react";

import { cn } from "@/utils/cn";

export interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  footerContent?: React.ReactNode;
  headerContent?: React.ReactNode;
  innerContainer?: boolean;
  sectionId?: string;
}

export default function Section({
  title,
  description,
  children,
  footerContent = null,
  headerContent = null,
  className,
  innerContainer = false,
  sectionId,
}: SectionProps) {
  return (
    <section id={sectionId} className={cn("tw-relative", className)}>
      <div className={cn("tw-space-y-10", innerContainer && "tw-container")}>
        {!!title || !!description ? (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-gap-5 tw-max-w-[800px] tw-mx-auto">
            {!!title && (
              <h3 className="tw-text-black tw-font-bold primary-font tw-mb-0">
                {title}
              </h3>
            )}
            {!!description && (
              <p className="tw-text-black tw-text-center tw-font-medium tw-text-gray-500 tw-mb-0">
                {description}
              </p>
            )}
          </div>
        ) : null}
        {headerContent}
        <div>{children}</div>
        {footerContent}
      </div>
    </section>
  );
}
