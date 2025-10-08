"use client";

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
    <section className={`tw-py-24 tw-bg-white ${className}`}>
      <div className="tw-container tw-mx-auto tw-px-0 tw-flex tw-justify-center">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16 tw-max-w-7xl">
          {/* Left Side - Feature Cards (Vertical Layout) */}
          <div className="tw-flex-1">
            <div className="tw-space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tw-bg-white tw-p-5 tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-flex tw-items-start tw-gap-4 tw-h-[130px]"
                >
                  <div className="tw-w-10 tw-h-10 tw-bg-green-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="tw-flex-1">
                    <h3 className="tw-text-lg tw-font-bold tw-text-green-600 tw-mb-3">
                      {feature.title}
                    </h3>
                    <p className="tw-text-base tw-text-gray-600 tw-leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="tw-mt-6">
              <CtaButton href={buttonHref} variant="primary">
                {buttonText}
              </CtaButton>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="tw-flex-1 tw-flex tw-justify-start">
            <div className="tw-relative tw-w-full tw-max-w-xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="tw-w-full tw-h-[600px] tw-object-cover tw-rounded-xl tw-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithImageSection;
