import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function LegalInformation() {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Información Legal" />


            <div className="text-container ptb-100">
                <div className="container">
                    <h3>Información Legal</h3>

                    <div className="my-4">
                        <div><strong>IoT Wise, Expertos en el Internet de las Cosas S.A.S</strong></div>
                    </div>

                    <div className="my-4">
                        <div>Teléfono: +57 312 7897151</div>
                        <div>Correo: info@iotwise.co</div>
                        <div>Website: www.iotwise.co</div>
                    </div>

                    <div className="my-4">
                        <div>Empresa Colombiana</div>
                        <div>Medellín, Antioquia</div>
                        <div>NIT: 901.787.077-2</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
