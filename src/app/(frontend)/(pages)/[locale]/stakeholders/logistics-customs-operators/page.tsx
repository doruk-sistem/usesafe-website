"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShip,
  FaTruck,
  FaClipboardCheck,
  FaCheckCircle,
  FaHandshake,
  FaEye,
  FaGlobe,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function LogisticsCustomsOperatorsPage() {
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
        badge="Logistics & Customs Operators"
        title="Streamline Customs Clearance with Digital Compliance"
        description="Digitally clear compliance documents and certifications. Identify discrepancies and compliance issues in real-time while prioritizing processing of traceable and certified products."
        imageSrc="/images/platform/logistics-customs-operators-hero.png"
        imageAlt="Logistics and Customs Operators"
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
          title="Why Logistics & Customs Operators Choose UseSafe"
          description="Digital product passports provide logistics operators and customs authorities with streamlined clearance processes, real-time compliance verification, and enhanced operational efficiency."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaClipboardCheck className="tw-w-8 tw-h-8" />}
            title="Digital Clearance"
            delay={0}
          >
            Digitally clear compliance documents and certifications for faster
            processing and reduced paperwork.
          </FeatureCard>

          <FeatureCard
            icon={<FaEye className="tw-w-8 tw-h-8" />}
            title="Real-time Monitoring"
            delay={100}
          >
            Identify discrepancies and compliance issues in real-time to prevent
            delays and ensure smooth operations.
          </FeatureCard>

          <FeatureCard
            icon={<FaShip className="tw-w-8 tw-h-8" />}
            title="Priority Processing"
            delay={200}
          >
            Prioritize processing of traceable and certified products to
            optimize logistics flow and reduce clearance times.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* Logistics Integration */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless Logistics Integration
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                Integrate UseSafe compliance verification into your existing
                logistics and customs systems to streamline operations and
                enhance efficiency.
              </p>

              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Automated Verification
                    </h3>
                    <p className="tw-text-gray-600">
                      Automatically verify compliance documents and
                      certifications during customs clearance processes
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Real-time Alerts
                    </h3>
                    <p className="tw-text-gray-600">
                      Receive real-time alerts for compliance issues and
                      discrepancies to prevent shipment delays
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Priority Queue Management
                    </h3>
                    <p className="tw-text-gray-600">
                      Automatically prioritize certified products in processing
                      queues for faster clearance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/logistics-customs-operators-image.png"
                  alt="Logistics Integration"
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
          title="Comprehensive Features for Logistics Excellence"
          description="Everything you need to streamline customs clearance, enhance compliance verification, and optimize logistics operations."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaClipboardCheck className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Digital Clearance
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Digitally clear compliance documents and certifications for faster
              processing and reduced paperwork.
            </p>
          </div>

          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaEye className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Real-time Monitoring
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Identify discrepancies and compliance issues in real-time to
              prevent delays and ensure smooth operations.
            </p>
          </div>

          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaShip className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Priority Processing
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Prioritize processing of traceable and certified products to
              optimize logistics flow and reduce clearance times.
            </p>
          </div>

          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaTruck className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Supply Chain Visibility
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Gain complete visibility into product origins and compliance
              status throughout the supply chain.
            </p>
          </div>

          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Stakeholder Collaboration
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Collaborate with manufacturers, distributors, and regulatory
              authorities for seamless operations.
            </p>
          </div>

          <div
            className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Global Standards
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Ensure compliance with international customs standards and
              cross-border regulations.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Logistics Operations?"
        description="Join leading logistics operators and customs authorities who trust UseSafe for their compliance verification needs. Start streamlining your customs clearance processes and optimizing logistics flow today."
        primaryCta={{
          text: "Get Started Now",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Contact Us",
          href: "/contact",
        }}
      />
    </div>
  );
}
