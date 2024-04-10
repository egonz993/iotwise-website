import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <img src="/images/iotwise-logo-white.svg" alt="Image" width={150} />
                </Link>

                <p>Síguenos en nuestras redes</p>
                <ul className="social-icon">
                  {/* <li>
                    <a title="link to facebook" href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li> */}
                  <li>
                    <a title="link to whatsapp" className="icon-whatsapp" href="https://wa.me/573127897151" target="_blank">
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a title="link to instagram" className="icon-instagram" href="https://www.instagram.com/iotwise" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a title="link to youtube" className="icon-youtube" href="https://www.youtube.com/@iotwise" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a title="link to linkedin" href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h5 className="link-light">Qué ofrecemos</h5>
                <ul>
                  <li>
                    <Link href="https://store.iotwise.co" target="_blank">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Tienda Online
                    </Link>
                  </li>
                  <li>
                    <Link href="/dev-hardware" target="_blank">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Desarrollo de Hardware
                    </Link>
                  </li>
                  <li>
                    <Link href="/dev-software" target="_blank">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Desarrollo de Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Asesoría y Capacitación
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h5 className="link-light">Enlaces de interés</h5>

                <ul>
                  <li>
                    <Link href="/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h5 className="link-light">Contacto</h5>

                <ul className="information">

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Correo</span>
                    info@iotwise.co
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Ubicación</span>
                    <div>Medellín, Colombia</div>
                    <div>Bello, Colombia</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <img src="/images/shape/footer-shape-one.png" alt="Image" />
          <img src="/images/shape/footer-shape-two.png" alt="Image" />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} <Link href="https://www.iotwise.co/" >IoT Wise</Link>. All Rights Reserved</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="privacy text-end">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/legal-information">Legal Information</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
