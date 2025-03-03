"use client";

import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import ButtonSwitchAnimation from "@/app/(frontend)/_components/button-switch-animation";
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import { ContentWithImageBlock as ContentWithImageBlockProps } from "@/payload-types";

export function ContentWithImageBlock({
  position,
  image,
  title,
  description,
  buttonLink,
  buttonText,
}: ContentWithImageBlockProps) {
  const layout =
    position === "left" ? (
      <>
        <div className="col-lg-6 position-relative">
          <div className="tw-flex tw-justify-center tw-w-full">
            <Media resource={image} />
          </div>
        </div>
        <div className="col-lg-5 col-md-9 tw-text-lg-start">
          {title && (
            <h2 className="alt-font tw-fw-600 tw-text-dark-gray ls-minus-1px">
              {title}
            </h2>
          )}
          {description && (
            <article className="w-95 md-w-100">
              <RichText content={description} enableGutter={false}/>
            </article>
          )}
          {buttonLink && buttonText && (
            <Link href={buttonLink}>
              <ButtonSwitchAnimation icon={<HiArrowNarrowRight />}>{buttonText}</ButtonSwitchAnimation>
            </Link>
          )}
        </div>
      </>
    ) : (
      <>
        <div className="col-lg-5 col-md-9 tw-text-lg-start">
          {title && (
            <h2 className="alt-font tw-fw-600 tw-text-dark-gray ls-minus-1px">
              {title}
            </h2>
          )}
          {description && (
            <article className="w-95 md-w-100">
              <RichText content={description} enableGutter={false} />
            </article>
          )}
          {buttonLink && buttonText && (
            <Link href={buttonLink}>
              <ButtonSwitchAnimation icon={<HiArrowNarrowRight />}>{buttonText}</ButtonSwitchAnimation>
            </Link>
          )}
        </div>
        <div className="col-lg-6 position-relative">
          <div className="tw-flex tw-justify-center tw-w-full">
            <Media resource={image} />
          </div>
        </div>
      </>
    );

  return (
    <div className="row tw-items-center tw-justify-center tw-space-y-10 tw-space-x-10">
      {layout}
    </div>
  );
}
