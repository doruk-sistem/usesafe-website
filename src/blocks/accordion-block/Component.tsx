"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface AccordionBlockProps {
  title?: string;
  description?: string;
}

export function AccordionBlock({ title, description }: AccordionBlockProps) {
  const t = useTranslations('AccordionBlock');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = Array.from({ length: t.raw('items').length }).map((_, index) => ({
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`)
  }));

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
        <div className="tw-w-full">
          {!!title && (
            <h4 className="alt-font tw-text-black tw-text-3xl tw-font-bold tw-mb-8 sm:tw-mb-6">
              {title}
            </h4>
          )}
          {!!description && (
            <p className="tw-mb-8 tw-text-gray-600">{description}</p>
          )}

          <div className="tw-space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="tw-border tw-rounded-lg tw-overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`tw-w-full tw-flex tw-transition-colors tw-justify-between tw-items-center tw-p-4 tw-text-left hover:tw-bg-gray-50 tw-border-solid tw-border-transparent ${
                    activeIndex === index
                      ? "tw-bg-gray-100"
                      : "tw-bg-transparent"
                  }`}
                  aria-expanded={activeIndex === index}
                >
                  <span className="tw-font-semibold tw-text-gray-900">
                    {item.title}
                  </span>
                  <span
                    className={`tw-transform tw-transition-transform duration-300 ${
                      activeIndex === index ? "tw-rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="tw-w-5 tw-h-5 tw-text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden ${
                    activeIndex === index
                      ? "tw-max-h-[1000px] tw-opacity-100"
                      : "tw-max-h-0 tw-opacity-0"
                  }`}
                  style={{
                    visibility: activeIndex === index ? "visible" : "hidden",
                  }}
                >
                  <div className="tw-p-4 tw-bg-white tw-border-t tw-border-gray-200">
                    <p className="tw-text-gray-600 tw-whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="tw-relative tw-h-full"
          data-bottom-top="transform: translateY(100px)"
          data-top-bottom="transform: translateY(-100px)"
        >
          <Image
            src="/crafto/images/demo-seo-agency-process-01.png"
            alt="Demo Seo Agency Process 01"
            width={1000}
            height={1000}
            className="tw-w-full tw-h-full tw-object-contain tw-absolute tw-left-0"
          />
        </div>
      </div>
    </div>
  );
}