"use client";

import Script from "next/script";
import React from "react";

export default function NewsletterBlock() {
  return (
    <>
      {/* Begin Constant Contact Active Forms */}
      <Script id="ctct-universal-code" strategy="afterInteractive">
        {"var _ctct_m = \"1748c0f7acdfc50d220932aa2e2d2c3c\";"}
      </Script>
      <Script
        id="signupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        strategy="afterInteractive"
        async
        defer
      />
      {/* End Constant Contact Active Forms */}

      <section className="newsletter-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="tw-text-center tw-py-12">

                {/* Begin Constant Contact Inline Form Code */}
                <div
                  className="ctct-inline-form tw-flex tw-justify-center"
                  data-form-id="f4e8991a-a588-4780-a79b-093a438678e9"
                ></div>
                {/* End Constant Contact Inline Form Code */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
