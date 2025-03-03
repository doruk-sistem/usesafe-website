"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/app/(frontend)/_components/button";
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
        <div className="col-lg-5 col-md-9 text-center text-lg-start">
          {title && (
            <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">
              {title}
            </h1>
          )}
          {description && (
            <div className="w-95 md-w-100">
              <RichText content={description} />
            </div>
          )}
          {buttonLink && buttonText && (
            <Link href={buttonLink}>
              <Button variant="white">{buttonText}</Button>
            </Link>
          )}
        </div>
      </>
    ) : (
      <>
        <div className="col-lg-5 col-md-9 text-center text-lg-start">
          {title && (
            <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">
              {title}
            </h1>
          )}
          {description && (
            <div className="w-95 md-w-100">
              <RichText content={description} />
            </div>
          )}
          {buttonLink && buttonText && (
            <Link href={buttonLink}>
              <Button variant="white">{buttonText}</Button>
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
