import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import { ClientsBlockProps } from ".";

interface ClientsSlickProps extends ClientsBlockProps {
  clients: ClientsBlockProps["clients"];
  gradientColor?: string;
}

export default function ClientsSlick({
  gradientColor = "white",
  clients,
}: ClientsSlickProps) {
  return (
    <div className="tw-w-full tw-relative">
      <Slider
        dots={false}
        arrows={false}
        infinite
        slidesToShow={5}
        slidesToScroll={1}
        speed={500}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        autoplaySpeed={3000}
        autoplay
        className="tw-w-full"
      >
        {clients.map((client) => (
          <div
            key={client.name}
            className="tw-px-5 tw-w-full !tw-inline-flex tw-items-center tw-justify-center tw-cursor-move tw-py-6"
          >
            <Image
              src={client.imageSrc}
              className="tw-w-full tw-h-[30px] md:tw-h-[40px] tw-object-contain"
              alt={client.name}
              width={150}
              height={150}
            />
          </div>
        ))}
      </Slider>
      <div className="tw-absolute tw-pointer-events-none tw-top-0 tw-w-full tw-h-full">
        <div
          className="tw-w-1/2 tw-h-full tw-inline-block"
          style={{
            background: `linear-gradient(to right, ${gradientColor}, transparent, transparent)`,
          }}
        ></div>
        <div
          className="tw-w-1/2 tw-h-full tw-inline-block"
          style={{
            background: `linear-gradient(to right, transparent, transparent, ${gradientColor})`,
          }}
        ></div>
      </div>
    </div>
  );
}
