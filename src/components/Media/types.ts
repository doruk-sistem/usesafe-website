import type { StaticImageData } from "next/image";
import type { ElementType, Ref } from "react";

// import type { Media as MediaType } from '@/payload-types'

export interface MediaProps {
  alt?: string;
  className?: string;
  fill?: boolean; // for NextImage only
  htmlElement?: ElementType | null;
  imgClassName?: string;
  svgClassName?: string;
  onClick?: () => void;
  onLoad?: () => void;
  loading?: "lazy" | "eager"; // for NextImage only
  priority?: boolean; // for NextImage only
  ref?: Ref<HTMLImageElement | HTMLVideoElement | null>;
  // resource?: MediaType | string | number // for Payload media
  resource?: any; // for Payload media
  size?: string; // for NextImage only
  src?: StaticImageData | string; // for static media
  videoClassName?: string;
  width?: number;
  height?: number;
  type?: "image" | "video" | "svg";
}
