"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: React.ReactNode;
  highlightedText?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  highlightedText,
  className = "",
}) => {
  // Replace the highlighted text with a span if provided
  const formattedTitle = highlightedText
    ? title.replace(highlightedText, `<span class="tw-text-primary">${highlightedText}</span>`)
    : title;

  return (
    <div className={`tw-max-w-3xl tw-mx-auto tw-mb-12 sm:tw-mb-16 tw-px-4 ${className}`}>
      <div className="tw-flex tw-justify-center tw-mb-4 sm:tw-mb-6">
        <div className="tw-h-1 tw-w-16 sm:tw-w-24 tw-bg-primary tw-rounded-full"></div>
      </div>
      <h2
        className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-gray-900 tw-drop-shadow-lg tw-mb-4 sm:tw-mb-6 tw-text-center"
        dangerouslySetInnerHTML={{ __html: formattedTitle }}
      />
      {description && (
        <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-gray-700 tw-text-center tw-leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
