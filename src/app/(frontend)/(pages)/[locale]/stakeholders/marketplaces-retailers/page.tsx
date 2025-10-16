"use client";

import AOS from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaDatabase,
  FaCheckCircle,
  FaQrcode,
  FaUserShield,
  FaBell,
  FaChartLine,
} from "react-icons/fa";

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function MarketplacesRetailersPage() {
  const t = useTranslations("platform.stakeholders.marketplaces");

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
      icon: <FaDatabase className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.dataQuality.title"),
      description: t("benefits.dataQuality.description"),
      delay: 0,
    },
    {
      icon: <FaCheckCircle className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.listingCompliance.title"),
      description: t("benefits.listingCompliance.description"),
      delay: 100,
    },
    {
      icon: <FaQrcode className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.dppScale.title"),
      description: t("benefits.dppScale.description"),
      delay: 200,
    },
    {
      icon: <FaUserShield className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.riskManagement.title"),
      description: t("benefits.riskManagement.description"),
      delay: 300,
    },
    {
      icon: <FaBell className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.recall.title"),
      description: t("benefits.recall.description"),
      delay: 400,
    },
    {
      icon: <FaChartLine className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.esgInsights.title"),
      description: t("benefits.esgInsights.description"),
      delay: 500,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/marketplaces-retailers-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
