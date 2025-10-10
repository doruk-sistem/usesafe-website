"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaSearch,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

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
      icon: <FaCogs className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.vetting.title"),
      description: t("benefits.vetting.description"),
      delay: 0,
    },
    {
      icon: <FaSearch className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.elevate.title"),
      description: t("benefits.elevate.description"),
      delay: 100,
    },
    {
      icon: <FaHandshake className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.collaboration.title"),
      description: t("benefits.collaboration.description"),
      delay: 200,
    },
    {
      icon: <FaUsers className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.trust.title"),
      description: t("benefits.trust.description"),
      delay: 300,
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
