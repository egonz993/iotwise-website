import React, {useState}  from "react";
import Link from "next/link";

const ArticleLorawan = () => {
  const [prevLabel, setPrevLabel] = useState("Home");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Blog Principal");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Home");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de SigFox");
    
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
                    src="/images/iot/Logo-lora.png"
                    alt="Image"
                    width={'175px'}
                    height={'50px'}
                  />

                  <h2 className="pt-4">Tecnología LoRa</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 28 de Mayo del 2024
                      </li>
                    </ul>
                  </div>
                </div>
                </div>               

                <div className="pt-4">
                <p>
                    <font size='5'><b>LoRa</b></font>, esta tecnología inálambrica, ha sido utilizada para
                    comunicaciones militares y espaciales, desde hace muchas décadas. Usa un tipo de modulacíon denominado Chirp Spread Spectrum (CSS)
                    Creado por una empresa dedicada a la fabricacion de chips de radio SemTech.                    
                  </p>                  

                  <div className="Loraimage" style={{textAlign:"justify"}}>
                    <img
                      style={{float: 'right', margin:'3px'}}
                      src="/images/iot/LoraImage.png"
                      alt="Image"
                      width={'600px'}
                      height={'850px'}
                    />

                    
                  <p>
                  <b>Seguramente has oído hablar de LoRa o LoRaWAN</b>, por lo que conviene conocer la diferencia entre ambas.
                  <b>LoRa es la modulación</b> que emplean los dispositivos para lograr una cobertura con baja potencia y representa
                  la capa física de la red que dicta las frecuencias de trabajo con las que se obtienen largas distancias
                  y muy bajo consumo.
                  </p>
                  <p>
                  <b>La Alianza LoRa es una organización sin fines de lucro que tiene como objetivo promover el conocimiento del mercado
                  de LoRaWAN como estándar de transmisión, certificar dispositivos, y apoyar el uso mundial de LoRaWAN</b>.
                  Así es como asegura la posición como líder del mercado y estándar LPWAN en el área sin licencia.
                  Su enfoque principal es la integración de nuevas funciones en el estándar LoRaWAN para garantizar que será la
                  solución preferida para Internet de las cosas. (IoT). También invierten constantemente en el sólido programa de
                  certificación., que es un requisito previo para la interoperabilidad y longevidad que requiere el Internet de
                  las cosas.
                  </p>
                  </div>

                  <blockquote className="flaticon-quote">
                    <p>
                      <b>LoRa es util</b> para conexiones a larga distancia y para redes de IoT
                      en las que se necesiten sensores que no dispongan de corriente eléctrica de red,
                      teniendo grandes aplicaciones, llegando a lugares con pocas coberturas hasta ciudades inteligentes
                    </p>
                  </blockquote>

                  
                  </div>
                  <p>
                  <b>LoRaWAN</b> es protocolo de red que usa la tecnología LoRa, para redes de baja potencia y área amplia,
                   LPWAN (Low Power Wide Area Network) empleado para comunicar y administrar dispositivos LoRa.
                    El protocolo LoRaWAN se compone de gateways y nodos
                  </p>
                
                  
                  <ul type='square'>
                  <li><b>Gateways (Antenas):</b> son los encargados de recibir y enviar información a los nodos.</li>                 
                  
                  <li><b>Nodos (Dispositivos):</b> son los dispositivos finales que envían y reciben información hacia el gateway.</li>
                  </ul>
                  <div className="Loraimage">
                    <img
                      style={{float:'left', marginTop:'10px'}}
                      src="/images/iot/lorawan.png"
                      alt="Image"
                      width={'350px'}
                    />              
                 
                  <blockquote className="flaticon-quote">
                    <p>
                    <b>LoRaWAN es el protocolo que dicta como se envían y reciben los paquetes de datos
                    </b> de sensores o otros componentes de la red y la forma de tratar esos paquetes.
                    </p>
                  </blockquote>
                  </div> 

                  <div>                 

                  <h2 style={{clear:"both"}} className="pt-4">Funcionamiento de LoRaWAN</h2>
                  </div>

                  <h3 className="pt-5">Clases de dispositivos</h3> 

                  <p>
                  <b>Una red desarrollada</b> con esta tecnología tiene como objetivo conectar dispositivos entre sí.
                   Facilita la creación de diferentes gateway y una red de área amplia que del grupo LPWAN. Asimismo,
                    define la arquitectura del sistema y posee tres clases de dispositivos.
                  </p>                                   

                  <div className="Loraimage text-down">
                    <img
                      style={{float: 'left', margin:'10px'}}
                      src="/images/iot/claseLora.png"
                      alt="Image"
                      width={'600px'}
                      height={'600px'}
                      
                    />                    

                  <p>
                    <b>Clase A (menor potencia, dispositivos finales bidireccionales):</b> Todo
                     dispositivo de la red tiene que soportarla. Las comunicaciones siempre las 
                    inicio un dispositivo final y es completamente asíncrono. 
                    Cada transmisión uplink se envía en cualquier momento y le siguen dos ventanas de downlink,
                    que generan la bidireccionalidad de la comunicación. Son dispositivos alimentados por batería.
                  </p>
                  <p>
                    <b>Clase B (dispositivos finales bidireccionales con latencia de descarga determinista):</b> Se
                      sincronizan a la red utilizando guías periódica y ping shots programados. Esto es lo que permite
                      que se envíe un downlinkcon latencia determinista, que también puede programarse.
                       Son dispositivos alimentados por batería.
                  </p>
                  <p>
                  <b>Clase C (menor latencia, dispositivos finales bidireccionales):</b> Dispositivos que pueden estar alimentados siempre. Pueden escuchar de forma continua.
                   Reducen la latencia durante el downlink manteniendo el receptor del dispositivo final abierto cuando no 
                   transmite. Así, el servidor de la red puede iniciar una descarga en cualquier momento.
                  </p>
                  </div>

                  <h3 className="pt-2"><b>Cobertura LoRaWAN</b></h3>
                  

                  <p>
                  LoRa se creó con la finalidad de ofrecer cobertura a nivel mundial y para ello existe varias formas de
                  conectarse a una red LoRa, por ejemplo Comunidades abiertas, redes privadas o redes ofrecidas por operadoras.
                  </p>
                  <p>
                  Comunidades abierta — generalmente creadas por comunidades de desarrolladores.
                  </p>
                  <p>
                  Redes privadas, creadas para dar servicios a redes propias en aplicaciones 
                  como Smart Cities, agricultura, logística, etc.
                  </p>
                  <p>
                  Redes ofrecidas por operadoras en la que se paga por el uso de la red,
                  un ejemplo sería la extensa red creada por Helium.
                  </p>

                  <h2 text-center>Lora Alliance</h2>
                  <div className="loraAlliance">
                  <img
                      style={{float: 'right'}}
                      src="/images/iot/loralliance.png"
                      alt="Image"
                      width={'450px'}
                      height={'650px'}
                      
                    />

                  <p>
                  Los LoRa Alliance está creciendo rápidamente: Desde que fue fundada en 2015, el número de empresas miembro ha aumentado
                  a más de 500. Ninguna otra alianza tecnológica ha hecho esto tan rápido. El campo de acción también se ha ampliado,
                  por ejemplo, también han estado certificando dispositivos desde 2018. En noviembre 2019, mas que 130 operadores de
                  red en más 140 países estaban usando LoRaWAN. Al mismo tiempo, el número de instalaciones en redes privadas, que
                  componen casi 50 porcentaje de las implementaciones, ha aumentado significativamente en el pasado 18 meses.
                  </p>
                  <p>
                  En 2019 ~ 2021, varias marcas importantes también se unieron a nivel ejecutivo. Estos incluyen MOKOLoRa, Arduino, Intel, Amazonas,
                  Thingstream AG, y por supuesto Unitymedia NRW GmbH.
                  </p>
                  <p>
                  Con alrededor 100 operadores de red, 68 operadores miembros de la alianza, actividad operativa en 51 países, y provisión
                  de LoRaWAN en más de 100 países, los beneficios, y los efectos de LoRa Alliance ya se han vuelto internacionalmente
                  claros. Todavía se planea una expansión continua.
                  </p>
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
                  href="/blog"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/sigfox"
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

export default ArticleLorawan;
