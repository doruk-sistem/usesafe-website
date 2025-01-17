import Image from "next/image";
import React from "react";

interface ContentWithImageBlockProps {
  title: string;
  description: string;
  buttonsComponent: React.ReactNode;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imagePosition?: "left" | "right";
}

export default function ContentWithImageBlock({
  title,
  description,
  buttonsComponent,
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
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="tw-w-full tw-max-w-none tw-object-contain"
        />
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
      {buttonsComponent && buttonsComponent}
    </div>
  );

  return (
    <section className="big-section">
      <div className="container">
        <div className="row tw-items-center tw-justify-center tw-space-y-10 tw-space-x-10">
          {imagePosition === "left" && renderImageArea()}
          {renderContentArea()}
          {imagePosition === "right" && renderImageArea()}
        </div>
      </div>
    </section>
  );
}
