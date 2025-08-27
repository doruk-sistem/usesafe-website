"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaCheckCircle,
  FaHandshake,
  FaChartLine,
  FaClipboardCheck,
  FaEye,
  FaDatabase,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function RegulatoryAuthoritiesGovernmentAgenciesPage() {
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
        badge="Regulatory Authorities & Government Agencies"
        title="Streamline Compliance Monitoring with Digital Innovation"
        description="Access real-time compliance documentation and reporting. Streamline market surveillance and enforcement activities while aligning with digitalization goals and regulatory innovation."
        imageSrc="/images/platform/regulatory-authorities-government-agencies-hero.png"
        imageAlt="Regulatory Authorities and Government Agencies"
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
          title="Why Regulatory Authorities & Government Agencies Choose UseSafe"
          description="Digital product passports provide regulatory authorities and government agencies with real-time compliance monitoring, streamlined enforcement, and digital transformation capabilities."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaDatabase className="tw-w-8 tw-h-8" />}
            title="Real-time Access"
            delay={0}
          >
            Access real-time compliance documentation and reporting to monitor market activities and ensure regulatory adherence.
          </FeatureCard>

          <FeatureCard
            icon={<FaEye className="tw-w-8 tw-h-8" />}
            title="Market Surveillance"
            delay={100}
          >
            Streamline market surveillance and enforcement activities with comprehensive digital monitoring tools.
          </FeatureCard>

          <FeatureCard
            icon={<FaClipboardCheck className="tw-w-8 tw-h-8" />}
            title="Digital Innovation"
            delay={200}
          >
            Align with digitalization goals and regulatory innovation to modernize compliance processes.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* Government Integration */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless Government Integration
              </h2>
              <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                Integrate UseSafe compliance monitoring into your existing government systems to enhance regulatory oversight and enforcement capabilities.
              </p>

              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      API Integration
                    </h3>
                    <p className="tw-text-gray-600">
                      Seamlessly integrate compliance APIs into existing government infrastructure and systems
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Real-time Monitoring
                    </h3>
                    <p className="tw-text-gray-600">
                      Monitor compliance status in real-time across all regulated products and markets
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Automated Reporting
                    </h3>
                    <p className="tw-text-gray-600">
                      Generate automated compliance reports and analytics for regulatory decision-making
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/textile-passport.jpeg"
                  alt="Government Integration"
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
          title="Comprehensive Features for Regulatory Excellence"
          description="Everything you need to enhance compliance monitoring, streamline enforcement, and drive digital transformation in regulatory processes."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="0">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaDatabase className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Real-time Documentation
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Access real-time compliance documentation and reporting for immediate regulatory oversight.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaEye className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Market Surveillance
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Streamline market surveillance and enforcement activities with comprehensive monitoring tools.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaClipboardCheck className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Digital Innovation
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Align with digitalization goals and regulatory innovation to modernize compliance processes.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Analytics & Reporting
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Generate comprehensive analytics and reports for data-driven regulatory decision-making.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="400">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Stakeholder Collaboration
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Collaborate with industry stakeholders and other government agencies for coordinated enforcement.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="500">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              International Standards
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Ensure compliance with international regulatory standards and cross-border cooperation.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Regulatory Operations?"
        description="Join leading regulatory authorities and government agencies who trust UseSafe for their compliance monitoring needs. Start streamlining your enforcement activities and driving digital innovation today."
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
