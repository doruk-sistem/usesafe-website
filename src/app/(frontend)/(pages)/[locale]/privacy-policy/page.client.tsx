"use client";

import React from "react";

import { PrivacyPolicyContent } from "@/components/Platform";

export default function PrivacyPolicyPageClient() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <div id="privacy-policy-content">
        <PrivacyPolicyContent />
      </div>
    </div>
  );
}
