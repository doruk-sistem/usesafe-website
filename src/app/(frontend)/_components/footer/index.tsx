import React from "react";
import Logo from "../logo";

export default function Footer() {
  return (
    <footer
      className="footer-dark tw-bg-black pb-0 cover-background background-position-left-top"
      style={{ backgroundImage: "url('images/demo-hosting-footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 md-mb-8 sm-mb-40px">
          {/* start footer column */}
          <div className="col-6 col-lg-3 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
            <a
              href="/"
              className="tw-mb-5 tw-inline-block tw-w-[150px] tw-h-[150px]"
            >
              <Logo />
            </a>
            <p className="w-90 lg-w-100">
              Lorem ipsum amet adipiscing elit to eiusmod ad tempor incididunt
              enim.
            </p>
            <div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
              <ul className="small-icon light">
                <li className="my-0">
                  <a
                    className="facebook"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a
                    className="dribbble"
                    href="http://www.dribbble.com"
                    target="_blank"
                  >
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a
                    className="twitter"
                    href="http://www.twitter.com"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="my-0">
                  <a
                    className="instagram"
                    href="http://www.instagram.com"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              Company
            </span>
            <ul>
              <li>
                <a href="demo-hosting-about.html">About</a>
              </li>
              <li>
                <a href="demo-hosting-hosting.html">Hosting</a>
              </li>
              <li>
                <a href="demo-hosting-domain.html">Domain</a>
              </li>
              <li>
                <a href="demo-hosting-pricing.html">Pricing</a>
              </li>
            </ul>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              Customer
            </span>
            <ul>
              <li>
                <a href="demo-hosting-support.html">Client support</a>
              </li>
              <li>
                <a href="demo-hosting-support.html">Help center</a>
              </li>
              <li>
                <a href="demo-hosting-about.html">System status</a>
              </li>
              <li>
                <a href="demo-hosting-contact.html">Feedback</a>
              </li>
            </ul>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              Say hello
            </span>
            <span className="d-inline-flex w-100">Need support?</span>
            <a
              href="mailto:hi@domain.com"
              className="text-white lh-22 text-decoration-line-bottom d-inline-block mb-20px"
            >
              hi@domain.com
            </a>
            <span className="d-inline-flex w-100">Customer care</span>
            <a
              href="tel:12345678910"
              className="text-white lh-22 d-inline-flex"
            >
              +1 234 567 8910
            </a>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-lg-3 col-sm-6 ps-30px sm-ps-15px md-mb-40px xs-mb-0 order-sm-2 order-lg-5">
            <span className="fs-17 fw-500 d-block text-white mb-5px">
              Subscribe our newsletter
            </span>
            <p className="mb-20px">
              Subscribe our newsletter to get the latest news and updates!
            </p>
            <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-15px">
              <form
                action="email-templates/subscribe-newsletter.php"
                method="post"
                className="position-relative w-100"
              >
                <input
                  className="input-small bg-transparent-white-light border-color-transparent w-100 form-control pe-50px ps-20px lg-ps-15px required"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <input type="hidden" name="redirect" value="" />
                <button className="btn pe-20px submit" aria-label="submit">
                  <i className="icon bi bi-envelope icon-small text-white"></i>
                </button>
                <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
              </form>
            </div>
            <div className="footer-card">
              <a
                href="#"
                className="d-inline-block me-5px xxl-me-0 align-middle"
              >
                <img
                  src="/crafto/images/demo-decor-store-payment-icon-01.png"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="d-inline-block me-5px xxl-me-0 align-middle"
              >
                <img
                  src="/crafto/images/demo-decor-store-payment-icon-02.png"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="d-inline-block me-5px xxl-me-0 align-middle"
              >
                <img
                  src="/crafto/images/demo-decor-store-payment-icon-03.png"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="d-inline-block me-5px xxl-me-0 align-middle"
              >
                <img
                  src="/crafto/images/demo-decor-store-payment-icon-04.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* end footer column */}
        </div>
        <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center">
          <span className="fs-13 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-white text-decoration-line-bottom">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-white text-decoration-line-bottom">
              terms of service
            </a>{" "}
            apply. You must not use this website if you disagree with any of
            these website standard terms and conditions.
          </span>
        </div>
      </div>
    </footer>
  );
}
