"use client";

import React from "react";

import { IconListBlock as IconListBlockProps } from "@/payload-types";
import { getIconComponent } from "@/utils/icons";

export function IconListBlock({ items }: IconListBlockProps) {
  const Icon = getIconComponent(items[0]?.icon);

  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="tw-group tw-flex tw-flex-col tw-items-center tw-text-center hover:tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300"
        >
          <div className="tw-mb-8 tw-p-6 tw-rounded-full tw-bg-primary/5 tw-transition-all tw-duration-300 group-hover:tw-bg-primary/10">
            {Icon && <Icon className="tw-w-16 tw-h-16 tw-text-primary" />}
          </div>
          <p className="tw-text-gray-600 tw-leading-relaxed tw-max-w-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
