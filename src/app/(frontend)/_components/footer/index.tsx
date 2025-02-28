"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Logo from "../logo";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "@/assets/icons";

import { SOCIAL_LINKS, CONTACT_INFO } from "@/assets/constants/links";

export default function Footer() {
  const t = useTranslations("ContactUs.Footer");

  return (
    <footer className={`tw-bg-white tw-border-t tw-border-gray-10`}>
      <div className="container tw-py-8">
        <div className="row justify-content-between tw-gap-y-6">
          {/* Logo ve Copyright */}
          <div className="col-12 col-lg-3 order-sm-1">
            <a
              href="/"
              className="tw-block tw-w-[120px] md:tw-w-[135px] lg:tw-w-[150px] tw-h-[120px] md:tw-h-[135px] lg:tw-h-[150px]"
            >
              <Logo className="!tw-w-[120px] !tw-h-[120px] md:!tw-w-[135px] md:!tw-h-[135px] lg:!tw-w-[150px] lg:!tw-h-[150px]" />
            </a>
            <p className="tw-text-gray-600 tw-mt-4">{t("copyright")}</p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-lg-2 col-sm-4 order-sm-3">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {t("company.title")}
            </h3>
            <ul className="tw-space-y-4">
              <li>
                <a
                  href="/solutions/use-safe-certification"
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                >
                  {t("company.usesafe")}
                </a>
              </li>
              <li>
                <a
                  href="/resources/about-dpp"
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                >
                  {t("company.about")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-6 col-lg-2 col-sm-4 order-sm-3">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {t("legal.title")}
            </h3>
            <ul className="tw-space-y-4">
              <li>
                <a
                  href="/terms-conditions"
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                >
                  {t("legal.terms-conditions")}
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                >
                  {t("legal.privacy-policy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-6 col-lg-2 col-sm-4 order-sm-4">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {t("social.title")}
            </h3>
            <ul className="tw-space-y-4">
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2"
                >
                  <LinkedInIcon className="tw-w-5 tw-h-5" />
                  {t("social.LinkedIn")}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2"
                >
                  <FacebookIcon className="tw-w-5 tw-h-5" />
                  {t("social.Facebook")}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2"
                >
                  <InstagramIcon className="tw-w-5 tw-h-5" />
                  {t("social.Instagram")}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2"
                >
                  <XIcon className="tw-w-5 tw-h-5" />
                  {t("social.X")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-sm-6 order-sm-5">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {t("newsletter.title")}
            </h3>
            <div className="tw-space-y-4 tw-text-gray-600">
              <p>{t("newsletter.company")}</p>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="tw-block hover:tw-text-gray-900 tw-transition-colors"
              >
                {t("newsletter.email")}
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="tw-block hover:tw-text-gray-900 tw-transition-colors"
              >
                {t("newsletter.phone")}
              </a>

              <a
                href={CONTACT_INFO.addresses.germany.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-block tw-mt-6 hover:tw-text-gray-900 tw-transition-colors"
              >
                <p>{t("newsletter.address.germany.street")}</p>
                <p className="tw-mt-1">
                  {t("newsletter.address.germany.city")}
                </p>
              </a>

              <a
                href={CONTACT_INFO.addresses.turkey.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-block tw-mt-6 hover:tw-text-gray-900 tw-transition-colors"
              >
                <p>{t("newsletter.address.turkey.street")}</p>
                <p className="tw-mt-1">{t("newsletter.address.turkey.city")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
