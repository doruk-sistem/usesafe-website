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
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center lg:tw-items-start tw-gap-6 sm:tw-gap-8 md:tw-gap-12 tw-max-w-7xl tw-mx-auto">
          {/* Left Side - Feature Cards (Vertical Layout) */}
          <div className="tw-flex-1 tw-w-full lg:tw-max-w-lg">
            <div className="tw-space-y-2 sm:tw-space-y-3 md:tw-space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tw-bg-white tw-p-2.5 sm:tw-p-3 md:tw-p-4 lg:tw-p-6 tw-rounded tw-rounded-md sm:tw-rounded-lg md:tw-rounded-xl tw-shadow-sm sm:tw-shadow-lg tw-border tw-border-gray-100 tw-flex tw-items-start tw-gap-2 sm:tw-gap-2.5 md:tw-gap-3 lg:tw-gap-4 tw-min-h-[70px] sm:tw-min-h-[85px] md:tw-min-h-[100px] lg:tw-min-h-[120px] tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-scale-[1.01] sm:hover:tw-scale-[1.02]"
                >
                  <div className="tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8 md:tw-w-10 md:tw-h-10 lg:tw-w-12 lg:tw-h-12 tw-bg-green-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-shadow-sm">
                    <div className="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 lg:tw-w-6 lg:tw-h-6 tw-text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="tw-flex-1 tw-min-w-0">
                    <h3 className="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-bold tw-text-green-600 tw-mb-0.5 sm:tw-mb-1 md:tw-mb-2 tw-leading-tight">
                      {feature.title}
                    </h3>
                    <p className="tw-text-xs sm:tw-text-xs md:tw-text-sm lg:tw-text-base tw-text-gray-600 tw-leading-relaxed tw-break-words">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="tw-mt-3 sm:tw-mt-4 md:tw-mt-6">
              <CtaButton href={buttonHref} variant="primary" className="tw-w-full sm:tw-w-auto tw-justify-center">
                {buttonText}
              </CtaButton>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="tw-flex-[2] tw-flex tw-justify-center lg:tw-justify-start tw-w-full tw-mt-8 lg:tw-mt-0">
            <div className="tw-relative tw-w-full tw-h-[280px] sm:tw-h-[350px] md:tw-h-[450px] lg:tw-h-[600px] tw-max-w-2xl lg:tw-max-w-none">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="tw-object-cover tw-rounded-lg sm:tw-rounded-xl tw-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithImageSection;
