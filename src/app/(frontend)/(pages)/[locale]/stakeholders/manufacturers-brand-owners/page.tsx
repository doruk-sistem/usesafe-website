"use client";

import AOS from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaRecycle,
  FaFileAlt,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

import { StakeholderPageTemplate } from "@/components/Platform";

export default function ManufacturersBrandOwnersPage() {
  const t = useTranslations("platform.stakeholders.manufacturers");

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
      icon: <FaRecycle className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.sustainable.title"),
      description: t("benefits.sustainable.description"),
      delay: 100,
    },
    {
      icon: <FaFileAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.transparent.title"),
      description: t("benefits.transparent.description"),
      delay: 200,
    },
    {
      icon: <FaUsers className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.trust.title"),
      description: t("benefits.trust.description"),
      delay: 300,
    },
    {
      icon: <FaHandshake className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.supplier.title"),
      description: t("benefits.supplier.description"),
      delay: 400,
    },
    {
      icon: <FaChartLine className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.insights.title"),
      description: t("benefits.insights.description"),
      delay: 500,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/manufacturers-brand-owners-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
