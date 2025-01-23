"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AccordionBlockProps {
  title?: string;
  description?: string;
}

const defaultItems = [
  {
    title: "Ensuring Top-Tier Safety and Quality",
    description:
      "Usesafe certification involves comprehensive testing of your products to ensure they meet stringent safety and quality standards. Our rigorous evaluation process includes chemical analysis, physical testing, and performance assessments to guarantee the safety and reliability of your products. By passing these rigorous tests, your products are proven to be safe for consumer use, minimizing the risk of accidents, injuries, or health hazards.",
  },
  {
    title: "Compliance with Regulatory Standards",
    description:
      "Usesafe ensures that your products comply with all relevant local, national, and international safety regulations. Our certification process is designed to thoroughly check for compliance, protecting your business from legal issues and potential recalls. Staying compliant with regulations not only enhances product safety but also demonstrates your commitment to quality and consumer protection.",
  },
  {
    title: "Building Consumer Trust",
    description: `Displaying the Usesafe certification mark on your products reassures consumers about their safety and quality. The Usesafe logo is a symbol of trust that increases consumer confidence, leading to higher customer satisfaction and loyalty.

      A strong reputation built on trust attracts more customers and business partners, creating opportunities for growth and collaboration.
    `,
  },
  {
    title: "Transparency and Accountability",
    description:
      "The Usesafe certification process is transparent and accountable. We provide detailed reports and documentation, allowing businesses and consumers to understand the evaluation criteria and results. This transparency fosters trust by showing that the certification is based on objective, rigorous standards rather than subjective judgments. Businesses can confidently showcase their commitment to quality and compliance.",
  },
  {
    title: "Ongoing Monitoring and Support",
    description:
      "Usesafe certification involves continuous monitoring and periodic re-evaluation of certified products. This ensures that products maintain their safety and quality over time, adapting to any changes in regulations or standards. Our proactive approach helps identify and address potential safety issues early, preventing them from reaching consumers and maintaining continuous compliance",
  },
  {
    title: "Social Responsibility and Ethical Commitment",
    description:
      "By achieving Usesafe certification, businesses show their commitment to social responsibility. They demonstrate that they care about the safety and well-being of their customers and the environment. This commitment to social responsibility enhances trust among socially conscious consumers, who prefer to support brands that align with their values.",
  },
];

export function AccordionBlock({ title, description }: AccordionBlockProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            {defaultItems.map((item, index) => (
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
