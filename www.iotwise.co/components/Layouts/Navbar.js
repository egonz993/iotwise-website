import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useScrolled } from "../../hooks/useScrolled";

const Navbar = () => {

  const isScrolled = useScrolled();

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
              <h2 className="link-light d-block d-lg-none">IoT Wise</h2>
              <img className="d-none d-lg-block" src="/images/white-logo.png" alt="logo"  width={isScrolled ? 50 : 150}/>
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

              {/* Navbar */}
              <ul className="navbar-nav m-auto">
                
                {/* Home */}
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Inicio
                  </Link>
                </li>
                
                {/* About */}
                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about-1/" && "active"
                    }`}
                  >
                    Nosotros
                  </Link>
                </li>

                {/* Services */}
                <li className="nav-item">
                  <Link
                    href="/services/"
                    className={`nav-link ${
                      currentPath == "/services/" && "active"
                    }`}
                  >
                    Servicios
                  </Link>
                </li>
                
                {/* Pricing */}
                <li className="nav-item">
                  <Link
                    href="/pricing/"
                    className={`nav-link ${
                      currentPath == "/pricing/" && "active"
                    }`}
                  >
                    Precios
                  </Link>
                </li>
                
                {/* Blog */}
                <li className="nav-item">
                  <Link
                    href="/blog/"
                    className={`nav-link ${
                      currentPath == "/blog/" && "active"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                
                {/* Contact */}
                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contacto
                  </Link>
                </li>

              </ul>

              {/* Login Button */}
              <div className="others-options">
                <Link href="/login/" className="default-btn">
                  Empieza Gratis <i className="bx bx-log-in-circle"></i>
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