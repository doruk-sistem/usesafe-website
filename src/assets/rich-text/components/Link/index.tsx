import NextLink from "next/link";
import React from "react";

interface LinkProps {
  newTab?: boolean;
  reference?: { slug: string };
  type?: "reference" | "custom";
  url?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  newTab,
  reference,
  type = "custom",
  url,
  children,
}) => {
  const href = type === "reference" ? reference?.slug : url;

  if (!href) return null;

  if (type === "custom" && href.startsWith("http")) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      {children}
    </NextLink>
  );
};
