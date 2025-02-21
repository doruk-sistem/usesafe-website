"use client";

import React from "react";

interface IconListBlockProps {
  title?: string;
  description?: string;
  items: {
    icon: React.ReactNode; // ReactElement yerine ReactNode kullanıyoruz
    description: string;
  }[];
  sectionTitle?: string;
}

export function IconListBlock({
  title,
  description,
  items,
}: IconListBlockProps) {
  return (
    <section className="tw-py-20">
      <div className="tw-container tw-mx-auto">
        {title && (
          <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-mb-6">
            {title}
          </h2>
        )}
        {description && (
          <p className="tw-text-center tw-text-gray-600 tw-mb-12">
            {description}
          </p>
        )}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="tw-group tw-flex tw-flex-col tw-items-center tw-text-center hover:tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300"
            >
              <div className="tw-mb-8 tw-p-6 tw-rounded-full tw-bg-primary/5 tw-transition-all tw-duration-300 group-hover:tw-bg-primary/10">
                {item.icon} {/* Direkt icon'u render ediyoruz */}
              </div>
              <p className="tw-text-gray-600 tw-leading-relaxed tw-max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
