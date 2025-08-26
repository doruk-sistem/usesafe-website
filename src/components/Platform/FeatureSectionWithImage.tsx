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
      <div className={`tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16${imageOnRight ? "" : " md:tw-flex-row-reverse"}`}>
        <div className="tw-flex-1 tw-max-w-xl">
          {badge && (
            <div className="tw-inline-block tw-px-4 tw-py-1 tw-rounded-full tw-bg-primary/10 tw-text-primary tw-font-medium tw-text-sm tw-mb-6">
              {badge}
            </div>
          )}
          <h2 className="tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-6 tw-leading-tight">
            {title}
            {titleHighlight && (
              <span className="tw-text-primary"> {titleHighlight}</span>
            )}
          </h2>
          <p className="tw-text-xl tw-text-gray-700 tw-mb-8 tw-leading-relaxed">
            {description}
          </p>

          <div className="tw-space-y-6 tw-mb-10">
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
            <CtaButton href={cta.href} variant={cta.variant || "primary"} external={cta.external}>
              {cta.text}
            </CtaButton>
          )}
        </div>
        <div className="tw-flex-[1.2] tw-mt-12 md:tw-mt-0">
          <div className="tw-relative tw-h-[500px] md:tw-h-[600px] tw-w-full">
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
