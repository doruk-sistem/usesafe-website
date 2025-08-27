"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
  FaGlobe,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

import {
  SectionHeader,
  GradientBackground,
  FeatureCard,
  HeroSection,
  CtaSection,
} from "@/components/Platform";

export default function EndConsumersPage() {
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
        badge="End Consumers"
        title="Make Informed and Sustainable Purchasing Decisions"
        description="Verify product compliance and safety before purchase. Access comprehensive lifecycle data and sustainability information to make informed and sustainable purchasing decisions."
        imageSrc="/images/platform/end-consumers-hero.png"
        imageAlt="End Consumers"
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
          title="Why End Consumers Choose UseSafe"
          description="Digital product passports provide consumers with transparent access to product compliance, safety information, and sustainability data to make informed purchasing decisions."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <FeatureCard
            icon={<FaCheckCircle className="tw-w-8 tw-h-8" />}
            title="Product Verification"
            delay={0}
          >
                           Verify product compliance and safety before purchase to ensure you&apos;re buying certified and safe products.
          </FeatureCard>

          <FeatureCard
            icon={<FaLeaf className="tw-w-8 tw-h-8" />}
            title="Sustainability Data"
            delay={100}
          >
            Access comprehensive lifecycle data and sustainability information to make environmentally conscious choices.
          </FeatureCard>

          <FeatureCard
            icon={<FaShoppingCart className="tw-w-8 tw-h-8" />}
            title="Informed Decisions"
            delay={200}
          >
            Make informed and sustainable purchasing decisions based on transparent product information and certifications.
          </FeatureCard>
        </div>
      </GradientBackground>

      {/* Consumer Experience */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-green-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1" data-aos="fade-right">
              <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
                Seamless Consumer Experience
              </h2>
                             <p className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                 Access UseSafe product information through QR codes, web platforms, and online tools to make confident purchasing decisions.
               </p>

              <div className="tw-space-y-6">
                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      QR Code Scanning
                    </h3>
                    <p className="tw-text-gray-600">
                      Simply scan QR codes on products to instantly access compliance and sustainability information
                    </p>
                  </div>
                </div>

                                 <div className="tw-flex tw-items-start tw-space-x-4">
                   <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                   <div>
                     <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                       Web Platform Access
                     </h3>
                     <p className="tw-text-gray-600">
                       Access product information through our user-friendly web platform from any device
                     </p>
                   </div>
                 </div>

                <div className="tw-flex tw-items-start tw-space-x-4">
                  <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary tw-mt-1 tw-flex-shrink-0" />
                  <div>
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-2">
                      Real-time Updates
                    </h3>
                    <p className="tw-text-gray-600">
                      Get real-time updates on product compliance status and sustainability certifications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex-1" data-aos="fade-left">
              <div className="tw-relative tw-h-[400px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <Image
                  src="/images/platform/sector-consumers.jpg"
                  alt="Consumer Experience"
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
          title="Comprehensive Features for Informed Consumers"
          description="Everything you need to verify product compliance, access sustainability data, and make informed purchasing decisions."
        />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="0">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Product Verification
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Verify product compliance and safety before purchase to ensure you&apos;re buying certified and safe products.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaLeaf className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Sustainability Data
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Access comprehensive lifecycle data and sustainability information to make environmentally conscious choices.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaShoppingCart className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Informed Decisions
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Make informed and sustainable purchasing decisions based on transparent product information and certifications.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaShieldAlt className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Safety Assurance
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Ensure product safety and compliance with international standards and regulations.
            </p>
          </div>

          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-lg tw-border tw-border-gray-100" data-aos="fade-up" data-aos-delay="400">
            <div className="tw-w-12 tw-h-12 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6">
              <FaHeart className="tw-w-6 tw-h-6 tw-text-primary" />
            </div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
              Trust & Transparency
            </h3>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              Build trust through transparent access to product origins, manufacturing processes, and compliance data.
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
              Access products that meet international compliance standards and sustainability certifications.
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Make Informed Purchasing Decisions?"
        description="Join millions of consumers who trust UseSafe for product verification and sustainability information. Start making informed and sustainable purchasing decisions today."
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
