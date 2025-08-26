"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaGlobeEurope,
  FaGlobeAmericas,
  FaFlag,
  FaGlobe,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Image from "next/image";

type TranslationKey =
  | "platform.usesafe-certification.compliance_eu"
  | "platform.usesafe-certification.compliance_us"
  | "platform.usesafe-certification.compliance_tr"
  | "platform.usesafe-certification.compliance_uk"
  | "platform.usesafe-certification.compliance_other";

const regions = [
  {
    key: "eu",
    labelKey: "European Union",
    icon: (
      <FaGlobeEurope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-blue-700" />
    ),
    detailKey: "platform.usesafe-certification.compliance_eu" as TranslationKey,
    color: "tw-bg-blue-100 tw-border-blue-300",
    mapColor: "tw-fill-blue-500",
    mapHighlight: "tw-fill-blue-600",
    // SVG path coordinates for EU region - circular shape
    svgPath: "M405 122 m-25 0 a25 25 0 1 0 50 0 a25 25 0 1 0 -50 0",
    tooltipPosition: { x: 405, y: 122 },
  },
  {
    key: "us",
    labelKey: "United States",
    icon: (
      <FaGlobeAmericas className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-red-600" />
    ),
    detailKey: "platform.usesafe-certification.compliance_us" as TranslationKey,
    color: "tw-bg-red-100 tw-border-red-300",
    mapColor: "tw-fill-red-500",
    mapHighlight: "tw-fill-red-600",
    // SVG path coordinates for US region - circular shape
    svgPath: "M150 140 m-35 0 a35 35 0 1 0 70 0 a35 35 0 1 0 -70 0",
    tooltipPosition: { x: 150, y: 140 },
  },
  {
    key: "uk",
    labelKey: "United Kingdom",
    icon: (
      <FaGlobeEurope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-indigo-600" />
    ),
    detailKey: "platform.usesafe-certification.compliance_uk" as TranslationKey,
    color: "tw-bg-indigo-100 tw-border-indigo-300",
    mapColor: "tw-fill-indigo-500",
    mapHighlight: "tw-fill-indigo-600",
    // SVG path coordinates for UK region - circular shape
    svgPath: "M370 100 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0",
    tooltipPosition: { x: 370, y: 100 },
  },
  {
    key: "tr",
    labelKey: "Turkey",
    icon: (
      <FaFlag className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-red-500" />
    ),
    detailKey: "platform.usesafe-certification.compliance_tr" as TranslationKey,
    color: "tw-bg-red-100 tw-border-red-300",
    mapColor: "tw-fill-red-500",
    mapHighlight: "tw-fill-red-600",
    // SVG path coordinates for Turkey region - circular shape
    svgPath: "M450 145 m-15 0 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0",
    tooltipPosition: { x: 450, y: 145 },
  },
  {
    key: "other",
    labelKey: "Other Regions",
    icon: (
      <FaGlobe className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-green-600" />
    ),
    detailKey:
      "platform.usesafe-certification.compliance_other" as TranslationKey,
    color: "tw-bg-green-100 tw-border-green-300",
    mapColor: "tw-fill-green-500",
    mapHighlight: "tw-fill-green-600",
    // SVG path coordinates for Asia Pacific region
    svgPath: "M800 210 L900 210 L920 260 L910 310 L880 330 L820 310 L800 260 Z",
    tooltipPosition: { x: 850, y: 260 },
  },
];

