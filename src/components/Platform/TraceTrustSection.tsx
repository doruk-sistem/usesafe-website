"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react"; // Import useState
import { FaCheckCircle } from "react-icons/fa";

import CtaButton from "./CtaButton";

interface SectorButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void; // Add onClick prop
}

const SectorButton: React.FC<SectorButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`tw-px-5 md:tw-px-6 tw-py-2 md:tw-py-2.5 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-border-0 tw-transition-all tw-duration-200 tw-ease-in-out tw-text-sm md:tw-text-base focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-green-600 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-white dark:focus-visible:tw-ring-offset-gray-900
        ${isActive
          ? "tw-font-bold tw-text-white tw-shadow-md"
          : "tw-font-medium tw-text-slate-700 hover:tw-text-slate-900 dark:tw-text-gray-300 dark:hover:tw-text-white"
        }`}
      onClick={onClick} // Use onClick prop
    >
      {label}
    </button>
  );
};

export const TraceTrustSection = () => {
  const t = useTranslations();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const sectorIds = [
    "manufacturers",
    "service_providers",
    "retailers_brands",
    "recyclers",
    "consumers",
  ] as const;

  const sectorDetails: Record<typeof sectorIds[number], { featureCount: number }> = {
    manufacturers: { featureCount: 4 },
    service_providers: { featureCount: 3 },
    retailers_brands: { featureCount: 4 },
    recyclers: { featureCount: 3 },
    consumers: { featureCount: 3 },
  };

  // All possible feature keys (up to the max needed for any sector)
  const allFeatureKeys = [
    "feature_1" as const,
    "feature_2" as const,
    "feature_3" as const,
    "feature_4" as const,
  ];

  const sectorData = sectorIds.map((id) => {
    const count = sectorDetails[id].featureCount;
    return {
      id,
      contentTitleKey: "content_title" as const,
      featuresKeys: allFeatureKeys.slice(0, count),
      imageSrc: `/images/platform/sector-${id}.jpg`,
      imageAltKey: "image_alt" as const,
    };
  });

  const currentSectorContent = sectorData[activeTabIndex];
  const tSector = useTranslations(`platform.textile-passport.trace_trust_section.sector_content.${currentSectorContent.id}`);

  const sectors = sectorIds.map((id) => ({
    id,
    labelKey: `platform.textile-passport.trace_trust_section.sector_button_${id}` as const,
  }));

  return (
    <section className="tw-py-16 md:tw-py-24 tw-bg-white">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <h2 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-center tw-mb-10 md:tw-mb-12 tw-text-gray-800">
          {t("platform.textile-passport.trace_trust_section.main_title")}
        </h2>

        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-3 md:tw-gap-4 tw-mb-12 md:tw-mb-16">
          {sectors.map((sector, index) => (
            <SectorButton
              key={index}
              label={t(sector.labelKey)}
              isActive={index === activeTabIndex}
              onClick={() => setActiveTabIndex(index)}
            />
          ))}
        </div>

        <div className="tw-bg-gray-50 tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-p-6 md:tw-p-8 lg:tw-p-12">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 md:tw-gap-12 tw-items-center">
            <div>
              <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-6">
                {tSector(currentSectorContent.contentTitleKey)}
              </h3>
              <ul className="tw-space-y-3 tw-mb-8">
                {currentSectorContent.featuresKeys.map((featureKey, index) => {
                  const featureText = tSector(featureKey);
                  // Only render if translation exists and is not the key itself
                  if (featureText && featureText !== featureKey) {
                    return (
                      <li key={index} className="tw-flex tw-items-start">
                        <FaCheckCircle className="tw-w-5 tw-h-5 tw-text-green-500 tw-mr-3 tw-mt-1 tw-flex-shrink-0" />
                        <span className="tw-text-black">{featureText}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <CtaButton href="#" variant="primary" className="tw-w-full sm:tw-w-auto">
                {t("platform.textile-passport.trace_trust_section.learn_more_button")}
              </CtaButton>
            </div>
            <div className="tw-relative tw-h-64 md:tw-h-80 lg:tw-h-96 tw-rounded-lg tw-overflow-hidden">
              <Image
                src={currentSectorContent.imageSrc} // Dynamic image path
                alt={tSector(currentSectorContent.imageAltKey)}
                layout="fill"
                objectFit="cover"
                className="tw-rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
