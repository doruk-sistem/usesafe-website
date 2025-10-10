"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaEye,
  FaLock,
  FaUsers,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

import {
  StakeholderPageTemplate,
} from "@/components/Platform";

export default function EcommerceSellersDistributorsPage() {
  const t = useTranslations("platform.stakeholders.ecommerce");

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
      title: t("benefits.compliance.title"),
      description: t("benefits.compliance.description"),
      delay: 0,
    },
    {
      icon: <FaEye className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.transparency.title"),
      description: t("benefits.transparency.description"),
      delay: 100,
    },
    {
      icon: <FaLock className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.security.title"),
      description: t("benefits.security.description"),
      delay: 200,
    },
    {
      icon: <FaUsers className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.engagement.title"),
      description: t("benefits.engagement.description"),
      delay: 300,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/e-commerce-sellers-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
