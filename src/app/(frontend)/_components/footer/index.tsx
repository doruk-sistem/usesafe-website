"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Logo from "../logo";

export default function Footer() {
  const t = useTranslations("ContactUs.Footer");

  return (  
    <footer
      className={`tw-bg-white tw-border-t tw-border-gray-10`}
    >
      <div className="container tw-py-8">
        <div className="row justify-content-between tw-gap-y-6">
          {/* Logo ve Copyright */}
          <div className="col-12 col-lg-3 order-sm-1">
            <a href="/" className="tw-block tw-w-[120px] md:tw-w-[135px] lg:tw-w-[150px] tw-h-[120px] md:tw-h-[135px] lg:tw-h-[150px]">
              <Logo className="!tw-w-[120px] !tw-h-[120px] md:!tw-w-[135px] md:!tw-h-[135px] lg:!tw-w-[150px] lg:!tw-h-[150px]" />
            </a>
            <p className="tw-text-gray-600 tw-mt-4">
              {t("copyright")}
            </p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-lg-2 col-sm-4 order-sm-3">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {t("company.title")}
            </h3>
            <ul className="tw-space-y-4">
              <li>
                <a href="/solutions/use-safe-certification" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors">
                  {t("company.usesafe")}
                </a>
              </li>
              <li>
                <a href="/resources/about-dpp" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors">
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
                <a href="/terms-conditions" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors">
                  {t("legal.terms-conditions")}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors">
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
                <a href="https://www.linkedin.com/company/doruksistem-as/posts/?feedView=all" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2">
                  <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  {t("social.LinkedIn")}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/doruksistem" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2">
                  <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                  {t("social.Facebook")}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/doruksistem/" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2">
                  <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {t("social.Instagram")}
                </a>
              </li>
              <li>
                <a href="https://x.com/doruksistem" 
                   className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2">
                  <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
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
              <p>{t("newsletter.email")}</p>
              <p>{t("newsletter.phone")}</p>
              
              <div className="tw-mt-6">
                <p>{t("newsletter.address.germany.street")}</p>
                <p className="tw-mt-1">{t("newsletter.address.germany.city")}</p>
              </div>
              
              <div className="tw-mt-6">
                <p>{t("newsletter.address.turkey.street")}</p>
                <p className="tw-mt-1">{t("newsletter.address.turkey.city")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}