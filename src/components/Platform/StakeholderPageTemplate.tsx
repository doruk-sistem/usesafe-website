import Image from "next/image";
import React from "react";

import { HeroSection, CtaSection } from "@/components/Platform";

export interface StakeholderBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface StakeholderFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface IntegrationFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StakeholderPageTemplateProps {
  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;

  // Key Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  keyBenefits: StakeholderBenefit[];

  // Integration Section (Optional)
  integrationTitle?: string;
  integrationDescription?: string;
  integrationFeatures?: IntegrationFeature[];
  integrationImageSrc?: string;
  integrationImageAlt?: string;

  // Features Grid (Optional)
  featuresTitle?: string;
  featuresDescription?: string;
  features?: StakeholderFeature[];

  // CTA Section (Optional)
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

const StakeholderPageTemplate: React.FC<StakeholderPageTemplateProps> = ({
  heroBadge,
  heroTitle,
  heroDescription,
  heroImageSrc,
  heroImageAlt,
  benefitsTitle,
  benefitsDescription,
  keyBenefits,
  integrationTitle,
  integrationDescription,
  integrationFeatures,
  integrationImageSrc,
  integrationImageAlt,
  featuresTitle,
  featuresDescription,
  features,
  ctaTitle,
  ctaDescription,
  ctaPrimaryText,
  ctaSecondaryText,
  ctaSecondaryHref,
}) => {
  return (
    <div className="tw-w-full">
      {/* Hero Section */}
      <HeroSection
        badge={heroBadge}
        title={heroTitle}
        description={heroDescription}
        imageSrc={heroImageSrc}
        imageAlt={heroImageAlt}
        primaryCta={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Try for Free",
          href: "https://app.usesafe.net/",
          external: true,
        }}
        className="tw-py-24 md:tw-py-32"
      />

      {/* Key Benefits Section */}
      <div className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
              {benefitsTitle}
            </h2>
            <p className="tw-text-xl tw-text-gray-600 tw-max-w-5xl tw-mx-auto tw-leading-relaxed">
              {benefitsDescription}
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mt-16 tw-max-w-5xl tw-mx-auto">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="tw-bg-white tw-py-6 tw-px-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100 tw-max-w-3xl"
                data-aos="fade-up"
                data-aos-delay={benefit.delay || index * 100}
              >
                <div className="tw-w-16 tw-h-16 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4 tw-mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3 tw-text-center">
                  {benefit.title}
                </h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      {integrationTitle &&
        integrationDescription &&
        integrationFeatures &&
        integrationImageSrc &&
        integrationImageAlt && (
          <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
            <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
                <div className="tw-flex-1" data-aos="fade-right">
                  <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                    {integrationTitle}
                  </h2>
                  <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                    {integrationDescription}
                  </p>

                  <div className="tw-space-y-6">
                    {integrationFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="tw-flex tw-items-start tw-space-x-4"
                      >
                        <div className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                            {feature.title}
                          </h3>
                          <p className="tw-text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tw-flex-1" data-aos="fade-left">
                  <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                    <Image
                      src={integrationImageSrc}
                      alt={integrationImageAlt}
                      fill
                      className="tw-object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* Features Grid */}
      {featuresTitle && featuresDescription && features && (
        <div className="tw-py-24 tw-bg-white">
          <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
            <div className="tw-text-center tw-mb-16">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                {featuresTitle}
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                {featuresDescription}
              </p>
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={feature.delay || index * 100}
                >
                  <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
                    {feature.title}
                  </h3>
                  <p className="tw-text-gray-600 tw-leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      {ctaTitle &&
        ctaDescription &&
        ctaPrimaryText &&
        ctaSecondaryText &&
        ctaSecondaryHref && (
          <CtaSection
            title={ctaTitle}
            description={ctaDescription}
            primaryCta={{
              text: ctaPrimaryText,
              href: "/contact",
            }}
            secondaryCta={{
              text: ctaSecondaryText,
              href: ctaSecondaryHref,
            }}
          />
        )}
    </div>
  );
};

export default StakeholderPageTemplate;
