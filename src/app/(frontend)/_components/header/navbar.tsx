"use client";

import { useTranslations } from "next-intl";
import React, { useState, ElementType } from "react";
import {
  BsFileEarmarkText,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import {
  FaLink,
  FaTshirt,
} from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
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
          key: "products-column",
          label: t("platform.products"),
          isTitle: true,
          subItems: [
            { key: "usesafe-certification", label: t("platform.usesafe-certification.title"), description: t("platform.usesafe-certification.description"), href: "/platform/products/usesafe-certification", icon: GrCycle },
            { key: "digital-twin", label: t("platform.digital-twin.title"), description: t("platform.digital-twin.description"), href: "#", icon: BsDatabaseFillCheck },
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
      key: "about-dpp",
      label: "About DPP",
      href: "/about-dpp",
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
