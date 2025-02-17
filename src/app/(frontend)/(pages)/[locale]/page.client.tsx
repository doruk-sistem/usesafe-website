"use client";

import React, { useMemo } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from 'next-intl';
import { GiWorld, GiWaterRecycling, GiConversation } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { LuFootprints } from "react-icons/lu";
import { IoQrCodeOutline } from "react-icons/io5";
import { useLocale } from "next-intl";

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";
import NewsletterBlock from "@/blocks/newsletter-block";

import RenderBlocks from "@/blocks/RenderBlocks";

import Counter from "../../_components/counter";
import { ClientsBlock } from "@/blocks/clients-block/Component";
import { PartnerContent, PartnersData } from "@/collections/partners/types";


interface SlideContent {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  image: {
    url: string;
    alt: string;
  };
}

interface SliderData {
  slides: SlideContent[];
  translations?: {
    tr?: {
      slides: Omit<SlideContent, 'image' | 'buttonLink'>[];
    };
  };
}


interface PageClientProps {
  sliderData?: SliderData;
  partnersData?: PartnersData;
}

export default function PageClient({ sliderData, partnersData }: PageClientProps) {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  const slides = useMemo(() => {
    if (!sliderData?.slides) return [];

    if (locale === 'tr' && sliderData?.translations?.tr?.slides) {
      return sliderData.slides.map((slide, index) => {
        const translation = sliderData?.translations?.tr?.slides?.[index];
        return {
          image: slide.image,
          title: translation?.title || slide.title,
          description: translation?.description || slide.description,
          buttonText: translation?.buttonText || slide.buttonText,
          buttonLink: slide.buttonLink
        };
      });
    }

    return sliderData.slides.map(slide => ({
      image: slide.image,
      title: slide.title,
      description: slide.description,
      buttonText: slide.buttonText,
      buttonLink: slide.buttonLink
    }));
  }, [sliderData, locale]);

  const isPartnerContent = (client: any): client is PartnerContent => {
    return 'logo' in client;
  };

  const allClients = useMemo(() => {
    return (partnersData?.partners || []).map(partner => ({
      name: partner.name,
      imageSrc: partner.logo.url
    }));
  }, [partnersData]);

  return (
    <div>
      <Header />
      <RenderBlocks
        key={`blocks-${locale}`}
        blocks={[
          {
            blockType: "slider",
            layout: {
              slides
            },
            sectionOptions: {
              footerContent: (
                <ClientsBlock
                clients={allClients}
                type="slick"
                gradientColor="transparent"
              />
              
              ),
              innerContainer: true,
              className: "tw-py-5 tw-bg-[url('/images/background-16-9-1.png')] tw-bg-cover tw-bg-center",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: t('revolutionize_title'),
              description: t('revolutionize_description'),
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe_3.webp",
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
                  {t('join_us')}
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
              title: t('trusted_brands_title'),
              description: t('trusted_brands_description'),
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              imagePosition: "right",
              contentFooter: (
                <div>
                  <div className="tw-flex tw-items-center tw-gap-10">
                    <Counter
                      value={2}
                      suffix="M"
                      description={t('certified_products')}
                    />
                    <Counter
                      value={3}
                      suffix="K"
                      description={t('certified_partner')}
                    />
                  </div>
                  <ButtonSwitchAnimation
                    size="lg"
                    uppercase
                    icon={<HiArrowNarrowRight />}
                  >
                    {t('learn_more')}
                  </ButtonSwitchAnimation>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "media",
            layout: {
              src: "/crafto/images/app-demo.webp",
              alt: "Demo Finance 01",
              imgClassName: "tw-w-full tw-object-contain",
              className: "tw-w-full tw-flex tw-justify-center",
              width: 1000,
              height: 1000,
            },
            sectionOptions: {
              innerContainer: true,
              title: "Digital Product Passport",
              description: t('dpp_description'),
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center">
                  <Button>{t('try_free')}</Button>
                </div>
              ),
              className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
            },
          },
          {
            blockType: "counter",
            layout: {
              items: [
                {
                  description: t('counter_section.employees'),
                  value: 25,
                },
                {
                  description: t('counter_section.core_teams'),
                  value: 5,
                },
                {
                  description: t('counter_section.expected_partners'),
                  value: 1500,
                },
                {
                  description: t('counter_section.expected_products'),
                  value: 15,
                },
              ],
            },
            sectionOptions: {
              title: t('counter_section.title'),
              innerContainer: true,
            },
          },
          {
            blockType: "accordion",
            layout: {
              title: t('why_usesafe.approach_title'),
              description: t('why_usesafe.approach_description'),
            },
            sectionOptions: {
              title: t('why_usesafe.title'),
              innerContainer: true,
            },
          },
          {
            blockType: "iconList",
            layout: {
              items: [
                {
                  icon: <GiWorld />,
                  description: t('IconList.items.security.description')
                },
                {
                  icon: <CiDiscount1 />,
                  description: t('IconList.items.usability.description')
                },
                {
                  icon: <GiWaterRecycling />,
                  description: t('IconList.items.quality.description')
                },
                {
                  icon: <LuFootprints />,
                  description: t('IconList.items.speed.description')
                },
                {
                  icon: <IoQrCodeOutline />,
                  description: t('IconList.items.privacy.description')
                },
                {
                  icon: <GiConversation />,
                  description: t('IconList.items.support.description')
                }
              ]
            },
            sectionOptions: {
              innerContainer: true,
              className: "tw-bg-gray-50"
            }
          },
        ]}
      />
      <NewsletterBlock />
      <Footer />
    </div>
  );
}