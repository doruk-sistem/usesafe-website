"use client";

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import { TermsOfServiceContent } from "@/components/Platform";

import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function TermsOfServicePageClient() {
  const t = useTranslations("TermsOfService");

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t("page_title"),
              backgroundImage: "/images/background-16-9-1.png",
              downSectionId: "terms-of-service-content",
            },
            blockOptions: {
              className: "tw-py-0",
            },
          },
        ]}
      />

      <section id="terms-of-service-content">
        <TermsOfServiceContent />
      </section>

      <NewsletterBlock />
      <Footer />
    </div>
  );
}
