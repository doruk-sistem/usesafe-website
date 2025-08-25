"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaChevronDown, FaGlobeEurope, FaGlobeAmericas, FaFlag, FaGlobe } from "react-icons/fa";

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
    icon: <FaGlobeEurope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-blue-700" />,
    detailKey: "platform.usesafe-certification.compliance_eu" as TranslationKey,
  },
  {
    key: "us",
    labelKey: "United States",
    icon: <FaGlobeAmericas className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-red-600" />,
    detailKey: "platform.usesafe-certification.compliance_us" as TranslationKey,
  },
  {
    key: "tr",
    labelKey: "Turkey",
    icon: <FaFlag className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-red-500" />,
    detailKey: "platform.usesafe-certification.compliance_tr" as TranslationKey,
  },
  {
    key: "uk",
    labelKey: "United Kingdom",
    icon: <FaGlobeEurope className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-indigo-600" />,
    detailKey: "platform.usesafe-certification.compliance_uk" as TranslationKey,
  },
  {
    key: "other",
    labelKey: "Other Regions",
    icon: <FaGlobe className="tw-w-6 tw-h-6 tw-mr-2 tw-text-primary tw-text-green-600" />,
    detailKey: "platform.usesafe-certification.compliance_other" as TranslationKey,
  },
];

const ComplianceMapSection = () => {
  const t = useTranslations();
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <section className="tw-py-24 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <h2 className="tw-text-4xl tw-font-bold tw-mb-8 tw-text-gray-900">
          {t("platform.usesafe-certification.compliance_title")}
        </h2>
        <p className="tw-text-lg tw-text-gray-700 tw-mb-8">
          {t("platform.usesafe-certification.compliance_description")}
        </p>
        <div className="tw-divide-y tw-divide-gray-200 tw-bg-white tw-rounded-xl tw-shadow-lg">
          {regions.map((region) => (
            <div key={region.key}>
              <button
                className="tw-flex tw-items-center tw-justify-between tw-w-full tw-p-6 tw-bg-white focus:tw-outline-none hover:tw-bg-gray-50 tw-transition"
                aria-expanded={open === region.key}
                aria-controls={`compliance-panel-${region.key}`}
                onClick={() => handleToggle(region.key)}
              >
                <span className="tw-flex tw-items-center tw-font-semibold tw-text-lg">
                  {region.icon}
                  {region.labelKey}
                </span>
                <FaChevronDown
                  className={`tw-w-5 tw-h-5 tw-transition-transform ${open === region.key ? "tw-rotate-180" : ""}`}
                />
              </button>
              <div
                id={`compliance-panel-${region.key}`}
                className={`tw-overflow-hidden tw-transition-all tw-duration-300 ${open === region.key ? "tw-max-h-96 tw-px-6 tw-pb-6 tw-block" : "tw-max-h-0 tw-px-6 tw-pb-0 tw-hidden"}`}
                aria-hidden={open !== region.key}
              >
                <div className="tw-text-gray-700 tw-text-base">
                  {t(region.detailKey)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceMapSection;
