import React from 'react'
import Head from "next/head"


export default function PageHead({title, description, image}) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <meta name="author" content="E'Gonzalez" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="iot, iiot, wireless, lorawan, lte, wisun, sigfox, smart city" />
            <meta name="description" content="Expertos en el Internet de las Cosas" />

            {/* <!-- Etiquetas Open Graph --> */}
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:secure_url" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="IoT Wise" />
            <meta property="og:locale" content="es_419" />
            <meta property="og:locale:alternate" content="en_US" />
            <meta property="og:url" content="https://iotwise.co" />
            <meta property="og:image:alt" content="Expertos en IoT" />
            <meta property="og:image:width" content="663" />
            <meta property="og:image:height" content="481" />

            <title>{title}</title>

        </Head>
    )
}



