import React, {useState}  from "react";
import Link from "next/link";

const ArticleSigfox = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de LoRaWAN");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de NB - IoT");
    
  };

  const handleMouseLeaveHome = () => {
    setHomeLabel("Next Post");
    
  };
  return (
    <>
      <section className="news-details-area">
        <div className="container">
          <div className="row">
            <div className="blog-details-desc">
              <div>

                <div className="article-content">
                <div className="article-image bg-white">
                  <img
                    style={{float:'left', margin:'20px'}}
                    src="/images/iot/logo-sigfox.png"
                    alt="Image"
                    width={'175px'}
                    height={'50px'}
                  />

                  <h2 className="pt-4">Tecnología Sigfox</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 29 de mayo del 2024
                      </li>
                    </ul>
                  </div>
                </div>
                </div>              

                <div className="pt-5">
                  <p>
                   <b><font size='5'>SigFox</font ></b> es una red de conectividad celular a nivel mundial enfocada para el Internet de las cosas (IoT: Internet of things).
                   Esta red está diseñada para comunicaciones de baja velocidad permitiendo reducir los costes y el consumo de energía de los
                    dispositivos conectados. Además, aparte de ser de baja velocidad, la comunicación también se basa en una banda muy estrecha,
                    lo que permite a los dispositivos tener un alto poder de penetración a obstáculos, facilitando la comunicación a grandes distancias,
                    incluso en suelo urbano.                    
                  </p>
                  <p>
                  Su objetivo es conectar objetos cotidianos a internet de forma económica y eficiente, permitiendo la transmisión de pequeñas cantidades 
                  de datos a intervalos regulares.
                  </p>                  

                  <p>
                  Las redes LPWAN son la tecnología de conectividad preferida para la industria del Internet de las Cosas,
                   sobre todo para aquellas aplicaciones que emiten pequeñas cantidades de datos a grandes distancias de forma
                    regular. Tal es el caso de los sensores o medidores, por ejemplo.
                  </p>

                  <div className="SigfoxLog text-center">
                    <img
                      style={{float:'left', margin: '5px'}}                      
                      src="/images/iot/SigfoxLog.png"
                      alt="Image"
                      width={'250px'}
                    />
                  </div>
                  <blockquote className="flaticon-quote">
                    <p>
                    <b>SigFox</b> es el <b>proveedor líder</b> a nivel mundial para el internet de las cosas.
                     Desplegando la red 0G global para conectar el mundo físico con el digital
                      
                    </p>
                  </blockquote>                  
                                    
                </div>
                <p>
                  <b>A nivel tecnológico</b>  SigFox utiliza la banda UNB (Ultra Narrow Band) que está diseñada para funcionar a
                   bajas velocidades con una transferencia de datos de 10 a 1.000 bits por segundo. Además, esta tecnología se
                    basa en una transmisión de canal de espectro muy estrecho(1KHz), lo que le permite lograr un gran alcance
                    inalámbrico de hasta 20 km en campo abierto y de 1,5 km en zonas urbanas. Por tanto, el uso de la UNB es
                    fundamental para proveer una red evolutiva, de alta capacidad y con un consumo energético muy reducido
                  </p>

                <div className="SigfoxLog">
                    <img
                      style = {{float: "left", margin:'5px'}}
                      src="/images/iot/VenApsigfox.png"
                      alt="Image"
                      width={'500px'}
                      height={'850px'}                      
                    />                   
                  <p>
                  También ofrece una red con buena calidad de servicio garantizada y efectiva para bajo volumen de datos, pero que
                  puede soportar muchos dispositivos simultáneos como por ejemplo un despliegue de sensores.
                  </p>
                  <p>
                  Podemos desarrollar nuestra propia APP y conectarla a la API de SigFox para recibir la información de los sensores y dispositivos.
                  </p>
                  <p>
                  También es posible recibir mensajes en sentido contrario, desde la red hacia el dispositivo, pero hay que tener en cuenta que no son síncronos,
                  no se asegura la disponibilidad y que están bastante limitados.
                  </p>
                  <p>
                  SigFox tiene algunas limitaciones. A pesar de ello podemos encontrar aplicaciones en casi todas las áreas y sectores.
                  Por ejemplo, en las áreas de domótica, Smart Grid, transporte, logística, ciudades inteligentes, Alarmas.
                  El servicio es fiable y las cuotas de conectividad son inferiores a otras redes, lo que a volumen supone una
                  diferencia notable. Podría servir para entornos Scada o de trazabilidad logística.
                  </p>
                 
                  
                  </div>
                  

                
                  <blockquote className="flaticon-quote">
                    <p>
                    <b>La red SigFox</b> se basa en una estructura formada por antenas y estaciones base repartidas por todo el
                       territorio que se comunican con lo sensores finales y con el servidor Sigfox donde se almacenan los datos.
                        Esta red de antenas y estaciones base, en España, ha sido instalada por la empresa Cellnex y se encuentra
                         operada por SigFox. 
                    </p>
                  </blockquote>

                  <div>                 

                  <h2><em>Funcionamiento de SigFox</em></h2>
                  </div>
                  

                  <p className="pt-3">
                  <b>El funcionamiento de esta red</b> es muy similar a las redes de telefonía celular debido a que esta red funciona
                  a partir de la colocación de varias estaciones receptoras y transmisoras; la diferencia entre las estaciones
                  SigFox y las de telefonía celular es en que los dispositivos y sensores que estén conectados a la
                  red SigFox no están sujetas a una sola estación base específica, esto es, cualquier estación puede recibir
                  la información y transmitirla hacia la nube.
                  </p>

                  <p>
                  La banda pública empleada para el intercambio de mensajes en SigFox es en 200 kHz y en la que cada mensaje tiene
                  un ancho de 100 Hz y puede ser transmitido a una de tasa desde 100 bits hasta 600 bits
                  -esas tasas varían de acuerdo al país en donde se encuentre. Además la red SigFox emplea las bandas
                  bidireccionales de radio sin licencia ISM -industrial, scientific and medical radio bands, las cuales son
                  bandas usadas para usos múltiples excepto para telecomunicaciones- en Estados Unidos de 902 MHz y en
                  Europa de 868 MHz.
                  </p>
                  <p>
                  La seguridad es muy importante en esta red por lo que cada dispositivo debe tener asignado un código de identificación,
                  cuenta con protocolos de encriptamiento VPN y emplea al final el protocolo https.
                  </p>
                  <p>
                  Para que un dispositivo funcione en esta red se requiere que contenga un módulo de comunicación compatible con SigFox
                  -chips, tarjetas como la MKRFox1200 o kits específicos-.
                  </p>                

                  <h2><b>Servicios</b></h2>

                  <div className="SigfoxLog">
                    <img
                      style = {{float: "left", margin:'1px'}}
                      src="/images/iot/serviceSig.png"
                      alt="Image"
                      width={'400px'}
                      height={'150px'}                      
                    />                  

                  <p>
                  Dado que su red es única y como se mencionó anteriormente, tiene el atributo de ser como una red de telefonía
                  celular, una red con una amplia cobertura en casi cualquier lugar en la que se pueden enviar y recibir mensajes más
                  el atributo de internet -específicamente en el IoT- en la que se puede enviar, recibir y procesar datos. Así que si
                  no se cuenta con una señal WiFi disponible, la red de SigFox es una alternativa interesante.
                  </p>
                  <p>
                  ¿Pero qué pasa con respecto a otras formas de comunicación? La respuesta es que SigFox no está desligada de ellas sino
                  que puede hacer uso de ellas como un complemento y viceversa porque es compatible con Bluetooth, GPS, las redes 2G,
                  3G y 4G y WiFi. Debido a la versatilidad y flexibilidad de esta red, los makers y las empresas -micro, pequeñas,
                  medianas y grandes- hacen uso de esta red.                  
                  </p>
                  <p>
                  SigFox para la comunicación, proporciona una infraestructura de telecomunicación ya construida e independiente de
                  cualquier red existente, con un bajo ancho de banda, y mejor adaptado a la transmisión de mensajes pequeños frente
                  a otras alternativas, como LoRa. El uso del backend de SigFox como punto final de la
                  comunicación, que recibirá los datos enviados por el módem y los presentará a través de su página web.
                  Estos mensajes se reenviarán, mediante callback, a servicios externos para la generación de estadísticas
                  y alarmas en tiempo real, haciendo innecesario el gateway que se usa con LoRa.</p>                 
                  </div>


              </div>

              <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bx-share-alt"></i>
                  </span>
                  <Link href="#">Share</Link>
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li>
                      <a title="link to facebook" href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a title="link to twitter" href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a title="link to linkedin" href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="post-navigation">
                <div className="navigation-links">
                <div className="nav-previous">
                <Link
                  href="/blog/lorawan"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/nbiot"
                onMouseEnter={handleMouseEnterHome}
                onMouseLeave={handleMouseLeaveHome}
                >
               {homeLabel} <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleSigfox;