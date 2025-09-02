"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import CtaButton from "../CtaButton";

import SectorButton from "./SectorButton";
import type { SectorTabsSectionProps } from "./types";

const SectorTabsSection: React.FC<SectorTabsSectionProps> = ({
  mainTitleKey,
  learnMoreButtonKey,
  translationNamespace,
  sectorsData,
  backgroundColor = "white",
}) => {
  const t = useTranslations();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentSectorContent = sectorsData[activeTabIndex];

  // Type-safe approach: construct the translation key properly
  const sectorTranslationKey = `${translationNamespace}.${currentSectorContent.id}`;

  const bgClass = backgroundColor === "white" ? "tw-bg-white" : "tw-bg-gray-50";

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeTabIndex) return;

    setIsTransitioning(true);

    // Smooth transition with slight delay
    setTimeout(() => {
      setActiveTabIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  // Helper function to safely get translations
  const getSectorTranslation = (key: string): string => {
    const fullKey = `${sectorTranslationKey}.${key}`;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return t(fullKey as any) || key;
    } catch {
      return key;
    }
  };

  return (
    <section className={`tw-py-16 md:tw-py-24 ${bgClass}`}>
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <h2 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-center tw-mb-10 md:tw-mb-12 tw-text-gray-800">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {t(mainTitleKey as any)}
        </h2>

        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-3 md:tw-gap-4 tw-mb-12 md:tw-mb-16">
          {sectorsData.map((sector, index) => (
            <SectorButton
              key={index}
              label={
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                t(sector.labelKey as any)
              }
              isActive={index === activeTabIndex}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </div>

        <div className="tw-bg-gray-50 tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-p-6 md:tw-p-8 lg:tw-p-12">
          <div className={`tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 md:tw-gap-12 tw-items-center tw-transition-all tw-duration-500 tw-ease-in-out ${
            isTransitioning ? "tw-opacity-0 tw-transform tw-scale-95" : "tw-opacity-100 tw-transform tw-scale-100"
          }`}>
            <div>
              <h3 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-mb-6">
                {getSectorTranslation(currentSectorContent.contentTitleKey)}
              </h3>
              <ul className="tw-space-y-3 tw-mb-8">
                {currentSectorContent.featuresKeys.map((featureKey, index) => {
                  const featureText = getSectorTranslation(featureKey);
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
              <CtaButton
                href={activeTabIndex === 0 ? "/stakeholders/manufacturers-brand-owners" : "#"}
                variant="primary"
                className="tw-w-full sm:tw-w-auto"
              >
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {t(learnMoreButtonKey as any)}
              </CtaButton>
            </div>
            <div className="tw-relative tw-h-64 md:tw-h-80 lg:tw-h-96 tw-rounded-lg tw-overflow-hidden">
              <Image
                src={currentSectorContent.imageSrc}
                alt={getSectorTranslation(currentSectorContent.imageAltKey)}
                fill
                className="tw-object-cover tw-rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorTabsSection;
