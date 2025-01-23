import React from "react";
// import RichText from '@/components/RichText'

// import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from "@/components/Media";
import { MediaProps } from "@/components/Media/types";

export const MediaBlock: React.FC<MediaProps> = (props) => {
  return <Media {...props} />;
};
