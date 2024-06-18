import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import BlogGridCard from "../components/Blog/BlogGridCard";
import PageHead from "../components/Common/PageHead";

export default function Blog() {

  const articles = [
    //LoRaWAN
    {
      id: "1",
      date: "28 de Mayo del 2024",
      title: "Acerca de LoRaWAN",
      resume: "LoRa, esta tecnología inálambrica, ha sido utilizada para comunicaciones militares y espaciales, desde hace muchas décadas. Usa un tipo de modulacíon denominado Chirp Spread Spectrum (CSS) Creado por una empresa dedicada a la fabricacion de chips de radio SemTech.",
      url: "/blog/lorawan",
    },
    // Sigfox
    {
      id: "2",
      date: "29 de Mayo del 2024",
      title: "Acerca de SigFox",
      resume: "SigFox es una red de conectividad celular a nivel mundial enfocada para el Internet de las cosas (IoT: Internet of things). Esta red está diseñada para comunicaciones de baja velocidad permitiendo reducir los costes y el consumo de energía de los dispositivos conectados. Además, aparte de ser de baja velocidad, la comunicación también se basa en una banda muy estrecha, lo que permite a los dispositivos tener un alto poder de penetración a obstáculos, facilitando la comunicación a grandes distancias, incluso en suelo urbano.",
      url: "/blog/sigfox"
    },
    // NB-IoT
    {
      id: "3",
      date: "01 de Junio del 2024",
      title: "Acerca de NB-IoT",
      resume: "NB-IoT (Narrowband IoT) es una tecnología de comunicación inalámbrica que se utiliza para conectar dispositivos IoT (Internet de las cosas) a una red móvil. Es una versión de la tecnología de comunicación IoT de baja potencia (LPWAN) y se enfoca en proporcionar una conectividad de baja velocidad y bajo consumo de energía para dispositivos IoT.",
      url: "/blog/nbiot"
    },
    // LTE-M
    {
      id: "4",
      date: "01 de Junio del 2024",
      title: "Acerca de LTE-M",
      resume: "Trata de una tecnología de área amplia de baja potencia que permite IoT a través de una menor complejidad del dispositivo y proporciona una cobertura extendida. Al mismo tiempo, permite la reutilización de la base instalada de LTE. Como resultado, se obtiene una mayor vida útil de la batería hasta 10 años o más para una amplia gama de casos de uso.",
      url: "/blog/ltem"
    },
    // Zigbee
    {
      id: "5",
      date: "03 de Junio del 2024",
      title: "Acerca de ZigBee",
      resume: "ZigBee es un protocolo de comunicación que está revolucionando la forma en la que los dispositivos se conectan. Su éxito se debe principalmente a que es una tecnología de baja potencia, bajo consumo y bajo coste. Además, gracias a que se construye sobre redes de tipo mesh o malla presenta un gran alcance y una gran velocidad de comunicación. Está basada en el estándar IEEE 802.15.4 y se emplea, principalmente, para dispositivos IoT y domótica, entre otras aplicaciones. ZigBee crea Redes de Área Personal (PAN) y permite la comunicación entre dispositivos de bajo consumo, en la que cada dispositivo actúa como un repetidor de señal o nodo que expande el alcance de la red.",
      url: "/blog/zigbee"
    },
    // Bluetooth
    {
      id: "6",
      date: "05 de Junio del 2024",
      title: "Bluetooth LE en IoT",
      resume: "Bluetooth es un medio de tecnología inalámbrica de corto alcance que se utiliza para intercambiar datos entre dos dispositivos electrónicos (Generalmente móvil) en una distancia corta. Este proceso elimina por completo el uso primitivo de cables para la conectividad. Un ejemplo típico es cómo puede escuchar música con un auricular mientras viaja sin tener que conectarlo al conector para auriculares de su dispositivo móvil. Fue creado por la empresa Ericson en el año 1994; desde entonces, La tecnología Bluetooth ha evolucionado y se ha convertido en la solución de conectividad inalámbrica preferida para los wearables, artilugio, y otros dispositivos. Hoy en día, encontrarás Bluetooth en todas partes( carros, Altavoces, usables, dispositivos médicos, audífonos inalámbricos, Zapatos, etc). Si posee algún dispositivo moderno, Es seguro asumir que ha encontrado y utilizado la tecnología Bluetooth en un momento u otro.",
      url: "/blog/bluetooth"
    },
    //Wi-Fi        
    {
      id: "7",
      date: "05 de Junio del 2024",
      title: "Wi-Fi 6. Una nueva tecnología dirigida a IoT",
      resume: "El WiFi es una tecnología que permite la conexión inalámbrica entre dispositivos electrónicos, ordenadores, smartphones, tablets, televisores, videoconsolas, etc. En realidad, Wi-Fi es una marca de Wi-Fi Alliance o Alianza Wi-Fi, la organización que promueve dicha tecnología y que se encarga de certificar todos los productos que se ajustan a las normas establecidas de interoperabilidad.",
      url: "/blog/wifi"
    },
    //GSM
    {
      id: "8",
      date: "06 de Junio del 2024",
      title: "EC-GSM-IoT. ¿Qué es?",
      resume: "Sus siglas aluden a Sistema Global de Comunicaciones Móviles. Es uno de los estándares más utilizados desde principios del siglo XXI. Se conoce también como red 2G en España, ya que fue la segunda generación de comunicaciones y convirtió la señal analógica en digital. Se caracteriza por operar en una frecuencia distinta dependiendo del territorio. En Europa emplea el espectro radioeléctrico, que va de los 900 a los 1800 MHz, pero en Estados Unidos la banda funciona a 1900 MHz. Ello provoca que no todos los móviles GSM puedan funcionar correctamente en todos los países del mundo.",
      url: "/blog/gsm"
    },
    //3GPP
    {
      id: "9",
      date: "07 de Junio del 2024",
      title: "3GPP MTC",
      resume: "La tecnología LTE-M es una de las dos respuestas que 3GPP tiene para IoT. Esta tecnología se desarrolla para permitir que dispositivos de IoT puedan conectarse directamente a una red 4G.",
      url: "/blog/3gpp"
    },
    //LTE
    {
      id: "10",
      date: "10 de Junio del 2024",
      title: "Long Term Evolution (LTE)",
      resume: "LTE (Long-Term Evolution) es un estándar de banda ancha inalámbrica de cuarta generación (4G). De especial valor para las empresas, este estándar ha dado lugar a varias tecnologías evolucionadas (en particular, LTE-M y NB-IoT), diseñadas para facilitar el despliegue de dispositivos IoT y M2M de manera eficiente y a un menor coste.",
      url: "/blog/lte"
    },
    //Wi - SUN
    {
      id: "11",
      date: "10 de Junio del 2024",
      title: "Wi - SUN",
      resume: "Con la capacidad de admitir miles de nodos en una sola red, Wi-SUN es una solución poderosa y rentable para conectar dispositivos IoT en un área amplia. Esta tecnología está ganando terreno rápidamente a medida que las ciudades y las empresas buscan formas de mejorar la eficiencia y reducir los costos mediante el uso de dispositivos IoT.",
      url: "/blog/wisun"
    },
    //NFC
    {
      id: "12",
      date: "11 de Junio del 2024",
      title: "Near Field Communication",
      resume: "La tecnología NFC, o Near Field Communication (Comunicación de Campo Cercano), es una tecnología de comunicación inalámbrica de corto alcance que permite el intercambio de datos entre dispositivos. Al estar basada en la tecnología RFID (Identificación por Radiofrecuencia), el NFC <b>es capaz de establecer una comunicación entre dos dispositivos simplemente acercándolos a una distancia de 15 cm o menos</b>. Esta tecnología ayuda a convertir en una realidad el fenómeno conocido como Internet de las cosas (IoT), al permitir una conexión fácil y segura entre objetos.",
      url: "/blog/nfc"
    },
    
  ]

  return (
    <>
      <PageHead
        title = "IoT Wise | Blog"
        description = "Expertos en el Internet de las Cosas"
        image = "https://iotwise.co/images/iotwise-logo-black.svg"
      />

      <Navbar />

      <PageBanner pageTitle="BLOG" />

      <BlogGridCard articles={articles} />

      <Footer />
    </>
  );
}
