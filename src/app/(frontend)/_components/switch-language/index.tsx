"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { useLocale } from "next-intl";

import { Button, ButtonProps } from "../button";

const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
];

export default function SwitchLanguage({
  size = "default",
}: {
  size?: ButtonProps["size"];
}) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSwitch = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    window.location.href = newPath;
  };

  return (
    <div className="tw-relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="tw-gap-2 !tw-px-4"
        variant="link"
        size={size}
      >
        <MdLanguage className="tw-w-5 tw-h-5" />
        {languages.find((lang) => lang.code === currentLocale)?.label}
        <IoChevronDown
          className={`tw-w-4 tw-h-4 tw-transition-transform ${
            isOpen ? "tw-rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div className="tw-absolute tw-left-0 tw-mt-2 tw-w-40 tw-bg-white tw-rounded-md tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-z-50">
          <div className="tw-flex tw-justify-center tw-flex-col">
            {languages.map((language) => (
              <Button
                key={language.code}
                onClick={() => handleLanguageSwitch(language.code)}
                variant="link"
                size={size}
                className={
                  currentLocale === language.code ? "tw-text-primary" : ""
                }
              >
                {language.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