const ComplianceMapSection = () => {
  const t = useTranslations();
  const [open, setOpen] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleToggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  const handleRegionHover = (key: string | null, event?: React.MouseEvent) => {
    setHoveredRegion(key);
    if (key && event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const parentElement = event.currentTarget.parentElement;
      if (parentElement) {
        const svgRect = parentElement.getBoundingClientRect();
        setTooltipPosition({
          x: event.clientX - svgRect.left,
          y: event.clientY - svgRect.top,
        });
      }
    }
  };

  return (
    <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <div className="tw-text-center tw-mb-16">
          <div className="tw-inline-flex tw-items-center tw-mb-4 tw-px-4 tw-py-2 tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-sm tw-rounded-full">
            <FaMapMarkedAlt className="tw-w-4 tw-h-4 tw-mr-2" />
            Global Compliance Coverage
          </div>
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-text-gray-900">
            {t("platform.usesafe-certification.compliance_title")}
          </h2>
          <p className="tw-text-xl tw-text-gray-700 tw-max-w-3xl tw-mx-auto">
            {t("platform.usesafe-certification.compliance_description")}
          </p>
        </div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-start">
          {/* Interactive Map */}
          <div className="tw-order-2 lg:tw-order-1">
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-p-8 tw-relative tw-overflow-hidden">
              {/* World Map with Interactive Overlays */}
              <div className="tw-relative tw-w-full tw-h-64 sm:tw-h-80 md:tw-h-96 tw-flex tw-items-center tw-justify-center">
                {/* Background World Map Image */}
                <Image
                  src="/images/earth.jpg"
                  alt="World Map - Global Compliance Coverage"
                  width={800}
                  height={400}
                  className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg"
                  priority
                />

                {/* Interactive SVG Overlays */}
                <svg
                  viewBox="0 0 800 400"
                  className="tw-absolute tw-inset-0 tw-w-full tw-h-full"
                  style={{ pointerEvents: "none" }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Interactive Region Overlays */}
                  {regions.map((region) => (
                    <path
                      key={region.key}
                      d={region.svgPath}
                      className={`tw-transition-all tw-duration-300 tw-cursor-pointer ${
                        hoveredRegion === region.key || open === region.key
                          ? `${region.mapHighlight} tw-stroke-2 tw-stroke-white tw-opacity-80`
                          : `${region.mapColor} tw-stroke-1 tw-stroke-white tw-opacity-60`
                      }`}
                      style={{ pointerEvents: "auto" }}
                      onMouseEnter={(e) => handleRegionHover(region.key, e)}
                      onMouseLeave={() => handleRegionHover(null)}
                      onClick={() => handleToggle(region.key)}
                    />
                  ))}

                  {/* Region Labels */}
                  <text
                    x="150"
                    y="140"
                    className="tw-text-xs tw-font-bold tw-fill-white tw-pointer-events-none tw-drop-shadow-lg"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    US
                  </text>
                  <text
                    x="400"
                    y="122"
                    className="tw-text-xs tw-font-bold tw-fill-white tw-pointer-events-none tw-drop-shadow-lg"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    EU
                  </text>
                  <text
                    x="370"
                    y="100"
                    className="tw-text-xs tw-font-bold tw-fill-white tw-pointer-events-none tw-drop-shadow-lg"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    UK
                  </text>
                  <text
                    x="440"
                    y="145"
                    className="tw-text-xs tw-font-bold tw-fill-white tw-pointer-events-none tw-drop-shadow-lg"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    TR
                  </text>
                  <text
                    x="850"
                    y="260"
                    className="tw-text-xs tw-font-bold tw-fill-white tw-pointer-events-none tw-drop-shadow-lg"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    Other
                  </text>
                </svg>

                {/* Hover Tooltip */}
                {hoveredRegion && (
                  <div
                    className="tw-absolute tw-bg-gray-900 tw-text-white tw-px-2 tw-py-1 sm:tw-px-3 sm:tw-py-2 tw-rounded-lg tw-text-xs sm:tw-text-sm tw-shadow-lg tw-z-20 tw-pointer-events-none tw-whitespace-nowrap tw-max-w-32 sm:tw-max-w-none"
                    style={{
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y - 40}px`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    Click to view{" "}
                    {regions.find((r) => r.key === hoveredRegion)?.labelKey}{" "}
                    details
                    <div className="tw-absolute tw-top-full tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-w-0 tw-h-0 tw-border-l-4 tw-border-r-4 tw-border-t-4 tw-border-transparent tw-border-t-gray-900"></div>
                  </div>
                )}
              </div>

              {/* Map Legend */}
              <div className="tw-mt-6 tw-flex tw-flex-wrap tw-gap-4 tw-justify-center">
                {regions.map((region) => (
                  <div
                    key={region.key}
                    className="tw-flex tw-items-center tw-space-x-2"
                  >
                    <div
                      className={`tw-w-4 tw-h-4 tw-rounded ${region.mapColor}`}
                    ></div>
                    <span className="tw-text-sm tw-text-gray-600">
                      {region.labelKey}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Information Panels */}
          <div className="tw-order-1 lg:tw-order-2">
            <div className="tw-space-y-4">
              {regions.map((region) => (
                <div
                  key={region.key}
                  className={`tw-bg-white tw-rounded-xl tw-shadow-lg tw-border-2 tw-transition-all tw-duration-300 tw-cursor-pointer ${
                    open === region.key
                      ? `${region.color} tw-border-opacity-100 tw-shadow-xl`
                      : "tw-border-transparent hover:tw-shadow-md"
                  }`}
                  onMouseEnter={() => handleRegionHover(region.key)}
                  onMouseLeave={() => handleRegionHover(null)}
                  onClick={() => handleToggle(region.key)}
                >
                  <button
                    className="tw-flex tw-items-center tw-justify-between tw-w-full tw-p-6 focus:tw-outline-none tw-transition-colors"
                    aria-expanded={open === region.key}
                    aria-controls={`compliance-panel-${region.key}`}
                  >
                    <span className="tw-flex tw-items-center tw-font-semibold tw-text-lg tw-text-gray-900">
                      {region.icon}
                      {region.labelKey}
                    </span>
                    <FaChevronDown
                      className={`tw-w-5 tw-h-5 tw-transition-transform tw-text-gray-500 ${
                        open === region.key ? "tw-rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`compliance-panel-${region.key}`}
                    className={`tw-overflow-hidden tw-transition-all tw-duration-500 tw-ease-in-out ${
                      open === region.key
                        ? "tw-max-h-96 tw-opacity-100 tw-px-6 tw-pb-6"
                        : "tw-max-h-0 tw-opacity-0 tw-px-6 tw-pb-0"
                    }`}
                    aria-hidden={open !== region.key}
                  >
                    <div className="tw-text-gray-700 tw-text-base tw-leading-relaxed tw-border-t tw-border-gray-200 tw-pt-4">
                      {t(region.detailKey)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="tw-mt-8 tw-bg-gradient-to-r tw-from-primary tw-to-blue-600 tw-rounded-xl tw-p-6 tw-text-white tw-text-center">
              <h3 className="tw-text-xl tw-font-bold tw-mb-2">
                Ready to Get Started?
              </h3>
              <p className="tw-text-blue-100 tw-mb-4">
                Explore our compliance solutions for your region
              </p>
              <button className="tw-bg-white tw-text-primary tw-px-6 tw-py-3 tw-rounded-lg tw-font-semibold hover:tw-bg-gray-100 tw-transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceMapSection;
