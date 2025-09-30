"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaGlobe,
  FaCheckCircle,
  FaSearch,
  FaHandshake,
  FaCogs,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function MarketplacesRetailersPage() {
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
    heroBadge: "Marketplaces & Retailers",
    heroTitle: "Elevate Your Platform with Trusted Product Compliance",
    heroDescription:
      "Automate product vetting and compliance verification processes. Elevate certified products in search results and collaborate on compliance programs with trusted certification partners.",
    heroImageSrc: "/images/platform/marketplaces-retailers-hero.png",
    heroImageAlt: "Marketplaces and Retailers",

    // Key Benefits Section
    benefitsTitle: "Why Marketplaces & Retailers Choose UseSafe",
    benefitsDescription:
      "Digital product passports provide marketplaces and retailers with automated compliance verification, enhanced product curation, and trusted certification partnerships.",
    keyBenefits: [
      {
        icon: <FaCogs className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Automated Vetting",
        description:
          "Automate product vetting and compliance verification processes to ensure only certified products reach your customers.",
        delay: 0,
      },
      {
        icon: <FaSearch className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Elevated Visibility",
        description:
          "Elevate certified products in search results and recommendations to boost customer trust and sales.",
        delay: 100,
      },
      {
        icon: <FaHandshake className="tw-w-8 tw-h-8 tw-text-primary" />,
        title: "Trusted Partnerships",
        description:
          "Collaborate on compliance programs with trusted certification partners to maintain platform integrity.",
        delay: 200,
      },
    ],

    // Integration Section
    integrationTitle: "Seamless Platform Integration",
    integrationDescription:
      "Integrate UseSafe compliance verification into your existing marketplace infrastructure to enhance product quality and customer trust.",
    integrationFeatures: [
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "API Integration",
        description:
          "Seamlessly integrate compliance verification APIs into your existing platform infrastructure",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Real-time Verification",
        description:
          "Verify product compliance in real-time as products are listed on your platform",
      },
      {
        icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Automated Filtering",
        description:
          "Automatically filter and prioritize certified products in search and recommendation algorithms",
      },
    ],
    integrationImageSrc: "/images/platform/usesafe_men_wear.avif",
    integrationImageAlt: "Platform Integration",

    // Features Grid
    featuresTitle: "Comprehensive Features for Marketplace Success",
    featuresDescription:
      "Everything you need to automate compliance verification, enhance product curation, and build customer trust across your marketplace platform.",
    features: [
      {
        icon: <FaCogs className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Automated Verification",
        description:
          "Automate product vetting and compliance verification processes to ensure platform quality.",
        delay: 0,
      },
      {
        icon: <FaSearch className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Smart Curation",
        description:
          "Elevate certified products in search results and recommendations to boost customer trust.",
        delay: 100,
      },
      {
        icon: <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Partner Collaboration",
        description:
          "Collaborate on compliance programs with trusted certification partners and manufacturers.",
        delay: 200,
      },
      {
        icon: <FaChartLine className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Performance Analytics",
        description:
          "Track compliance metrics and performance analytics to optimize your marketplace operations.",
        delay: 300,
      },
      {
        icon: <FaUsers className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Customer Trust",
        description:
          "Build customer confidence with transparent compliance information and verified product badges.",
        delay: 400,
      },
      {
        icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
        title: "Global Standards",
        description:
          "Meet international compliance standards and regulatory requirements across all markets.",
        delay: 500,
      },
    ],

    // CTA Section
    ctaTitle: "Ready to Transform Your Marketplace?",
    ctaDescription:
      "Join leading marketplaces and retailers who trust UseSafe for their compliance verification needs. Start automating your product vetting and building customer trust today.",
    ctaPrimaryText: "Get Started Now",
    ctaSecondaryText: "Schedule Demo",
    ctaSecondaryHref: "/demo",
  };

  return <StakeholderPageTemplate {...pageData} />;
}
