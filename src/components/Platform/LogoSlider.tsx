"use client";

import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";

interface Logo {
  id: number;
  src: string;
  alt: string;
  name: string;
}

interface LogoSliderProps {
  logos: Logo[];
  className?: string;
}

const LogoSlider: React.FC<LogoSliderProps> = ({ logos, className = "" }) => {
  if (!logos || logos.length === 0) return null;

  return (
    <div className={`tw-mt-16 tw-pt-12 tw-pb-0 tw-border-t tw-border-white/20 ${className}`}>
      <div className="tw-relative tw-overflow-hidden tw-h-32 tw-w-full">
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-transparent tw-via-white/5 tw-to-transparent tw-z-10 tw-pointer-events-none"></div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          allowTouchMove={true}
          grabCursor={true}
          freeMode={true}
          className="tw-w-full tw-h-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={`logo-${logo.id}-${index}`} className="tw-w-auto">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-40 tw-h-20 tw-bg-white/10 tw-backdrop-blur-sm tw-rounded-2xl tw-border tw-border-white/20 hover:tw-bg-white/20 hover:tw-scale-110 tw-transition-all tw-duration-300 tw-cursor-pointer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="tw-object-contain tw-max-w-full tw-max-h-full tw-filter tw-brightness-0 tw-invert hover:tw-filter-none tw-transition-all tw-duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
