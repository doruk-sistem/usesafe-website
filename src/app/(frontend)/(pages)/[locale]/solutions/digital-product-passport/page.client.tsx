"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from 'next-intl';

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";

import RenderBlocks from "@/blocks/RenderBlocks";

import { clients } from "@/constants/clients";

export default function DigitalProductPasswordPageClient() {
  const t = useTranslations('DigitalProductPassport');

  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t('page_title'),
              backgroundImage: "/images/product-security.webp",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "clients",
            layout: {
              clients: clients,
              type: "slick",
            },
            sectionOptions: {
              description: t('trusted_brands'),
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center tw-py-0">
                  <Button variant="outline" className="tw-rounded-full">
                    {t('view_all_clients')}
                    <HiArrowNarrowRight className="tw-ml-2" />
                  </Button>
                </div>
              ),
            },
          },
          {
            blockType: "backgroundVideo",
            layout: {
              title: t('video_section.title'),
              description: t('video_section.description'),
              video: {
                src: "/videos/product-security-network.mp4",
                poster: "/images/product-security.webp",
              },
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('experienced_provider.title'),
              description: t('experienced_provider.description'),
              image: {
                src: "/images/remy-testimonial-u-label.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  {t('experienced_provider.button')}
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
              title: t('standards.title'),
              description: t('standards.description'),
              image: {
                src: "/images/cirpass-logo.webp",
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
              title: t('qr_solution.title'),
              description: t('qr_solution.description'),
              image: {
                src: "/images/visual-2a_forjitter-3.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  {t('qr_solution.button')}
                </ButtonSwitchAnimation>
              ),
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
              sectionId: "pricing",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}