"use client";

import Image from "next/image";
import React from "react";

import CtaButton from "./CtaButton";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesWithImageSectionProps {
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const FeaturesWithImageSection: React.FC<FeaturesWithImageSectionProps> = ({
  features,
  imageSrc,
  imageAlt,
  buttonText = "Get Started",
  buttonHref = "/contact",
  className = "",
}) => {
  return (
    <section className={`tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-white ${className}`}>
      <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-gap-8 sm:tw-gap-10 md:tw-gap-12 tw-max-w-7xl tw-mx-auto">
          {/* Left Side - Feature Cards (Vertical Layout) */}
          <div className="tw-flex-1 tw-w-full lg:tw-max-w-lg">
            <div className="tw-space-y-4 sm:tw-space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tw-bg-white tw-p-4 sm:tw-p-6 tw-rounded-lg sm:tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-flex tw-items-start tw-gap-3 sm:tw-gap-4 tw-min-h-[120px] sm:tw-min-h-[140px]"
                >
                  <div className="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-green-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="tw-flex-1 tw-min-w-0">
                    <h3 className="tw-text-base sm:tw-text-lg tw-font-bold tw-text-green-600 tw-mb-2 sm:tw-mb-3 tw-leading-tight">
                      {feature.title}
                    </h3>
                    <p className="tw-text-sm tw-text-gray-600 tw-leading-relaxed tw-break-words">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="tw-mt-6 sm:tw-mt-8">
              <CtaButton href={buttonHref} variant="primary" className="tw-w-full sm:tw-w-auto">
                {buttonText}
              </CtaButton>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="tw-flex-[2] tw-flex tw-justify-start tw-w-full tw-mt-8 lg:tw-mt-0">
            <div className="tw-relative tw-w-full tw-h-[300px] sm:tw-h-[400px] md:tw-h-[500px] lg:tw-h-[600px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="tw-object-cover tw-rounded-lg sm:tw-rounded-xl tw-shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithImageSection;
