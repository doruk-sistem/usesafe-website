"use client";

import { useTranslations } from "next-intl";
import React, { useState, ElementType } from "react";
import {
  BsFileEarmarkText,
} from "react-icons/bs";
import {
  FaLink,
  FaTshirt,
  FaIndustry,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import { Button } from "../button";
import Logo from "../logo";
// import SwitchLanguage from "../switch-language";

import NavLink from "./navlink";

interface NavItem {
  key: string;
  label: string;
  href?: string;
  subItems?: Array<{ // Structure should align with NavLink's SubItem and allow nesting
    key: string;
    label: string;
    href?: string;
    description?: string;
    isTitle?: boolean;
    icon?: ElementType;
    subItems?: NavItem["subItems"];
  }>;
}

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      key: "platform",
      label: t("common.platform"),
      subItems: [
        {
          key: "frameworks-column",
          label: t("platform.frameworks"),
          isTitle: true,
          subItems: [
            { key: "dpp-in-espr", label: t("platform.dpp-in-espr.title"), description: t("platform.dpp-in-espr.description"), href: "/platform/frameworks/dpp-in-espr", icon: BsFileEarmarkText },
            { key: "textile-passport", label: t("platform.textile-passport.title"), description: t("platform.textile-passport.description"), href: "/platform/frameworks/textile-passport", icon: FaTshirt },
            // { key: "custom-frameworks", label: t("platform.custom-frameworks.title"), description: t("platform.custom-frameworks.description"), href: "/platform/frameworks/custom-frameworks", icon: FiSettings },
          ],
        },
        {
          key: "integration-column",
          label: t("platform.integration"),
          isTitle: true,
          subItems: [
            { key: "api-integrations", label: t("platform.api-integrations.title"), description: t("platform.api-integrations.description"), href: "#", icon: FaLink },
          ],
        },
      ],
    },
    {
      key: "stakeholders",
      label: "Stakeholders",
      subItems: [
        {
          key: "business-column",
          label: "Business Stakeholders",
          isTitle: true,
          subItems: [
            { key: "manufacturers", label: "Manufacturers & Brand Owners", description: "Empower your products with digital product passports", href: "/stakeholders/manufacturers-brand-owners", icon: FaIndustry },
            { key: "sellers", label: "E-commerce Sellers & Distributors", description: "Demonstrate product compliance to marketplaces and consumers", href: "/stakeholders/ecommerce-sellers-distributors", icon: FaUsers },
            { key: "marketplaces", label: "Marketplaces & Retailers", description: "Automate product vetting and compliance verification", href: "/stakeholders/marketplaces-retailers", icon: FaGlobe },
          ],
        },
        {
          key: "regulatory-column",
          label: "Regulatory & End Users",
          isTitle: true,
          subItems: [
            { key: "authorities", label: "Regulatory Authorities & Government Agencies", description: "Access real-time compliance documentation and reporting", href: "/stakeholders/regulatory-authorities-government-agencies", icon: FaShieldAlt },
            { key: "logistics", label: "Logistics & Customs Operators", description: "Digitally clear compliance documents and certifications", href: "/stakeholders/logistics-customs-operators", icon: FaCogs },
            { key: "consumers", label: "End Consumers", description: "Verify product compliance and safety before purchase", href: "/stakeholders/end-consumers", icon: FaCheckCircle },
          ],
        },
      ],
    },
    {
      key: "blog",
      label: t("common.blog"),
      href: "/blog",
    },
    {
      key: "contact",
      label: t("common.contact_us"),
      href: "/contact",
    },
  ];

  return (
    <nav className="tw-border-b-[1px] tw-border-b-gray-200 tw-border-solid tw-border-transparent tw-bg-white/80 tw-backdrop-blur-md">
      <div className="tw-container tw-mx-auto">
        <div className="tw-flex tw-items-center tw-justify-between tw-py-4">
          <a
            href="/"
            className="tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20"
          >
            <Logo />
          </a>

          <div className="tw-hidden xl:tw-flex tw-items-center tw-space-x-5">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                itemKey={item.key}
                label={item.label}
                href={item.href?.toString()}
                subItems={item.subItems ?? []}
              />
            ))}
          </div>

          <div className="tw-hidden xl:tw-flex tw-items-center tw-space-x-1">
            {/* <SwitchLanguage /> */}
            <a href="/contact">
              <Button variant="default">{t("common.try_for_free")}</Button>
            </a>
          </div>

          <div className="tw-flex tw-items-center tw-gap-4 xl:tw-hidden">
            {/* <SwitchLanguage size="lg" /> */}
            <Button size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <HiX className="tw-h-6 tw-w-6" />
              ) : (
                <HiMenu className="tw-h-6 tw-w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:tw-hidden tw-border-t">
            <div className="tw-flex tw-flex-col tw-space-y-4 tw-py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  itemKey={item.key}
                  label={item.label}
                  href={item.href?.toString()}
                  subItems={item.subItems ?? []}
                  isMobile
                />
              ))}
              <div className="tw-flex tw-flex-col tw-space-y-2 tw-px-4">
                <a href="/contact" className="tw-w-full">
                  <Button variant="default" size="lg" className="tw-w-full">
                    {t("common.try_for_free")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
