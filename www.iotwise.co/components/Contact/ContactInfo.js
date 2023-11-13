import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">

            <div className="col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Correo:</h3>
                <p>
                  <a title="link to mail" target="_blank" href="mailto:info@iotwise.co">info@iotwise.co</a>
                </p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Oficina Virtual</h3>
                <a title="link to location" target="_blank" href="https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia/@6.2442034,-75.5812115,12z/data=!3m1!4b1!4m6!3m5!1s0x8e4428dfb80fad05:0x42137cfcc7b53b56!8m2!3d6.2476376!4d-75.5658153!16zL20vMDF4XzZz?entry=ttu"><p>Medellín, Colombia</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
