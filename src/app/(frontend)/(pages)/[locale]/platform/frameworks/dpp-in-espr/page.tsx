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
                  European Sustainability Products Regulation
                </span>
              </div>
              <h1 className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-white tw-mb-6 tw-leading-tight">
                Digital Product Passports for ESPR Compliance
              </h1>
              <p className="tw-text-xl tw-text-white tw-mb-10 tw-leading-relaxed">
                Unlock sustainability and compliance with verifiable supply
                chain data through our <b>UseSAFE platform</b>, a comprehensive
                DPP solution tailored for the European market.
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
            <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
              <div className="tw-relative tw-h-[350px] md:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
                {/* Frosted glass overlay */}
                <div
                  className="tw-absolute tw-inset-0 tw-bg-white/30  tw-z-10 tw-pointer-events-none"
                  style={{ borderRadius: "1rem" }}
                ></div>
                <Image
                  src="/images/digital-product-passport-usesafe.png"
                  alt="Digital Product Passport"
                  fill
                  className="tw-object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is DPP Section */}
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
              The Digital Product Passport (DPP) is an innovative system
              developed in line with the European Union&apos;s sustainability
              and circular economy goals, enabling the digital recording,
              tracking, and sharing of all information about products throughout
              their lifecycle. These processes can be managed easily with our{" "}
              <a
                href="https://app.usesafe.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-underline hover:tw-text-primary"
              >
                UseSAFE platform
              </a>
              .
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FadeInCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title="Transparency and Trust"
              delay={0}
            >
              Product data including carbon footprint, material composition,
              repair history, and recycling information is presented from
              verified sources, giving consumers clear insights into the
              environmental and technical characteristics of products.
            </FadeInCard>

            <FadeInCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title="Circular Economy"
              delay={100}
            >
              DPP promotes extending product life, repairability, and reuse,
              contributing to waste reduction and supporting the transition to a
              more sustainable and circular economy model.
            </FadeInCard>

            <div
              className="tw-group tw-bg-white/60 tw-backdrop-blur-lg tw-border-2 tw-border-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-p-8 tw-rounded-3xl tw-shadow-2xl tw-transition-all hover:tw-shadow-3xl hover:tw-border-[#43cea2] hover:tw-translate-y-[-8px] tw-transform hover:tw-scale-[1.03] tw-duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="tw-bg-gradient-to-br tw-from-[#43cea2]/30 tw-to-[#6dd5ed]/40 tw-p-4 tw-rounded-xl tw-inline-flex tw-mb-6 tw-text-primary tw-group-hover:tw-bg-primary/10 tw-transition-colors">
                <FaChartLine className="tw-w-8 tw-h-8" />
              </div>
              <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-gray-900 tw-drop-shadow-sm">
                Competitive Advantage
              </h3>
              <p className="tw-text-gray-700 tw-leading-relaxed">
                Adopting sustainable production and design practices helps
                businesses differentiate themselves in the market and build
                stronger relationships with environmentally conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPR Compliance Section */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
            <div className="tw-flex-1 tw-max-w-2xl">
              <div className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-sm tw-mb-6">
                Regulatory Compliance
              </div>
              <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-leading-tight">
                ESPR Compliance{" "}
                <span className="tw-text-primary">Made Simple</span>
              </h2>
              <p className="tw-text-xl tw-text-gray-700 tw-mb-8 tw-leading-relaxed">
                Our DPP solution reduces up to 80% of the administrative effort
                for ESPR compliance, accelerating market access. Our integrated
                platform ensures alignment with overlapping regulatory
                standards, reducing duplicated efforts.
              </p>

              <div className="tw-space-y-6 tw-mb-10">
                {/* Kartlara fade-up animasyonu */}
                {/* Card 1 */}
                <div
                  className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d] tw-transition-all hover:tw-scale-[1.03] hover:tw-shadow-2xl tw-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaShieldAlt className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">
                      Comprehensive Compliance
                    </div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">
                      with EU&apos;s Ecodesign for Sustainable Products
                      Regulation
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div
                  className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d] tw-transition-all hover:tw-scale-[1.03] hover:tw-shadow-2xl tw-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaChartLine className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">
                      Streamlined Data Collection
                    </div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">
                      across your entire supply chain
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div
                  className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d] tw-transition-all hover:tw-scale-[1.03] hover:tw-shadow-2xl tw-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaFileAlt className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">
                      Sensitive Data Protection
                    </div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">
                      while meeting regulatory requirements
                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div
                  className="tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d] tw-transition-all hover:tw-scale-[1.03] hover:tw-shadow-2xl tw-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center">
                    <FaGlobe className="tw-text-white tw-w-6 tw-h-6 tw-drop-shadow" />
                  </div>
                  <div>
                    <div className="tw-font-bold tw-text-lg tw-text-gray-900">
                      Transparency & Engagement
                    </div>
                    <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">
                      for enhanced product transparency and consumer engagement
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/demo"
                className="tw-inline-flex tw-items-center tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-3 tw-px-8 tw-rounded-xl tw-shadow-xl tw-border-2 tw-border-white/30 hover:tw-shadow-2xl hover:tw-border-[#43cea2] tw-transition-all tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300"
              >
                <span>Get Started</span>
                <BsArrowRight className="tw-ml-2" />
              </Link>
            </div>
            <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
              <div className="tw-relative tw-h-[400px] md:tw-h-[500px] tw-w-full">
                <Image
                  src="/images/dpp-usesafe.png"
                  alt="Usesafe product for DPP in ESPR Compliance"
                  fill
                  className="tw-object-contain"
                />
                {/* <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-black/20 tw-to-transparent"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-max-w-3xl tw-mx-auto tw-mb-16">
            <div className="tw-flex tw-justify-center tw-mb-6">
              <div className="tw-h-1 tw-w-24 tw-bg-primary tw-rounded-full"></div>
            </div>
            <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-text-center">
              How Digital Product Passports Work
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-leading-relaxed">
              DPP operates by storing data collected at each stage of a product
              on a decentralized, transparent, and reliable infrastructure.
              Thanks to the immutability and distributed structure provided by
              blockchain technology:
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-12 tw-mt-12">
            <FadeInCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
              title="Data Accuracy"
              delay={200}
              cardStyle="white"
            >
              Information about the product (e.g., production date, materials
              used, energy consumption) is recorded and verified at each stage,
              ensuring complete traceability throughout the supply chain.
            </FadeInCard>

            <FadeInCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Accessibility"
              delay={300}
              cardStyle="white"
            >
              Consumers, retailers, manufacturers, and regulatory bodies can
              easily access information about the product&apos;s history, creating
              transparency across the entire value chain.
            </FadeInCard>
          </div>

          <div className="tw-mt-20 tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-50 tw-p-12 tw-rounded-2xl tw-shadow-xl tw-border tw-border-white/80">
            <div className="tw-max-w-3xl tw-mx-auto">
              <h3 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-text-center">
                Our Approach to{" "}
                <span className="tw-text-primary">DPP Implementation</span>
              </h3>
              <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-mb-10 tw-leading-relaxed">
                As <b>Dorukwell</b>, we offer specialized consulting and
                technology solutions for digital product passport applications.
                Whether it&apos;s data integration in the production process,
                supply chain traceability, or certification processes, we
                support our customers in meeting regulations and achieving
                sustainability goals.
              </p>
              <div className="tw-flex tw-justify-center">
                <Link
                  href="https://www.dorukwell.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-group tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-4 tw-px-10 tw-rounded-xl tw-shadow-2xl tw-border-2 tw-border-white/30 hover:tw-shadow-3xl hover:tw-border-[#43cea2] tw-transition-all tw-flex tw-items-center tw-justify-center tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300"
                >
                  <span>Get Free Consultation</span>
                  <BsArrowRight className="tw-ml-2 tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="tw-py-24 tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50">
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          <div className="tw-max-w-3xl tw-mx-auto tw-mb-16">
            <div className="tw-flex tw-justify-center tw-mb-6">
              <div className="tw-h-1 tw-w-24 tw-bg-primary tw-rounded-full"></div>
            </div>
            <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-text-center">
              Benefits of Our{" "}
              <span className="tw-text-primary">DPP Solution</span>
            </h2>
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-leading-relaxed">
              Our comprehensive DPP solution offers numerous advantages for
              businesses looking to comply with ESPR regulations while enhancing
              their sustainability profile.
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
            <FadeInCard
              icon={<FaShieldAlt className="tw-w-8 tw-h-8" />}
              title="Regulatory Compliance"
              delay={0}
              cardStyle="glass"
            >
              Stay compliant with EU&apos;s Green Deal, Ecodesign, and Circular
              Economy Action Plan, preparing your business for current and
              future legal requirements.
            </FadeInCard>

            <FadeInCard
              icon={
                <FaGlobe className="tw-w-8 tw-h-8" />
              }
              title="Supply Chain Transparency"
              delay={100}
              cardStyle="glass"
            >
              Track the origin, journey, and destination of products through the
              entire supply chain, maintaining detailed records that meet
              ESPR&apos;s transparency requirements.
            </FadeInCard>

            <FadeInCard
              icon={<FaFileAlt className="tw-w-8 tw-h-8" />}
              title="Data Security"
              delay={200}
              cardStyle="glass"
            >
              Protect sensitive business information while meeting regulatory
              demands with our secure data-sharing tools that allow selective
              disclosure of compliance information.
            </FadeInCard>

            <FadeInCard
              icon={<FaChartLine className="tw-w-8 tw-h-8" />}
              title="Consumer Engagement"
              delay={300}
              cardStyle="glass"
            >
              Connect your DPP data directly to customer-facing platforms to
              enhance transparency and engagement throughout the product
              lifecycle.
            </FadeInCard>

            <FadeInCard
              icon={<FaRecycle className="tw-w-8 tw-h-8" />}
              title="Sustainability Assessment"
              delay={400}
              cardStyle="glass"
            >
              Collect detailed documentation and product data across your supply
              chain to refine sustainability assessments and identify impact
              opportunities.
            </FadeInCard>

            <FadeInCard
              icon={<FaGlobe className="tw-w-8 tw-h-8" />}
              title="Scalable Platform"
              delay={500}
              cardStyle="glass"
            >
              Build a strong foundation for end-to-end supply chain traceability
              with our scalable platform designed to grow with your business.
            </FadeInCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Partner with us to implement your vision of a sustainable,
              responsible, and circular organization. Our team of experts will
              guide you through every step of the process.
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
