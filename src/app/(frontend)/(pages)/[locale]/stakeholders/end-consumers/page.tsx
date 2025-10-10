"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaLeaf,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

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
      icon: <FaShieldAlt className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.safety.title"),
      description: t("benefits.safety.description"),
      delay: 0,
    },
    {
      icon: <FaLeaf className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.transparency.title"),
      description: t("benefits.transparency.description"),
      delay: 100,
    },
    {
      icon: <FaLightbulb className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.choices.title"),
      description: t("benefits.choices.description"),
      delay: 200,
    },
    {
      icon: <FaHandshake className="tw-w-8 tw-h-8 tw-text-primary" />,
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
      heroImageSrc="/images/platform/end-consumers-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
