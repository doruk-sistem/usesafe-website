"use client";

import React from "react";
import Logo from "../logo";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('ContactUs.Footer');

  return (
    <footer
      className="footer-dark tw-bg-white pb-0 cover-background background-position-left-top"
      style={{ backgroundImage: "url('images/demo-hosting-footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-between mb-5 md-mb-8 sm-mb-40px">
          <div className="col-12 col-lg-3 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
            <a href="/" className="tw-mb-5 tw-inline-block tw-w-[250px] tw-h-[250px]">
              <Logo />
            </a>
            <p className="fs-16 mt-3" style={{ color: '#6e6e6e' }}>
              {t('copyright')}
            </p>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
            <span className="fs-25 fw-500 d-block text-black mb-5px">
              {t('company.title')}
            </span>
            <ul className="list-unstyled text-[#6e6e6e]">
            <li><a href="/solutions/use-safe-certification" className="fs-16">{t('company.usesafe')}</a></li>
              <li><a href="/resources/about-dpp" className="fs-16">{t('company.about')}</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
            <span className="fs-25 fw-500 d-block text-black mb-5px">
              {t('legal.title')}
            </span>
            <ul className="list-unstyled text-[#6e6e6e]">
              <li><a href="/terms-conditions" className="fs-16">{t('legal.terms-conditions')}</a></li>
              <li><a href="/privacy-policy" className="fs-16">{t('legal.privacy-policy')}</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
            <span className="fs-25 fw-500 d-block text-black mb-5px">
              {t('social.title')}
            </span>
            <ul className="list-unstyled  text-[#6e6e6e]">
              <li><a href="https://www.linkedin.com/company/doruksistem-as/posts/?feedView=all" className="fs-16">{t('social.LinkedIn')}</a></li>
              <li><a href="https://www.facebook.com/doruksistem" className="fs-16">{t('social.Facebook')}</a></li>
              <li><a href="https://www.instagram.com/doruksistem/" className="fs-16">{t('social.Instagram')}</a></li>
              <li><a href="https://x.com/doruksistem" className="fs-16">{t('social.X')}</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6 ps-30px sm-ps-15px md-mb-40px xs-mb-0 order-sm-2 order-lg-5">
            <span className="fs-25 fw-500 d-block text-black mb-5px">
              {t('newsletter.title')}
            </span>
            <div className="mb-20px text-[#6e6e6e]">
              <p className="mb-4 fs-16">{t('newsletter.company')}</p>
              
              <p className="mb-1 fs-16">{t('newsletter.email')}</p>
              <p className="mb-4 fs-16">{t('newsletter.phone')}</p>

              <p className="mb-1 fs-16">{t('newsletter.address.germany.street')}</p>
              <p className="mb-4 fs-16">{t('newsletter.address.germany.city')}</p>
              
              <p className="mb-1 fs-16">{t('newsletter.address.turkey.street')}</p>
              <p className="fs-16">{t('newsletter.address.turkey.city')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}