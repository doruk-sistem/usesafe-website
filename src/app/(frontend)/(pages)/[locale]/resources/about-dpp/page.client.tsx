"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from 'next-intl';
import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function AboutDppPageClient() {
  const t = useTranslations('AboutDpp');

  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "contentWithImage",
            layout: {
              title: t('dpp_intro.title'),
              description: t('dpp_intro.description'),
              image: {
                src: "/images/product-security-1-1.webp",
                alt: "Digital Product Passport",
                width: 580,
                height: 684,
                imgClassName: "tw-w-full tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  {t('dpp_intro.button')}
                </ButtonSwitchAnimation>
              ),
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('core_components.title'),
              description: t('core_components.description'),
              image: {
                src: "/images/touch-id-1-1.webp",
                alt: "DPP Components",
                width: 580,
                height: 684,
                imgClassName: "tw-w-full tw-rounded-lg",
              },
              imagePosition: "right",
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "counter",
            layout: {
              items: [
                {
                  description: t('benefits.items.material_efficiency.description'),
                  value: Number(t('benefits.items.material_efficiency.value')),
                  suffix: t('benefits.items.material_efficiency.suffix'),
                },
                {
                  description: t('benefits.items.waste_reduction.description'),
                  value: Number(t('benefits.items.waste_reduction.value')),
                  suffix: t('benefits.items.waste_reduction.suffix'),
                },
                {
                  description: t('benefits.items.carbon_footprint.description'),
                  value: Number(t('benefits.items.carbon_footprint.value')),
                  suffix: t('benefits.items.carbon_footprint.suffix'),
                },
              ],
            },
            sectionOptions: {
              title: t('benefits.title'),
              innerContainer: true,
            },
          },
          {
            blockType: "media",
            layout: {
              src: "/images/shop-success-2-1.webp",
              alt: "DPP Implementation",
              imgClassName: "tw-object-contain tw-rounded-lg",
              className: "tw-w-full tw-flex tw-justify-center",
              width: 1000,
              height: 1000,
            },
            sectionOptions: {
              innerContainer: true,
              title: t('implementation.title'),
              description: t('implementation.description'),
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center">
                  <Button>{t('implementation.button')}</Button>
                </div>
              ),
              className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}