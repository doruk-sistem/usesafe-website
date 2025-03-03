"use client";

import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function TopHeader() {
  return (
    <div className="tw-bg-gray-100">
      <div className="tw-container tw-mx-auto tw-py-2">
        <div className="tw-flex tw-justify-between tw-items-center">
          {/* İletişim Bilgileri */}
          <div className="tw-flex tw-gap-3 sm:tw-gap-6 tw-flex-wrap">
            <a
              href="tel:+905551234567"
              className="tw-flex tw-items-center tw-gap-2 hover:tw-text-primary tw-transition-colors"
            >
              <FaPhone className="tw-text-primary" />
              <span className="tw-text-sm">+90 (555) 123 45 67</span>
            </a>
            <a
              href="mailto:info@example.com"
              className="tw-flex tw-items-center tw-gap-2 hover:tw-text-primary tw-transition-colors"
            >
              <FaEnvelope className="tw-text-primary" />
              <span className="tw-text-sm">info@example.com</span>
            </a>
          </div>

          {/* Sosyal Medya ve Reklam Alanı */}
          <div className="tw-flex tw-items-center tw-gap-4">
            {/* Sosyal Medya İkonları - Sadece tablet ve üstünde görünür */}
            <div className="tw-hidden md:tw-flex tw-gap-3">
              <a
                href="#"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="tw-hidden sm:tw-flex tw-text-sm tw-items-center tw-gap-2">
              <a
                href="https://doruksistem.com.tr"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
              >
                <GoArrowUpRight className="tw-w-4 tw-h-4" />
                doruksistem.com.tr
              </a>
              |
              <a
                href="https://msds.com.tr"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
              >
                msds.com.tr <GoArrowUpRight className="tw-w-4 tw-h-4" />
              </a>
              |
              <a
                href="https://turkreach.com.tr"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
              >
                turkrech.com.tr <GoArrowUpRight className="tw-w-4 tw-h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
