"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
  external?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}) => {
  // Different button styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "tw-group tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-3 sm:tw-py-4 tw-px-6 sm:tw-px-10 tw-rounded-lg sm:tw-rounded-xl tw-shadow-2xl tw-border-2 tw-border-white/30 hover:tw-shadow-3xl hover:tw-border-[#43cea2] tw-transition-all tw-flex tw-items-center tw-justify-center tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300 tw-text-sm sm:tw-text-base";
      case "secondary":
        return "tw-bg-white/80 tw-text-primary tw-border-2 tw-border-primary tw-font-semibold tw-py-3 sm:tw-py-4 tw-px-6 sm:tw-px-10 tw-rounded-lg sm:tw-rounded-xl tw-shadow-lg hover:tw-shadow-2xl hover:tw-bg-blue-100/60 tw-transition-all tw-flex tw-items-center tw-justify-center hover:tw-scale-105 tw-duration-300 tw-text-sm sm:tw-text-base";
      case "white":
        return "tw-group tw-bg-white tw-text-primary tw-font-medium tw-py-3 sm:tw-py-4 tw-px-6 sm:tw-px-8 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-flex tw-items-center tw-justify-center tw-text-sm sm:tw-text-base";
      case "outline":
        return "tw-group tw-bg-transparent tw-text-white tw-border-2 tw-border-white tw-font-medium tw-py-3 sm:tw-py-4 tw-px-6 sm:tw-px-8 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl hover:tw-bg-white/10 tw-transition-all tw-flex tw-items-center tw-justify-center tw-text-sm sm:tw-text-base";
      default:
        return "tw-group tw-bg-gradient-to-r tw-from-[#43cea2] tw-to-[#185a9d] tw-text-white tw-font-semibold tw-py-3 sm:tw-py-4 tw-px-6 sm:tw-px-10 tw-rounded-lg sm:tw-rounded-xl tw-shadow-2xl tw-border-2 tw-border-white/30 hover:tw-shadow-3xl hover:tw-border-[#43cea2] tw-transition-all tw-flex tw-items-center tw-justify-center tw-ring-2 tw-ring-[#43cea2]/30 hover:tw-ring-4 hover:tw-ring-[#43cea2]/60 tw-duration-300 tw-text-sm sm:tw-text-base";
    }
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${getButtonStyles()} ${className}`} {...linkProps}>
      <span>{children}</span>
      <BsArrowRight className="tw-ml-2 tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" />
    </Link>
  );
};

export default CtaButton;
