"use client";

import AOS from "aos";
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

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function EndConsumersPage() {
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
    heroBadge: "End Consumers",
    heroTitle: "Make Informed and Sustainable Purchasing Decisions",
    heroDescription:
      "Verify product compliance and safety before purchase. Access comprehensive lifecycle data and sustainability information to make informed and sustainable purchasing decisions.",
    heroImageSrc: "/images/platform/end-consumers-hero.png",
    heroImageAlt: "End Consumers",

    // Key Benefits Section
    benefitsTitle: "Why End Consumers Choose UseSafe",
    benefitsDescription:
      "Digital product passports provide consumers with transparent access to product compliance, safety information, and sustainability data to make informed purchasing decisions.",
    keyBenefits: [
      {
        icon: <FaCheckCircle className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Product Verification",
        description:
          "Verify product compliance and safety before purchase to ensure you're buying certified and safe products.",
        delay: 0,
      },
      {
        icon: <FaLeaf className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Sustainability Data",
        description:
          "Access comprehensive lifecycle data and sustainability information to make environmentally conscious choices.",
        delay: 100,
      },
      {
        icon: <FaShoppingCart className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Informed Decisions",
        description:
          "Make informed and sustainable purchasing decisions based on transparent product information and certifications.",
        delay: 200,
      },
    ],

    // Integration Section
    integrationTitle: "Seamless Consumer Experience",
    integrationDescription:
      "Access UseSafe product information through QR codes, web platforms, and online tools to make confident purchasing decisions.",
    integrationFeatures: [
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "QR Code Scanning",
        description:
          "Simply scan QR codes on products to instantly access compliance and sustainability information",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Web Platform Access",
        description:
          "Access product information through our user-friendly web platform from any device",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Updates",
        description:
          "Get real-time updates on product compliance status and sustainability certifications",
      },
    ],
    integrationImageSrc: "/images/platform/sector-consumers.jpg",
    integrationImageAlt: "Consumer Experience",

    // Features Grid
    featuresTitle: "Comprehensive Features for Informed Consumers",
    featuresDescription:
      "Everything you need to verify product compliance, access sustainability data, and make informed purchasing decisions.",
    features: [
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Product Verification",
        description:
          "Verify product compliance and safety before purchase to ensure you're buying certified and safe products.",
        delay: 0,
      },
      {
        icon: <FaLeaf className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Sustainability Data",
        description:
          "Access comprehensive lifecycle data and sustainability information to make environmentally conscious choices.",
        delay: 100,
      },
      {
        icon: <FaShoppingCart className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Informed Decisions",
        description:
          "Make informed and sustainable purchasing decisions based on transparent product information and certifications.",
        delay: 200,
      },
      {
        icon: <FaShieldAlt className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Safety Assurance",
        description:
          "Ensure product safety and compliance with international standards and regulations.",
        delay: 300,
      },
      {
        icon: <FaHeart className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Trust & Transparency",
        description:
          "Build trust through transparent access to product origins, manufacturing processes, and compliance data.",
        delay: 400,
      },
      {
        icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Global Standards",
        description:
          "Access products that meet international compliance standards and sustainability certifications.",
        delay: 500,
      },
    ],

    // CTA Section
    ctaTitle: "Ready to Make Informed Purchasing Decisions?",
    ctaDescription:
      "Join millions of consumers who trust UseSafe for product verification and sustainability information. Start making informed and sustainable purchasing decisions today.",
    ctaPrimaryText: "Get Started Now",
    ctaSecondaryText: "Schedule Demo",
    ctaSecondaryHref: "/demo",
  };

  return <StakeholderPageTemplate {...pageData} />;
}
