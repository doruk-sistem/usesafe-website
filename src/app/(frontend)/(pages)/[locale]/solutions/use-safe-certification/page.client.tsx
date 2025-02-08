"use client";

import React from "react";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";

import RenderBlocks from "@/blocks/RenderBlocks";

export default function UseSafeCertificationPageClient() {
  const t = useTranslations('UseSafeCertification');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t('page_title'),
              backgroundImage: "/images/products-1.webp",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "certificationIntro",
            layout: {
              title: t('hero.title'),
              description: t('hero.description'),
              backgroundImage: "/images/certification-hero-banner.avif",
              contentFooter: (
                <div className="container">
                  <div className="tw-flex tw-justify-center tw-mt-8">
                    <Link href={`/${locale}/demo`}>
                      <button 
                        className="tw-bg-black tw-text-white tw-font-medium tw-px-8 tw-py-3 tw-rounded-md hover:tw-bg-gray-900 tw-transition-all tw-duration-300 tw-transform hover:tw-scale-105 tw-shadow-lg hover:tw-shadow-xl"
                      >
                        {t('hero.button')}
                      </button>
                    </Link>
                  </div>
                </div>
              )
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('trust_symbol.title'),
              description: t('trust_symbol.description'),
              image: {
                src: "/images/use-safe-products-2.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('confidence.title'),
              description: t('confidence.description'),
              image: {
                src: "/images/use-safe-products-3.webp",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              imagePosition: "right",
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('user_experience.title'),
              description: t('user_experience.description'),
              image: {
                src: "/images/use-safe-products-4.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "pricing",
            layout: undefined,
            sectionOptions: {
              innerContainer: true,
              sectionId: "request-demo",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}