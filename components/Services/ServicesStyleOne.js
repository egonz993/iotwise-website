import React from "react";
import Link from "next/link";

const ServicesStyleOne = () => {
  return (
    <>
      <section className="features-area features-area-inner-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Data Science</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Data Engineer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Facing AI Challenges</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-technical-support"></i>
                <h3>Safe Security</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-shield"></i>
                <h3>Technical Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Live Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-machine-learning"></i>
                <h3>Heavy Industry</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>Transportation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-health"></i>
                <h3>Health Care</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="#" className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link href="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        2
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        3
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStyleOne;
