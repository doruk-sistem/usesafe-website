"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Toaster } from "react-hot-toast";

import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import { ModernContactForm } from "@/components/Platform";

export default function ContactPageClient() {
  const t = useTranslations("ContactUs");

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Toaster position="bottom-center" />

      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t("page_title"),
              backgroundImage: "/images/contact-1.webp",
              downSectionId: "contact-form",
            },
            blockOptions: {
              className: "tw-py-0",
            },
          },
        ]}
      />

      <section id="contact-form">
        <ModernContactForm />
      </section>

      <NewsletterBlock />
    </div>
  );
}
