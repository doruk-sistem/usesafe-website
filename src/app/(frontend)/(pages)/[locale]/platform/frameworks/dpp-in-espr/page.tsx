"use client";

import AOS from "aos";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaRecycle,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  CtaButton,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function DppInEsprPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  const t = useTranslations();

  return (
    <div className="tw-w-full">
      {/* Hero Section */}
      <HeroSection
        badge={t("platform.dpp-in-espr.badge")}
        title={t("platform.dpp-in-espr.hero_title")}
        description={<>{t("platform.dpp-in-espr.hero_description").replace("UseSAFE platform", "")} <b>UseSAFE platform</b>, {t("platform.dpp-in-espr.hero_description").split("UseSAFE platform")[1]}</>}
        imageSrc="/images/digital-product-passport-usesafe.png"
        imageAlt="Digital Product Passport"
        primaryCta={{
          text: t("common.contact_us"),
          href: "/contact",
        }}
        secondaryCta={{
          text: t("common.try_for_free"),
          href: "https://app.usesafe.net/",
          external: true,
        }}
      />

      {/* What is DPP Section */}
      <GradientBackground type="white">
        <SectionHeader
          title={t("platform.dpp-in-espr.what_is_dpp_title")}
          description={
            <>{t("platform.dpp-in-espr.what_is_dpp_description")}
              <a
                href="https://app.usesafe.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-underline hover:tw-text-primary"
              >
                UseSAFE platform
              </a>
            </>
          }
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.transparency_trust_title")}
            delay={0}
          >
            {t("platform.dpp-in-espr.transparency_trust_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaRecycle className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.circular_economy_title")}
            delay={100}
          >
            {t("platform.dpp-in-espr.circular_economy_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaChartLine className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.competitive_advantage_title")}
            delay={200}
          >
            {t("platform.dpp-in-espr.competitive_advantage_description")}
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* ESPR Compliance Section */}
      <GradientBackground type="light">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
          <div className="tw-flex-1 tw-max-w-2xl">
            <div className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-sm tw-mb-6">
              {t("platform.dpp-in-espr.regulatory_compliance_badge")}
            </div>
            <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-leading-tight">
              {t("platform.dpp-in-espr.espr_compliance_title").split("Made Simple")[0]}{" "}
              <span className="tw-text-primary">{t("platform.dpp-in-espr.made_simple")}</span>
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-mb-8 tw-leading-relaxed">
              {t("platform.dpp-in-espr.espr_compliance_description")}
            </p>

            <div className="tw-space-y-6 tw-mb-10">
              <FeatureCard
                icon={<FaShieldAlt className="tw-w-6 tw-h-6" />}
                title={t("platform.dpp-in-espr.comprehensive_compliance_title")}
                variant="horizontal"
                delay={100}
              >
                {t("platform.dpp-in-espr.comprehensive_compliance_description")}
              </FeatureCard>

              <FeatureCard
                icon={<FaChartLine className="tw-w-6 tw-h-6" />}
                title={t("platform.dpp-in-espr.streamlined_data_title")}
                variant="horizontal"
                delay={100}
              >
                {t("platform.dpp-in-espr.streamlined_data_description")}
              </FeatureCard>

              <FeatureCard
                icon={<FaFileAlt className="tw-w-6 tw-h-6" />}
                title={t("platform.dpp-in-espr.sensitive_data_title")}
                variant="horizontal"
                delay={100}
              >
                {t("platform.dpp-in-espr.sensitive_data_description")}
              </FeatureCard>

              <FeatureCard
                icon={<FaGlobe className="tw-w-6 tw-h-6" />}
                title={t("platform.dpp-in-espr.transparency_engagement_title")}
                variant="horizontal"
                delay={100}
              >
                {t("platform.dpp-in-espr.transparency_engagement_description")}
              </FeatureCard>
            </div>

            <CtaButton href="/demo" variant="primary">
              {t("platform.dpp-in-espr.get_started")}
            </CtaButton>
          </div>
          <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
            <div className="tw-relative tw-h-[400px] md:tw-h-[500px] tw-w-full">
              <Image
                src="/images/dpp-usesafe.png"
                alt={t("platform.dpp-in-espr.image_alt")}
                fill
                className="tw-object-contain"
              />
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* How It Works Section */}
      <GradientBackground type="white">
        <SectionHeader
          title={t("platform.dpp-in-espr.how_it_works_title")}
          description={t("platform.dpp-in-espr.how_it_works_description")}
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-12 tw-mt-12">
          <FeatureCard
            icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.data_accuracy_title")}
            delay={200}
          >
            {t("platform.dpp-in-espr.data_accuracy_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaGlobe className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.accessibility_title")}
            delay={300}
          >
            {t("platform.dpp-in-espr.accessibility_description")}
          </FeatureCard>
        </div>

        <div className="tw-mt-20 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50 tw-p-12 tw-rounded-2xl tw-shadow-xl tw-border tw-border-white/80">
          <div className="tw-max-w-3xl tw-mx-auto">
            <h3 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-text-center">
              {t("platform.dpp-in-espr.our_approach_title").split("DPP Implementation")[0]}{" "}
              <span className="tw-text-primary">{t("platform.dpp-in-espr.dpp_implementation")}</span>
            </h3>
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-mb-10 tw-leading-relaxed">
              {t("platform.dpp-in-espr.our_approach_description")}
            </p>
            <div className="tw-flex tw-justify-center">
              <CtaButton
                href="https://www.dorukwell.eu/"
                variant="primary"
                external={true}
              >
                {t("platform.dpp-in-espr.get_free_consultation")}
              </CtaButton>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Benefits Section */}
      <GradientBackground type="light">
        <SectionHeader
          title={t("platform.dpp-in-espr.benefits_title")}
          highlightedText="DPP Solution"
          description={t("platform.dpp-in-espr.benefits_description")}
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.regulatory_compliance_title")}
            delay={0}
            variant="glass"
          >
            {t("platform.dpp-in-espr.regulatory_compliance_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaGlobe className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.supply_chain_title")}
            delay={100}
            variant="glass"
          >
            {t("platform.dpp-in-espr.supply_chain_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.data_security_title")}
            delay={200}
            variant="glass"
          >
            {t("platform.dpp-in-espr.data_security_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaChartLine className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.consumer_engagement_title")}
            delay={300}
            variant="glass"
          >
            {t("platform.dpp-in-espr.consumer_engagement_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaRecycle className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.sustainability_assessment_title")}
            delay={400}
            variant="glass"
          >
            {t("platform.dpp-in-espr.sustainability_assessment_description")}
          </FeatureCard>

          <FeatureCard
            icon={<FaGlobe className="tw-w-8 tw-h-8" />}
            title={t("platform.dpp-in-espr.scalable_platform_title")}
            delay={500}
            variant="glass"
          >
            {t("platform.dpp-in-espr.scalable_platform_description")}
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title={t("platform.dpp-in-espr.cta_title")}
        description={t("platform.dpp-in-espr.cta_description")}
        primaryCta={{
          text: t("platform.dpp-in-espr.contact_team"),
          href: "/contact",
        }}
        secondaryCta={{
          text: t("platform.dpp-in-espr.request_demo"),
          href: "https://app.usesafe.net/",
          external: true,
        }}
      />
    </div>
  );
}
