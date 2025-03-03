"use client";

import React from "react";

import { Media } from "@/components/Media";
import type { MediaBlock as MediaBlockProps } from "@/payload-types";

export const MediaBlock: React.FC<MediaBlockProps> = ({
  media,
  mediaWidth,
}) => {
  return (
    <div className="tw-flex tw-justify-center tw-items-center ">
      <Media
        resource={media}
        className="col-lg-8 col-md-10"
        imgClassName={mediaWidth === "full" ? "tw-w-full" : "tw-w-auto"}
      />
    </div>
  );
};
