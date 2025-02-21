"use client";

import type { StaticImageData } from "next/image";
import NextImage from "next/image";
import React from "react";

import useMounted from "@/hooks/use-mounted";
import { cn } from "@/utils/cn";
import { getClientSideURL } from "@/utils/get-url";

import type { MediaProps } from "../types";

// import { cssVariables } from "@/cssVariables";

const cssVariables = {
  breakpoints: {
    "3xl": 1920,
    "2xl": 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
  },
};

const { breakpoints } = cssVariables;

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const mounted = useMounted();

  if (!mounted) return null;

  const {
    alt: altFromProps,
    fill,
    imgClassName,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
    width: widthFromProps,
    height: heightFromProps,
  } = props;

  let width: number | undefined = widthFromProps;
  let height: number | undefined = heightFromProps;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || "";

  if (!src && resource && typeof resource === "object") {
    const {
      alt: altFromResource,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource;

    width = fullWidth;
    height = fullHeight;
    alt = altFromResource || "";

    src = `${getClientSideURL()}${encodeURI(url)}`;
  }

  const loading = loadingFromProps || "lazy";

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(", ");

  return (
    <NextImage
      src={src}
      alt={alt || ""}
      className={cn(imgClassName)}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      quality={100}
      loading={loading}
      sizes={sizes}
    />
  );
};
