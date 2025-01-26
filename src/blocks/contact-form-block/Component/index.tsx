import React from "react";
import { ContactFormBlockVariant1 } from "./variant-1";
import { ContactFormBlockVariant2 } from "./variant-2";

interface ContactFormBlockProps {
  variant: "variant-1" | "variant-2";
}

export function ContactFormBlock({ variant }: ContactFormBlockProps) {
  if (variant === "variant-1") {
    return <ContactFormBlockVariant1 />;
  }

  if (variant === "variant-2") {
    return <ContactFormBlockVariant2 />;
  }

  return null;
}
