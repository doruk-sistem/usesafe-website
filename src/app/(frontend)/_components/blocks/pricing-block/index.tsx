import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

import ButtonSwitchAnimation from "../../button-switch-animation";
import Section from "../../section";

export default function PricingBlock() {
  return (
    <Section>
      <div className="row justify-content-center mb-3">
        <div
          className="col-xl-5 col-lg-6 col-md-7 text-center"
          data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
            Predictable pricing
          </span>
          <h3 className="text-dark-gray fw-700 ls-minus-1px">
            Tailored pricing plans for everyone
          </h3>
        </div>
      </div>
      <div
        className="row align-items-end pricing-table-style-05 g-0 mb-6 background-position-center background-no-repeat justify-content-center"
        style={{
          backgroundImage: "url('crafto/images/demo-corporate-bg-03.png')",
        }}
      >
        <div
          className="col-lg-4 col-md-8 md-mb-30px"
          data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="border-radius-6px position-relative overflow-hidden">
            <div className="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px">
              <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                Starter
              </span>
              <h5 className="fw-700 mb-0 text-dark-gray alt-font">
                Individual
              </h5>
              <div className="pricing-body pt-35px">
                <ul className="p-0 m-0 list-style-02 fw-500">
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Marketing strategy
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Competitive work analysis
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-x align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Social media share audit
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-x align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Monthly management
                  </li>
                </ul>
              </div>
            </div>
            <div className="row align-items-center pt-25px pb-25px">
              <div className="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                <h3 className="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px">
                  $29
                </h3>
                <p className="w-120px fs-15 lh-22 text-start">
                  Per user/month billed annually*
                </p>
              </div>
            </div>
            <div className="pricing-footer ps-12 pe-12 pb-8 text-center">
              <ButtonSwitchAnimation
                icon={<HiArrowNarrowRight />}
                size="lg"
                className="tw-mb-4"
              >
                Join this plan
              </ButtonSwitchAnimation>
              <span className="fs-16 tw-block">Cancel anytime</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-8 md-mb-30px"
          data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="bg-dark-gray border-radius-6px overflow-hidden position-relative box-shadow-double-large z-index-9">
            <div className="p-10px fw-700 fs-14 text-white bg-gradient-flamingo-amethyst-green text-uppercase text-center">
              Popular
            </div>
            <div className="pricing-header pt-45px pb-10px bg-white border-radius-6px text-center position-relative top-minus-3px">
              <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                Professional
              </span>
              <h5 className="fw-700 mb-0 text-dark-gray alt-font">Business</h5>
              <div className="pricing-body pt-35px">
                <ul className="p-0 m-0 list-style-02 fw-500 text-center text-md-start">
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Marketing strategy
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Competitive work analysis
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Social media share audit
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-x align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Monthly management
                  </li>
                </ul>
              </div>
            </div>
            <div className="row align-items-center pt-25px pb-25px">
              <div className="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                <h3 className="alt-font text-white mb-0 me-15px fw-700 ls-minus-2px">
                  $39
                </h3>
                <p className="w-120px fs-15 lh-22 text-start">
                  Per user/month billed annually*
                </p>
              </div>
            </div>
            <div className="pricing-footer ps-12 pe-12 pb-8 text-center">
              <ButtonSwitchAnimation
                icon={<HiArrowNarrowRight />}
                size="lg"
                variant="white"
                className="tw-mb-4"
              >
                Join this plan
              </ButtonSwitchAnimation>
              <span className="tw-block fs-16 text-white opacity-5 fw-300">
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-8"
          data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="border-radius-6px position-relative overflow-hidden">
            <div className="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px">
              <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                Enterprise
              </span>
              <h5 className="fw-700 mb-0 text-dark-gray alt-font">Corporate</h5>
              <div className="pricing-body pt-35px">
                <ul className="p-0 m-0 list-style-02 fw-500 text-center text-md-start">
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Marketing strategy
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Competitive work analysis
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Social media share audit
                  </li>
                  <li className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                    <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                      <i className="bi bi-check align-self-center text-white fs-14 d-flex"></i>
                    </span>
                    Monthly management
                  </li>
                </ul>
              </div>
            </div>
            <div className="row align-items-center pt-25px pb-25px">
              <div className="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                <h3 className="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px">
                  $59
                </h3>
                <p className="w-120px fs-15 lh-22 text-start">
                  Per user/month billed annually*
                </p>
              </div>
            </div>
            <div className="pricing-footer ps-12 pe-12 pb-8 text-center">
              <ButtonSwitchAnimation
                icon={<HiArrowNarrowRight />}
                size="lg"
                className="tw-mb-4"
              >
                Join this plan
              </ButtonSwitchAnimation>
              <span className="fs-16 tw-block">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 justify-content-center align-items-center">
        {/* start features box item */}
        <div className="col icon-with-text-style-08 sm-mb-25px text-center text-sm-start md-mb-30px">
          <div className="d-flex justify-content-center">
            <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
              <div className="feature-box-icon me-10px">
                <i className="bi bi-calendar-check fs-20 text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span className="fw-600 text-dark-gray">
                  Get 30 day free trial
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div className="col icon-with-text-style-08 sm-mb-25px text-center text-sm-start md-mb-30px">
          <div className="d-flex justify-content-center">
            <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
              <div className="feature-box-icon me-10px">
                <i className="bi bi-wallet2 fs-20 text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span className="fw-600 text-dark-gray">
                  No any hidden fees pay
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* end features box item */}
        {/* start features box item */}
        <div className="col icon-with-text-style-08 text-center text-sm-start">
          <div className="d-flex justify-content-center">
            <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
              <div className="feature-box-icon me-10px">
                <i className="bi bi-clock fs-20 text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span className="fw-600 text-dark-gray">
                  You can cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* end features box item */}
      </div>
    </Section>
  );
}
