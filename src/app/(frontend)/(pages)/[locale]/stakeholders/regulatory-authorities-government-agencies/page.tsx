"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaEye,
  FaRecycle,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

import StakeholderPageTemplate from "@/components/Platform/StakeholderPageTemplate";

export default function RegulatoryAuthoritiesGovernmentAgenciesPage() {
  const t = useTranslations("platform.stakeholders.regulatory");

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
      icon: <FaEye className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.oversight.title"),
      description: t("benefits.oversight.description"),
      delay: 0,
    },
    {
      icon: <FaRecycle className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.sustainability.title"),
      description: t("benefits.sustainability.description"),
      delay: 100,
    },
    {
      icon: <FaDatabase className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.compliance.title"),
      description: t("benefits.compliance.description"),
      delay: 200,
    },
    {
      icon: <FaGlobe className="tw-w-8 tw-h-8 tw-text-primary" />,
      title: t("benefits.alignment.title"),
      description: t("benefits.alignment.description"),
      delay: 300,
    },
  ];

  return (
    <StakeholderPageTemplate
      // Hero Section
      heroBadge={t("heroBadge")}
      heroTitle={t("heroTitle")}
      heroDescription={t("heroDescription")}
      heroImageSrc="/images/platform/regulatory-authorities-government-agencies-hero.png"
      heroImageAlt={t("heroImageAlt")}
      // Key Benefits Section
      benefitsTitle={t("benefitsTitle")}
      benefitsDescription={t("benefitsDescription")}
      keyBenefits={keyBenefits}
    />
  );
}
