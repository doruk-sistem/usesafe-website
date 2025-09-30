"use client";

import AOS from "aos";
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

import { StakeholderPageTemplate } from "@/components/Platform";

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
      icon: <FaShieldAlt className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Regulatory Compliance",
      description:
        "Ensure full compliance with ESPR, textile regulations, and other industry standards. Stay ahead of evolving requirements with automated compliance management.",
      delay: 0,
    },
    {
      icon: <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Brand Protection",
      description:
        "Protect your brand integrity with verifiable product authenticity. Build consumer trust through transparent supply chain information.",
      delay: 100,
    },
    {
      icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Global Market Access",
      description:
        "Expand your market reach with products that meet international standards. Access new markets with confidence through digital compliance.",
      delay: 200,
    },
  ];

  const integrationFeatures = [
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Easy Implementation",
      description:
        "Quick setup with minimal disruption to your existing processes",
    },
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Real-time Data Capture",
      description:
        "Automatically capture product data throughout the manufacturing process",
    },
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Quality Assurance",
      description:
        "Maintain product quality standards with comprehensive tracking",
    },
  ];

  const features = [
    {
      icon: <FaIndustry className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Production Tracking",
      description:
        "Track every step of your production process with detailed digital records and real-time monitoring.",
      delay: 0,
    },
    {
      icon: <FaUsers className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Supplier Management",
      description:
        "Manage your supplier network with comprehensive tracking and verification of all materials and components.",
      delay: 100,
    },
    {
      icon: <FaRecycle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Sustainability Tracking",
      description:
        "Monitor and report on sustainability metrics throughout your supply chain and production process.",
      delay: 200,
    },
    {
      icon: <FaFileAlt className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Automated Documentation",
      description:
        "Generate comprehensive product documentation automatically with all required compliance information.",
      delay: 300,
    },
    {
      icon: <FaCogs className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Process Optimization",
      description:
        "Optimize your manufacturing processes with data-driven insights and performance analytics.",
      delay: 400,
    },
    {
      icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Global Standards",
      description:
        "Meet international standards and regulations with built-in compliance frameworks and updates.",
      delay: 500,
    },
  ];
  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge="Manufacturers & Brand Owners"
      heroTitle="Empower Your Products with Digital Product Passports"
      heroDescription="Transform your manufacturing processes and enhance brand trust with comprehensive digital product passports. Ensure compliance, transparency, and traceability across your entire supply chain."
      heroImageSrc="/images/platform/manufacturers-brand-owners-hero.png"
      heroImageAlt="Manufacturers and Brand Owners"
      // Key Benefits Section
      benefitsTitle="Why Manufacturers & Brand Owners Choose UseSafe"
      benefitsDescription="Digital product passports provide manufacturers and brand owners with unprecedented control, transparency, and competitive advantages in today's regulated market."
      keyBenefits={keyBenefits}
      // Integration Section
      integrationTitle="Seamless Integration with Your Manufacturing Process"
      integrationDescription="Integrate digital product passports into your existing manufacturing workflow without disrupting production efficiency."
      integrationFeatures={integrationFeatures}
      integrationImageSrc="/images/platform/logistics-customs-operators-image.png"
      integrationImageAlt="Manufacturing Process Integration"
      // Features Grid
      featuresTitle="Comprehensive Features for Manufacturers"
      featuresDescription="Everything you need to create, manage, and maintain digital product passports for your entire product portfolio."
      features={features}
      // CTA Section
      ctaTitle="Ready to Transform Your Manufacturing Process?"
      ctaDescription="Join leading manufacturers who trust UseSafe for their digital product passport needs. Start your journey towards compliance and transparency today."
      ctaPrimaryText="Get Started Now"
      ctaSecondaryText="Schedule Demo"
      ctaSecondaryHref="/demo"
    />
  );
}
