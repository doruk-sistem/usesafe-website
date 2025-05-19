"use client";

import React, { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  type: "primary" | "secondary" | "white" | "light";
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  type,
  className = "",
}) => {
  const getBackgroundClasses = () => {
    switch (type) {
      case "primary":
        return "tw-bg-gradient-to-br tw-from-[#1e3c72] tw-via-[#2a5298] tw-to-[#6dd5ed] tw-text-white";
      case "secondary":
        return "tw-bg-gradient-to-br tw-from-primary tw-to-blue-700 tw-opacity-90 tw-text-white";
      case "light":
        return "tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50";
      case "white":
      default:
        return "tw-bg-white";
    }
  };

  return (
    <section className={`tw-relative tw-overflow-hidden tw-py-24 ${getBackgroundClasses()} ${className}`}>
      {/* Animated background elements for primary and secondary types */}
      {(type === "primary" || type === "secondary") && (
        <>
          {type === "primary" && (
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
          )}

          {/* Background blur elements */}
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-overflow-hidden tw-opacity-10 tw-pointer-events-none">
            <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
            <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-white tw-opacity-20 tw-blur-3xl"></div>
          </div>
        </>
      )}

      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6 tw-relative tw-z-10">
        {children}
      </div>
    </section>
  );
};

export default GradientBackground;
