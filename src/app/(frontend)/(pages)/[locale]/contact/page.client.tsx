"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Toaster } from "react-hot-toast";

import ModernContactForm from "@/components/Platform/ModernContactForm";

export default function ContactPageClient() {
  const t = useTranslations("ContactUs");

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Toaster position="bottom-center" />

      {/* Banner Section */}
      <div className="tw-relative tw-h-[300px] tw-md:h-[300px] tw-overflow-hidden">
        <Image
          src="/images/contact-1.webp"
          alt="Contact Us Banner"
          fill
          className="tw-object-cover"
          priority
        />
        {/* Light gray overlay for better text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-gray-100/20"></div>
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <h1 className="tw-text-5xl tw-md:text-6xl tw-font-bold tw-mb-4">
              {t("page_title")}
            </h1>
          </div>
        </div>
      </div>

      <section id="contact-form">
        <ModernContactForm />
      </section>
    </div>
  );
}
