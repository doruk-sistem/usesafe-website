"use client";

import AOS from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaEye,
  FaLock,
  FaUsers,
  FaChartLine,
  FaQrcode,
  FaStar,
} from "react-icons/fa";

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
      title: t("benefits.centralized.title"),
      description: t("benefits.centralized.description"),
      delay: 100,
    },
    {
      icon: <FaLock className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.visibility.title"),
      description: t("benefits.visibility.description"),
      delay: 200,
    },
    {
      icon: <FaChartLine className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.analytics.title"),
      description: t("benefits.analytics.description"),
      delay: 300,
    },
    {
      icon: <FaQrcode className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.dpp.title"),
      description: t("benefits.dpp.description"),
      delay: 400,
    },
    {
      icon: <FaStar className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.reputation.title"),
      description: t("benefits.reputation.description"),
      delay: 500,
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
