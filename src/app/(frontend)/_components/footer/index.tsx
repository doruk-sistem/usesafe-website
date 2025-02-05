"use client";

import React from "react";
import Logo from "../logo";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('ContactUs.Footer');

  return (
    <footer
      className="footer-dark tw-bg-black pb-0 cover-background background-position-left-top"
      style={{ backgroundImage: "url('images/demo-hosting-footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 md-mb-8 sm-mb-40px">
          {/* Logo ve Açıklama */}
          <div className="col-6 col-lg-3 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
            <a href="/" className="tw-mb-5 tw-inline-block tw-w-[150px] tw-h-[150px]">
              <Logo />
            </a>
            <p className="w-90 lg-w-100">
              {t('company_description')}
            </p>
            <div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
              <ul className="small-icon light">
                <li className="my-0">
                  <a className="facebook" href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a className="dribbble" href="http://www.dribbble.com" target="_blank">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a className="twitter" href="http://www.twitter.com" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a className="instagram" href="http://www.instagram.com" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Şirket Bölümü */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              {t('company.title')}
            </span>
            <ul>
              <li><a href="/about">{t('company.about')}</a></li>
              <li><a href="/hosting">{t('company.hosting')}</a></li>
              <li><a href="/domain">{t('company.domain')}</a></li>
              <li><a href="/pricing">{t('company.pricing')}</a></li>
            </ul>
          </div>

          {/* Müşteri Bölümü */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              {t('customer.title')}
            </span>
            <ul>
              <li><a href="/support">{t('customer.client_support')}</a></li>
              <li><a href="/help">{t('customer.help_center')}</a></li>
              <li><a href="/status">{t('customer.system_status')}</a></li>
              <li><a href="/feedback">{t('customer.feedback')}</a></li>
            </ul>
          </div>

          {/* İletişim Bölümü */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              {t('contact.title')}
            </span>
            <span className="d-inline-flex w-100">{t('contact.need_support')}</span>
            <a href={`mailto:${t('contact.email')}`} className="text-white lh-22 text-decoration-line-bottom d-inline-block mb-20px">
              {t('contact.email')}
            </a>
            <span className="d-inline-flex w-100">{t('contact.customer_care')}</span>
            <a href={`tel:${t('contact.phone')}`} className="text-white lh-22 d-inline-flex">
              {t('contact.phone')}
            </a>
          </div>

          {/* Bülten Bölümü */}
          <div className="col-lg-3 col-sm-6 ps-30px sm-ps-15px md-mb-40px xs-mb-0 order-sm-2 order-lg-5">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              {t('newsletter.title')}
            </span>
            <p className="mb-20px">{t('newsletter.description')}</p>
            <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-15px">
              <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                <input
                  className="input-small bg-transparent-white-light border-color-transparent w-100 form-control pe-50px ps-20px lg-ps-15px required"
                  type="email"
                  name="email"
                  placeholder={t('newsletter.placeholder')}
                />
                <input type="hidden" name="redirect" value="" />
                <button className="btn pe-20px submit" aria-label={t('newsletter.button_label')}>
                  <i className="icon bi bi-envelope icon-small text-white"></i>
                </button>
              </form>
            </div>
            <div className="footer-card">
              <a href="#" className="d-inline-block me-5px xxl-me-0 align-middle">
                <img src="/crafto/images/demo-decor-store-payment-icon-01.png" alt="" />
              </a>
              <a href="#" className="d-inline-block me-5px xxl-me-0 align-middle">
                <img src="/crafto/images/demo-decor-store-payment-icon-02.png" alt="" />
              </a>
              <a href="#" className="d-inline-block me-5px xxl-me-0 align-middle">
                <img src="/crafto/images/demo-decor-store-payment-icon-03.png" alt="" />
              </a>
              <a href="#" className="d-inline-block me-5px xxl-me-0 align-middle">
                <img src="/crafto/images/demo-decor-store-payment-icon-04.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center">
          <span className="fs-13 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22">
            {t('legal.recaptcha_text')}{' '}
            <a href="#" className="text-white text-decoration-line-bottom">
              {t('legal.privacy_policy')}
            </a>{' '}
            {t('legal.and')}{' '}
            <a href="#" className="text-white text-decoration-line-bottom">
              {t('legal.terms')}
            </a>{' '}
            {t('legal.disclaimer')}
          </span>
        </div>
      </div>
    </footer>
  );
}