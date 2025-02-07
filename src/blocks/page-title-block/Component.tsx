import React from "react";

interface PageTitleBlockProps {
  title?: string;
  topTitle?: string;
  backgroundImage?: string;
  downSectionId?: string;
}

export function PageTitleBlock({
  title,
  topTitle,
  backgroundImage,
  downSectionId,
}: PageTitleBlockProps) {
  return (
    <div
      className="page-title-big-typography tw-py-0 md:tw-py-22 ipad-top-space-margin tw-bg-black tw-bg-center tw-bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="tw-opacity-85 tw-bg-black tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0"></div>
      <div className="container">
        <div className="row align-items-center justify-content-center small-screen">
          <div
            className="col-xl-8 col-lg-9 col-sm-10 position-relative text-center page-title-extra-small"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 100, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'
          >
            {!!topTitle && (
              <div>
                <h1
                  className="text-uppercase mb-15px alt-font text-white opacity-6 fw-500 ls-2px tw-text-6xl md:tw-text-7xl" 
                  data-fancy-text={`{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["${topTitle}"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }`}
                ></h1>
              </div>
            )}
            {!!title && (
              <h2
                className="m-auto text-white alt-font text-shadow-double-large fw-700 tw-w-full lg:tw-w-[800px] tw-text-4xl md:tw-text-5xl" 
                data-fancy-text={`{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["${title}"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }`}
              ></h2>
            )}
          </div>
          <div
            className="down-section text-center tw-mt-10" 
            data-anime='{ "translateY": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <a href={`#${downSectionId}`} className="section-link">
              <div className="text-white">
                <i className="line-icon-Down icon-medium"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}