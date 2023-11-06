import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/white-logo.png" alt="logo" />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-2/"
                        className={`nav-link ${
                          currentPath == "/index-2/" && "active"
                        }`}
                      >
                        Home Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-3/"
                        className={`nav-link ${
                          currentPath == "/index-3/" && "active"
                        }`}
                      >
                        Home Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-4/"
                        className={`nav-link ${
                          currentPath == "/index-4/" && "active"
                        }`}
                      >
                        Home Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/index-5/"
                        className={`nav-link ${
                          currentPath == "/index-5/" && "active"
                        }`}
                      >
                        Home Five
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about-1/"
                    className={`nav-link ${
                      currentPath == "/about-1/" && "active"
                    }`}
                  >
                    About <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about-1/"
                        className={`nav-link ${
                          currentPath == "/about-1/" && "active"
                        }`}
                      >
                        About Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/about-2/"
                        className={`nav-link ${
                          currentPath == "/about-2/" && "active"
                        }`}
                      >
                        About Style Two
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/services/"
                    className={`nav-link ${
                      currentPath == "/services/" && "active"
                    }`}
                  >
                    Services <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-2/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        Services Style Two
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-3/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Services Style Three
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-4/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Services Style Four
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Pages <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/testimonials/"
                        className={`nav-link ${
                          currentPath == "/testimonials/" && "active"
                        }`}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        Faq
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        User <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/login/"
                            className={`nav-link ${
                              currentPath == "/login/" && "active"
                            }`}
                          >
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/sign-up/"
                            className={`nav-link ${
                              currentPath == "/sign-up/" && "active"
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/terms-conditions/"
                        className={`nav-link ${
                          currentPath == "/terms-conditions/" && "active"
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/privacy-policy/"
                        className={`nav-link ${
                          currentPath == "/privacy-policy/" && "active"
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/login/"
                        className={`nav-link ${
                          currentPath == "/login/" && "active"
                        }`}
                      >
                        Log In
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/sign-up/"
                        className={`nav-link ${
                          currentPath == "/sign-up/" && "active"
                        }`}
                      >
                        Sign Up
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    News <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/news-grid/"
                        className={`nav-link ${
                          currentPath == "/news-grid/" && "active"
                        }`}
                      >
                        News Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/news-right-sidebar/"
                        className={`nav-link ${
                          currentPath == "/news-right-sidebar/" && "active"
                        }`}
                      >
                        News Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/news-details/"
                        className={`nav-link ${
                          currentPath == "/news-details/" && "active"
                        }`}
                      >
                        News Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contact <i className="bx bx-chevron-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact Style One
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact-2/"
                        className={`nav-link ${
                          currentPath == "/contact-2/" && "active"
                        }`}
                      >
                        Contact Style Two
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/login/" className="default-btn">
                  Log In <i className="bx bx-log-in-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
