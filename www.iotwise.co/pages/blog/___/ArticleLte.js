import React, {useState}  from "react";
import Link from "next/link";

const ArticleLte = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de  3GPP");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Wi - SUN");
    
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
                    style={{float: 'right'}}
                    src="/images/iot/lteLogo.jpg"
                    alt="Image"
                    width={'250px'}
                  />

                <div className="article-content">

                  <h2>Long Term Evolution - Evolución a Largo Plazo</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 10 de Junio del 2024
                      </li>
                    </ul>
                  </div>
                </div>

                </div>

                <div className="pt-5">
                  <p>
                  Posiblemente, ya te estés preguntando <b>«¿LTE qué es?»</b>. Sus siglas aluden a long term evolution. <b>Fue la asociación 3GPP</b>, que
                  también creó y desarrolló las redes GSM y UMTS, quien se encargó de diseñarla.
                  </p>

                  <p>
                  Los motivos para su creación fueron varios. Los usuarios buscaban una conexión más rápida y los operadores buscaban la reducción
                  de los costes. Finalmente, había que garantizar la continuidad de la red 3G con un sistema más fiable que WiMAX.
                  </p>

                  <p>
                  La conectividad LTE se remonta a principios de la década de 2000 y fue impulsada por el rápido avance del mercado de los teléfonos
                  inteligentes. <b>El sector de las telecomunicaciones se dio cuenta de que</b>, para que los usuarios pudieran sacar el máximo partido
                  a funciones que exigen muchos datos, como la transmisión en alta definición y los juegos, <b>las actuales redes de tercera generación (3G)
                  necesitarían una actualización.</b>
                  </p>
                  <ul>
                    <li>Ofrece un <b>ancho de banda considerablemente mayor que el 3G</b>, lo que permite un acceso mucho más rápido
                      a los contenidos y las aplicaciones.</li>

                      <li>También tiene menor latencia, lo que <b>aumenta el rendimiento de las aplicaciones sensibles al tiempo</b>, como el streaming de vídeo.</li>

                      <li><b>La penetración de la señal también es más fuerte que la de 3G</b>, lo que se traduce en una mejor cobertura en interiores.</li>

                      <li>Las velocidades de datos de LTE pueden ser hasta 15 veces más rápidas que las de 3G. <b>Una nueva versión de LTE (LTE-A)
                        ofrece velocidades de datos aún mayores</b>, llegando a ser tres veces más rápido que la versión de LTE original.</li>
                  </ul>
                  <div className="article-image bg-white">
                  <img
                    style={{float: 'left'}}
                    src="/images/iot/4glogo.jpg"
                    alt="Image"
                    width={'200px'}
                  />

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>LTE (Long-Term Evolution)</b> es un estándar de banda ancha inalámbrica de cuarta generación (4G). De especial valor para las empresas,
                    este estándar <b>ha dado lugar a varias tecnologías evolucionadas (en particular, LTE-M y NB-IoT)</b>, diseñadas para facilitar el despliegue
                    de dispositivos IoT y M2M de manera eficiente y a un menor coste.
                    </p>
                  </blockquote>
                  </div>
                  
                  <h5>LTE se diseñó específicamente para potenciar las velocidades de transferencia de datos que ofrecen las tecnologías 3G existentes.</h5>

                  <p className="pt-1">
                  Utiliza la arquitectura de la red 3G como punto de partida, pero la hace más sencilla y eficiente. Más concretamente, en una red 3G, una
                  unidad llamada controlador de red de radio (RNC) controla las estaciones base NodeB de la red. <b>Las redes LTE están equipadas con funciones
                  de control integradas que eliminan por completo la necesidad de un RNC</b>. Para los usuarios, esta arquitectura simplificada da lugar a
                  conexiones más rápidas y mayores tasas de transferencia de datos.
                  </p>

                  <p>
                  <b>LTE se desarrolló originalmente pensando en los teléfonos inteligentes y no en el uso comercial del IoT</b>. Sin embargo, en los últimos años,
                  LTE ha dado lugar a tecnologías evolucionadas de redes de área amplia y bajo consumo (LPWAN) diseñadas para proyectos de IoT industriales,
                  comerciales y de consumo. Entre ellas se encuentran:
                  </p>

                  <li><b>LTE-CAT M o LTE-M</b></li>
                  <li><b>LTE-CAT NB o NB-IoT</b></li>
                  <li><b>LTE-CAT 1</b></li>

                  <p>
                  <b>LTE es una red de Cuarta Generación a menudo denominada 4G estándar inalámbrico</b>. El estándar 4G LTE se considera ya obsoleto, y las redes 4G
                  más modernas se basan en la tecnología LTE-Advanced. <b>LTE-Advanced es, por tanto, una versión evolucionada de la antigua arquitectura LTE</b>.
                  </p>
                  <p>
                  Durante las dos últimas décadas, esta red LTE 4G ha proporcionado una mayor capacidad de red y velocidad para los dispositivos
                  móviles en comparación con lo que la tercera generación 3G de tercera generación.
                  </p>

                  <p>
                  A medida que la transformación digital ha revolucionado las industrias, se ha hecho necesaria una capacidad
                  de red aún mayor. Por eso se desplegó la red 5G. 5G es la quinta generación de tecnología inalámbrica. Proporciona mayor velocidad,
                  menor latencia y mayor fiabilidad.
                  </p>
                  <p>
                  El 5G no solo es más rápido que el 4G y significativamente más seguro y estable que las redes más antiguas. En última instancia, 5G
                  permite que los datos vayan de un lugar a otro con un retardo mucho menor entre el envío y la llegada. Este proceso se conoce como latencia.
                  </p>
                  <div className="article-image bg-white">
                  <img
                    style={{float: 'right'}}
                    src="/images/iot/lte4g.jpeg"
                    alt="Image"
                    width={'200px'}
                  />

                  <h3>¿Cómo funciona LTE?</h3>
                  </div>
                  <p>
                  LTE es un rediseño del estándar 3G para satisfacer la demanda de transmisión de datos de baja latencia. El rediseño incluye:
                  </p>
                  <ul>
                    <li>Una red central basada en direcciones IP</li>
                    <li>Una arquitectura de red simplificada</li>
                    <li>Una nueva interfaz de radio</li>
                    <li>Un nuevo método de modulación</li>
                    <li>Radios de entrada y salida múltiple (MIMO) para todos los dispositivos</li>
                  </ul>
                  <p>
                  En la tecnología 4G LTE, los equipos de usuario (UE), como los teléfonos inteligentes o los dispositivos celulares, se conectan
                  a través de la red de acceso radioeléctrico LTE (E-UTRAN) al núcleo de paquetes evolucionado (EPC) y luego a las redes externas,
                  como Internet. El Nodo Evolucionado (eNodeB) separa el tráfico de datos del usuario (plano de usuario) del tráfico de datos de gestión
                  de la red (plano de control) y alimenta ambos por separado al EPC.
                  </p>
                  <h3>Evolución de Long Term Evolution</h3>
                  <ul type='none'>
                    <li><b>La 3G se introdujo en 1998 y podría considerarse la base tecnológica de la LTE</b>, ya que ésta se refiere específicamente a
                    capacidades de rendimiento que superan a la 3G. <b>3G fue la primera tecnología con velocidades de datos en el rango de los Mbps.</b></li>

                    <li>Las normas de velocidad y conexión de 4G fueron establecidas por la UIT-R en marzo de 2008. La norma 4G para móviles, incluidos
                      los teléfonos inteligentes y las tabletas, especificaba que cualquier producto o servicio que se autodenominara 4G debía tener
                      velocidades de conexión con un pico de al menos 100 Mbps, y al menos 1 Gigabit por segundo (Gbps) para usos estacionarios.
                      Sin embargo, cuando se establecieron las normas, esas velocidades aún no eran posibles. En respuesta, el UIT-R permitió que los
                      productos y la tecnología se etiquetaran como "4G LTE" si ofrecían una mejora sustancial respecto a la tecnología 3G.</li>

                      <li><b>LTE Advanced (LTE-A)</b> es una versión mejorada de LTE que ofrece velocidades más rápidas y mayor estabilidad que la LTE
                        normal, pero aún <b>no es tan rápida como la "verdadera" 4G</b>. Se estandarizó en 2011. LTE-A consigue mayores velocidades mediante
                        la agregación de canales, para que los usuarios puedan descargar datos de varias fuentes al mismo tiempo.</li>

                        <li><b>Las especificaciones de LTE Advanced Pro(LTE-AP)</b> se publicaron en 2016 y 2017. LTE Advanced Pro incluye
                          tres grandes innovaciones técnicas: <b>1- la agregación de portadoras</b>, que utiliza el espectro de diferentes bandas de portadoras 
                          LTE, <b>2- la modulación de orden superior</b>, que utiliza el espectro disponible de forma más eficiente al transportar más bits de datos,
                          y <b>3- las antenas de entrada-múltiple salida (MIMO)</b>, que transmiten y reciben datos en paralelo a mayor velocidad. La tecnología
                          MIMO mejora la cobertura y el rendimiento de la red, sobre todo en las zonas urbanas. LTE de clase Gigabit, una forma de LTE Advanced Pro,
                          es teóricamente capaz de alcanzar velocidades de descarga superiores a 1 Gbps, aunque la mayoría de los usuarios no experimentarán
                          velocidades tan rápidas. LTE de clase Gigabit es una opción atractiva para aplicaciones en el comercio minorista, el transporte y otros
                          sectores que necesitan soluciones de alta velocidad y gran ancho de banda.</li>

                          <li><b>El 5G se está desplegando en todo el mundo. Cuando estén totalmente implantadas, las redes 5G ofrecerán velocidades de hasta 10 Gbps,
                           además de una menor latencia, menores necesidades de energía y una capacidad de datos prácticamente ilimitada</b>. Según un articulo del 2019</li>

                  </ul>

                  <h3>Importancia del 5G en IoT</h3>
                  <p className="pt-1">
                  Nos encontramos en un momento en el que el servicio móvil 5G ha comenzado a generalizarse, lo que supone una gran noticia, pues estas redes están contribuyendo
                  a mejorar el rendimiento y la confiabilidad de los dispositivos conectados.
                  </p>
                  <p>
                  Esta red está configurada para impulsar la transformación digital a nivel mundial, y así estimular la innovación y transformar las industrias. A medida que las
                  empresas recurran a redes de próxima generación y sensores, sus negocios mejorarán significativamente.
                  </p>
                  <p>
                  Si hablamos del éxito comercial del IoT, estaríamos hablando de su rendimiento y su dependencia de la rapidez con la que puede comunicarse con otros dispositivos
                  inteligentes. Por ello, el 5G es un factor fundamental para aumentar la velocidad de transferencia de datos.
                  </p>

                  <p><strong>No hay duda de que LTE tiene un impacto significativo en los verticales de la industria en términos de conectividad mejorada. Esta red ha proporcionado
                    velocidad, fiabilidad, seguridad, privacidad y ancho de banda. Sin embargo, a medida que las cosas han evolucionado, hay una necesidad
                    de aún más, y aquí es donde 5G y su capacidad de red están robando el show. La evolución de la red celular ha visto cómo el 5G cambia el
                    modo de operar de las empresas y ofrece importantes oportunidades de innovación. A medida que seguimos utilizando LTE y adoptando 5G,
                    el cielo es el límite de lo que es posible en las empresas. Se trata de un espacio apasionante que hay que seguir de cerca.</strong></p>
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
                  href="/blog/3gpp"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/wisun"
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

export default ArticleLte;
