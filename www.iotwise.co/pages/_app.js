import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Expertos en el Internet de las Cosas (IoT)" />
        <meta name="keywords" content="iot, iiot, wireless, lorawan, lte, wisun, sigfox, smart city" />
        <meta name="author" content="E'Gonzalez" />
        
        <title>IoT Wise | Expertos en IoT</title>

        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Website",
              "headline": "IoT Wise | Expertos en IoT",
              "image": {
                "@type": "ImageObject",
                "url": "https://iotwise.co/images/favicon.ico",
                "width": 800,
                "height": 600,
                "alt": "IoT Wise | Expertos en el internet de las Cosas"
              },
              "description": "Expertos en el Internet de las Cosas"
            }
          `}
        </script>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
