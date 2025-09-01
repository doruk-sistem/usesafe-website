import React from "react";

import { FeatureCard, SectionHeader, GradientBackground } from "@/components/Platform";

export interface KeyBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface KeyBenefitsSectionProps {
  title: string;
  description: string;
  highlightedText?: string;
  benefits: KeyBenefit[];
  gradientType?: "primary" | "secondary" | "white" | "light";
  variant?: "default" | "glass";
  className?: string;
  useCustomWrapper?: boolean;
  customWrapperClass?: string;
}

const KeyBenefitsSection: React.FC<KeyBenefitsSectionProps> = ({
  title,
  description,
  highlightedText,
  benefits,
  gradientType = "white",
  variant = "default",
  className = "",
  useCustomWrapper = false,
  customWrapperClass = "",
}) => {
  const content = (
    <>
      <SectionHeader
        title={title}
        highlightedText={highlightedText}
        description={description}
      />

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mt-12">
        {benefits.map((benefit, index) => (
          <FeatureCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            delay={benefit.delay || index * 100}
            variant={variant}
          >
            {benefit.description}
          </FeatureCard>
        ))}
      </div>
    </>
  );

  if (useCustomWrapper) {
    return (
      <section className={`${customWrapperClass} ${className}`}>
        <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
          {content}
        </div>
      </section>
    );
  }

  return (
    <GradientBackground type={gradientType} className={className}>
      {content}
    </GradientBackground>
  );
};

export default KeyBenefitsSection;
