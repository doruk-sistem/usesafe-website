import React from "react";

import { cn } from "@/utils/cn";

export interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  config?: {
    container?: boolean;
  };
}

export default function Section({
  title,
  description,
  children,
  footer = null,
  header = null,
  config = {},
  className,
}: SectionProps) {
  const { container = true } = config || {};

  return (
    <section className={cn("tw-relative", className)}>
      <div className={cn("tw-space-y-10", container && "tw-container")}>
        {!!title || !!description ? (
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-max-w-[800px] tw-mx-auto">
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
        {header}
        <div>{children}</div>
        {footer}
      </div>
    </section>
  );
}
