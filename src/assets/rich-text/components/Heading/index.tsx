import React, { ElementType } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = `h${level}` as ElementType;

  const headingClasses = {
    1: "col-start-2 tw-text-6xl tw-font-bold tw-mb-6 tw-leading-tight",
    2: "col-start-2 tw-text-5xl tw-font-bold tw-mb-5 tw-leading-tight",
    3: "col-start-2 tw-text-4xl tw-font-bold tw-mb-4 tw-leading-tight",
    4: "col-start-2 tw-text-3xl tw-font-semibold tw-mb-4 tw-leading-tight",
    5: "col-start-2 tw-text-2xl tw-font-semibold tw-mb-3 tw-leading-tight",
    6: "col-start-2 tw-text-xl tw-font-semibold tw-mb-3 tw-leading-tight",
  }[level];

  return <Tag className={headingClasses}>{children}</Tag>;
};
