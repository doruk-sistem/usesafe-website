"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaIndustry,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaRecycle,
  FaFileAlt,
  FaCheckCircle,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
  KeyBenefitsSection,
} from "@/components/Platform";

export default function ManufacturersBrandOwnersPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  const keyBenefits = [
    {
      icon: <FaShieldAlt className="tw-w-8 tw-h-8" />,
      title: "Regulatory Compliance",
      description: "Ensure full compliance with ESPR, textile regulations, and other industry standards. Stay ahead of evolving requirements with automated compliance management.",
      delay: 0,
    },
    {
      icon: <FaChartLine className="tw-w-8 tw-h-8" />,
      title: "Brand Protection",
      description: "Protect your brand integrity with verifiable product authenticity. Build consumer trust through transparent supply chain information.",
      delay: 100,
    },
    {
      icon: <FaGlobe className="tw-w-8 tw-h-8" />,
      title: "Global Market Access",
      description: "Expand your market reach with products that meet international standards. Access new markets with confidence through digital compliance.",
      delay: 200,
    },
  ];

  return (
    <div className="tw-w-full">
      {/* Hero Section */}
      <HeroSection
        badge="Manufacturers & Brand Owners"
        title="Empower Your Products with Digital Product Passports"
        description="Transform your manufacturing processes and enhance brand trust with comprehensive digital product passports. Ensure compliance, transparency, and traceability across your entire supply chain."
        imageSrc="/images/platform/manufacturers-brand-owners-hero.png"
        imageAlt="Manufacturers and Brand Owners"
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
      <KeyBenefitsSection
        title="Why Manufacturers & Brand Owners Choose UseSafe"
        description="Digital product passports provide manufacturers and brand owners with unprecedented control, transparency, and competitive advantages in today's regulated market."
        benefits={keyBenefits}
        gradientType="white"
      />

      {/* Manufacturing Process Integration */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless Integration with Your Manufacturing Process
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                Integrate digital product passports into your existing manufacturing workflow without disrupting production efficiency.
              </p>

              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Easy Implementation
                    </h3>
                    <p className="tw-text-gray-600">
                      Quick setup with minimal disruption to your existing processes
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Real-time Data Capture
                    </h3>
                    <p className="tw-text-gray-600">
                      Automatically capture product data throughout the manufacturing process
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Quality Assurance
                    </h3>
                    <p className="tw-text-gray-600">
                      Maintain product quality standards with comprehensive tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/logistics-customs-operators-image.png"
                  alt="Manufacturing Process Integration"
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
          title="Comprehensive Features for Manufacturers"
          description="Everything you need to create, manage, and maintain digital product passports for your entire product portfolio."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaIndustry className="tw-w-8 tw-h-8" />}
            title="Production Tracking"
            delay={0}
          >
            Track every step of your production process with detailed digital records and real-time monitoring.
          </FeatureCard>

          <FeatureCard
            icon={<FaUsers className="tw-w-8 tw-h-8" />}
            title="Supplier Management"
            delay={100}
          >
            Manage your supplier network with comprehensive tracking and verification of all materials and components.
          </FeatureCard>

          <FeatureCard
            icon={<FaRecycle className="tw-w-8 tw-h-8" />}
            title="Sustainability Tracking"
            delay={200}
          >
            Monitor and report on sustainability metrics throughout your supply chain and production process.
          </FeatureCard>

          <FeatureCard
            icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
            title="Automated Documentation"
            delay={300}
          >
            Generate comprehensive product documentation automatically with all required compliance information.
          </FeatureCard>

          <FeatureCard
            icon={<FaCogs className="tw-w-8 tw-h-8" />}
            title="Process Optimization"
            delay={400}
          >
            Optimize your manufacturing processes with data-driven insights and performance analytics.
          </FeatureCard>

          <FeatureCard
            icon={<FaGlobe className="tw-w-8 tw-h-8" />}
            title="Global Standards"
            delay={500}
          >
            Meet international standards and regulations with built-in compliance frameworks and updates.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Manufacturing Process?"
        description="Join leading manufacturers who trust UseSafe for their digital product passport needs. Start your journey towards compliance and transparency today."
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
