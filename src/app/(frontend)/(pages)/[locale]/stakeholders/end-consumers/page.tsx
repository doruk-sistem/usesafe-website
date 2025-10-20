"use client";

import AOS from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaQrcode,
  FaShieldAlt,
  FaLeaf,
  FaTools,
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function EndConsumersPage() {
  const t = useTranslations("platform.stakeholders.consumers");

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
      icon: <FaQrcode className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.instantVerification.title"),
      description: t("benefits.instantVerification.description"),
      delay: 0,
    },
    {
      icon: <FaShieldAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.safetyCompliance.title"),
      description: t("benefits.safetyCompliance.description"),
      delay: 100,
    },
    {
      icon: <FaLeaf className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.environmentalImpact.title"),
      description: t("benefits.environmentalImpact.description"),
      delay: 200,
    },
    {
      icon: <FaTools className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.repairability.title"),
      description: t("benefits.repairability.description"),
      delay: 300,
    },
    {
      icon: <FaHandsHelping className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.ethicalSourcing.title"),
      description: t("benefits.ethicalSourcing.description"),
      delay: 400,
    },
    {
      icon: <FaHeart className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.loyaltyTrust.title"),
      description: t("benefits.loyaltyTrust.description"),
      delay: 500,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/end-consumers-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
