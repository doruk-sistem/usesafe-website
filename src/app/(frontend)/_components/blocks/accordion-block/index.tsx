import Image from "next/image";
import React from "react";
import Section from "../../section";

export default function AccordionBlock() {
  return (
    <Section className="overflow-hidden tw-bg-gray-100">
      <div className="row align-items-center">
        <div
          className="col-xl-5 col-lg-6 md-mb-50px"
          data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <h3 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-40px sm-mb-25px">
            Real-time analysis seo growth strong result.
          </h3>
          <div
            className="accordion accordion-style-04"
            id="accordion-style-04"
            data-active-icon="fa-angle-down"
            data-inactive-icon="fa-angle-right"
          >
            <div className="accordion-item active-accordion">
              <div className="accordion-header border-bottom border-color-extra-medium-gray mb-0">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-04-01"
                  aria-expanded="true"
                  data-bs-parent="#accordion-style-04"
                >
                  <div className="accordion-title position-relative mb-0 pe-20px text-dark-gray fw-600 alt-font fs-18">
                    <span>What does royalty free mean?</span>
                    <i className="fa-solid fa-angle-down icon-small"></i>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-04-01"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordion-style-04"
              >
                <div className="accordion-body bg-white last-paragraph-no-margin">
                  <p>
                    Lorem ipsum is simply dummy text of the printing typesetting
                    industry. Industry&apos;s standard dummy text ever since the
                    dummy when unknown printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header border-bottom border-color-extra-medium-gray mb-0">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-04-02"
                  aria-expanded="false"
                  data-bs-parent="#accordion-style-04"
                >
                  <div className="accordion-title position-relative mb-0 pe-20px text-dark-gray fw-600 alt-font fs-18">
                    <span>What are some examples of products?</span>
                    <i className="fa-solid fa-angle-right icon-small"></i>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-04-02"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-style-04"
              >
                <div className="accordion-body bg-white last-paragraph-no-margin">
                  <p>
                    Lorem ipsum is simply dummy text of the printing typesetting
                    industry. Industry&apos;s standard dummy text ever since the
                    dummy when unknown printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header border-bottom border-color-extra-medium-gray mb-0">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-04-03"
                  aria-expanded="false"
                  data-bs-parent="#accordion-style-04"
                >
                  <div className="accordion-title position-relative mb-0 pe-20px text-dark-gray fw-600 alt-font fs-18">
                    <span>Am i allowed to modify that i purchased?</span>
                    <i className="fa-solid fa-angle-right icon-small"></i>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-04-03"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-style-04"
              >
                <div className="accordion-body bg-white last-paragraph-no-margin">
                  <p>
                    Lorem ipsum is simply dummy text of the printing typesetting
                    industry. Industry&apos;s standard dummy text ever since the
                    dummy when unknown printer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 offset-xl-1 col-lg-6 position-relative"
          data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div
            className="outside-box-right-25 md-me-0"
            data-bottom-top="transform: translateY(100px)"
            data-top-bottom="transform: translateY(-100px)"
          >
            <Image
              src="/crafto/images/demo-seo-agency-process-01.png"
              alt="Demo Seo Agency Process 01"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
