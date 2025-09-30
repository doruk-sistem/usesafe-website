"use client";

import React from "react";

import { TermsOfServiceContent } from "@/components/Platform";

export default function TermsOfServicePageClient() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <div id="terms-of-service-content">
        <TermsOfServiceContent />
      </div>
    </div>
  );
}
