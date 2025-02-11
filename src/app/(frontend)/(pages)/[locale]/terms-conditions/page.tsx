"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";

export default function TermsConditions() {
  const t = useTranslations('TermsPage.TermsContent');

  return (
    <>
      <Header />
      <main>
        <div className="container tw-py-16">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-9 col-lg-10">
              <div className="tw-bg-white tw-p-8 md:tw-p-12">
                <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-8 tw-text-black">{t('title')}</h1>
                
                <div>
                  <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-black">{t('sections.legalDisclaimer.title')}</h2>
                  <p className="tw-text-gray-700">
                    {t('sections.legalDisclaimer.content')}
                  </p>

                  <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-mt-4 tw-text-black">{t('sections.basics.title')}</h2>
                  <p className="tw-text-gray-700">
                    {t('sections.basics.content')}
                  </p>
                  <p className="tw-text-gray-700">
                    {t('sections.specificity.content')}
                  </p>
                  <p className="tw-text-gray-700">
                    {t('sections.protection.content')}
                  </p>

                  <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-mt-4 tw-text-black">{t('sections.inclusion.title')}</h2>
                  <p className="tw-text-gray-700">
                    {t('sections.inclusion.content')}
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