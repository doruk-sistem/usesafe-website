"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useState, ElementType } from "react";
import {
  BsFileEarmarkText,
  BsDatabaseFillCheck,
  BsShieldCheck,
} from "react-icons/bs";
import {
  FaBatteryFull,
  FaLink,
} from "react-icons/fa";
import { FiSettings, FiDatabase } from "react-icons/fi";
import { GrCycle } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

import { Button } from "../button";
import Logo from "../logo";
import SwitchLanguage from "../switch-language";

import NavLink from "./navlink";

interface Solution {
  title: string;
  slug: string;
}

interface DynamicPage {
  title: string;
  slug: string;
  menuOrder: number;
}

interface NavbarProps {
  solutions?: Solution[];
  dynamicPages?: DynamicPage[];
}

// Define the NavItem type
interface NavItem {
  key: string;
  label: string;
  href?: string; // Optional
  subItems?: Array<{ // Structure should align with NavLink's SubItem and allow nesting
    key: string;
    label: string; // This will be the item title
    href?: string;
    description?: string; // This will be the item description
    isTitle?: boolean;
    icon?: ElementType; // Changed from any to ElementType
    subItems?: NavItem["subItems"]; // Recursive for further nesting if needed
  }>; // Optional
}

export default function Navbar({ solutions = [], dynamicPages = [] }: NavbarProps) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sortedDynamicPages = [...dynamicPages].sort((a, b) => a.menuOrder - b.menuOrder);
  const params = useParams();
  const locale = params.locale as string;

  const navItems: NavItem[] = [
    {
      key: "platform",
      label: t("common.platform"),
      subItems: [
        {
          key: "frameworks-column",
          label: t("platform.frameworks"), // Column title
          isTitle: true,
          subItems: [
            { key: "dpp-in-espr", label: t("platform.dpp-in-espr.title"), description: t("platform.dpp-in-espr.description"), href: "/platform/frameworks/dpp-in-espr", icon: BsFileEarmarkText },
            { key: "battery-passport", label: t("platform.battery-passport.title"), description: t("platform.battery-passport.description"), href: "/platform/frameworks/battery-passport", icon: FaBatteryFull },
            { key: "custom-frameworks", label: t("platform.custom-frameworks.title"), description: t("platform.custom-frameworks.description"), href: "/platform/frameworks/custom-frameworks", icon: FiSettings },
          ],
        },
        {
          key: "products-column",
          label: t("platform.products"), // Column title
          isTitle: true,
          subItems: [
            { key: "supplier-data-collection", label: t("platform.supplier-data-collection.title"), description: t("platform.supplier-data-collection.description"), href: "/platform/products/supplier-data-collection", icon: BsDatabaseFillCheck },
            { key: "sustainability-data-disclosure", label: t("platform.sustainability-data-disclosure.title"), description: t("platform.sustainability-data-disclosure.description"), href: "/platform/products/sustainability-data-disclosure", icon: BsShieldCheck },
          ],
        },
        {
          key: "integration-column",
          label: t("platform.integration"), // Column title
          isTitle: true,
          subItems: [
            { key: "api-integrations", label: t("platform.api-integrations.title"), description: t("platform.api-integrations.description"), href: "/platform/integration/api-integrations", icon: FaLink },
            { key: "udb-integration", label: t("platform.udb-integration.title"), description: t("platform.udb-integration.description"), href: "/platform/integration/udb-integration", icon: FiDatabase },
            { key: "lca-integrations", label: t("platform.lca-integrations.title"), description: t("platform.lca-integrations.description"), href: "/platform/integration/lca-integrations", icon: GrCycle },
          ],
        },
      ],
    },
    {
      key: "solutions",
      label: t("common.solutions"),
      subItems: solutions.map((solution, index) => ({
        key: `solution-${solution.slug || index}`,
        label: solution.title,
        href: `/solutions/${solution.slug}` || `#solution-${index}`,
      })),
    },

    ...sortedDynamicPages.map((page, index): NavItem => ({
      key: `dynamic-${page.slug || index}`,
      label: page.title,
      href: `/${locale}/${page.slug}`,
    })),
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
          {/* Logo */}
          <a
            href="/"
            className="tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
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

          {/* Action Buttons and Language Selector */}
          <div className="tw-hidden xl:tw-flex tw-items-center tw-space-x-1">
            <SwitchLanguage />
            <a href="/demo">
              <Button variant="default">{t("common.try_for_free")}</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="tw-flex tw-items-center tw-gap-4 xl:tw-hidden">
            <SwitchLanguage size="lg" />
            <Button size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <HiX className="tw-h-6 tw-w-6" />
              ) : (
                <HiMenu className="tw-h-6 tw-w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                <Button variant="default" size="lg" className="tw-w-full">
                  {t("common.try_for_free")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
