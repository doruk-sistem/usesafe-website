"use client";

import React from "react";

import CtaButton from "./CtaButton";

interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="tw-relative tw-py-24 tw-overflow-hidden">
      <div className="tw-absolute tw-inset-0 tw-bg-primary"></div>
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-primary tw-to-blue-700 tw-opacity-90"></div>

      {/* Background Elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-opacity-10 tw-pointer-events-none">
        <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
        <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10">
        <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-8 tw-text-white">
            {title}
          </h2>
          <p className="tw-text-xl tw-mb-10 tw-text-white/90 tw-leading-relaxed">
            {description}
          </p>
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-center tw-gap-6">
            {primaryCta && (
              <CtaButton href={primaryCta.href} variant="white">
                {primaryCta.text}
              </CtaButton>
            )}

            {secondaryCta && (
              <CtaButton
                href={secondaryCta.href}
                variant="outline"
                external={secondaryCta.external}
              >
                {secondaryCta.text}
              </CtaButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
