"use client";

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import { PrivacyPolicyContent } from "@/components/Platform";

import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function PrivacyPolicyPageClient() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t("page_title"),
              backgroundImage: "/images/privacy-policy-bg.webp",
              downSectionId: "privacy-policy-content",
            },
            blockOptions: {
              className: "tw-py-0",
            },
          },
        ]}
      />

      <section id="privacy-policy-content">
        <PrivacyPolicyContent />
      </section>

      <NewsletterBlock />
      <Footer />
    </div>
  );
}
