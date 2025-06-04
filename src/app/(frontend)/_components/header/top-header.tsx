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
              href="tel:+908505323597"
              className="tw-flex tw-items-center tw-gap-2 hover:tw-text-primary tw-transition-colors"
            >
              <FaPhone className="tw-text-primary" />
              <span className="tw-text-sm">+90 (850) 532 35 97</span>
            </a>
            <a
              href="mailto:info@dorukwell.eu"
              className="tw-flex tw-items-center tw-gap-2 hover:tw-text-primary tw-transition-colors"
            >
              <FaEnvelope className="tw-text-primary" />
              <span className="tw-text-sm">info@dorukwell.eu</span>
            </a>
          </div>

          {/* Sosyal Medya ve Reklam Alanı */}
          <div className="tw-flex tw-items-center tw-gap-4">
            {/* Sosyal Medya İkonları - Sadece tablet ve üstünde görünür */}
            <div className="tw-hidden md:tw-flex tw-gap-3">
              <a
                href="https://www.facebook.com/doruksistem"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/Usesafe_"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Twitter"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/usesafe_safeuse"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/usesafe/"
                className="tw-text-gray-600 hover:tw-text-primary tw-transition-colors"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="tw-hidden sm:tw-flex tw-text-sm tw-items-center tw-gap-2">
              <a
                href="https://doruksistem.com.tr"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
                rel="noopener"
              >
                doruksistem.com.tr
                <GoArrowUpRight className="tw-w-4 tw-h-4" />
              </a>
              |
              <a
                href="https://dorukwell.eu"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
                rel="noopener"
              >
                dorukwell.eu <GoArrowUpRight className="tw-w-4 tw-h-4" />
              </a>
              |
              <a
                href="https://turkreach.com.tr"
                target="_blank"
                className="tw-flex tw-items-center tw-gap-2 tw-text-gray-600 hover:tw-text-primary"
                rel="noopener"
              >
                turkreach.com.tr <GoArrowUpRight className="tw-w-4 tw-h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
