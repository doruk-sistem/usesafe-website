"use client";

import Image from "next/image";
import React from "react";

import CtaButton from "./CtaButton";

interface HeroSectionProps {
  badge?: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
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

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="tw-relative tw-overflow-hidden tw-py-24 md:tw-py-32 tw-bg-gradient-to-br tw-from-[#1e3c72] tw-via-[#2a5298] tw-to-[#6dd5ed] tw-text-white">
      {/* Animated SVG Background */}
      <svg
        className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-z-0"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
      >
        <path
          fill="url(#gradient1)"
          d="M0,64L60,69.3C120,75,240,85,360,112C480,139,600,181,720,181.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
        <defs>
          <linearGradient
            id="gradient1"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="#6dd5ed" />
            <stop offset="100%" stopColor="#1e3c72" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Elements */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-opacity-10 tw-pointer-events-none">
        <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-primary tw-opacity-20 tw-blur-3xl"></div>
        <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-blue-400 tw-opacity-20 tw-blur-3xl"></div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-16">
          <div className="tw-flex-1 tw-max-w-2xl">
            {badge && (
              <div className="tw-inline-block tw-px-6 tw-py-2 tw-rounded-full tw-bg-white/20 tw-backdrop-blur-md tw-text-white tw-font-semibold tw-text-base tw-mb-8 tw-shadow-lg tw-border tw-border-white/30 tw-uppercase tw-tracking-wider">
                <span style={{ letterSpacing: "0.08em" }}>{badge}</span>
              </div>
            )}

            <h1 className="tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-font-bold tw-text-white tw-mb-6 tw-leading-tight">
              {title}
            </h1>

            <p className="tw-text-xl tw-text-white tw-mb-10 tw-leading-relaxed">
              {description}
            </p>

            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-5">
              {primaryCta && (
                <CtaButton href={primaryCta.href} variant="primary">
                  {primaryCta.text}
                </CtaButton>
              )}

              {secondaryCta && (
                <CtaButton
                  href={secondaryCta.href}
                  variant="secondary"
                  external={secondaryCta.external}
                >
                  {secondaryCta.text}
                </CtaButton>
              )}
            </div>
          </div>

          <div className="tw-flex-1 tw-mt-12 md:tw-mt-0">
            <div className="tw-relative tw-h-[350px] md:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl">
              {/* Frosted glass overlay */}
              <div
                className="tw-absolute tw-inset-0 tw-bg-white/30 tw-z-10 tw-pointer-events-none"
                style={{ borderRadius: "1rem" }}
              ></div>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="tw-object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
