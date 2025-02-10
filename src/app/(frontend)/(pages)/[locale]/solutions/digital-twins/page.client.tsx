"use client";

import React from "react";
import { BsShieldCheck, BsBoxSeam, BsQrCode } from "react-icons/bs";
import { useTranslations } from 'next-intl';

import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function DigitalTwinsPageClient() {
  const t = useTranslations('DigitalTwins');

  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t('page_title'),
              backgroundImage: "/images/blockchain-16-9-1.webp",
              downSectionId: "discover",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('discover.title'),
              description: t('discover.description'),
              image: {
                src: "/images/blockchain-16-9-2.webp",
                alt: "Digital Twin Technology",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg tw-w-full",
              },
              contentFooter: (
                <div className="tw-flex tw-flex-col tw-mt-8 tw-space-y-4">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsBoxSeam className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        {t('discover.features.virtual_experience.title')}
                      </h3>
                    </div>
                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      {t('discover.features.virtual_experience.description')}
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsQrCode className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        {t('discover.features.traceability.title')}
                      </h3>
                    </div>
                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      {t('discover.features.traceability.description')}
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsShieldCheck className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        {t('discover.features.protection.title')}
                      </h3>
                    </div>
                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      {t('discover.features.protection.description')}
                    </p>
                  </div>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
              sectionId: "discover",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('key_benefits.title'),
              description: t('key_benefits.description'),
              image: {
                src: "/images/digital-twim-1-1-1.webp",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg tw-w-full",
              },
              imagePosition: "right",
              contentFooter: (
                <div className="tw-space-y-4 tw-mt-6">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsBoxSeam className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      {t('key_benefits.benefits.virtual_experience')}
                    </p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsQrCode className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      {t('key_benefits.benefits.traceability')}
                    </p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsShieldCheck className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      {t('key_benefits.benefits.protection')}
                    </p>
                  </div>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
              className: "tw-bg-gray-50",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}