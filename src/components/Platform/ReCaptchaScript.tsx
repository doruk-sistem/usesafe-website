"use client";

import Script from "next/script";
import React from "react";

interface ReCaptchaScriptProps {
  siteKey: string;
}

/**
 * Loads Google reCAPTCHA v3 script.
 * Must be used on pages that need reCAPTCHA (e.g. contact form).
 * Site key from NEXT_PUBLIC_RECAPTCHA_SITE_KEY
 */
export function ReCaptchaScript({ siteKey }: ReCaptchaScriptProps) {
  if (!siteKey) {
    return null;
  }

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
      strategy="afterInteractive"
    />
  );
}
