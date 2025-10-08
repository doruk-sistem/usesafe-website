"use client";

import Image from "next/image";
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
    <section className={`tw-py-12 sm:tw-py-16 md:tw-py-20 lg:tw-py-24 tw-bg-white ${className}`}>
      <div className="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-6">
        {/* Main Title - Centered at the top */}
        <h2 className="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-8 sm:tw-mb-10 md:tw-mb-12 tw-text-center tw-px-4">
          {title}
        </h2>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-8 sm:tw-gap-10 md:tw-gap-12">
          {/* Left Side - Image */}
          <div className="tw-flex-1 tw-w-full">
            <div className="tw-relative tw-h-[300px] sm:tw-h-[400px] md:tw-h-[500px] lg:tw-h-[600px] tw-w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="tw-object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Description Box */}
          <div className="tw-flex-1 tw-flex tw-justify-center lg:tw-justify-start tw-w-full">
            <div className="tw-w-full tw-max-w-md">
              <div className="tw-bg-gradient-to-b tw-from-teal-400 tw-to-blue-600 tw-p-6 sm:tw-p-8 tw-rounded-xl sm:tw-rounded-2xl tw-shadow-xl">
                <p className="tw-text-white tw-text-base sm:tw-text-lg tw-leading-relaxed tw-mb-4 sm:tw-mb-6">
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
