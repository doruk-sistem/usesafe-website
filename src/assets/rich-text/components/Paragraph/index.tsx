import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "col-start-2 tw-text-base tw-text-gray-600 tw-mb-4 tw-leading-relaxed",
}) => {
  return (
    <p className={className}>
      {children}
    </p>
  );
};
