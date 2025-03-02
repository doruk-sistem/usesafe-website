"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { Button } from "../button";
import Logo from "../logo";
import SwitchLanguage from "../switch-language";

import NavLink from "./navlink";

interface Solution {
  title: string;
  slug: string;
}

interface NavbarProps {
  solutions?: Solution[];
}

export default function Navbar({ solutions = [] }: NavbarProps) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      key: "home",
      label: t("common.homepage"),
      href: "/"
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
    {
      key: "blog",
      label: t("common.blog"),
      href: "/blog",
    },
    {
      key: "about",
      label: t("common.about_dpp"),
      href: "/resources/about-dpp",
    },
    {
      key: "contact",
      label: t("common.contact_us"),
      href: "/contact"
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
                label={item.label}
                href={item.href}
                subItems={item.subItems}
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
                  label={item.label}
                  href={item.href}
                  subItems={item.subItems}
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
