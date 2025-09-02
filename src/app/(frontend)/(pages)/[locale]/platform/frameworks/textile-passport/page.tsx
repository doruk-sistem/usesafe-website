"use client";

import AOS from "aos";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaRecycle,
  FaChartLine,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

import {
  CtaButton,
  FeatureCard,
  GradientBackground,
  HeroSection,
  SectionHeader,
  CtaSection,
  SectorTabsSection,
} from "@/components/Platform";

export default function TextilePassportPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  const t = useTranslations();

  const textileSectorsData = [
    {
      id: "manufacturers",
      labelKey:
        "platform.textile-passport.trace_trust_section.sector_button_manufacturers",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3", "feature_4"],
      imageSrc: "/images/platform/sector-manufacturers.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "service_providers",
      labelKey:
        "platform.textile-passport.trace_trust_section.sector_button_service_providers",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/sector-service_providers.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "retailers_brands",
      labelKey:
        "platform.textile-passport.trace_trust_section.sector_button_retailers_brands",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3", "feature_4"],
      imageSrc: "/images/platform/sector-retailers_brands.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "recyclers",
      labelKey:
        "platform.textile-passport.trace_trust_section.sector_button_recyclers",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/sector-recyclers.jpg",
      imageAltKey: "image_alt",
    },
    {
      id: "consumers",
      labelKey:
        "platform.textile-passport.trace_trust_section.sector_button_consumers",
      contentTitleKey: "content_title",
      featuresKeys: ["feature_1", "feature_2", "feature_3"],
      imageSrc: "/images/platform/sector-consumers.jpg",
      imageAltKey: "image_alt",
    },
  ];

  return (
    <div className="tw-w-full">
      <HeroSection
        badge="Digital Product Passport in Textile"
        title="Transforming Textile Industry with Digital Product Passports"
        description="Enhance transparency, traceability, and sustainability in the textile sector with Digital Product Passports. Comply with EU regulations and empower your supply chain with verifiable lifecycle data for every garment and textile product."
        imageSrc="/images/platform/textile-passport.jpeg"
        imageAlt="Digital Product Passport in Textile"
        primaryCta={{
          text: t("common.contact_us"),
          href: "/contact",
        }}
        secondaryCta={{
          text: t("common.try_for_free"),
          href: "https://app.usesafe.net/",
          external: true,
        }}
        className="tw-py-24 md:tw-py-32"
      />

      {/* DPP NEDİR? */}
      <section className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title={t("platform.textile-passport.what_is_dpp.title")}
            description={t("platform.textile-passport.what_is_dpp.description")}
          />
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FeatureCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title={t(
                "platform.textile-passport.what_is_dpp.transparency_trust_title",
              )}
              variant="glass"
            >
              {t(
                "platform.textile-passport.what_is_dpp.transparency_trust_description",
              )}
            </FeatureCard>
            <FeatureCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title={t(
                "platform.textile-passport.what_is_dpp.circularity_title",
              )}
              variant="glass"
            >
              {t(
                "platform.textile-passport.what_is_dpp.circularity_description",
              )}
            </FeatureCard>
            <FeatureCard
              icon={<FaChartLine className="tw-w-8 tw-h-8" />}
              title={t(
                "platform.textile-passport.what_is_dpp.competitive_advantage_title",
              )}
              variant="glass"
            >
              {t(
                "platform.textile-passport.what_is_dpp.competitive_advantage_description",
              )}
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* NEDEN TEKSTİLDE DPP? */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1 tw-max-w-2xl">
              <SectionHeader
                title={t("platform.textile-passport.why_dpp.title")}
                description={t("platform.textile-passport.why_dpp.description")}
                className="tw-text-left tw-mx-0 tw-max-w-none tw-mb-8"
              />{" "}
              {/* Removed badge, adjusted className for left alignment and no max-width from SectionHeader default */}
              {/* Note: The original "Why DPP for Textile?" badge was removed for simplicity. It can be added back as a custom element if needed. */}
              <div className="tw-space-y-6 tw-mb-10">
                <FeatureCard
                  icon={<FaShieldAlt className="tw-w-6 tw-h-6" />}
                  title={t(
                    "platform.textile-passport.why_dpp.espr_compliance_title",
                  )}
                  variant="horizontal"
                >
                  {t(
                    "platform.textile-passport.why_dpp.espr_compliance_description",
                  )}
                </FeatureCard>
                <FeatureCard
                  icon={<FaChartLine className="tw-w-6 tw-h-6" />}
                  title={t(
                    "platform.textile-passport.why_dpp.supply_chain_transparency_title",
                  )}
                  variant="horizontal"
                >
                  {t(
                    "platform.textile-passport.why_dpp.supply_chain_transparency_description",
                  )}
                </FeatureCard>
                <FeatureCard
                  icon={<FaFileAlt className="tw-w-6 tw-h-6" />}
                  title={t(
                    "platform.textile-passport.why_dpp.data_protection_title",
                  )}
                  variant="horizontal"
                >
                  {t(
                    "platform.textile-passport.why_dpp.data_protection_description",
                  )}
                </FeatureCard>
                <FeatureCard
                  icon={<FaGlobe className="tw-w-6 tw-h-6" />}
                  title={t(
                    "platform.textile-passport.why_dpp.consumer_engagement_title",
                  )}
                  variant="horizontal"
                >
                  {t(
                    "platform.textile-passport.why_dpp.consumer_engagement_description",
                  )}
                </FeatureCard>
              </div>
              <CtaButton href="/contact" variant="primary">
                {t("platform.textile-passport.request_demo_button")}
              </CtaButton>
            </div>
            <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
              <div className="tw-relative tw-h-[350px] md:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <div
                  className="tw-absolute tw-inset-0 tw-bg-white/30  tw-z-10 tw-pointer-events-none"
                  style={{ borderRadius: "1rem" }}
                ></div>
                <Image
                  src="/images/platform/usesafe_men_wear.avif"
                  alt={t("platform.textile-passport.why_dpp_image_alt")}
                  fill
                  className="tw-object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}

      <GradientBackground type="white">
        <SectionHeader
          title={t("platform.textile-passport.how_it_works_title")}
          description={t("platform.textile-passport.how_it_works_description")}
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
              {
                t("platform.dpp-in-espr.our_approach_title").split(
                  "DPP Implementation",
                )[0]
              }{" "}
              <span className="tw-text-primary">
                {t("platform.dpp-in-espr.dpp_implementation")}
              </span>
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

      {/* FAYDALAR SECTION */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <SectionHeader
            title="Benefits of Textile DPP"
            description="Our comprehensive DPP solution offers numerous advantages for textile businesses:"
          />
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FeatureCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title="Regulatory Compliance"
              variant="glass"
            >
              Stay compliant with EU&apos;s Green Deal, ESPR, and Circular
              Economy Action Plan.
            </FeatureCard>
            <FeatureCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Supply Chain Transparency"
              variant="glass"
            >
              Track the origin, journey, and destination of products through the
              entire supply chain.
            </FeatureCard>
            <FeatureCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
              title="Data Security"
              variant="glass"
            >
              Protect sensitive business information while meeting regulatory
              demands.
            </FeatureCard>
            <FeatureCard
              icon={<FaChartLine className="tw-w-8 tw-h-8" />}
              title="Consumer Engagement"
              variant="glass"
            >
              Connect your DPP data to customer platforms to enhance
              transparency and engagement.
            </FeatureCard>
            <FeatureCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title="Sustainability Assessment"
              variant="glass"
            >
              Collect and analyze data to refine sustainability strategies and
              identify improvement areas.
            </FeatureCard>
            <FeatureCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Scalable Platform"
              variant="glass"
            >
              Build a strong foundation for end-to-end supply chain
              traceability.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* TRACE TRUST SECTION */}
      <SectorTabsSection
        mainTitleKey="platform.textile-passport.trace_trust_section.main_title"
        learnMoreButtonKey="platform.textile-passport.trace_trust_section.learn_more_button"
        translationNamespace="platform.textile-passport.trace_trust_section.sector_content"
        sectorsData={textileSectorsData}
        backgroundColor="white"
      />

      <CtaSection
        title="Ready to Implement Digital Product Passports for ESPR Compliance?"
        description="Partner with us to implement your vision of a sustainable, responsible, and circular organization. Our team of experts will guide you through every step of the process."
        primaryCta={{
          text: "Contact Our Team",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Request a Demo",
          href: "https://app.usesafe.net/",
          external: true,
        }}
      />
    </div>
  );
}
