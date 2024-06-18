import React, {useState}  from "react";
import Link from "next/link";

const Article3gpp = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo GSM");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Long Term Evolution");
    
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
              <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/logo3gpp.png"
                    alt="Image"
                    width={'250px'}
                  />
                

                <div className="article-content">

                  <h3>¿Qué es 3GPP (Third Generation Partnership Project)?</h3>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 07 de junio del 2024
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>

                

                <div className="pt-5">
                  <p>
                  <b>El Proyecto de Asociación de Tercera Generación (3GPP)</b> es una colaboración entre grupos de asociaciones de telecomunicaciones,
                  para crear una especificación de sistema de telefonía móvil 3G de tercera generación aplicable a nivel mundial dentro del alcance
                  de la Telecomunicaciones Móviles Internacionales. -Proyecto 2000 de la Unión Internacional de Telecomunicaciones (UIT).
                  <b>Las especificaciones 3GPP se basan en las especificaciones evolucionadas del Sistema Global para Comunicaciones Móviles (GSM)</b>.
                  </p>

                  <p>
                  <b>El grupo de colaboración 3GPP es responsable</b> de la creación de especificaciones técnicas y estándares para la comunicación móvil en todo el mundo.
                  Estas especificaciones son importantes porque permiten la interoperabilidad entre diferentes equipos de telecomunicaciones y operadores
                  móviles, garantizando así una buena calidad de servicio para los usuarios finales.                                   
                  </p>
                  <p>
                  Es importante destacar que el trabajo del grupo 3GPP no se limita solo a la tecnología móvil, ya que <b>también se está trabajando en la
                  definición de estándares para el Internet de las cosas (IoT)</b> y la conectividad de dispositivos en la red. Esto es especialmente importante
                  a medida que más y más dispositivos se conectan a Internet y requieren una comunicación segura y confiable.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    3GPP no debe confundirse con el Proyecto de Asociación de Tercera Generación 2 (3GGP2), que especifica estándares para otra tecnología
                    3G basada en IS-95 (CDMA), comúnmente conocida como CDMA2000.
                    </p>
                    <p>
                    3GPP2 nació de la iniciativa “IMT-2000” de telecomunicaciones móviles internacionales de la Unión Internacional de Telecomunicaciones (UIT),
                    que cubre alta velocidad, banda ancha y protocolo de Internet (IP).
                    </p>
                  </blockquote>

                  <h4>El 3GPP ha especificado los siguientes estándares:</h4>

                  <ul>
                    <li><b>GSM</b></li>
                    <li><b>GPRS</b></li>
                    <li><b>GERANO</b></li>
                    <li><b>WCDMA</b></li>
                    <li><b>HSPA (HSDPA y HSUPA)</b></li>
                  </ul>

                  <p>
                  <b>3GPP (Third Generation Partnership Project) es el organismo de estandarización que especifica los sistemas de comunicaciones móviles
                  LTE/LTE-Advanced</b>, así como G UTRA y 2G GSM. Los estándares 3GPP están estructurados en Releases. La definición de la tecnología móvil
                  conocida como Long Term Evolution (LTE) se inició en 2005 y las primeras especificaciones 3GPP se introdujeron en la Release 8 en
                  Diciembre de 2007. El término user equipment (UE), se ha usado tradicionalmente por 3GPP para referirse a los dispositivos celulares
                  utilizados por los suscriptores para acceder a los servicios de red móvil. Un UE puede ser un Smartphone o un dispositivo empotrado
                  contenido en un equipo de comunicaciones máquina a máquina (M2M). Para soportar múltiples tipos de UE con distintas capacidades, 3GPP
                  define categorías diferentes en 3GPP 36.306. Las categorías difieren en las máximas tasas de transmisión soportadas en los enlaces
                  ascendente y descendente, que también están asociadas, por ejemplo, con el soporte de multiplexación espacial (transmisión MIMO).
                  También se utilizan las categorías en los eNodeB (estacione base LTE) para determinar las condiciones bajo las cuales tendrá lugar
                  la comunicación con el UE.                  
                  </p>


                  <p>
                  En la Release 12 se introdujo una nueva categoría de UE, la Categoría 0, que proporciona reducciones de coste de aproximadamente el 50%
                  comparada con la Categoría 1. También se introdujo un nuevo modo de ahorro de potencia en esta Release, en 3GPP TS 24.301 y 23.682.
                  El principal propósito de esta nueva funcionalidad es reducir el consumo de energía mientras que el dispositivo no está transmitiendo
                  ni recibiendo. Otras soluciones para MTC se discutieron en Release 12 como parte de 3GPP 36.888. La especificación de MTC UE Cat0
                  incorpora otras mejoras como la transmisión half-duplex, una única cadena de RF y la reducción de la tasa pico de transmisión.
                  La reducción de coste usando un ancho de banda reducido y las mejoras de cobertura se pospusieron a la Release 13.
                  </p>

                  <blockquote className="flaticon-quote">
                    <li>
                      <b>La tecnología LTE-M</b> es una de las dos respuestas que 3GPP tiene para IoT. Esta tecnología se desarrolla para permitir que dispositivos de IoT
                      puedan conectarse directamente a una red 4G.                  
                      </li>
                    <li>
                    La otra respuesta del 3GPP es <b>NB-IoT</b>, que usa un esquema de acceso más simple que el anterior, SC-FDMA(Single Carrier Frequency Division Multiple Acces),
                    para reducir el coste y la complejidad.
                    NB-IoT, se ha desarrolado para reutilizar el diseño LTE y para permitir una intefración fácil y compartir los recursos radio con las redes
                    GSM y LTE existentes, que no operará en LTE.
                    </li>
                  </blockquote>

                  <h4 className="pt-3">Introducción a MTC</h4>
                  <li><b>MTC en IoT:</b> MTC se refiere a la comunicación entre máquinas o dispositivos sin participación humana directa. <b>Es un habilitador clave para la IoT,
                    donde varios dispositivos, sensores y máquinas interactúan e intercambian información.</b></li>

                  <li><b>Aplicaciones diversas:</b> MTC encuentra aplicaciones en una amplia gama de sectores, incluidas ciudades inteligentes, atención médica, automatización industrial,
                      agricultura y más.</li>

                  <h4 className="pt-3">3GPP MTC en celulares</h4>

                  <li><b>Compatibilidad con dispositivos MTC:</b> las especificaciones 3GPP MTC están diseñadas para admitir los requisitos de comunicación de una gran cantidad de dispositivos MTC,
                    que pueden variar desde sensores simples hasta máquinas más complejas.</li>

                    <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/3gpp5g.png"
                    alt="Image"
                    width={'450px'}
                  />

                  <li><b>Dispositivos de bajo consumo:</b> los dispositivos MTC a menudo incluyen dispositivos de bajo consumo y bajo costo con necesidades de comunicación específicas,
                    como transmisión de datos intermitente y administración eficiente de energía.</li>

                    <h4 className="pt-3">Evolución a 5G</h4>
                    <li><b>NR-MTC en 5G:</b> Con la llegada de 5G (New Radio - NR), <b>3GPP continúa evolucionando los estándares MTC. NR-MTC (5G MTC)</b> se basa en la base de tecnologías MTC
                      anteriores e <b>introduce mejoras adicionales para cumplir con los diversos requisitos de las aplicaciones de IoT.</b></li>

                    <li><b>Comunicación ultraconfiable de baja latencia (URLLC):</b> las capacidades de URLLC en 5G NR proporcionan comunicación de baja latencia, lo cual es crucial para aplicaciones
                      que requieren capacidad de respuesta en tiempo real.</li>
                      </div>

                      <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/3gppSatelite.jpeg"
                    alt="Image"
                    width={'300px'}
                  />

                    <blockquote className="flaticon-quote">
                    <p>
                    <b>La 3GPP,</b> el organismo que reúne periódicamente a los principales actores del sector de las telecomunicaciones para la definición de los
                    distintos estándares de comunicación, <b>incluirá en la definición del estándar 5G-IoT el escenario 4 o también conocido en el sector como
                    escenario Sateliot</b> en el que se contempla a las redes de nanosatélites de baja órbita para prestar servicios IoT.
                    </p>
                  </blockquote>

                  
                  </div>

                  <h4>Casos de usos y Aplicaciones</h4>
                  <ul>
                    <li><b>Ciudades inteligentes:</b> MTC desempeña un papel crucial en la creación de ciudades inteligentes al permitir la comunicación entre varios dispositivos
                      y componentes de infraestructura, lo que <b>conduce a una mayor eficiencia y gestión de recursos.</b></li>
                    
                    <li>IoT industrial: <b>En el sector industrial, MTC facilita la implementación de soluciones de IoT</b> para monitorear y controlar maquinaria, optimizar
                      procesos y mejorar la eficiencia operativa general.</li>

                    <li>Agricultura: <b>Los dispositivos MTC en agricultura incluyen sensores para monitorear las condiciones del suelo, el clima y la salud de los cultivos</b>,
                      lo que contribuye a las prácticas agrícolas de precisión.</li>
                  </ul>

                  <p>
                  <b>3GPP MTC</b>, dentro del contexto más amplio de los estándares 3GPP, <b>es un componente crucial para el crecimiento de IoT</b>.
                  Permite la comunicación eficiente de máquinas y dispositivos, admitiendo diversas aplicaciones en todas las industrias. <b>La evolución
                  de los estándares MTC, como LTE-M y NB-IoT</b>, refleja el compromiso de 3GPP de abordar los requisitos de comunicación únicos de una amplia
                  gama de dispositivos MTC en el mundo de IoT en rápido avance.
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
                  href="/blog/gsm"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/lte"
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

export default Article3gpp;
