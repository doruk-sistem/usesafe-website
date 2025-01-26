"use client";

import React from "react";

interface ProgressItem {
  description: string;
  value: number;
  suffix?: string;
}

interface ProgressBarProps {
  items: ProgressItem[];
}

const defaultItems: ProgressItem[] = [
  {
    description: "Müşteri Memnuniyeti",
    value: 95,
  },
  {
    description: "Proje Tamamlama Oranı",
    value: 88,
  },
  {
    description: "Teknik Uzmanlık",
    value: 92,
  },
  {
    description: "Kalite Standartları",
    value: 97,
  },
];

export function CounterBlock({ items = defaultItems }: ProgressBarProps) {
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-justify-center counter-style-02">
      {items.map((item) => (
        <div className="tw-text-center" key={item.description}>
          <h1
            className="vertical-counter d-inline-flex tw-font-bold tw-text-primary tw-mb-0"
            data-to={String(item.value)}
            data-text={item.suffix}
          ></h1>
          <span className="d-block text-dark-gray fw-500 fs-18">
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
