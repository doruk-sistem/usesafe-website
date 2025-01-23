import React from "react";

interface BackgroundVideoBlockProps {
  title?: string;
  description?: string;
  video: {
    src: string;
    poster: string;
  };
}

export default function BackgroundVideoBlock({
  title,
  description,
  video,
}: BackgroundVideoBlockProps) {
  return (
    <div className="position-relative overflow-hidden p-0">
      <div
        className="tw-max-w-[800px] tw-px-5 tw-mx-auto tw-flex tw-flex-col tw-items-center tw-text-center tw-h-[850px] lg:tw-h-[650px] md:tw-h-[500px] text-center justify-content-center tw-relative tw-z-10"
        data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        {!!title && (
          <h3 className="text-white fw-600 ls-minus-1px text-shadow-extra-large">
            {title}
          </h3>
        )}
        {!!description && (
          <p className="tw-text-gray-200 tw-mb-0">{description}</p>
        )}
      </div>
      <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-70 tw-z-0" />
      <video
        loop
        autoPlay
        playsInline
        controls
        muted
        className="html-video"
        poster={video.poster}
      >
        <source src={video.src} />
      </video>
    </div>
  );
}
