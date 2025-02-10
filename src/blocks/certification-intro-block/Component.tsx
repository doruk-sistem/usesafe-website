"use client";

import React from "react";

interface CertificationIntroBlockProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  contentFooter?: React.ReactNode;
}

export function CertificationIntroBlock({
  title,
  description,
  backgroundImage,
  contentFooter,
}: CertificationIntroBlockProps) {
  return (
    <>
      <div className="tw-py-0 md:tw-py-10 ipad-top-space-margin">
        {/* Yazı Bölümü */}
        <div className="container">
          <div className="row align-items-center justify-content-center small-screen">
            <div className="col-xl-8 col-lg-9 col-sm-10 position-relative text-center">
              {title && (
                <h2 className="m-auto text-black alt-font fw-600 tw-w-full lg:tw-w-[800px] mb-4 tw-text-3xl md:tw-text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-black alt-font tw-w-full lg:tw-w-[800px] mx-auto mb-8 tw-text-sm md:tw-text-base tw-leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Resim Bölümü */}
        <div className="container tw-mt-8">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <img 
                src={backgroundImage} 
                alt="Background" 
                className="tw-w-full tw-h-auto tw-rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {contentFooter}
    </>
  );
}