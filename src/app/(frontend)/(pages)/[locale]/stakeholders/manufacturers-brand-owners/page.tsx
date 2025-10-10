"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaRecycle,
  FaFileAlt,
  FaUsers,
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
      icon: <FaShieldAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: "Compliance Made Simple",
      description:
        "Gain full visibility into material and chemical composition, reduce risks of non-compliance, and simplify certification processes with UseSafe®.",
      delay: 0,
    },
    {
      icon: <FaRecycle className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: "Sustainable Product Design",
      description:
        "Integrate durability, reusability, and eco-friendly principles into product development to meet both legal demands and consumer expectations.",
      delay: 100,
    },
    {
      icon: <FaFileAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: "Transparent Product Data",
      description:
        "Provide accurate and verifiable product information through Digital Product Passports, ensuring transparency and minimizing greenwashing risks.",
      delay: 200,
    },
    {
      icon: <FaUsers className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: "Consumer Trust & Loyalty",
      description:
        "Strengthen brand reputation and customer loyalty by sharing trusted sustainability and safety information across the supply chain.",
      delay: 300,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge="Manufacturers & Brand Owners"
      heroTitle="Manufacturers & Brand Owners"
      heroDescription="Ensure compliance, certification & sustainable growth with UseSafe® solutions tailored for manufacturers and brand owners."
      heroImageSrc="/images/platform/manufacturers-brand-owners-hero.png"
      heroImageAlt="Manufacturers and Brand Owners"
      // Key Benefits Section
      benefitsTitle="Manufacturers & Brand Owners"
      benefitsDescription="Manufacturers and brand owners face increasing regulatory and market pressures under the EU Green Deal, ESPR, and sustainability requirements. UseSafe® empowers businesses to stay compliant, simplify certification, and build trust by ensuring full transparency across the supply chain. Beyond compliance, our platform transforms sustainability into a competitive advantage—enabling companies to confidently deliver safe, traceable, and eco-friendly products."
      keyBenefits={keyBenefits}
    />
  );
}
