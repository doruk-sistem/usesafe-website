"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaCheckCircle,
  FaSearch,
  FaHandshake,
  FaCogs,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function MarketplacesRetailersPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="tw-w-full">
      {/* Hero Section */}
      <HeroSection
        badge="Marketplaces & Retailers"
        title="Elevate Your Platform with Trusted Product Compliance"
        description="Automate product vetting and compliance verification processes. Elevate certified products in search results and collaborate on compliance programs with trusted certification partners."
        imageSrc="/images/platform/marketplaces-retailers-hero.png"
        imageAlt="Marketplaces and Retailers"
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
      <GradientBackground type="white">
        <SectionHeader
          title="Why Marketplaces & Retailers Choose UseSafe"
          description="Digital product passports provide marketplaces and retailers with automated compliance verification, enhanced product curation, and trusted certification partnerships."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaCogs className="tw-w-8 tw-h-8" />}
            title="Automated Vetting"
            delay={0}
          >
            Automate product vetting and compliance verification processes to ensure only certified products reach your customers.
          </FeatureCard>

          <FeatureCard
            icon={<FaSearch className="tw-w-8 tw-h-8" />}
            title="Elevated Visibility"
            delay={100}
          >
            Elevate certified products in search results and recommendations to boost customer trust and sales.
          </FeatureCard>

          <FeatureCard
            icon={<FaHandshake className="tw-w-8 tw-h-8" />}
            title="Trusted Partnerships"
            delay={200}
          >
            Collaborate on compliance programs with trusted certification partners to maintain platform integrity.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* Platform Integration */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless Platform Integration
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                Integrate UseSafe compliance verification into your existing marketplace infrastructure to enhance product quality and customer trust.
              </p>

              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      API Integration
                    </h3>
                    <p className="tw-text-gray-600">
                      Seamlessly integrate compliance verification APIs into your existing platform infrastructure
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Real-time Verification
                    </h3>
                    <p className="tw-text-gray-600">
                      Verify product compliance in real-time as products are listed on your platform
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Automated Filtering
                    </h3>
                    <p className="tw-text-gray-600">
                      Automatically filter and prioritize certified products in search and recommendation algorithms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/usesafe_men_wear.avif"
                  alt="Platform Integration"
                  fill
                  className="tw-object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <GradientBackground type="white">
        <SectionHeader
          title="Comprehensive Features for Marketplace Success"
          description="Everything you need to automate compliance verification, enhance product curation, and build customer trust across your marketplace platform."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="0">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaCogs className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Automated Verification
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Automate product vetting and compliance verification processes to ensure platform quality.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaSearch className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Smart Curation
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Elevate certified products in search results and recommendations to boost customer trust.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Partner Collaboration
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Collaborate on compliance programs with trusted certification partners and manufacturers.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Performance Analytics
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Track compliance metrics and performance analytics to optimize your marketplace operations.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="400">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaUsers className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Customer Trust
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Build customer confidence with transparent compliance information and verified product badges.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="500">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Global Standards
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Meet international compliance standards and regulatory requirements across all markets.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Marketplace?"
        description="Join leading marketplaces and retailers who trust UseSafe for their compliance verification needs. Start automating your product vetting and building customer trust today."
        primaryCta={{
          text: "Get Started Now",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Schedule Demo",
          href: "/demo",
        }}
      />
    </div>
  );
}
