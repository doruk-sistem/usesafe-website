"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

import { Button } from "@/frontend/_components/button";
import Section from "../../section";

interface SlideItem {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
}

const slides: SlideItem[] = [
  {
    title: "Hoş Geldiniz",
    description: "Modern ve yenilikçi çözümlerle işinizi ileriye taşıyın.",
    buttonText: "Daha Fazla",
    buttonUrl: "/hakkimizda",
    image: "/crafto/images/demo-seo-agency-process-01.png",
  },
  {
    title: "Merhaba!",
    description: "Modern ve yenilikçi çözümlerle işinizi ileriye taşıyın.",
    buttonText: "Daha Fazla",
    buttonUrl: "/hakkimizda",
    image: "/crafto/images/demo-seo-agency-process-01.png",
  },
];

export default function SliderBlock() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Section className="tw-py-3 tw-bg-gradient-to-b tw-from-gray-100">
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
            {/* Left side - Content */}
            <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-items-start tw-space-y-6">
              <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-m-0">
                {slide.title}
              </h2>
              <p className="tw-text-lg tw-text-gray-600">{slide.description}</p>
              <Button>{slide.buttonText}</Button>
            </div>

            {/* Right side - Image */}
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
    </Section>
  );
}
