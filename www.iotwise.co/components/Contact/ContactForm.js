import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SendEmail } from "../../services/resend/send-email.service";

const MySwal = withReactContent(Swal);

const alertContent = (st) => {
  MySwal.fire({
    title: "Hemos recibido tu mensaje!",
    text: "Te hemos enviado un correo de confirmación y pronto uno de nuestros asesores se pondrá en contacto contigo",
    icon: "success",
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      // Send Email to info@iotwise.co
      await SendEmail({
        subject: `Contacto | www.iotwise.co | ${contact.subject}`,
        text: `Nuevo mensaje desde www.iotwise.co\n\n
          Asunto: ${contact.subject}\n
          Nombre: ${contact.name}\n
          Correo: ${contact.email}\n
          Contenido: ${contact.text}\n
        `,
        to: [
          "info@iotwise.co"
        ]
      })

      // Send confirmation email to user
      await SendEmail({
        subject: `Contacto | www.iotwise.co | ${contact.subject}`,
        text: `Hemos recibido tu mensaje\n\n
          Asunto: ${contact.subject}\n
          Nombre: ${contact.name}\n
          Correo: ${contact.email}\n
          Contenido: ${contact.text}\n\n
          Te responderemos lo antes posible por este mismo medio.
        `,
        to: [
          contact.email
        ]
      })

      alertContent()
      setContact(INITIAL_STATE)
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <p>También puedes enviarnos un mensaje en cualquier momento a través de nuestro formulario de contacto y te responderemos lo antes posible</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre y Apellido"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="correo@example.com"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Asunto"
                          className="form-control"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="Escribe aquí tu mensaje..."
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn btn-two">
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 d-none d-lg-block">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
