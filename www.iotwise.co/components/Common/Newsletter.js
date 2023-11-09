import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div 
                className="newsletter-wrap"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="700"
              >
                <h2>Sign Up To The Free Newsletter</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                  <button className="default-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-2">
              <div 
                className="newsletter-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                <img src="/images/newsletter-img.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-5">
              <div 
                className="call-us"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="900"
              >
                <h2>Sign Up To The Free Newsletter</h2>
                <span>+882-569-756</span>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-shape">
          <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
          <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
          <img src="/images/shape/newsletter-shape-two.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
