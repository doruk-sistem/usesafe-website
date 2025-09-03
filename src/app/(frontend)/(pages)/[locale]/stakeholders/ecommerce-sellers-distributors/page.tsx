"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaStore,
  FaShieldAlt,
  FaGlobe,
  FaFileAlt,
  FaCheckCircle,
  FaSearch,
  FaHandshake,
} from "react-icons/fa";

import {
  StakeholderPageTemplate,
} from "@/components/Platform";

export default function EcommerceSellersDistributorsPage() {
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
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Verified Compliance",
      description: "Demonstrate product compliance to marketplaces and regulatory authorities with verified digital product passports and certification badges.",
      delay: 0,
    },
    {
      icon: <FaSearch className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Enhanced Visibility",
      description: "Display UseSafe badges to enhance product credibility and improve search rankings on major e-commerce platforms.",
      delay: 100,
    },
    {
      icon: <FaShieldAlt className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Reduced Risks",
      description: "Benefit from reduced regulatory risks and market access barriers with comprehensive compliance documentation.",
      delay: 200,
    },
  ];

  const integrationFeatures = [
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Easy Badge Integration",
      description: "Add UseSafe compliance badges to your product listings with simple API integration",
    },
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Automated Compliance Checks",
      description: "Automatically verify product compliance status across multiple marketplaces",
    },
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Consumer Trust Building",
      description: "Build consumer confidence with transparent product compliance information",
    },
  ];

  const features = [
    {
      icon: <FaStore className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Marketplace Compliance",
      description: "Meet marketplace requirements and regulatory standards with verified product compliance documentation.",
      delay: 0,
    },
    {
      icon: <FaCheckCircle className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Trust Badges",
      description: "Display UseSafe certification badges to enhance product credibility and consumer confidence.",
      delay: 100,
    },
    {
      icon: <FaSearch className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Enhanced Visibility",
      description: "Improve product discoverability and search rankings with compliance-verified listings.",
      delay: 200,
    },
    {
      icon: <FaFileAlt className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Automated Documentation",
      description: "Generate and manage compliance documentation automatically for all your product listings.",
      delay: 300,
    },
    {
      icon: <FaHandshake className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Partner Network",
      description: "Connect with certified manufacturers and suppliers through the UseSafe partner network.",
      delay: 400,
    },
    {
      icon: <FaGlobe className="tw-w-6 tw-h-6 tw-text-primary" />,
      title: "Global Market Access",
      description: "Access international markets with confidence through standardized compliance credentials.",
      delay: 500,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge="E-commerce Sellers & Distributors"
      heroTitle="Boost Your Sales with Trusted Product Compliance"
      heroDescription="Demonstrate product compliance to marketplaces and consumers with UseSafe certification. Display verified badges, reduce regulatory risks, and enhance your product credibility across all e-commerce platforms."
      heroImageSrc="/images/platform/e-commerce-sellers-hero.png"
      heroImageAlt="E-commerce Sellers and Distributors"

      // Key Benefits Section
      benefitsTitle="Why E-commerce Sellers & Distributors Choose UseSafe"
      benefitsDescription="Digital product passports provide e-commerce sellers and distributors with verified compliance credentials, enhanced marketplace visibility, and reduced regulatory barriers."
      keyBenefits={keyBenefits}

      // Integration Section
      integrationTitle="Seamless E-commerce Platform Integration"
      integrationDescription="Integrate UseSafe certification into your existing e-commerce workflows and marketplace listings without disrupting your sales operations."
      integrationFeatures={integrationFeatures}
      integrationImageSrc="/images/platform/sector-retailers_brands.jpg"
      integrationImageAlt="E-commerce Platform Integration"

      // Features Grid
      featuresTitle="Comprehensive Features for E-commerce Success"
      featuresDescription="Everything you need to showcase product compliance, build consumer trust, and expand your market reach across all major e-commerce platforms."
      features={features}

      // CTA Section
      ctaTitle="Ready to Boost Your E-commerce Success?"
      ctaDescription="Join leading e-commerce sellers who trust UseSafe for their product compliance needs. Start building consumer trust and expanding your market reach today."
      ctaPrimaryText="Get Started Now"
      ctaSecondaryText="Schedule Demo"
      ctaSecondaryHref="/demo"
    />
  );
}
