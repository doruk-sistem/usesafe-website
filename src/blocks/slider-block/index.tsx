"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { useTranslations } from 'next-intl';
import { Button } from "@/frontend/_components/button";
import Link from 'next/link';

interface SlideItem {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
}

export function SliderBlock() {
  const t = useTranslations('Slider');
  const [activeSlide, setActiveSlide] = useState(0);

  // Çevirileri kullanarak slides dizisini oluştur
  const slides: SlideItem[] = [0, 1].map((index) => ({
    title: t(`slides.${index}.title`),
    description: t(`slides.${index}.description`),
    buttonText: t(`slides.${index}.buttonText`),
    buttonUrl: t(`slides.${index}.buttonUrl`),
    image: t(`slides.${index}.image`),
  }));

  return (
    <Slider
      autoplay
      autoplaySpeed={3000}
      dots
      dotsClass="slick-dots tw-relative tw-bottom-0"
      infinite
      speed={500}
      slidesToScroll={1}
      slidesToShow={1}
      arrows={false}
      customPaging={(i) => (
        <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
          <div
            className={`tw-h-2 tw-rounded-full ${
              i === activeSlide
                ? "tw-bg-gray-900 tw-w-2"
                : "tw-bg-gray-300 tw-w-full"
            }`}
          />
        </div>
      )}
      beforeChange={(_current, next) => {
        setActiveSlide(next);
      }}
    >
      {slides.map((slide, index) => (
        <div
          className="!tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-px-4 lg:tw-px-12 tw-py-4 tw-space-y-6"
          key={index}
        >
          {/* Sol taraf - İçerik */}
          <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-items-start tw-space-y-6">
            <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-m-0 tw-text-white">
              {slide.title}
            </h2>
            <p className="tw-text-lg tw-text-gray-300">{slide.description}</p>
            <Link href={slide.buttonUrl}>
              <Button variant="white">
                {slide.buttonText}
              </Button>
            </Link>
          </div>

          {/* Sağ taraf - Görsel */}
          <div
            className="tw-w-full tw-h-full"
            data-bottom-top="transform: translateY(100px)"
            data-top-bottom="transform: translateY(-100px)"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              className="tw-w-full tw-h-auto tw-object-contain tw-max-h-[500px]"
              width={600}
              height={600}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}