"use client";

import AOS from "aos";
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

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function RegulatoryAuthoritiesGovernmentAgenciesPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  const pageData = {
    // Hero Section
    heroBadge: "Regulatory Authorities & Government Agencies",
    heroTitle: "Streamline Compliance Monitoring with Digital Innovation",
    heroDescription: "Access real-time compliance documentation and reporting. Streamline market surveillance and enforcement activities while aligning with digitalization goals and regulatory innovation.",
    heroImageSrc: "/images/platform/regulatory-authorities-government-agencies-hero.png",
    heroImageAlt: "Regulatory Authorities and Government Agencies",

    // Key Benefits Section
    benefitsTitle: "Why Regulatory Authorities & Government Agencies Choose UseSafe",
    benefitsDescription: "Digital product passports provide regulatory authorities and government agencies with real-time compliance monitoring, streamlined enforcement, and digital transformation capabilities.",
    keyBenefits: [
      {
        icon: <FaDatabase className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Real-time Access",
        description: "Access real-time compliance documentation and reporting to monitor market activities and ensure regulatory adherence.",
        delay: 0,
      },
      {
        icon: <FaEye className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Market Surveillance",
        description: "Streamline market surveillance and enforcement activities with comprehensive digital monitoring tools.",
        delay: 100,
      },
      {
        icon: <FaClipboardCheck className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Digital Innovation",
        description: "Align with digitalization goals and regulatory innovation to modernize compliance processes.",
        delay: 200,
      },
    ],

    // Integration Section
    integrationTitle: "Seamless Government Integration",
    integrationDescription: "Integrate UseSafe compliance monitoring into your existing government systems to enhance regulatory oversight and enforcement capabilities.",
    integrationFeatures: [
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "API Integration",
        description: "Seamlessly integrate compliance APIs into existing government infrastructure and systems",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Monitoring",
        description: "Monitor compliance status in real-time across all regulated products and markets",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Automated Reporting",
        description: "Generate automated compliance reports and analytics for regulatory decision-making",
      },
    ],
    integrationImageSrc: "/images/platform/textile-passport.jpeg",
    integrationImageAlt: "Government Integration",

    // Features Grid
    featuresTitle: "Comprehensive Features for Regulatory Excellence",
    featuresDescription: "Everything you need to enhance compliance monitoring, streamline enforcement, and drive digital transformation in regulatory processes.",
    features: [
      {
        icon: <FaDatabase className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Documentation",
        description: "Access real-time compliance documentation and reporting for immediate regulatory oversight.",
        delay: 0,
      },
      {
        icon: <FaEye className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Market Surveillance",
        description: "Streamline market surveillance and enforcement activities with comprehensive monitoring tools.",
        delay: 100,
      },
      {
        icon: <FaClipboardCheck className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Digital Innovation",
        description: "Align with digitalization goals and regulatory innovation to modernize compliance processes.",
        delay: 200,
      },
      {
        icon: <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Analytics & Reporting",
        description: "Generate comprehensive analytics and reports for data-driven regulatory decision-making.",
        delay: 300,
      },
      {
        icon: <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Stakeholder Collaboration",
        description: "Collaborate with industry stakeholders and other government agencies for coordinated enforcement.",
        delay: 400,
      },
      {
        icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "International Standards",
        description: "Ensure compliance with international regulatory standards and cross-border cooperation.",
        delay: 500,
      },
    ],

    // CTA Section
    ctaTitle: "Ready to Transform Your Regulatory Operations?",
    ctaDescription: "Join leading regulatory authorities and government agencies who trust UseSafe for their compliance monitoring needs. Start streamlining your enforcement activities and driving digital innovation today.",
    ctaPrimaryText: "Get Started Now",
    ctaSecondaryText: "Schedule Demo",
    ctaSecondaryHref: "/demo",
  };

  return <StakeholderPageTemplate {...pageData} />;
}
