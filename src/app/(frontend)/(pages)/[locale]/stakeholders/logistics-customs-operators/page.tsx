"use client";

import AOS from "aos";
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

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function LogisticsCustomsOperatorsPage() {
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
    heroBadge: "Logistics & Customs Operators",
    heroTitle: "Streamline Customs Clearance with Digital Compliance",
    heroDescription:
      "Digitally clear compliance documents and certifications. Identify discrepancies and compliance issues in real-time while prioritizing processing of traceable and certified products.",
    heroImageSrc: "/images/platform/logistics-customs-operators-hero.png",
    heroImageAlt: "Logistics and Customs Operators",

    // Key Benefits Section
    benefitsTitle: "Why Logistics & Customs Operators Choose UseSafe",
    benefitsDescription:
      "Digital product passports provide logistics operators and customs authorities with streamlined clearance processes, real-time compliance verification, and enhanced operational efficiency.",
    keyBenefits: [
      {
        icon: <FaClipboardCheck className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Digital Clearance",
        description:
          "Digitally clear compliance documents and certifications for faster processing and reduced paperwork.",
        delay: 0,
      },
      {
        icon: <FaEye className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Real-time Monitoring",
        description:
          "Identify discrepancies and compliance issues in real-time to prevent delays and ensure smooth operations.",
        delay: 100,
      },
      {
        icon: <FaShip className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Priority Processing",
        description:
          "Prioritize processing of traceable and certified products to optimize logistics flow and reduce clearance times.",
        delay: 200,
      },
    ],

    // Integration Section
    integrationTitle: "Seamless Logistics Integration",
    integrationDescription:
      "Integrate UseSafe compliance verification into your existing logistics and customs systems to streamline operations and enhance efficiency.",
    integrationFeatures: [
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Automated Verification",
        description:
          "Automatically verify compliance documents and certifications during customs clearance processes",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Alerts",
        description:
          "Receive real-time alerts for compliance issues and discrepancies to prevent shipment delays",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Priority Queue Management",
        description:
          "Automatically prioritize certified products in processing queues for faster clearance",
      },
    ],
    integrationImageSrc:
      "/images/platform/logistics-customs-operators-image.png",
    integrationImageAlt: "Logistics Integration",

    // Features Grid
    featuresTitle: "Comprehensive Features for Logistics Excellence",
    featuresDescription:
      "Everything you need to streamline customs clearance, enhance compliance verification, and optimize logistics operations.",
    features: [
      {
        icon: <FaClipboardCheck className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Digital Clearance",
        description:
          "Digitally clear compliance documents and certifications for faster processing and reduced paperwork.",
        delay: 0,
      },
      {
        icon: <FaEye className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Monitoring",
        description:
          "Identify discrepancies and compliance issues in real-time to prevent delays and ensure smooth operations.",
        delay: 100,
      },
      {
        icon: <FaShip className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Priority Processing",
        description:
          "Prioritize processing of traceable and certified products to optimize logistics flow and reduce clearance times.",
        delay: 200,
      },
      {
        icon: <FaTruck className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Supply Chain Visibility",
        description:
          "Gain complete visibility into product origins and compliance status throughout the supply chain.",
        delay: 300,
      },
      {
        icon: <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Stakeholder Collaboration",
        description:
          "Collaborate with manufacturers, distributors, and regulatory authorities for seamless operations.",
        delay: 400,
      },
      {
        icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Global Standards",
        description:
          "Ensure compliance with international customs standards and cross-border regulations.",
        delay: 500,
      },
    ],

    // CTA Section
    ctaTitle: "Ready to Transform Your Logistics Operations?",
    ctaDescription:
      "Join leading logistics operators and customs authorities who trust UseSafe for their compliance verification needs. Start streamlining your customs clearance processes and optimizing logistics flow today.",
    ctaPrimaryText: "Get Started Now",
    ctaSecondaryText: "Schedule Demo",
    ctaSecondaryHref: "/demo",
  };

  return <StakeholderPageTemplate {...pageData} />;
}
