export function ContactFormBlockVariant2() {
  return (
    <div
      className="row row-cols-md-1 justify-content-center"
      data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'
    >
      <div className="col-xxl-4 col-xl-5 col-lg-5 md-mb-30px d-flex flex-column">
        <h3 className="fw-700 ls-minus-1px text-dark-gray w-85 xl-w-90 md-w-100 mb-15px">
          We&apos;d love to hear from you.
        </h3>
        <p className="w-85 xl-w-90 xs-w-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing finibus a purus at
          fermentum. Praesent vitae quam sed dui.
        </p>
        <div className="icon-with-text-style-01 feature-box feature-box-left-icon-middle last-paragraph-no-margin mt-auto">
          <div className="feature-box-icon me-15px">
            <img src="https://via.placeholder.com/100x62" alt="" />
          </div>
          <div className="feature-box-content">
            <span className="text-dark-gray fs-19 fw-600 d-block">
              Call us directly
            </span>
            <span>+1 234 567 8910</span>
          </div>
        </div>
      </div>
      <div className="col-lg-7 offset-xxl-1">
        {/* start contact form */}
        <form
          action="email-templates/contact-form.php"
          method="post"
          className="contact-form-style-03"
        >
          <div className="row justify-content-center">
            <div className="col-md-6 xs-mb-30px">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-700 text-dark-gray text-uppercase fs-13 ls-05px mb-0"
              >
                Enter your first name*
              </label>
              <div className="position-relative form-group mb-25px xs-mb-0">
                <span className="form-icon">
                  <i className="bi bi-emoji-smile text-dark-gray"></i>
                </span>
                <input
                  className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
                  id="exampleInputEmail1"
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div className="col-md-6 xs-mb-30px">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-700 text-dark-gray text-uppercase fs-13 ls-05px mb-0"
              >
                Enter your last name*
              </label>
              <div className="position-relative form-group mb-25px xs-mb-0">
                <span className="form-icon">
                  <i className="bi bi-emoji-smile text-dark-gray"></i>
                </span>
                <input
                  className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
                  id="exampleInputEmail1"
                  type="text"
                  name="name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="col-md-6 xs-mb-30px">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-700 text-dark-gray text-uppercase fs-13 ls-05px mb-0"
              >
                Enter your organization
              </label>
              <div className="position-relative form-group mb-25px xs-mb-0">
                <span className="form-icon">
                  <i className="bi bi-telephone text-dark-gray"></i>
                </span>
                <input
                  className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
                  id="exampleInputEmail2"
                  type="tel"
                  name="phone"
                  placeholder="Enter your organization"
                />
              </div>
            </div>
            <div className="col-md-6 xs-mb-30px">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-700 text-dark-gray text-uppercase fs-13 ls-05px mb-0"
              >
                Email address*
              </label>
              <div className="position-relative form-group mb-25px xs-mb-0">
                <span className="form-icon">
                  <i className="bi bi-envelope text-dark-gray"></i>
                </span>
                <input
                  className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required"
                  id="exampleInputEmail3"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="col-12 mb-4 xs-mb-30px">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-700 text-dark-gray text-uppercase fs-13 ls-05px mb-0"
              >
                Your message
              </label>
              <div className="position-relative form-group form-textarea mb-0">
                <textarea
                  className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control"
                  name="comment"
                  placeholder="Describe about your project"
                  rows={4}
                ></textarea>
                <span className="form-icon">
                  <i className="bi bi-chat-square-dots text-dark-gray"></i>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-md-7 col-sm-10">
              <p className="mb-0 fs-14 lh-24 text-center text-md-start">
                We will never collect information about you without your
                explicit consent.
              </p>
            </div>
            <div className="col-xl-6 col-md-5 text-center text-md-end sm-mt-25px">
              <input
                id="exampleInputEmail5"
                type="hidden"
                name="redirect"
                value=""
              />
              <button
                className="btn btn-small btn-dark-gray btn-box-shadow btn-round-edge text-transform-none primary-font submit"
                type="submit"
              >
                Send message
              </button>
            </div>
            <div className="col-12">
              <div className="form-results mt-20px d-none"></div>
            </div>
          </div>
        </form>
        {/* end contact form */}
      </div>
    </div>
  );
}
