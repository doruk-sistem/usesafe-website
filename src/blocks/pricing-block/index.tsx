"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from 'next-intl';
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";

export function PricingBlock() {
  const t = useTranslations('PricingBlock');

  const renderFeatureIcon = (included: boolean) => (
    <span className={`d-flex align-self-center justify-content-center ${included ? 'bg-green' : 'bg-red'} h-20px w-20px border-radius-100 me-10px`}>
      <i className={`bi bi-${included ? 'check' : 'x'} align-self-center text-white fs-14 d-flex`}></i>
    </span>
  );

  const renderPlan = (planKey: 'starter' | 'professional' | 'enterprise', isDark?: boolean) => {
    const plan = t.raw(`plans.${planKey}`);
    
    return (
      <div className={`${isDark ? 'bg-dark-gray' : ''} border-radius-6px overflow-hidden position-relative ${isDark ? 'box-shadow-double-large z-index-9' : ''}`}>
        {planKey === 'professional' && (
          <div className="p-10px fw-700 fs-14 text-white bg-gradient-flamingo-amethyst-green text-uppercase text-center">
            {plan.popular}
          </div>
        )}
        <div className={`pricing-header pt-45px pb-10px ${!isDark ? 'border-radius-6px' : 'bg-white'} text-center position-relative top-minus-3px`}>
          <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
            {plan.tag}
          </span>
          <h5 className="fw-700 mb-0 text-dark-gray alt-font">{plan.title}</h5>
          <div className="pricing-body pt-35px">
            <ul className="p-0 m-0 list-style-02 fw-500">
              {plan.features.map((feature: { text: string, included: boolean }, index: number) => (
                <li key={index} className="pt-15px pb-15px ps-12 pe-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                  {renderFeatureIcon(feature.included)}
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row align-items-center pt-25px pb-25px">
          <div className="col text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
            <h3 className={`alt-font ${isDark ? 'text-white' : 'text-dark-gray'} mb-0 me-15px fw-700 ls-minus-2px`}>
              {plan.price}
            </h3>
            <p className="w-120px fs-15 lh-22 text-start">{plan.period}</p>
          </div>
        </div>
        <div className="pricing-footer ps-12 pe-12 pb-8 text-center">
          <a href="/demo">
            <ButtonSwitchAnimation
              icon={<HiArrowNarrowRight />}
              size="lg"
              variant={isDark ? 'white' : 'default'}
              className="tw-mb-4"
            >
              {plan.button}
            </ButtonSwitchAnimation>
          </a>
          <span className={`fs-16 tw-block ${isDark ? 'text-white opacity-5 fw-300' : ''}`}>
            {plan.cancel}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="row justify-content-center mb-3">
        <div className="col-xl-5 col-lg-6 col-md-7 text-center">
          <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
            {t('header.tag')}
          </span>
          <h3 className="text-dark-gray fw-700 ls-minus-1px">
            {t('header.title')}
          </h3>
        </div>
      </div>
      <div className="row align-items-end pricing-table-style-05 g-0 mb-6 background-position-center background-no-repeat justify-content-center"
        style={{ backgroundImage: "url('crafto/images/demo-corporate-bg-03.png')" }}>
        <div className="col-lg-4 col-md-8 md-mb-30px">
          {renderPlan('starter')}
        </div>
        <div className="col-lg-4 col-md-8 md-mb-30px">
          {renderPlan('professional', true)}
        </div>
        <div className="col-lg-4 col-md-8">
          {renderPlan('enterprise')}
        </div>
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 justify-content-center align-items-center">
        {t.raw('features').map((feature: { icon: string, text: string }, index: number) => (
          <div key={index} className="col icon-with-text-style-08 sm-mb-25px text-center text-sm-start md-mb-30px">
            <div className="d-flex justify-content-center">
              <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                <div className="feature-box-icon me-10px">
                  <i className={`bi bi-${feature.icon} fs-20 text-dark-gray`}></i>
                </div>
                <div className="feature-box-content">
                  <span className="fw-600 text-dark-gray">{feature.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}