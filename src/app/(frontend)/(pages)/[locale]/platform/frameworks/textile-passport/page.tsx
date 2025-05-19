"use client";

import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaRecycle,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

import FadeInCard from "@/components/Card/FadeInCard";
import { CtaButton, FeatureCard, GradientBackground, SectionHeader } from "@/components/Platform";

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

  return (
    <div className="tw-w-full">
      {/* HERO SECTION */}
      <section className="tw-relative tw-overflow-hidden tw-py-24 md:tw-py-32 tw-bg-gradient-to-br tw-from-[#1e3c72] tw-via-[#2a5298] tw-to-[#6dd5ed] tw-text-white">
        {/* Animated SVG Background */}
        <svg
          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-z-0"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.18 }}
        >
          <path
            fill="url(#gradient1)"
            d="M0,64L60,69.3C120,75,240,85,360,112C480,139,600,181,720,181.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <defs>
            <linearGradient
              id="gradient1"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="#6dd5ed" />
              <stop offset="100%" stopColor="#1e3c72" />
            </linearGradient>
          </defs>
        </svg>
        {/* Background Elements */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-opacity-10 tw-pointer-events-none">
          <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary tw-opacity-20 tw-blur-3xl"></div>
          <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-blue-400 tw-opacity-20 tw-blur-3xl"></div>
        </div>
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1 tw-max-w-2xl">
              <div className="tw-inline-block tw-px-6 tw-py-2 tw-rounded-full tw-bg-white/20 tw-backdrop-blur-md tw-text-white tw-font-semibold tw-text-base tw-mb-8 tw-shadow-lg tw-border tw-border-white/30 tw-uppercase tw-tracking-wider">
                <span style={{ letterSpacing: "0.08em" }}>
                  Digital Product Passport in Textile
                </span>
              </div>
              <h1 className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-white tw-mb-6 tw-leading-tight">
                Transforming Textile Industry with Digital Product Passports
              </h1>
              <p className="tw-text-xl tw-text-white tw-mb-10 tw-leading-relaxed">
                Enhance transparency, traceability, and sustainability in the textile sector with Digital Product Passports. Comply with EU regulations and empower your supply chain with verifiable lifecycle data for every garment and textile product.
              </p>
              <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-5">
                <Link
                  href="/contact"
                  className="tw-group tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-4 tw-px-10 tw-rounded-xl tw-shadow-2xl tw-border-2 tw-border-white/30 hover:tw-shadow-3xl hover:tw-border-[#43cea2] tw-transition-all tw-flex tw-items-center tw-justify-center tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300"
                >
                  <span>{t("common.contact_us")}</span>
                  <BsArrowRight className="tw-ml-2 tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" />
                </Link>
                <Link
                  href="https://app.usesafe.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-bg-white/80 tw-text-primary tw-border-2 tw-border-primary tw-font-semibold tw-py-4 tw-px-10 tw-rounded-xl tw-shadow-lg hover:tw-shadow-2xl hover:tw-bg-blue-100/60 tw-transition-all tw-flex tw-items-center tw-justify-center hover:tw-scale-105 tw-duration-300"
                >
                  {t("common.try_for_free")}
                </Link>
              </div>
            </div>
            <div className="tw-flex-1 tw-flex tw-justify-center tw-items-center">
              <Image
                src="/images/platform/textile-passport.jpeg"
                alt="Digital Product Passport in Textile"
                width={500}
                height={500}
                className="tw-rounded-3xl tw-shadow-xl"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DPP NEDİR? */}
      <section className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-max-w-3xl tw-mx-auto tw-mb-16">
            <div className="tw-flex tw-justify-center tw-mb-6">
              <div className="tw-h-1 tw-w-24 tw-bg-primary tw-rounded-full"></div>
            </div>
            <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-text-center">
              What is a Digital Product Passport?
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-leading-relaxed">
              The Digital Product Passport (DPP) is a dynamic digital record that stores and communicates essential information about a textile product throughout its entire lifecycle. It provides detailed data on materials, chemicals, processes, and environmental impact—empowering brands, consumers, and regulators to make responsible and informed decisions.
            </p>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FadeInCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title="Transparency & Trust"
            >
              Verified product data including material composition, carbon footprint, repair history, and recycling information—enabling trust and informed choices.
            </FadeInCard>
            <FadeInCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title="Circularity"
            >
              DPP enables repair, reuse, and recycling, supporting the transition to a more sustainable and circular textile economy.
            </FadeInCard>
            <FadeInCard
              icon={<FaChartLine className="tw-w-8 tw-h-8" />}
              title="Competitive Advantage"
            >
              Sustainable production and transparent data help brands stand out and build loyalty with environmentally conscious consumers.
            </FadeInCard>
          </div>
        </div>
      </section>

      {/* NEDEN TEKSTİLDE DPP? */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1 tw-max-w-2xl">
              <div className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-sm tw-mb-6">
                Why DPP for Textile?
              </div>
              <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-leading-tight">
                Unlocking Circularity, Compliance, and Innovation
              </h2>
              <p className="tw-text-xl tw-text-gray-700 tw-mb-8 tw-leading-relaxed">
                The EU's DPP initiative is a cornerstone of the Ecodesign for Sustainable Products Regulation (ESPR), aiming to make the textile industry more sustainable and transparent. DPPs provide detailed information about a product’s lifecycle, materials, and environmental impact, helping brands and consumers make responsible choices and comply with global standards.
              </p>
              <div className="tw-space-y-6 tw-mb-10">
                <div className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d]">
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaShieldAlt className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">ESPR Compliance</div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">Meet the EU's Ecodesign for Sustainable Products Regulation and future-proof your business.</div>
                  </div>
                </div>
                <div className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d]">
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaChartLine className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">Supply Chain Transparency</div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">Track the origin, journey, and destination of products through the supply chain, maintaining detailed records for compliance and sustainability.</div>
                  </div>
                </div>
                <div className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d]">
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaFileAlt className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">Sensitive Data Protection</div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">Protect sensitive business information while meeting regulatory requirements with secure data-sharing tools.</div>
                  </div>
                </div>
                <div className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d]">
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaGlobe className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">Consumer Engagement</div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">Connect your DPP data directly to customer-facing platforms to enhance transparency and engagement throughout the product lifecycle.</div>
                  </div>
                </div>
              </div>
              <Link
                href="/demo"
                className="tw-inline-flex tw-items-center tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-3 tw-px-8 tw-rounded-xl tw-shadow-xl tw-border-2 tw-border-white/30 hover:tw-shadow-2xl hover:tw-border-[#43cea2] tw-transition-all tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300"
              >
                <span>Request a Demo</span>
                <BsArrowRight className="tw-ml-2" />
              </Link>
            </div>
            <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
              <div className="tw-relative tw-h-[350px] md:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                <div className="tw-absolute tw-inset-0 tw-bg-white/30  tw-z-10 tw-pointer-events-none" style={{ borderRadius: "1rem" }}></div>
                <Image
                  src="/images/platform/usesafe_men_wear.avif"
                  alt="Textile DPP Benefits"
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
          title="How Does a Textile DPP Work?"
          description="DPP collects, stores, and shares data at every stage of a textile product’s lifecycle—design, production, distribution, use, and recycling. Blockchain or decentralized technologies ensure data integrity and accessibility for all stakeholders."
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

      {/* FAYDALAR SECTION */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-max-w-3xl tw-mx-auto tw-mb-16">
            <div className="tw-flex tw-justify-center tw-mb-6">
              <div className="tw-h-1 tw-w-24 tw-bg-primary tw-rounded-full"></div>
            </div>
            <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-text-center">Benefits of Textile DPP</h2>
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-leading-relaxed">
              Our comprehensive DPP solution offers numerous advantages for textile businesses:
            </p>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FadeInCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title="Regulatory Compliance"
            >
              Stay compliant with EU’s Green Deal, ESPR, and Circular Economy Action Plan.
            </FadeInCard>
            <FadeInCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Supply Chain Transparency"
            >
              Track the origin, journey, and destination of products through the entire supply chain.
            </FadeInCard>
            <FadeInCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
              title="Data Security"
            >
              Protect sensitive business information while meeting regulatory demands.
            </FadeInCard>
            <FadeInCard
              icon={<FaChartLine className="tw-w-8 tw-h-8" />}
              title="Consumer Engagement"
            >
              Connect your DPP data to customer platforms to enhance transparency and engagement.
            </FadeInCard>
            <FadeInCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title="Sustainability Assessment"
            >
              Collect and analyze data to refine sustainability strategies and identify improvement areas.
            </FadeInCard>
            <FadeInCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Scalable Platform"
            >
              Build a strong foundation for end-to-end supply chain traceability.
            </FadeInCard>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="tw-relative tw-py-24 tw-overflow-hidden">
        <div className="tw-absolute tw-inset-0 tw-bg-primary"></div>
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-primary tw-to-blue-700 tw-opacity-90"></div>
        {/* Background Elements */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-opacity-10 tw-pointer-events-none">
          <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
          <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
        </div>
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-8 tw-text-white">
              Ready to Implement Digital Product Passports for ESPR Compliance?
            </h2>
            <p className="tw-text-xl tw-mb-10 tw-text-white/90 tw-leading-relaxed">
              Partner with us to implement your vision of a sustainable, responsible, and circular organization. Our team of experts will guide you through every step of the process.
            </p>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-gap-6">
              <Link
                href="/contact"
                className="tw-group tw-bg-white tw-text-primary tw-font-medium tw-py-4 tw-px-8 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-flex tw-items-center tw-justify-center"
              >
                <span>Contact Our Team</span>
                <BsArrowRight className="tw-ml-2 tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" />
              </Link>
              <Link
                href="https://app.usesafe.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-group tw-bg-transparent tw-text-white tw-border-2 tw-border-white tw-font-medium tw-py-4 tw-px-8 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl hover:tw-bg-white/10 tw-transition-all tw-flex tw-items-center tw-justify-center"
              >
                <span>Request a Demo</span>
                <BsArrowRight className="tw-ml-2 tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
