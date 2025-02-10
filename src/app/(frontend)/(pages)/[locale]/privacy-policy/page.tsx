"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPage.PrivacyContent');

  return (
    <>
      <Header />
      <main>
        <div className="container tw-py-16">
          <div className="row justify-content-center">

            <div className="col-12 col-xl-9 col-lg-10">
              <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 md:tw-p-12 tw-mb-8">
                <div className="tw-text-center text-black tw-mb-10">
                  <h1 className="tw-text-3xl tw-font-bold tw-mb-4">{t('title')}</h1>
                </div>
                <div className="tw-space-y-0">
                  <section>
                    <h2 className="tw-text-xl tw-font-semibold">{t('sections.legalDisclaimer.title')}</h2>
                    <div className="tw-h-px tw-bg-gray-200 -tw-mt-1"></div>
                    <p className="tw-text-black tw-leading-relaxed tw-mt-2">
                      {t('sections.legalDisclaimer.content')}
                    </p>
                  </section>

                  <section>
                    <h2 className="tw-text-xl tw-font-semibold">{t('sections.basics.title')}</h2>
                    <div className="tw-h-px tw-bg-gray-200 -tw-mt-1"></div>
                    <p className="tw-text-black tw-leading-relaxed tw-mt-2">
                      {t('sections.basics.content')}
                    </p>
                    <p className="tw-text-black tw-leading-relaxed tw-mt-2">
                      {t('sections.jurisdiction.content')}
                    </p>
                  </section>

                  <section>
                    <h2 className="tw-text-xl tw-font-semibold">{t('sections.inclusion.title')}</h2>
                    <div className="tw-h-px tw-bg-gray-200 -tw-mt-1"></div>
                    <p className="tw-text-black tw-leading-relaxed tw-mt-2">
                      {t('sections.inclusion.content')}
                    </p>
                  </section>
                </div>
                <div className="tw-mt-12 tw-pt-8 tw-border-t tw-border-gray-100">
                  <p className="tw-text-sm tw-text-[#6e6e6e] tw-text-center">
                    <a 
                      href="https://support.wix.com/en/article/creating-a-privacy-policy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="tw-text-black hover:tw-underline"
                    >
                      {t('sections.learnMore.content')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}