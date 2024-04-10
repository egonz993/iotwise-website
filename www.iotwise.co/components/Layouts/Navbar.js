import React from "react";
import Link from "next/link";
import { useScrolled } from "../../hooks/useScrolled";
import { useCurrentPath } from "../../hooks/useCurrentPath";

const Navbar = () => {

  const isScrolled = useScrolled();
  
  // Add active class to current path link
  const currentPath = useCurrentPath()


  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

    

  return (
    <>
      <div id="navbar" className={`navbar-area fixed-top ${isScrolled ? 'is-sticky': ''}`}>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img className="d-block d-lg-none" src="/images/iotwise-logo-white.svg" alt="logo"  width={50}/>
              <img className="d-none d-lg-block" src={isScrolled ? "/images/white-logo.png" : "/images/iotwise-logo-white.svg"} alt="logo"  width={isScrolled ? 50 : 150}/>
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
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    Nosotros
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

                <li className="nav-item link-light">|</li>
                
                {/* Tienda */}
                <li className="nav-item">
                  <Link
                    href="https://store.iotwise.co"
                    target="_blank"
                    className='nav-link'
                    style={{cursor: 'alias'}}
                  >
                    <i className="bx bx-store" /> <sub>Tienda Online</sub>
                  </Link>
                </li>
                
                {/* Tienda */}
                <li className="nav-item">
                  <Link
                    href="https://serialport.iotwise.co"
                    target="_blank"
                    className='nav-link'
                    style={{cursor: 'alias'}}
                  >
                    <i className="bx bx-usb" /> <sub>Serial Port</sub>
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
