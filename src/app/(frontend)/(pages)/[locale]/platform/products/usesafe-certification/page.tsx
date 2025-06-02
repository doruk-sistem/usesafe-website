"use client";

import { useTranslations } from "next-intl";
import { FaShieldAlt, FaGlobe, FaFileAlt, FaRecycle, FaChartLine } from "react-icons/fa";

import {
  HeroSection,
  SectionHeader,
  FeatureCard,
  CtaSection,
  StakeholderRoles,
  TechnicalFeatures,
  FeatureSectionWithImage,
} from "@/components/Platform";
import ComplianceMapSection from "@/components/Platform/ComplianceMapSection";

export default function UseSafeCertificationPage() {
  const t = useTranslations();
  return (
    <div className="tw-w-full">
      {/* HERO SECTION */}
      <HeroSection
        badge={t("platform.usesafe-certification.hero_badge")}
        title={t("platform.usesafe-certification.hero_title")}
        description={t("platform.usesafe-certification.hero_description")}
        imageSrc="/logos/USESAFE_MARKA.png"
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
              title={t("platform.usesafe-certification.feature_compliance_title")}
              variant="glass"
            >
              {t("platform.usesafe-certification.feature_compliance_description")}
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CORE PURPOSE SECTION */}
      <FeatureSectionWithImage
        title={t("platform.usesafe-certification.core_purpose_title")}
        description={t("platform.usesafe-certification.core_purpose_description")}
        features={[
          {
            icon: <FaShieldAlt className="tw-w-8 tw-h-8" />,
            title: t("platform.usesafe-certification.purpose_certification_title"),
            description: t("platform.usesafe-certification.purpose_certification_description"),
            delay: 100,
          },
          {
            icon: <FaFileAlt className="tw-w-8 tw-h-8" />,
            title: t("platform.usesafe-certification.purpose_documentation_title"),
            description: t("platform.usesafe-certification.purpose_documentation_description"),
            delay: 200,
          },
          {
            icon: <FaChartLine className="tw-w-8 tw-h-8" />,
            title: t("platform.usesafe-certification.purpose_traceability_title"),
            description: t("platform.usesafe-certification.purpose_traceability_description"),
            delay: 300,
          },
          {
            icon: <FaRecycle className="tw-w-8 tw-h-8" />,
            title: t("platform.usesafe-certification.purpose_identity_title"),
            description: t("platform.usesafe-certification.purpose_identity_description"),
            delay: 400,
          },
        ]}
        imageSrc="/images/platform/usesafe_men_wear.avif"
        imageAlt="UseSafe Certification Core Purpose"
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
      <StakeholderRoles />

      {/* TECHNICAL FEATURES SECTION */}
      <TechnicalFeatures />

      <ComplianceMapSection />

      {/* SUSTAINABILITY & CIRCULAR ECONOMY SECTION */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title={t("platform.usesafe-certification.sustainability_title")}
            description={t("platform.usesafe-certification.sustainability_description")}
          />
          <ul className="tw-list-disc tw-list-inside tw-mt-8 tw-space-y-4 tw-text-lg">
            <li>{t("platform.usesafe-certification.sustainability_collection")}</li>
            <li>{t("platform.usesafe-certification.sustainability_monitoring")}</li>
            <li>{t("platform.usesafe-certification.sustainability_dpp_integration")}</li>
            <li>{t("platform.usesafe-certification.sustainability_engagement")}</li>
          </ul>
        </div>
      </section>

      {/* FUTURE OUTLOOK SECTION */}
      <section className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title={t("platform.usesafe-certification.future_title")}
            description={t("platform.usesafe-certification.future_description")}
          />
          <ul className="tw-list-disc tw-list-inside tw-mt-8 tw-space-y-4 tw-text-lg">
            <li>{t("platform.usesafe-certification.future_marketplace")}</li>
            <li>{t("platform.usesafe-certification.future_sector_modules")}</li>
            <li>{t("platform.usesafe-certification.future_egov")}</li>
            <li>{t("platform.usesafe-certification.future_mobile")}</li>
          </ul>
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
