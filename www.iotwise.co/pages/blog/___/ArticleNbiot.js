import React, {useState}  from "react";
import Link from "next/link";

const ArticleNbiot = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de SigFox");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de LTE - CAT M1");
    
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
                <div className="article-image bg-white pt-4">
                  <img
                    src="/images/iot/logoNbiot.png"
                    alt="Image"
                    width={'175px'}
                    style={{float:'left', marginRight:'10px'}}
                  />

                  <h2>Tecnología NB-IoT</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 01 de Junio del 2024
                      </li>
                    </ul>
                  </div>
                </div>                
                </div>

                <div className="pt-5">
                  <p>
                  <font size='4'>NB-IoT <b>(Narrowband IoT)</b></font> es una tecnología de comunicación inalámbrica que se utiliza para conectar dispositivos
                  IoT (Internet de las cosas) a una red móvil. Es una versión de la tecnología de comunicación IoT de baja
                  potencia (LPWAN) y se enfoca en proporcionar una conectividad de baja velocidad y bajo consumo de energía
                  para dispositivos IoT.
                  </p>
                  <p>
                  NB-IoT utiliza un ancho de banda estrecho y un protocolo de comunicación específico para lograr una mayor
                  eficiencia en el uso de la batería y un mayor alcance de transmisión de datos. Esto lo convierte en una
                  opción ideal para dispositivos IoT que no requieren una gran cantidad de datos, como sensores, dispositivos
                  de monitoreo y dispositivos de automatización.
                  </p>
                  <p>
                  En un mundo donde disponer del máximo ancho de banda y velocidad parece el principal objetivo, <b>la 
                  tecnología Narrowband</b> se presenta como una excelente alternativa cuando se necesita todo lo contrario.
                  Su bajo consumo y su alta eficiencia la convierten en la mejor opción para distintas aplicaciones
                  donde la fiabilidad y el alcance es mucho más importante que la velocidad en la transmisión de los datos.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>NB-IoT</b> es basada en el LTE.  La tecnología de comunicación NB-IoT posibilita conexiones
                    con muy buena cobertura y menos interferencia. Esto se debe a que utiliza frecuencias de red diferentes a las que utilizamos
                    en las comunicaciones existentes.
                    </p>
                  </blockquote>

                  <h2 className="p-2">NB-IoT vs LTE-M</h2>

                  <p>
                  Las redes LPWA (Low-Power Wide-Area) son la elección correcta especialmente para estos casos de uso de IoT en los que el
                   consumo de energía, la penetración en edificios, la duración de la batería y, sobre todo, los costes son relevantes.
                   Además de la IoT de banda estrecha, <b>la tecnología LTE-M</b> también puede considerarse para estas aplicaciones IoT.
                   
                  </p>

                  <div className="article-image bg-white">
                  <img
                    src="/images/iot/LteNbiot.png"
                    alt="Image"
                    width={'350px'}
                    style={{float:'left', marginRight:'10px'}}
                  />

                  <h3>Ventajas</h3>

                  <ul>

                    <li><b>Bajo consumo de energía:</b> Tanto los conjuntos de chips de NB-IoT como los de LTE-M
                     se centran en las características de radio y en las funciones de ahorro de energía 
                     (por ejemplo, el modo de reposo, las actualizaciones periódicas de la zona de seguimiento
                     y la recepción discontinua ampliada), lo que garantiza una eficiencia energética óptima.</li>

                     <li><b>Costes Bajos:</b> NB-IoT, así como LTE-M, convencen por sus bajos precios de explotación y servicio, así como por los favorables costes de los módulos.
                       Esto es posible gracias al diseño del chipset, en el que se ha prescindido de funciones LTE innecesarias,
                       y al aumento general de los volúmenes de producción.</li>

                     <li><b>Mejor Cobertura:</b> En comparación con el GSM, NB-IoT y LTE-M tienen una densidad de potencia hasta 20 decibelios (NB-IoT) y 15 decibelios (LTE-M) mayor.
                      Esto se consigue mediante métodos de modulación de banda estrecha y múltiples repeticiones de transmisión</li>

                      <li><b>Fácil Instalación:</b> Tanto NB-IoT como LTE-M funcionan de forma muy sencilla a través de Plug & Play. Sin necesidad de instalar redes locales o pasarelas, los sensores pueden conectarse directamente
                       a la red NB-IoT y/o LTE-M.</li>

                       <li><b>Seguridad y Normalizaciión:</b> NB-IoT y LTE-M son tecnologías estandarizadas a nivel mundial.
                        Ambas redes utilizan mecanismos de seguridad LTE según el 3GPP, y las funciones de seguridad se revisan
                        y mejoran constantemente.</li>

                        <li><b>Tecnología básica LTE:</b> Tanto NB-IoT como LTE-M se basan en la tecnología LTE y, por lo tanto,
                         pueden integrarse fácilmente en las infraestructuras LTE existentes mediante una actualización de software.</li>               
                    
                  </ul>                 
                  </div>
                  <p>
                  Ambas tecnologías, NB-IoT y LTE-M, son buenas alternativas de conectividad ya que están diseñadas para aplicaciones de IoT,
                  se diferencian en su ancho de banda, velocidad de transmisión de datos, cobertura y eficiencia energética. Dependiendo de la
                  aplicación y los requisitos específicos del dispositivo, una tecnología puede ser más adecuada que la otra red. 
                  </p>
                  <p>
                  De los dos estándares, <b>NB-IoT es menos potente en cuanto a velocidad, capacidad de transmisión de datos y soporte para móviles</b>. Está
                  diseñada principalmente para situaciones donde no es necesario una comunicación móvil de gran exigencia, y aplicaciones
                  que requieren transmisiones de baja velocidad y pequeñas cantidades de datos, mientras <b>LTE-M puede manejar una amplia gama de
                  aplicaciones de IoT</b>, desde dispositivos de baja velocidad y bajo consumo de energía hasta dispositivos de alta velocidad y gran
                  ancho de banda. Por ello LTE-M es mejor opción para áreas urbanas densamente pobladas donde hay una mayor densidad de estaciones
                  base, y aunque todavía consume muy poca energía, no es tan eficiente como la NarrowBand-IoT.
                  </p>
                  <p>
                  La principal diferencia entre NB-IoT y LTE-M es <b>la tecnología de conectividad que utilizan</b>. NB-IoT es una tecnología
                  de conectividad de <b>banda estrecha</b> mientras que el LTE-M es una tecnología de conectividad de <b>banda ancha</b>.
                  </p>
                </div>

                <h2 className="pt-3">Aplicación de la Tecnología NB-IoT</h2>
                <p>
                La tecnología narrowband dispone de unas características muy particulares, que la hacen idónea para ser utilizada en determinadas aplicaciones.
                 Todo tipo de sensores y dispositivos GPS utilizan esta tecnología para transmitir datos de una manera fiable y a bajo costo.
                </p>
                <div>
                    
                  <img
                    src="/images/iot/apliNB.png"
                    alt="Image"
                    width={'500px'}
                    style={{float:'right', marginLeft:'5px'}}
                  />

                <ul style={{textAlign:"justify"}}>                 

                  <li><b>Medición inteligente:</b> Lectura
                   remota de gas en tiempo real, Uso de electricidad y agua sin necesidad de controles manuales.
                  Los conocimientos permiten una mejor conservación de la energía y detección de fugas. El bajo consumo
                  y el alcance mejorado de NB-IoT se adaptan incluso a ubicaciones difíciles.</li>                 

                  <li><b>Monitoreo Ambiental:</b> Campos
                   agrícolas, ríos, desierto, y las áreas de conservación protegidas pueden ser monitoreadas para determinar las condiciones,
                  operaciones de equipos, intrusiones, etc.. sin una amplia infraestructura de energía o comunicación.</li>

                  <li><b>Agrícultura:</b> Sensores
                   de humedad económicos, monitores de equipos, Los probadores de nutrientes del suelo conectados a través de NB-IoT ofrecen
                  una mejor visibilidad para optimizar el riego., fertilizantes, y rastrear cultivos.</li>

                  <li><b>Smart Healthcare:</b> Las
                   bajas necesidades de energía y la conectividad de área amplia de NB-IoT son ideales para mejorar la atención al paciente mediante
                  la monitorización remota durante el tratamiento.. Un sistema de localización de caídas basado en NB-IoT permite una notificación temprana
                  si los pacientes en riesgo intentan ponerse de pie o moverse por sí solos. Se puede alertar al personal de atención para que ayude
                  al paciente con prontitud.</li>

                  <li><b>Seguimiento y Gestión de activos:</b> Las
                   etiquetas NB-IoT asequibles que funcionan con baterías monitorean la ubicación y el estado de los vehículos, maquinaria pesada, artículos
                  de transporte retornables (paletas, contenedores), e infraestructura de activos remotos.</li>

                  <li><b>Industria 4.0:</b> La
                   tecnología NB-IoT está siendo utilizada en el campo de la industria 4.0, donde se están implantando redes de comunicación inalámbricas para
                  monitorizar y gestionar el funcionamiento de las fábricas.</li>
 
                  <li><b>Seguridad:</b> También
                   es posible utilizar narrowband en el sector de la seguridad. Los sensores de alarmas (antirrobo, incendios, inundaciones…) utilizan esta
                  tecnología para enviar alertas e información de una forma eficiente.</li>

                  <li><b>Minería:</b> Su
                   amplia cobertura y fiabilidad hace de narrowband una tecnología perfecta para ser empleada incluso en las profundidades del subsuelo, tal
                  y como ocurre en la minería.</li>

                  <li><b>Logística y Transporte:</b> También
                   es muy útil a la hora de gestionar fácilmente flotas de transporte, en logística e incluso en el tratamiento de ciertas condiciones en
                  el transporte, como por ejemplo la temperatura o la humedad.</li>

                  
                </ul>
                </div>

                <p>
                <b>Esta tecnología de red fue desarrollada por 3GPP</b>, para dar soluciones de conectividad al crecimiento de IoT, en lo que se denomina <b>extended
                Machine Type Communications (eMTC)</b>, y ofrece una cobertura de red estable con alta densidad de conexiones.
                La NB-IoT tiene la capacidad de conectarse sin problemas en redes móviles ya establecidas. 
                </p>
                <p>
                Desde 2016 NB-IoT es un estándar para las comunicaciones inalámbricas que puede intercambiar pequeñas cantidades de datos de forma eficiente
                a múltiples dispositivos, minimiza el consumo de energía y aumenta el rango de cobertura en ubicaciones que no cuentan con tecnología
                móviles convencionales.
                </p>
                

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
                  href="/blog/sigfox"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/ltem"
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

export default ArticleNbiot;
