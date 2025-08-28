"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Toaster } from "react-hot-toast";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import { CONTACT_INFO } from "@/assets/constants/links";
import ModernContactForm from "@/components/Platform/ModernContactForm";

export default function ContactPageClient() {
  const t = useTranslations("ContactUs");

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Toaster position="bottom-center" />

      {/* Banner Section */}
      <div className="tw-relative tw-h-[300px] md:tw-h-[400px] tw-overflow-hidden">
        <Image
          src="/images/contact-1.webp"
          alt="Contact Us Banner"
          fill
          className="tw-object-cover tw-scale-105"
          priority
        />

        {/* Enhanced gradient overlay for better visual appeal */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-gray-900/70 tw-via-gray-800/60 tw-to-gray-900/70"></div>

        {/* Subtle animated background elements */}
        <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
          <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-blue-500/10 tw-blur-3xl tw-animate-pulse"></div>
          <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-teal-500/10 tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"></div>
        </div>

        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white tw-z-10">
            <div
              className="tw-text-5xl md:tw-text-7xl tw-font-bold tw-mb-8 tw-leading-tight tw-shadow-lg"
              style={{
                background: "transparent !important",
                backgroundColor: "transparent !important",
                backgroundImage: "none !important",
                backgroundClip: "unset !important",
                WebkitBackgroundClip: "unset !important",
                WebkitTextFillColor: "white !important",
                color: "white !important",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8) !important",
                padding: "0 !important",
                margin: "0 0 2rem 0 !important",
                border: "none !important",
                outline: "none !important",
                boxShadow: "none !important",
              }}
            >
              {t("page_title")}
            </div>

            {/* Social Media Icons */}
            <div className="tw-flex tw-justify-center tw-items-center tw-space-x-6 tw-mb-6">
              <a
                href="https://www.facebook.com/doruksistem"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-w-12 tw-h-12 tw-bg-white/20 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-white/30 tw-transition-all tw-duration-300 tw-shadow-lg tw-border tw-border-white/30"
              >
                <FaFacebook className="tw-text-xl" />
              </a>
              <a
                href="https://x.com/Usesafe_"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-w-12 tw-h-12 tw-bg-white/20 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-white/30 tw-transition-all tw-duration-300 tw-shadow-lg tw-border tw-border-white/30"
              >
                <FaTwitter className="tw-text-xl" />
              </a>
              <a
                href="https://www.instagram.com/usesafe_safeuse"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-w-12 tw-h-12 tw-bg-white/20 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-white/30 tw-transition-all tw-duration-300 tw-shadow-lg tw-border tw-border-white/30"
              >
                <FaInstagram className="tw-text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/usesafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-w-12 tw-h-12 tw-bg-white/20 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-white/30 tw-transition-all tw-duration-300 tw-shadow-lg tw-border tw-border-white/30"
              >
                <FaLinkedin className="tw-text-xl" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="tw-flex tw-justify-center tw-items-center tw-space-x-8 tw-text-white/90">
              <div className="tw-flex tw-items-center tw-space-x-2">
                <FaEnvelope className="tw-text-lg" />
                <span className="tw-text-lg">{CONTACT_INFO.email}</span>
              </div>
              <div className="tw-flex tw-items-center tw-space-x-2">
                <FaPhone className="tw-text-lg" />
                <span className="tw-text-lg">{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact-form">
        <ModernContactForm />
      </section>
    </div>
  );
}
