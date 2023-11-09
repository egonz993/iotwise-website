import React from "react";
import Link from "next/link";

const ServicesStyleThree = () => {
  return (
    <>
      <section className="offer-area gray-bg ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-chip"></i>
                <h3>
                  <Link href="/service-details">Robotics & Drones</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link href="/service-details">Virtually Reality</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <Link href="/service-details">Blockchain Project</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-target"></i>
                <h3>
                  <Link href="/service-details">Image Processing</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-choice"></i>
                <h3>
                  <Link href="/service-details">Order Management</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <Link href="/service-details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>
                  <Link href="/service-details">Data Science</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-engineer"></i>
                <h3>
                  <Link href="/service-details">Data Engineer</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-success"></i>
                <h3>
                  <Link href="/service-details">Facing AI Challenges</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, maxime ipsum praesentium culpa expedita.
                </p>
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

        {/* Shape Images */}
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1.png" alt="Image" />
          <img src="/images/shape/services-shape/2.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default ServicesStyleThree;
