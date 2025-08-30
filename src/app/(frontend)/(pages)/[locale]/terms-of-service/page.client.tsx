"use client";

import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import { TermsOfServiceContent } from "@/components/Platform";

export default function TermsOfServicePageClient() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <section id="terms-of-service-content">
        <TermsOfServiceContent />
      </section>
      <Footer />
    </div>
  );
}
