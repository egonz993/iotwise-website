import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "animate.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="author" content="E'Gonzalez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="iot, iiot, wireless, lorawan, lte, wisun, sigfox, smart city" />
        <meta name="description" content="Expertos en el Internet de las Cosas" />

        {/* <!-- Etiquetas Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IoT Wise | Expertos en IoT" />
        <meta property="og:description" content="Expertos en el Internet de las Cosas" />
        <meta property="og:image" content="https://iotwise.co/images/favicon.ico" />
        
        <meta property="og:site_name" content="IoT Wise" />
        <meta property="og:locale" content="es_419" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:url" content="https://iotwise.co" />
        <meta property="og:secure_url" content="https://iotwise.co/images/favicon.ico" />
        <meta property="og:image:alt" content="Expertos en IoT" />
        <meta property="og:image:width" content="663" />
        <meta property="og:image:height" content="481" />

        <title>IoT Wise | Expertos en IoT</title>
        
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
