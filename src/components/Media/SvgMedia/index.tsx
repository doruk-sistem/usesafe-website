"use client";

import React from "react";
import SVG from "react-inlinesvg";

import { cn } from "@/utils/cn";
import { getClientSideURL } from "@/utils/get-url";

import type { MediaProps } from "../types";

export const SvgMedia: React.FC<MediaProps> = (props) => {
  const { svgClassName, resource, src: srcFromProps } = props;

  let src: string = (srcFromProps as string) || "";

  if (!src && resource && typeof resource === "object") {
    const { url } = resource;

    src = `${getClientSideURL()}${encodeURI(url)}`;
  }

  return <SVG className={cn(svgClassName)} src={src} />;
};
