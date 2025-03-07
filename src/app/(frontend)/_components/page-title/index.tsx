import { url } from "node:inspector";

export function PageTitle({
  title,
  backgroundImage,
}: {
  title?: string;
  backgroundImage?: string;
}) {
  return (
    <div className="tw--mt-[80px]" style={{ marginBottom: "-1px" }}>
      <div className="tw-relative">
        <div
          className="page-title-big-typography tw-py-0 md:tw-py-22 ipad-top-space-margin tw-bg-black tw-bg-center tw-bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="tw-opacity-85 tw-bg-black tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0"></div>
          <div className="tw-container tw-mx-auto">
            <div className="row align-items-center justify-content-center small-screen">
              <div
                className="col-xl-8 col-lg-9 col-sm-10 position-relative tw-text-center"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 100, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'
              >
                {!!title && (
                  <h2
                    className="m-auto text-white alt-font text-shadow-double-large fw-700 tw-w-full lg:tw-w-[800px] tw-text-4xl md:tw-text-5xl"
                    data-fancy-text={{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["${title}"], "duration": 400, "delay": 0, "speed": 50, "easing": "easeOutQuad" }}
                  />
                )}
              </div>
              <div
                className="down-section text-center tw-mt-10"
                data-anime='{ "translateY": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <a href="#" className="section-link">
                  <div className="text-white">
                    <i className="line-icon-Down icon-medium"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <style jsx global>{`
          .page-title-overlay {
          opacity: 0.3 !important;
          }
    `}</style> */}
      </div>
    </div>
  );
}
