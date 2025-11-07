"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FaShieldAlt,
  FaGlobe,
  FaFileAlt,
  FaRecycle,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaCogs,
  FaBuilding,
  FaMobile,
} from "react-icons/fa";

import {
  HeroSection,
  SectionHeader,
  FeatureCard,
  CtaSection,
  SectorTabsSection,
  TechnicalFeatures,
  FeatureSectionWithImage,
  AnimatedCard,
} from "@/components/Platform";
import ComplianceMapSection from "@/components/Platform/ComplianceMapSection";
import { heroLogos } from "@/constants/heroLogos";

export default function UseSafeCertificationPage() {
  const t = useTranslations();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
        duration: 1.2,
      },
    },
  };

  const stakeholderSectorsData = [
    {
      id: "manufacturers",
      labelKey:
        "platform.usesafe-certification.stakeholder_manufacturers_label",
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
      imageSrc: "/images/platform/usesafe_men_wear.jpg",
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
    <div className="tw-w-full">
      {/* HERO SECTION */}
      <HeroSection
        badge={t("platform.usesafe-certification.hero_badge")}
        title={t("platform.usesafe-certification.hero_title")}
        description={t("platform.usesafe-certification.hero_description")}
        imageSrc="/images/usesafe-certification-homepage.png"
        imageAlt={t("platform.usesafe-certification.hero_image_alt")}
        primaryCta={{
          text: t("common.contact_us"),
          href: "/contact",
        }}
        secondaryCta={{
          text: t("platform.usesafe-certification.request_demo"),
          href: "https://app.usesafe.net/",
          external: true,
        }}
        logos={heroLogos}
      />

      {/* INTRODUCTION SECTION */}
      <section className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title={t("platform.usesafe-certification.intro_title")}
            description={t("platform.usesafe-certification.intro_description")}
          />
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FeatureCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title={t("platform.usesafe-certification.feature_trust_title")}
              variant="glass"
            >
              {t("platform.usesafe-certification.feature_trust_description")}
            </FeatureCard>
            <FeatureCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title={t("platform.usesafe-certification.feature_global_title")}
              variant="glass"
            >
              {t("platform.usesafe-certification.feature_global_description")}
            </FeatureCard>
            <FeatureCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
              title={t(
                "platform.usesafe-certification.feature_compliance_title",
              )}
              variant="glass"
            >
              {t(
                "platform.usesafe-certification.feature_compliance_description",
              )}
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CORE PURPOSE SECTION */}
      <FeatureSectionWithImage
        title={t("platform.usesafe-certification.core_purpose_title")}
        description={t(
          "platform.usesafe-certification.core_purpose_description",
        )}
        features={[
          {
            icon: <FaShieldAlt className="tw-w-8 tw-h-8" />,
            title: t(
              "platform.usesafe-certification.purpose_certification_title",
            ),
            description: t(
              "platform.usesafe-certification.purpose_certification_description",
            ),
            delay: 100,
          },
          {
            icon: <FaFileAlt className="tw-w-8 tw-h-8" />,
            title: t(
              "platform.usesafe-certification.purpose_documentation_title",
            ),
            description: t(
              "platform.usesafe-certification.purpose_documentation_description",
            ),
            delay: 200,
          },
          {
            icon: <FaChartLine className="tw-w-8 tw-h-8" />,
            title: t(
              "platform.usesafe-certification.purpose_traceability_title",
            ),
            description: t(
              "platform.usesafe-certification.purpose_traceability_description",
            ),
            delay: 300,
          },
          {
            icon: <FaRecycle className="tw-w-8 tw-h-8" />,
            title: t("platform.usesafe-certification.purpose_identity_title"),
            description: t(
              "platform.usesafe-certification.purpose_identity_description",
            ),
            delay: 400,
          },
        ]}
        imageSrc="/images/platform/usesafe_men_wear.jpg"
        imageAlt={t("platform.usesafe-certification.image_alt_core_purpose")}
        imageOnRight={true}
        gradientType="light"
        className="tw-py-24"
        cta={{
          text: t("platform.usesafe-certification.get_started"),
          href: "https://app.usesafe.net/",
          variant: "primary",
        }}
      />

      {/* KEY STAKEHOLDERS SECTION */}
      <SectorTabsSection
        mainTitleKey="platform.usesafe-certification.stakeholders_main_title"
        learnMoreButtonKey="platform.usesafe-certification.stakeholders_learn_more"
        translationNamespace="platform.usesafe-certification.stakeholder_content"
        sectorsData={stakeholderSectorsData}
        backgroundColor="white"
      />

      {/* TECHNICAL FEATURES SECTION */}
      <TechnicalFeatures />

      <ComplianceMapSection />

      {/* SUSTAINABILITY & CIRCULAR ECONOMY SECTION */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-text-center tw-mb-16">
            <div className="tw-inline-flex tw-items-center tw-mb-4 tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700 tw-font-medium tw-text-sm tw-rounded-full">
              <FaRecycle className="tw-w-4 tw-h-4 tw-mr-2" />
              {t("platform.usesafe-certification.badge_circular_economy")}
            </div>
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-text-gray-900">
              {t("platform.usesafe-certification.sustainability_title")}
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-max-w-3xl tw-mx-auto">
              {t("platform.usesafe-certification.sustainability_description")}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8"
          >
            <AnimatedCard
              icon={<FaRecycle className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t("platform.usesafe-certification.card_end_of_life_title")}
              description={t(
                "platform.usesafe-certification.sustainability_collection",
              )}
            />
            <AnimatedCard
              icon={<FaChartLine className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t(
                "platform.usesafe-certification.card_lifecycle_monitoring_title",
              )}
              description={t(
                "platform.usesafe-certification.sustainability_monitoring",
              )}
            />
            <AnimatedCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t(
                "platform.usesafe-certification.card_dpp_integration_title",
              )}
              description={t(
                "platform.usesafe-certification.sustainability_dpp_integration",
              )}
            />
            <AnimatedCard
              icon={<FaUsers className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t(
                "platform.usesafe-certification.card_consumer_engagement_title",
              )}
              description={t(
                "platform.usesafe-certification.sustainability_engagement",
              )}
            />
          </motion.div>
        </div>
      </section>

      {/* FUTURE OUTLOOK SECTION */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-text-center tw-mb-16">
            <div className="tw-inline-flex tw-items-center tw-mb-4 tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700 tw-font-medium tw-text-sm tw-rounded-full">
              <FaGlobe className="tw-w-4 tw-h-4 tw-mr-2" />
              {t("platform.usesafe-certification.badge_platform_development")}
            </div>
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-text-gray-900">
              {t("platform.usesafe-certification.future_title")}
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-max-w-3xl tw-mx-auto">
              {t("platform.usesafe-certification.future_description")}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8"
          >
            <AnimatedCard
              icon={
                <FaShoppingCart className="tw-w-8 tw-h-8 tw-text-blue-600" />
              }
              title={t(
                "platform.usesafe-certification.card_public_marketplace_title",
              )}
              description={t(
                "platform.usesafe-certification.future_marketplace",
              )}
            />
            <AnimatedCard
              icon={<FaCogs className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t(
                "platform.usesafe-certification.card_sector_modules_title",
              )}
              description={t(
                "platform.usesafe-certification.future_sector_modules",
              )}
            />
            <AnimatedCard
              icon={<FaBuilding className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t(
                "platform.usesafe-certification.card_egov_integration_title",
              )}
              description={t("platform.usesafe-certification.future_egov")}
            />
            <AnimatedCard
              icon={<FaMobile className="tw-w-8 tw-h-8 tw-text-blue-600" />}
              title={t("platform.usesafe-certification.card_mobile_apps_title")}
              description={t("platform.usesafe-certification.future_mobile")}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection
        title={t("platform.usesafe-certification.cta_title")}
        description={t("platform.usesafe-certification.cta_description")}
        primaryCta={{
          text: t("common.contact_us"),
          href: "/contact",
        }}
        secondaryCta={{
          text: t("platform.usesafe-certification.request_demo"),
          href: "https://app.usesafe.net/",
          external: true,
        }}
      />
    </div>
  );
}
