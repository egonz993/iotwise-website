import React from "react";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { useCurrentPath } from "../../hooks/useCurrentPath";

const MainBanner = () => {

  const {isAuth, userEmail} = useAuth()
  
  // Add active class to current path link
  const currentPath = useCurrentPath()

  const [showLoginBtn, setShowLoginbtn] = React.useState(true)
  React.useEffect(() => {
    const excludePaths = ["/user/", "/login/", "/sign-up/", "/recover-password/"]
    setShowLoginbtn(!excludePaths.includes(currentPath))
  }, [currentPath])


  return (
    <>
      <section className="main-banner-area main-banner-area-one" style={{minHeight:'100vh'}}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  EXPERTOS EN EL INTERNET DE LAS COSAS
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  className="mt-5"
                >
                  Soluciones inteligentes para tus proyectos IoT. Descubre el potencial de las comunicaciones con LoRaWAN, SigFox, NB-IoT, LTE-m, WiSun, y muchos más.
                </p>

                <div 
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >

                {/* Login Button */}
                <div className="others-options_">
                  <Link href={`${isAuth ? "/user" : "/login"}`} className={`default-btn ${isAuth ? "default-btn-success" : ""} ${showLoginBtn ? '' : 'd-none'}`}>
                    {isAuth ? userEmail.toUpperCase() : "EMPIEZA GRATIS"} <i className="bx bx-log-in-circle" /> 
                  </Link>
                </div>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="animate__animated animate__fadeInUp animate__fast">
                <img src="/images/iot/iot-09.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-one/bottom-shape.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default MainBanner;
