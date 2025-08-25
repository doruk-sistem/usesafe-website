"use client";

import React, { Fragment } from "react";

import { ImageMedia } from "./ImageMedia";
import type { MediaProps } from "./types";
import { VideoMedia } from "./VideoMedia";

export const Media: React.FC<MediaProps> = (props) => {
  const { className, htmlElement = "div", resource, type = "image" } = props;

  const isVideo =
    (typeof resource === "object" && resource?.mimeType?.includes("video")) ||
    type === "video";

  const isImage =
    (typeof resource === "object" && resource?.mimeType?.includes("image")) ||
    type === "image";

  const Tag = (htmlElement as React.ElementType) || Fragment;

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : null}
      {isImage ? <ImageMedia {...props} /> : null}
    </Tag>
  );
};
