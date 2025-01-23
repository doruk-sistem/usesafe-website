import React from "react";

import { Media } from "@/components/Media";
import { MediaProps } from "@/components/Media/types";

interface ContentWithImageBlockProps {
  title: string;
  description?: string;
  contentFooter?: React.ReactNode;
  image: MediaProps;
  imagePosition?: "left" | "right";
}

export function ContentWithImageBlock({
  title,
  description,
  contentFooter,
  image,
  imagePosition = "left",
}: ContentWithImageBlockProps) {
  const renderImageArea = () => (
    <div
      className="col-lg-6 position-relative"
      data-anime='{ "opacity": [0,1], "duration": 1000, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
    >
      <div
        className="tw-flex tw-justify-center tw-w-full"
        data-bottom-top="transform: translateY(100px)"
        data-top-bottom="transform: translateY(-100px)"
      >
        <Media {...image} />
      </div>
    </div>
  );

  const renderContentArea = () => (
    <div
      className="col-lg-5 col-md-9 text-center text-lg-start"
      data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad" }'
    >
      {!!title && (
        <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">{title}</h1>
      )}
      {!!description && <p className="w-95 md-w-100">{description}</p>}
      {contentFooter}
    </div>
  );

  return (
    <div className="row tw-items-center tw-justify-center tw-space-y-10 tw-space-x-10">
      {imagePosition === "left" && renderImageArea()}
      {renderContentArea()}
      {imagePosition === "right" && renderImageArea()}
    </div>
  );
}
