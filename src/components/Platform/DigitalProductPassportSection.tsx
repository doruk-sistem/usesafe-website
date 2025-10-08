"use client";

import React from "react";

import CtaButton from "./CtaButton";

interface DigitalProductPassportSectionProps {
  title?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const DigitalProductPassportSection: React.FC<DigitalProductPassportSectionProps> = ({
  title = "UseSafe® Digital Product Passport",
  description,
  buttonText = "Request a Demo",
  buttonHref = "/contact",
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <section className={`tw-py-24 tw-bg-white ${className}`}>
      <div className="tw-container tw-mx-auto tw-px-0">
        {/* Main Title - Centered at the top */}
        <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-12 tw-text-center">
          {title}
        </h2>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-12">
          {/* Left Side - Image */}
          <div className="tw-flex-1">
            <div className="tw-relative tw-h-[500px] md:tw-h-[600px] tw-w-full">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>

          {/* Right Side - Description Box */}
          <div className="tw-flex-1 tw-flex tw-justify-center lg:tw-justify-start">
            <div className="tw-w-full tw-max-w-md">
              <div className="tw-bg-gradient-to-b tw-from-teal-400 tw-to-blue-600 tw-p-6 tw-rounded-2xl tw-shadow-xl">
                <p className="tw-text-white tw-text-lg tw-leading-relaxed tw-mb-4">
                  {description}
                </p>
                <CtaButton
                  href={buttonHref}
                  variant="white"
                  className="tw-w-full"
                >
                  {buttonText}
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProductPassportSection;
