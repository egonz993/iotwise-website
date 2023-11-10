import React from "react";
import Link from "next/link";

const WhatWeOffer = () => {

  return (
    <>
      <section className="industries-area pb-100">
        <div className="container">
          <div className="section-title pt-5">
            <h2>Sectores Industriales</h2>
            <p>Nuestros servicios están orientados a las siguientes áreas de la industria</p>
          </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">

              <div className="col-lg-3 tab-left">
                {/* Tabs navs */}
                <ul className="tabs">
                  
                  <li>
                    <span>
                      <i className="bx bx-buildings"></i>
                      <h3>Ciudades Inteligentes</h3>
                      <p>Smart City</p>
                    </span>
                  </li>
                  
                  <li>
                    <span>
                      <i className="bx bx-home"></i>
                      <h3>Hogares Inteligentes</h3>
                      <p>Smart Home</p>
                    </span>
                  </li>
                  
                  <li>
                    <span>
                      <i className="bx bx-water"></i>
                      <h3>Servicios Públicos</h3>
                      <p>Utilities</p>
                    </span>
                  </li>

                </ul>
              </div>

              <div className="col-lg-6">
                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <div className="row align-items-center">
                      <div className="industries-img left-img">
                        <img src="/images/iot/iot-07.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 tab-right">
                {/* Tabs navs */}
                <ul className="tabs">
                  
                  <li>
                    <span>
                      <i className="flaticon-automation"></i>
                      <h3>Sector Industrial</h3>
                      <p>IIoT</p>
                    </span>
                  </li>
                  
                  <li>
                    <span>
                      <i className="bx bx-car"></i>
                      <h3>Logistica y Transporte</h3>
                      <p>Moving & Storage</p>
                    </span>
                  </li>
                  
                  <li>
                    <span>
                      <i className="bx bx-cloud"></i>
                      <h3>Protección del medio ambiente</h3>
                      <p>Environmental Care</p>
                    </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
