"use client";

import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";

import { ClientsBlock } from "../clients-block/Component";

import { Media } from "@/components/Media";
import { Button } from "@/frontend/_components/button";
import type { SliderBlock } from "@/payload-types";

export function SliderBlock({ sliders, clients }: SliderBlock) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="tw-py-10 tw-bg-[url('/images/background-16-9-1.png')] tw-bg-cover tw-bg-center">
      <div className="tw-container">
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
          {sliders.map((slide, index) => (
            <div
              className="!tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-px-4 lg:tw-px-12 tw-py-4 tw-space-y-6"
              key={index}
            >
              <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-items-start tw-space-y-6">
                <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-m-0 tw-text-white">
                  {slide.title}
                </h2>
                <p className="tw-text-lg tw-text-gray-300">
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Link href={slide.buttonLink}>
                    <Button variant="white">{slide.buttonText}</Button>
                  </Link>
                )}
              </div>

              <div
                className="tw-w-full tw-h-full"
                data-bottom-top="transform: translateY(100px)"
                data-top-bottom="transform: translateY(-100px)"
              >
                <Media
                  resource={slide.image}
                  className="tw-w-full tw-h-auto tw-object-contain tw-max-h-[500px]"
                />
              </div>
            </div>
          ))}
        </Slider>

        {clients && Array.isArray(clients) && clients.length > 0 && (
          <div className="tw-py-10">
            <ClientsBlock
              clients={clients as any}
              type="slick"
              gradientColor="transparent"
            />
          </div>
        )}
      </div>
    </div>
  );
}
