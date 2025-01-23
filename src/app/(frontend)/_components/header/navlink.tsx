"use client";

import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

import { cn } from "@/utils/cn";

import { Button } from "../button";

interface SubItem {
  label: string;
  href: string;
}

interface NavLinkProps {
  label: string;
  href?: string;
  subItems?: SubItem[];
  isMobile?: boolean;
}

export default function NavLink({
  label,
  href,
  subItems,
  isMobile,
}: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!subItems) {
    return (
      <a
        href={href || "#"}
        className={`primary-font tw-flex tw-items-center tw-text-black tw-transition-colors tw-duration-200 ${
          isMobile
            ? "tw-px-6 tw-py-2 tw-text-xl hover:tw-bg-gray-50 tw-w-full"
            : "tw-px-3 tw-text-base"
        }`}
      >
        {label}
      </a>
    );
  }

  return (
    <div className={`${isMobile ? "tw-w-full" : "tw-relative"}`}>
      <Button
        variant="text"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "tw-flex tw-items-center tw-gap-1 tw-text-black tw-transition-colors tw-duration-200",
          isMobile
            ? "!tw-px-6 tw-py-2 tw-text-xl tw-w-full tw-justify-between"
            : "!tw-px-3 primary-font !tw-text-base"
        )}
      >
        {label}
        <IoChevronDown
          className={`tw-w-4 tw-h-4 tw-transition-transform ${
            isOpen ? "tw-rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div
          className={`${
            isMobile
              ? "tw-bg-gray-50"
              : "tw-absolute tw-left-0 tw-mt-2 tw-w-48 tw-bg-white tw-rounded-md tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-z-50"
          }`}
        >
          <div className={`${isMobile ? "tw-pl-6" : "tw-py-1"}`}>
            {subItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`tw-block tw-text-gray-700 hover:tw-text-black tw-transition-colors tw-duration-200 ${
                  isMobile
                    ? "tw-px-2 tw-py-3 tw-text-lg"
                    : "tw-px-2 tw-py-3 tw-text-sm hover:tw-bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
