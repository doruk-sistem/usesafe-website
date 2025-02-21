import React, { Fragment } from "react";

import { ImageMedia } from "./ImageMedia";
import { SvgMedia } from "./SvgMedia";
import type { MediaProps } from "./types";
import { VideoMedia } from "./VideoMedia";

export const Media: React.FC<MediaProps> = (props) => {
  const { className, htmlElement = "div", resource, type = "image" } = props;

  const isVideo =
    (typeof resource === "object" && resource?.mimeType?.includes("video")) ||
    type === "video";

  const isSvg =
    (typeof resource === "object" && resource?.mimeType?.includes("svg")) ||
    type === "svg";

  const isImage =
    (typeof resource === "object" && resource?.mimeType?.includes("image")) ||
    type === "image";

  const Tag = (htmlElement as any) || Fragment;

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isImage ? <ImageMedia {...props} /> : null}
      {isVideo ? <VideoMedia {...props} /> : null}
      {isSvg ? <SvgMedia {...props} /> : null}
    </Tag>
  );
};
