"use client";

import React from "react";

import { Media } from "@/components/Media";
import type { MediaBlock as MediaBlockProps } from "@/payload-types";

export const MediaBlock: React.FC<MediaBlockProps> = ({ media }) => {
  return <Media resource={media} />;
};
