"use client";

import AOS from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaClipboardCheck,
  FaEye,
  FaShip,
  FaTruck,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function LogisticsCustomsOperatorsPage() {
  const t = useTranslations("platform.stakeholders.logistics");

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
      icon: <FaShip className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.traceability.title"),
      description: t("benefits.traceability.description"),
      delay: 0,
    },
    {
      icon: <FaClipboardCheck className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.dppIntegration.title"),
      description: t("benefits.dppIntegration.description"),
      delay: 100,
    },
    {
      icon: <FaEye className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.automatedCompliance.title"),
      description: t("benefits.automatedCompliance.description"),
      delay: 200,
    },
    {
      icon: <FaTruck className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.riskManagement.title"),
      description: t("benefits.riskManagement.description"),
      delay: 300,
    },
    {
      icon: <FaGlobe className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.sustainabilityReporting.title"),
      description: t("benefits.sustainabilityReporting.description"),
      delay: 400,
    },
    {
      icon: <FaHandshake className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.crossBorderCollaboration.title"),
      description: t("benefits.crossBorderCollaboration.description"),
      delay: 500,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/logistics-customs-operators-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
