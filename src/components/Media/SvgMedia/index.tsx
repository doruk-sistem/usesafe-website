"use client";

import React from "react";

import SVG from "react-inlinesvg";

import { getClientSideURL } from "@/utils/get-url";
import { cn } from "@/utils/cn";

import type { MediaProps } from "../types";

export const SvgMedia: React.FC<MediaProps> = (props) => {
  const { svgClassName, resource, src: srcFromProps } = props;

  let src: string = (srcFromProps as string) || "";

  if (!src && resource && typeof resource === "object") {
    const { url } = resource;

    src = `${getClientSideURL()}${url}`;
  }

  return <SVG className={cn(svgClassName)} src={src} />;
};
