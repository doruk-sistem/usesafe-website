"use client";

import { useTranslations } from "next-intl";
import { HeroSection, DigitalProductPassportSection, KeyBenefitsSection, FeaturesWithImageSection, SectorTabsSection } from "@/components/Platform";
import { FaMapPin, FaShieldAlt, FaGlobe, FaCheckCircle, FaFileAlt, FaChartLine, FaRecycle } from "react-icons/fa";

export default function BatteryPassportPage() {
  const t = useTranslations();

  const batteryPassportFeatures = [
    {
      icon: <FaMapPin className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.transparency_trust_title"),
      description: t("platform.battery-passport.transparency_trust_description"),
      delay: 100,
    },
    {
      icon: <FaShieldAlt className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.circular_economy_title"),
      description: t("platform.battery-passport.circular_economy_description"),
      delay: 200,
    },
    {
      icon: <FaGlobe className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.competitive_advantage_title"),
      description: t("platform.battery-passport.competitive_advantage_description"),
      delay: 300,
    },
  ];

  const batteryPassportCapabilities = [
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.feature_1_title"),
      description: t("platform.battery-passport.feature_1_description"),
    },
    {
      icon: <FaFileAlt className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.feature_2_title"),
      description: t("platform.battery-passport.feature_2_description"),
    },
    {
      icon: <FaChartLine className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.feature_3_title"),
      description: t("platform.battery-passport.feature_3_description"),
    },
    {
      icon: <FaRecycle className="tw-w-6 tw-h-6" />,
      title: t("platform.battery-passport.feature_4_title"),
      description: t("platform.battery-passport.feature_4_description"),
    },
  ];

  const batteryStakeholdersData = [
    {
      id: "manufacturers",
      labelKey: "platform.usesafe-certification.stakeholder_manufacturers_label",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3", "feature_4"],
      imageSrc: "/images/platform/sector-manufacturers.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "sellers",
      labelKey: "platform.usesafe-certification.stakeholder_sellers_label",
      contentTitleKey: "content_title", 
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/sector-retailers_brands.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "marketplaces",
      labelKey: "platform.usesafe-certification.stakeholder_marketplaces_label",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/usesafe_men_wear.avif", 
      imageAltKey: "image_alt",
    },
    {
      id: "authorities",
      labelKey: "platform.usesafe-certification.stakeholder_authorities_label",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/textile-passport.jpeg",
      imageAltKey: "image_alt",
    },
    {
      id: "logistics",
      labelKey: "platform.usesafe-certification.stakeholder_logistics_label",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/logistics-customs-operators-image.png",
      imageAltKey: "image_alt",
    },
    {
      id: "consumers",
      labelKey: "platform.usesafe-certification.stakeholder_consumers_label",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/sector-consumers.jpg",
      imageAltKey: "image_alt",
    },
  ];

  return (
    <div className="tw-min-h-screen">
      <HeroSection
        title={t("platform.battery-passport.hero_title")}
        description={t("platform.battery-passport.hero_description")}
        imageSrc="/images/platform/battery-passport-hero.jpg"
        imageAlt={t("platform.battery-passport.hero_image_alt")}
        primaryCta={{
          text: t("platform.battery-passport.get_started"),
          href: "/contact",
        }}
        className="tw-pb-24 [&_div[class*='tw-bg-white/30']]:tw-hidden [&_img]:tw-brightness-100"
      />

      <DigitalProductPassportSection
        title={t("platform.battery-passport.dpp_title")}
        description={t("platform.battery-passport.dpp_description")}
        buttonText={t("platform.battery-passport.request_demo")}
        buttonHref="https://app.usesafe.net/"
        imageSrc="/images/platform/battery-digital-passport.png"
        imageAlt={t("platform.battery-passport.dpp_image_alt")}
      />

      <KeyBenefitsSection
        title={t("platform.battery-passport.what_is_title")}
        description={t("platform.battery-passport.what_is_description")}
        benefits={batteryPassportFeatures}
        gradientType="white"
        className="tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24"
      />

      <FeaturesWithImageSection
        features={batteryPassportCapabilities}
        imageSrc="/images/platform/battery-ev-charging.jpg"
        imageAlt={t("platform.battery-passport.features_image_alt")}
        buttonText={t("platform.battery-passport.get_startedd")}
        buttonHref="/contact"
      />

      <SectorTabsSection
        mainTitleKey="platform.usesafe-certification.stakeholders_main_titlee"
        learnMoreButtonKey="platform.usesafe-certification.stakeholders_learn_more"
        translationNamespace="platform.usesafe-certification.stakeholder_content"
        sectorsData={batteryStakeholdersData}
        backgroundColor="white"
      />
    </div>
  );
}

