"use client";

import { useTranslations } from "next-intl";
import { FaCheckCircle, FaRecycle, FaChartLine, FaFileAlt, FaShieldAlt, FaGlobe, FaCompass, FaFlask, FaPaperPlane, FaDatabase, FaGlobeAmericas } from "react-icons/fa";

import { HeroSection, DigitalProductPassportSection, KeyBenefitsSection, FeaturesWithImageSection,CtaButton, SectorTabsSection } from "@/components/Platform";

export default function ApiIntegrationsPage() {
  const t = useTranslations();

  const stakeholderSectorsData = [
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
        title={t("platform.api-integrations.hero_title")}
        description={t("platform.api-integrations.hero_description")}
        imageSrc="/images/api-integrations-hero.jpg"
        imageAlt={t("platform.api-integrations.hero_image_alt")}
        primaryCta={{
          text: t("platform.api-integrations.hero_cta_text"),
          href: "/contact",
        }}
        className="tw-pb-24 [&_div[class*='tw-bg-white/30']]:tw-hidden [&_img]:tw-brightness-100"
      />

      <DigitalProductPassportSection
        title={t("platform.api-integrations.dpp_title")}
        description={t("platform.api-integrations.dpp_description")}
        buttonText={t("platform.api-integrations.dpp_button_text")}
        buttonHref="https://app.usesafe.net/"
        imageSrc="/images/usesafe-api-integration.webp"
        imageAlt={t("platform.api-integrations.dpp_image_alt")}
      />

      <KeyBenefitsSection
        title={t("platform.api-integrations.what_is_title")}
        description={t("platform.api-integrations.what_is_description")}
        benefits={[
          {
            icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
            title: t("platform.api-integrations.benefit_1_title"),
            description: t("platform.api-integrations.benefit_1_description"),
          },
          {
            icon: <FaRecycle className="tw-w-6 tw-h-6 tw-text-primary" />,
            title: t("platform.api-integrations.benefit_2_title"),
            description: t("platform.api-integrations.benefit_2_description"),
          },
          {
            icon: <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />,
            title: t("platform.api-integrations.benefit_3_title"),
            description: t("platform.api-integrations.benefit_3_description"),
          },
        ]}
        gradientType="white"
      />

      <FeaturesWithImageSection
        features={[
          {
            icon: <FaCheckCircle className="tw-w-5 tw-h-5 tw-text-white" />,
            title: t("platform.api-integrations.feature_1_title"),
            description: t("platform.api-integrations.feature_1_description"),
          },
          {
            icon: <FaFileAlt className="tw-w-5 tw-h-5 tw-text-white" />,
            title: t("platform.api-integrations.feature_2_title"),
            description: t("platform.api-integrations.feature_2_description"),
          },
          {
            icon: <FaChartLine className="tw-w-5 tw-h-5 tw-text-white" />,
            title: t("platform.api-integrations.feature_3_title"),
            description: t("platform.api-integrations.feature_3_description"),
          },
          {
            icon: <FaRecycle className="tw-w-5 tw-h-5 tw-text-white" />,
            title: t("platform.api-integrations.feature_4_title"),
            description: t("platform.api-integrations.feature_4_description"),
          },
        ]}
        imageSrc="/images/digital-verification-checkmark.jpg"
        imageAlt={t("platform.api-integrations.features_image_alt")}
        buttonText={t("platform.api-integrations.features_button_text")}
        buttonHref="/contact"
      />

      <KeyBenefitsSection
        title=""
        description=""
        benefits={[
          {
            icon: <FaPaperPlane className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_1_title"),
            description: t("platform.api-integrations.advanced_feature_1_description"),
          },
          {
            icon: <FaShieldAlt className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_2_title"),
            description: t("platform.api-integrations.advanced_feature_2_description"),
          },
          {
            icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_3_title"),
            description: t("platform.api-integrations.advanced_feature_3_description"),
          },
          {
            icon: <FaCompass className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_4_title"),
            description: t("platform.api-integrations.advanced_feature_4_description"),
          },
          {
            icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_5_title"),
            description: t("platform.api-integrations.advanced_feature_5_description"),
          },
          {
            icon: <FaFlask className="tw-w-6 tw-h-6 tw-text-teal-600" />,
            title: t("platform.api-integrations.advanced_feature_6_title"),
            description: t("platform.api-integrations.advanced_feature_6_description"),
          },
        ]}
        gradientType="white"
      />

      {/* Custom CTA Section - Horizontal Box Design */}
      <section className="tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
          <div className="tw-flex tw-justify-center">
            <div className="tw-bg-gradient-to-r tw-from-teal-500 tw-to-blue-600 tw-p-6 sm:tw-p-8 md:tw-p-10 tw-rounded-xl sm:tw-rounded-2xl tw-shadow-xl tw-max-w-4xl tw-w-full">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-6 sm:tw-gap-8">
                {/* Left Side - Text Content */}
                <div className="tw-flex-1 tw-text-center lg:tw-text-left">
                  <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-white tw-mb-3 sm:tw-mb-4">
                    {t("platform.api-integrations.cta_1_title")}
                  </h2>
                  <p className="tw-text-base sm:tw-text-lg tw-text-white/90 tw-leading-relaxed">
                    {t("platform.api-integrations.cta_1_description")}
                  </p>
                </div>

                {/* Right Side - Button */}
                <div className="tw-flex-shrink-0 tw-w-full lg:tw-w-auto">
                  <CtaButton href="/contact" variant="white" className="tw-w-full lg:tw-w-auto">
                    {t("platform.api-integrations.cta_1_button_text")}
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <SectorTabsSection
        mainTitleKey="platform.usesafe-certification.stakeholders_main_title"
        learnMoreButtonKey="platform.usesafe-certification.stakeholders_learn_more"
        translationNamespace="platform.usesafe-certification.stakeholder_content"
        sectorsData={stakeholderSectorsData}
        backgroundColor="white"
      />

      {/* Why UseSafe Section */}
      <section className="tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6 sm:tw-mb-8">
              {t("platform.api-integrations.why_usesafe_title")}
            </h2>
            <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-gray-600 tw-mb-12 sm:tw-mb-16 tw-leading-relaxed tw-px-4">
              {t("platform.api-integrations.why_usesafe_description")}
            </p>

            <div className="tw-space-y-8 sm:tw-space-y-10 md:tw-space-y-12">
              {/* Seamless Integration */}
              <div className="tw-text-center">
                <h3 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-3 sm:tw-mb-4 tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_1_title")}
                </h3>
                <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 tw-leading-relaxed tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_1_description")}
                </p>
              </div>

              {/* Real-Time Transparency */}
              <div className="tw-text-center">
                <h3 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-3 sm:tw-mb-4 tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_2_title")}
                </h3>
                <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 tw-leading-relaxed tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_2_description")}
                </p>
              </div>

              {/* Compliance Automation */}
              <div className="tw-text-center">
                <h3 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-3 sm:tw-mb-4 tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_3_title")}
                </h3>
                <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 tw-leading-relaxed tw-px-4">
                  {t("platform.api-integrations.why_usesafe_feature_3_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Features Section */}
      <section className="tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 sm:tw-gap-8 tw-max-w-6xl tw-mx-auto">
            {/* Data Accuracy Card */}
            <div className="tw-bg-white tw-p-6 sm:tw-p-8 tw-rounded-lg sm:tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-min-h-[240px] sm:tw-h-64">
              <div className="tw-w-12 tw-h-12 tw-bg-gray-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4 tw-mx-auto">
                <FaDatabase className="tw-w-6 tw-h-6 tw-text-gray-800" />
              </div>
              <h3 className="tw-text-lg sm:tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-3 tw-text-center tw-px-2">
                {t("platform.api-integrations.final_feature_1_title")}
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-gray-600 tw-leading-relaxed tw-text-center">
                {t("platform.api-integrations.final_feature_1_description")}
              </p>
            </div>

            {/* Accessibility Card */}
            <div className="tw-bg-white tw-p-6 sm:tw-p-8 tw-rounded-lg sm:tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-min-h-[240px] sm:tw-h-64">
              <div className="tw-w-12 tw-h-12 tw-bg-gray-100 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-4 tw-mx-auto">
                <FaGlobeAmericas className="tw-w-6 tw-h-6 tw-text-gray-800" />
              </div>
              <h3 className="tw-text-lg sm:tw-text-xl tw-font-bold tw-text-gray-800 tw-mb-3 tw-text-center tw-px-2">
                {t("platform.api-integrations.final_feature_2_title")}
              </h3>
              <p className="tw-text-sm sm:tw-text-base tw-text-gray-600 tw-leading-relaxed tw-text-center">
                {t("platform.api-integrations.final_feature_2_description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-gradient-to-r tw-from-teal-500 tw-to-blue-600">
        <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-white tw-mb-4 sm:tw-mb-6 tw-px-4">
              {t("platform.api-integrations.final_cta_title")}
            </h2>
            <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-white/90 tw-mb-8 sm:tw-mb-10 tw-leading-relaxed tw-px-4">
              {t("platform.api-integrations.final_cta_description")}
            </p>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-gap-4 sm:tw-gap-6 tw-px-4">
              <CtaButton href="/contact" variant="white" className="tw-w-full sm:tw-w-auto">
                {t("platform.api-integrations.final_cta_button_1_text")}
              </CtaButton>
              <CtaButton href="https://app.usesafe.net/" variant="white" external className="tw-w-full sm:tw-w-auto">
                {t("platform.api-integrations.final_cta_button_2_text")}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
