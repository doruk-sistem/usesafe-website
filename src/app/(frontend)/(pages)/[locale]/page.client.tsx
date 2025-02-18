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

import { ClientsBlock } from "@/blocks/clients-block/Component";
import { PartnersData } from "@/collections/partners/types";
import { ContentWithImageData } from "@/collections/content-with-image/types";
import { MediaBlockData } from "@/collections/media-block/types";
import Link from "next/link";
import { CounterData } from "@/collections/counter/types";

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
  contentWithImageData?: ContentWithImageData[];
  mediaBlockData?: MediaBlockData[];
  counterData?: CounterData[];
}

export default function PageClient({ sliderData, partnersData, contentWithImageData, mediaBlockData, counterData }: PageClientProps) {
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


    // ContentWithImage bloklarını ekle
    ...(contentWithImageData || [])
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((content: ContentWithImageData) => ({
      blockType: "contentWithImage" as const,
      layout: {
        title: locale === 'tr' && content.translations?.tr?.title
          ? content.translations.tr.title
          : content.title,
        description: locale === 'tr' && content.translations?.tr?.description
          ? content.translations.tr.description
          : content.description,
        image: {
          src: content.image.url,
          alt: content.image.alt,
          width: content.image.width || 580,
          height: content.image.height || 684,
          imgClassName: "tw-rounded-lg",
        },
        order: content.order,
        contentFooter: (
          <Link 
            href={
              locale === 'tr' && content.translations?.tr?.buttonLink 
                ? content.translations.tr.buttonLink 
                : content.buttonLink || '#'
            }
          >
            <ButtonSwitchAnimation
              size="lg"
              uppercase
              icon={<HiArrowNarrowRight />}
            >
              {locale === 'tr' && content.translations?.tr?.buttonText 
                ? content.translations.tr.buttonText 
                : content.buttonText}
            </ButtonSwitchAnimation>
          </Link>
        ),
      },
      sectionOptions: {
        innerContainer: true,
      },
    })),
    // Diğer statik bloklar
    
    ...(mediaBlockData || []).map((media: MediaBlockData) => ({
      blockType: "media" as const,
      layout: {
        src: media.media.url,
        alt: media.media.alt,
        imgClassName: "tw-w-full tw-object-contain",
        className: "tw-w-full tw-flex tw-justify-center",
        width: media.media.width || 1000,
        height: media.media.height || 1000,
      },
      sectionOptions: {
        innerContainer: true,
        title: locale === 'tr' && media.translations?.tr?.title 
          ? media.translations.tr.title 
          : media.title,
        description: locale === 'tr' && media.translations?.tr?.description
          ? media.translations.tr.description 
          : media.description,
        footerContent: (
          <div className="tw-flex tw-justify-center tw-items-center">
            <Link 
              href={locale === 'tr' && media.translations?.tr?.buttonLink 
                ? media.translations.tr.buttonLink 
                : media.buttonLink || '#'}
            >
              <Button>
                {locale === 'tr' && media.translations?.tr?.buttonText 
                  ? media.translations.tr.buttonText 
                  : media.buttonText}
              </Button>
            </Link>
          </div>
        ),
        className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
      },
    })),
    ...(counterData || []).map((counter: CounterData) => ({
      blockType: "counter" as const,
      layout: {
        items: locale === 'tr' && counter.translations?.tr?.items 
          ? counter.translations.tr.items 
          : counter.items,
      },
      sectionOptions: {
        title: locale === 'tr' && counter.translations?.tr?.title 
          ? counter.translations.tr.title 
          : counter.title,
        innerContainer: true,
      },
    })),
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