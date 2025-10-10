"use client";

import Image from "next/image";
import React from "react";

import CtaButton from "@/components/Platform/CtaButton";
import FeatureCard from "@/components/Platform/FeatureCard";
import GradientBackground from "@/components/Platform/GradientBackground";

export interface FeatureSectionWithImageProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
  }>;
  cta?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "outline" | "white";
    external?: boolean;
  };
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  gradientType?: "primary" | "secondary" | "white" | "light";
  className?: string;
}

const FeatureSectionWithImage: React.FC<FeatureSectionWithImageProps> = ({
  badge,
  title,
  titleHighlight,
  description,
  features,
  cta,
  imageSrc,
  imageAlt,
  imageOnRight = true,
  gradientType = "light",
  className = "",
}) => {
  return (
    <GradientBackground type={gradientType} className={className}>
      <div className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-8 sm:tw-gap-12 md:tw-gap-16${imageOnRight ? "" : " md:tw-flex-row-reverse"}`}>
        <div className="tw-flex-1 tw-max-w-xl tw-w-full">
          {badge && (
            <div className="tw-inline-block tw-px-3 sm:tw-px-4 tw-py-1 tw-rounded-full tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-xs sm:tw-text-sm tw-mb-4 sm:tw-mb-6">
              {badge}
            </div>
          )}
          <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-4 sm:tw-mb-6 tw-leading-tight tw-px-2 sm:tw-px-0">
            {title}
            {titleHighlight && (
              <span className="tw-text-primary"> {titleHighlight}</span>
            )}
          </h2>
          <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-gray-700 tw-mb-6 sm:tw-mb-8 tw-leading-relaxed tw-px-2 sm:tw-px-0">
            {description}
          </p>

          <div className="tw-space-y-3 sm:tw-space-y-4 md:tw-space-y-6 tw-mb-6 sm:tw-mb-8 md:tw-mb-10">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                variant="horizontal"
                delay={feature.delay || 100}
              >
                {feature.description}
              </FeatureCard>
            ))}
          </div>

          {cta && (
            <div className="tw-px-2 sm:tw-px-0">
              <CtaButton href={cta.href} variant={cta.variant || "primary"} external={cta.external} className="tw-w-full sm:tw-w-auto">
                {cta.text}
              </CtaButton>
            </div>
          )}
        </div>
        <div className="tw-flex-[1.2] tw-mt-8 sm:tw-mt-10 md:tw-mt-0 tw-w-full">
          <div className="tw-relative tw-h-[250px] sm:tw-h-[350px] md:tw-h-[500px] lg:tw-h-[600px] tw-w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="tw-object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default FeatureSectionWithImage;
