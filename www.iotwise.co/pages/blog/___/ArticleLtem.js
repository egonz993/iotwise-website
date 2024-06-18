import React, {useState}  from "react";
import Link from "next/link";

const ArticleLtem = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de NB - IoT");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de ZigBee");
    
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
                    style={{marginTop:'28px'}}
                    src="/images/iot/logoLteM.png"
                    alt="Image"
                    width={'200px'}
                  />

                <div className="article-content">
                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 01 de junio del 2024
                      </li>
                    </ul>
                  </div>
                </div>
                </div>

                
                

                <div className="pt-5">
                  <p>
                  <font size='5'><b>LTE-M</b></font> es la abreviatura de <b>LTE Cat-M1</b> o <b>Long Term  Evolution (4G) categoría M1</b>. Consiste en una tecnología hecha
                  para que los dispositivos IoT puedan conectarse directamente a una red 4G, sin necesidad de una puerta de enlace.
                  </p>

                  <p>
                  LTE-M es un término industrial simplificado para el estándar de tecnología de área amplia de baja potencia (LPWA)
                  LTE-MTC publicado por 3GPP en la especificación Release 13.
                  </p>
                  <p>
                  Trata de una tecnología de área amplia de baja potencia que permite IoT a través de una menor complejidad del
                  dispositivo y proporciona una cobertura extendida. Al mismo tiempo, permite la reutilización de la base instalada de LTE.
                  Como resultado, se obtiene una mayor vida útil de la batería hasta 10 años o más para una amplia gama de casos de uso.
                  </p>
                  <p>
                  Gracias al apoyo de todos los principales fabricantes de equipos móviles, conjuntos de chips y módulos, <b>las redes LTE-M coexisten con todas
                  las redes móviles 2G, 3G y 4G</b>. Además, se benefician de todas las características de seguridad y privacidad de las redes móviles, como el
                  soporte para la confidencialidad de la identidad del usuario, autentificación de entidades, identificación de equipos móviles e integridad de datos.
                  </p>
                  </div>

                  <blockquote className="flaticon-quote">
                    <p>
                    Elegido por nueve de los mayores operadores del mundo, como <b>AT&T</b>, <b>Verizon</b> y <b>Orange</b>, por citar solo algunos, <b>LTE-M
                    está ganando impulso y empieza a superar gradualmente a NB-IoT</b> a medida que cada vez más operadores le dan preferencia.
                    </p>
                  </blockquote>
                  <h3>Características</h3>

                  <div className="article-image bg-white">
                  <img
                    style={{float:'right', margin:'2px'}}
                    src="/images/iot/caraLTEM.png"
                    alt="Image"
                    width={'350px'}
                    height={'650px'}
                  />
                  
                  <ul>
                  <li><b>Baja velocidad de datos:</b> Se estructura de modo que las redes puedan acomodar un gran número de dispositivos
                    conectados que solo requieran pequeñas cantidades de datos.</li>

                  <li><b>Bajo coste de los dispositivos:</b> Con tantos sistemas M2M de bajo coste ya disponibles, LTE-M
                    necesita proporcionar beneficios de un sistema móvil, pero con un coste bajo.</li>

                  <li><b>Duración prolongada de la batería:</b> El sistema utiliza muy poca energía de la batería.</li>

                  <li><b>Amplio espectrode dispositivos:</b> Los sistemas M2M LTE permiten una amplia variedad de distintos tipos de dispositivos.</li>                   

                  <li><b>Cobertura mejorada:</b> Las aplicaciones de esta red operan dentro de una gran variedad de localizaciones,
                    no solo donde la recepción sea buena.</li>                   
                  </ul>                 

                  <p>
                  El protocolo utilizado específicamente para LTE-M se denomina <b>MAT M-1</b>. Esto permite una mejor penetración de las ondas de radio,
                  lo que mejora la cobertura en interiores. LTE-M ofrece una cobertura significativamente mejor en lugares donde es difícil conectar
                  objetos mediante redes 2G/3G/4G.
                  </p>
                  <p>
                  Con el tiempo, <b>LTE-M será parte integrante de 5G</b> y se espera que permanezca a largo plazo. Esto significa que no tendrás que cambiar
                  de dispositivo en un futuro próximo si optas por un módulo LTE-M(algo que merece la pena tener especialmente en cuenta dada la próxima
                  desaparición del 2G).
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>Las redes LTE-M son seguras y fiables</b>, con seguridad carrier grade. Dado que LTE-M opera en el espectro de licencias, los dispositivos no
                    están sujetos a interferencias o congestiones radioeléctricas, un riesgo al que se enfrentan las tecnologías LPWAN sin licencia al no haber
                    control del entorno radioeléctrico.
                    </p>
                  </blockquote>

                  <div className="article-image bg-white">
                  <img
                    style={{float:'left', margin:'5px'}}
                    src="/images/iot/LteNb.png"
                    alt="Image"
                    width={'400px'}
                    height={'650px'}
                  />

                  <p>
                  <b>NB-IoT y LTE-M</b> son una tecnología de red diseñada para <b>aplicaciones de IoT</b>, que requieren consumo de energía baja y conectividad
                  de baja velocidad. <b>LTE-M</b> tiene una velocidad de datos mayor que NB-IoT, admite aplicaciones que requieren comunicación bidireccional
                  y mayores transferenca de datos, además tiene mayor latencia que NB-IoT, esenciales para apliaciones de IoT que requieren respuestas
                  en tiempo real, <b>en cambio NB-IoT</b>, tiene un ancho de banda muy estrecho <b>(a diferencia de LTE-M que tiene un ancho de banda mas 
                    amplia)</b> permitiendo asi una excelente penetración de la señal a trávez de los obstaculos, como edificios y áreas subterráneas. <b>NB-IoT es ideal
                  para aplicaciones de sensores de IoT</b> que requieren una batería de larga duración y conectividad confiable a largas distancias.
                  </p>

                  <ul>
                    <li><b>Consumo de energía:</b> La duración de la batería es un factor crucial para los sensores de IoT , ya que normalmente funcionan
                    con fuentes de energía limitadas, como baterías o baterías recargables. NB-IoT presenta un bajo consumo de energía, lo que permite
                    una mayor duración de la batería para los sensores de IoT. Esto lo convierte en una solución ideal para aplicaciones donde los sensores
                    se implementan en ubicaciones de difícil acceso o de bajo mantenimiento. Aunque LTE-M consume un poco más de energía que NB-IoT,
                    sigue siendo más económico que las tecnologías celulares tradicionales y ofrece suficiente duración de batería para muchas aplicaciones
                    de IoT .</li>

                    <li><b>Latencia y Conectividad Bidireccional:</b> La latencia, es decir, el retraso entre el envío de una solicitud y la recepción de una
                    respuesta, es un aspecto importante en las aplicaciones de IoT. LTE-M ofrece una mejor latencia que NB-IoT , lo que significa que los
                    dispositivos IoT pueden comunicarse más rápido y obtener respuestas en tiempo real. Esto puede ser esencial para aplicaciones como
                    sistemas de seguridad o dispositivos médicos conectados, donde la capacidad de respuesta rápida es crucial.
                    Además, LTE-M admite comunicación bidireccional, lo que permite que los sensores de IoT envíen información y actualizaciones en tiempo
                    real, además de recibir comandos. NB-IoT, por otro lado, está optimizado para la comunicación unidireccional, lo que puede ser
                    suficiente para ciertas aplicaciones de IoT que no requieren retroalimentación en tiempo real.</li>

                    <li><b>Velocidad de Datos:</b> El rendimiento de los datos es un factor esencial a considerar, según las necesidades de la aplicación
                    de IoT . Si la aplicación requiere una transmisión de datos esporádica y de baja velocidad, NB-IoT es una solución adecuada.
                    Por ejemplo, los sensores utilizados en aplicaciones de monitoreo ambiental o lectura de medidores pueden funcionar con velocidades
                    de datos bajas. Por otro lado, si la aplicación implica mayores transferencias de datos y comunicaciones más ricas en información,
                    LTE-M ofrece velocidades de datos más altas, adecuadas para aplicaciones como seguimiento de vehículos o sistemas de videovigilancia.</li>

                    <li><b>Costos:</b> LTE-M ofrece mayor rendimiento y menor latencia que NB-IoT, lo que hace que esta tecnología sea generalmente más cara. Por tanto,
                    es fundamental evaluar cuidadosamente las necesidades específicas para encontrar la solución más adecuada y rentable.</li>
                  </ul>

                  <p>
                  Si te enfrentas a la decisión de si <b>LTE-M o NB-IoT es la tecnología adecuada para tu aplicación</b>, tienes que considerar tus necesidades de IoT:
                  ¿Son primordiales los costes y los tiempos de ejecución largos? ¿Es mi solución estacionaria y sólo transmite datos ocasionalmente?
                  ¿Son más importantes la disponibilidad sin fisuras y la movilidad?
                  </p>
                  <p>
                  Al final, también depende del área de despliegue del IoT. Mientras que NB-IoT es más común en Europa del Este, Rusia o Asia, según información
                  de la GSMA , es más probable que ambas tecnologías estén disponibles en Europa Occidental, América o Australia. Así pues, si hay que cubrir
                  ambos conjuntos de zonas con un solo producto, NB-IoT podría ser la mejor opción en estos momentos.
                  </p>
                  <p>
                  Por último, pero no por ello menos importante, queda la búsqueda de módulos adecuados que admitan NB-IoT y/o LTE-M. Sin embargo, al repasar
                  la lista de módulos IoT móviles, uno se da cuenta: La decisión entre NB-IoT O LTE-M no tiene por qué tomarse necesariamente.
                  <b>Ya existe una amplia selección de módulos que combinan ambas tecnologías en un solo módulo</b>. Al final, probablemente sea solo una cuestión
                  de costes.
                  </p>
                  </div>
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
                  href="/blog/nbiot"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/zigbee"
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

export default ArticleLtem;
