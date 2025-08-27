"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaStore,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaShoppingCart,
  FaFileAlt,
  FaCheckCircle,
  FaUsers,
  FaCogs,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function EcommerceSellersDistributorsPage() {
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
        badge="E-commerce Sellers & Distributors"
        title="Boost Your Sales with Trusted Product Compliance"
        description="Demonstrate product compliance to marketplaces and consumers with UseSafe certification. Display verified badges, reduce regulatory risks, and enhance your product credibility across all e-commerce platforms."
        imageSrc="/images/platform/e-commerce-sellers-hero.png"
        imageAlt="E-commerce Sellers and Distributors"
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
          title="Why E-commerce Sellers & Distributors Choose UseSafe"
          description="Digital product passports provide e-commerce sellers and distributors with verified compliance credentials, enhanced marketplace visibility, and reduced regulatory barriers."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaCheckCircle className="tw-w-8 tw-h-8" />}
            title="Verified Compliance"
            delay={0}
          >
            Demonstrate product compliance to marketplaces and regulatory authorities with verified digital product passports and certification badges.
          </FeatureCard>

          <FeatureCard
            icon={<FaSearch className="tw-w-8 tw-h-8" />}
            title="Enhanced Visibility"
            delay={100}
          >
            Display UseSafe badges to enhance product credibility and improve search rankings on major e-commerce platforms.
          </FeatureCard>

          <FeatureCard
            icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
            title="Reduced Risks"
            delay={200}
          >
            Benefit from reduced regulatory risks and market access barriers with comprehensive compliance documentation.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* E-commerce Integration */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless E-commerce Platform Integration
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                Integrate UseSafe certification into your existing e-commerce workflows and marketplace listings without disrupting your sales operations.
              </p>
              
              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Easy Badge Integration
                    </h3>
                    <p className="tw-text-gray-600">
                      Add UseSafe compliance badges to your product listings with simple API integration
                    </p>
                  </div>
                </div>
                
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Automated Compliance Checks
                    </h3>
                    <p className="tw-text-gray-600">
                      Automatically verify product compliance status across multiple marketplaces
                    </p>
                  </div>
                </div>
                
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Consumer Trust Building
                    </h3>
                    <p className="tw-text-gray-600">
                      Build consumer confidence with transparent product compliance information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/sector-retailers_brands.jpg"
                  alt="E-commerce Platform Integration"
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
          title="Comprehensive Features for E-commerce Success"
          description="Everything you need to showcase product compliance, build consumer trust, and expand your market reach across all major e-commerce platforms."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="0">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaStore className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Marketplace Compliance
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Meet marketplace requirements and regulatory standards with verified product compliance documentation.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Trust Badges
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Display UseSafe certification badges to enhance product credibility and consumer confidence.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaSearch className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Enhanced Visibility
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Improve product discoverability and search rankings with compliance-verified listings.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaFileAlt className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Automated Documentation
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Generate and manage compliance documentation automatically for all your product listings.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="400">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Partner Network
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Connect with certified manufacturers and suppliers through the UseSafe partner network.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="500">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Global Market Access
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Access international markets with confidence through standardized compliance credentials.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Boost Your E-commerce Success?"
        description="Join leading e-commerce sellers who trust UseSafe for their product compliance needs. Start building consumer trust and expanding your market reach today."
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
