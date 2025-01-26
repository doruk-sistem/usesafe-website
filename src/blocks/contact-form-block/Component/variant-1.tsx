export function ContactFormBlockVariant1() {
  return (
    <div className="row mb-8">
      <div
        className="col-xl-5 col-lg-6 md-mb-50px"
        data-anime='{ "el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <div
          className="bg-white border-radius-6px box-shadow-quadruple-large p-10 ps-12 pe-12 lg-ps-8 lg-pe-8 h-100 d-flex flex-wrap flex-column tw-justify-start"
          data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <span className="text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex align-self-start">
            Lets&apos;s work together
          </span>
          <h4 className="text-dark-gray ls-minus-1px fw-700 mb-15px">
            Request a demo
          </h4>
          <ol className="tw-mt-6 tw-list-disc tw-space-y-5">
            <li>We will contact you shortly after you make a request.</li>
            <li>
              If we are interested in working with you, we will prepare a demo
              for you.
            </li>
          </ol>
        </div>
      </div>
      <div
        className="col-lg-6 offset-xl-1 md-mb-50px sm-mb-0"
        data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
      >
        <h3 className="text-dark-gray ls-minus-2px fw-700">
          Submit your request
        </h3>
        <form
          action="email-templates/contact-form.php"
          method="post"
          className="contact-form-style-03"
        >
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0"
          >
            Enter your full name*
          </label>
          <div className="position-relative form-group mb-20px">
            <span className="form-icon">
              <i className="bi bi-emoji-smile text-dark-gray"></i>
            </span>
            <input
              className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
              id="exampleInputEmail1"
              type="text"
              name="name"
              placeholder="What's your good name"
            />
          </div>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0"
          >
            Email address*
          </label>
          <div className="position-relative form-group mb-20px">
            <span className="form-icon">
              <i className="bi bi-envelope text-dark-gray"></i>
            </span>
            <input
              className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
              id="exampleInputEmail2"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0"
          >
            Phone number*
          </label>
          <div className="position-relative form-group mb-20px">
            <span className="form-icon">
              <i className="bi bi-phone text-dark-gray"></i>
            </span>
            <input
              className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
              id="exampleInputEmail2"
              type="email"
              name="email"
              placeholder="Enter your phone number"
            />
          </div>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-13 text-uppercase text-dark-gray fw-700 mb-0"
          >
            Additional comments
          </label>
          <div className="position-relative form-group form-textarea mb-0">
            <textarea
              className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
              name="comment"
              placeholder="Describe about your project"
              rows={3}
            ></textarea>
            <span className="form-icon">
              <i className="bi bi-chat-square-dots text-dark-gray"></i>
            </span>
          </div>
          <div className="row mt-25px align-items-center">
            <div className="col-xl-7 col-lg-12 col-sm-7 lg-mb-30px md-mb-0">
              <p className="mb-0 fs-14 lh-22 text-center text-sm-start">
                We will never collect information about you without your
                explicit consent.
              </p>
            </div>
            <div className="col-xl-5 col-lg-12 col-sm-5 text-center text-sm-end text-lg-start text-xl-end xs-mt-25px">
              <input
                id="exampleInputEmail3"
                type="hidden"
                name="redirect"
                value=""
              />
              <button
                className="btn btn-dark-gray btn-medium btn-round-edge btn-box-shadow submit"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="col-12 mt-20px mb-0 text-center text-md-start">
              <div className="form-results d-none"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
