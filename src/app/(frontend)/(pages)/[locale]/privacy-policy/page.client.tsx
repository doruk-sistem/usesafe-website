"use client";

import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import { PrivacyPolicyContent } from "@/components/Platform";

export default function PrivacyPolicyPageClient() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <section id="privacy-policy-content">
        <PrivacyPolicyContent />
      </section>
      <Footer />
    </div>
  );
}
