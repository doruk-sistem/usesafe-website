"use client";

import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
  variant?: "default" | "horizontal" | "glass";
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  children,
  delay = 0,
  variant = "default",
  className = "",
}) => {
  // Different card styles based on variant
  const getCardStyles = () => {
    switch (variant) {
      case "horizontal":
        return "tw-flex tw-items-start tw-bg-white/70 tw-backdrop-blur-lg tw-rounded-2xl tw-shadow-xl tw-p-6 tw-border-l-4 tw-border-gradient-to-b tw-from-[#43cea2] tw-to-[#185a9d] tw-transition-all hover:tw-scale-[1.03] hover:tw-shadow-2xl tw-group";
      case "glass":
        return "tw-group tw-bg-white/60 tw-backdrop-blur-lg tw-border-2 tw-border-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-p-8 tw-rounded-3xl tw-shadow-2xl tw-transition-all hover:tw-shadow-3xl hover:tw-border-[#43cea2] hover:tw-translate-y-[-8px] tw-transform hover:tw-scale-[1.03] tw-duration-300";
      case "default":
      default:
        return "tw-group tw-bg-white/60 tw-backdrop-blur-lg tw-border-2 tw-border-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-p-8 tw-rounded-3xl tw-shadow-2xl tw-transition-all hover:tw-shadow-3xl hover:tw-border-[#43cea2] hover:tw-translate-y-[-8px] tw-transform hover:tw-scale-[1.03] tw-duration-300";
    }
  };

  // Different icon styles based on variant
  const getIconStyles = () => {
    switch (variant) {
      case "horizontal":
        return "tw-flex-shrink-0 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-p-3 tw-mr-5 tw-shadow-md tw-flex tw-items-center tw-justify-center";
      case "glass":
      case "default":
      default:
        return "tw-bg-gradient-to-br tw-from-[#43cea2]/30 tw-to-[#6dd5ed]/40 tw-p-4 tw-rounded-xl tw-inline-flex tw-mb-6 tw-text-primary tw-group-hover:tw-bg-primary/10 tw-transition-colors";
    }
  };

  return (
    <div
      className={`${getCardStyles()} ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={getIconStyles()}>
        {variant === "horizontal" ? (
          <div className="tw-text-white tw-drop-shadow">{icon}</div>
        ) : (
          icon
        )}
      </div>

      {variant === "horizontal" ? (
        <div>
          <div className="tw-font-bold tw-text-lg tw-text-gray-900">{title}</div>
          <div className="tw-text-gray-700 tw-leading-relaxed tw-text-base">
            {children}
          </div>
        </div>
      ) : (
        <>
          <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-gray-900 tw-drop-shadow-sm">
            {title}
          </h3>
          <p className="tw-text-gray-700 tw-leading-relaxed">{children}</p>
        </>
      )}
    </div>
  );
};

export default FeatureCard;
