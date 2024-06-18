import React, {useState}  from "react";
import Link from "next/link";

const ArticleWisun = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Long Term Evolution");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de NFC");
    
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
                    style={{float:'left'}}
                    src="/images/iot/wisun-logo.jpeg"
                    alt="Image"
                    width={'150'}
                  />

                  <h1 className="pt-3">Wi - SUN </h1>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 03 de febrero del 2023
                      </li>
                    </ul>
                  </div>
                </div>
                
                </div>

                <div className="pt-5">
                  <p>
                  <b>Wi-SUN (Wireless Smart Ubiquitous Network)</b> es una tecnología de comunicación diseñada para ayudar a facilitar el crecimiento y la adopción
                  de Internet de las cosas (IoT) y aplicaciones de ciudades inteligentes. <b>Es un estándar global abierto que admite la comunicación inalámbrica
                  entre dispositivos y redes</b>. Las redes Wi-SUN se organizan y reparan solas, lo que significa que pueden adaptarse a condiciones cambiantes
                  y proporcionar comunicación confiable y segura para una variedad de aplicaciones, como redes inteligentes, alumbrado público y transporte. 
                  </p>

                  <p>
                  <b>Wi-SUN es un nuevo protocolo de comunicación inalámbrico abierto basado en el estándar IEEE 802.15.4g</b>. Permite el intercambio de datos a
                  velocidades de 50-300 kbps con un retraso de 0,02-1 s en distancias de hasta 4 km. Wi-SUN <b>está adaptado para su uso en redes de comunicación
                  inalámbrica IoT</b> para exteriores en una amplia gama de aplicaciones. Esta comunicación se ejecuta en bandas sin licencia. Como resultado,
                  no se requieren cargos adicionales.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>Las redes Wi-SUN</b> están diseñadas para ser interoperables, lo que significa que dispositivos de diferentes fabricantes pueden comunicarse
                    entre sí sin problemas. Debido a su bajo consumo de energía y su largo alcance, Wi-SUN <b>es particularmente adecuado para aplicaciones en
                    exteriores y puede proporcionar conectividad en grandes áreas</b>. Con el crecimiento de IoT, la demanda de comunicaciones inalámbricas
                    confiables y seguras está aumentando, y Wi-SUN es una de las tecnologías que está ayudando a satisfacer esta demanda.
                    </p>
                  </blockquote>

                  <p>
                  Se estima que el 83% de la población estadounidense reside en ciudades. <b>La tecnología de ciudades inteligentes gira en torno a la idea de
                  integrar dispositivos de IoT</b>, como sensores, en infraestructuras urbanas como servicios públicos, sistemas de tránsito, servicios de salud,
                  alertas de seguridad y más. Como protocolo de conectividad, <b>WI-SUN puede ser una herramienta crucial para mejorar y prepararse para el futuro</b>,
                  los atributos sostenibles de las ciudades inteligentes.
                  </p>
                  
                  <blockquote className="flaticon-quote">
                  <p>
                  Un informe de Markets and Markets estima que <b>“el tamaño del mercado global de ciudades inteligentes [crecerá] de 457.000 millones de dólares
                  en 2021 a 873.700 millones de dólares en 2026, a una tasa de crecimiento anual compuesta (CAGR) del 13,8%”</b>. La adopción de prácticas de
                  ciudades inteligentes está impulsada por la demanda global de menores emisiones de gases de efecto invernadero (GEI) y una mayor eficiencia
                  en el uso de los recursos naturales. Estos objetivos se pueden alcanzar gracias a los beneficios de una ciudad habilitada para IoT.
                  La digitalización urbana proporciona a las áreas urbanas una gestión avanzada de activos, mayores conocimientos prácticos, análisis
                  de datos mejorados y más.
                  </p>
                  </blockquote>

                  <p>
                  Antes de Wi-SUN, las ciudades inteligentes estaban confinadas a redes propietarias con seguridad y flexibilidad limitadas. Wi-SUN se basa
                  en un estándar abierto y tiene el potencial de proteger los activos más vulnerables de una ciudad al permitir aplicaciones en:
                  </p>

                  <ul>
                    <li><strong>Gestión, mantenimiento y seguridad de la energía.</strong></li>
                    <li><strong>Producción de petróleo/gas</strong></li>
                    <li><strong>Medidores de servicios públicos</strong></li>
                    <li><strong>Monitoreo ambiental</strong></li>
                    <li><strong>Gestión de residuos</strong></li>
                    <li><strong>Almacenamiento y distribución</strong></li>
                    <li><strong>Manejo ganadero</strong></li>
                    <li><strong>alumbrado público</strong></li>
                    <li><strong>Control de tráfico, semáforos y parquímetros.</strong></li>
                    <li><strong>Servicios de salud</strong></li>
                  </ul>

                  <p>
                  Además, <b>los beneficios de seguridad de Wi-SUN brindan infinitas oportunidades en el diseño general de ciudades inteligentes</b>.
                  La seguridad de Wi-SUN incluye estándares de autenticación que se extienden hasta la nube. La incorporación de la seguridad
                  de extremo a extremo de Wi-SUN en agencias gubernamentales, hospitales, transporte público y otras empresas <b>aumenta los esfuerzos
                  para prevenir ciberataques cada vez más comunes en las ciudades</b>.
                  </p>

                  <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/wisunalliance.jpeg"
                    alt="Image"
                    width={'350'}
                  />

                  <h3>Wi - SUN Alliance</h3>

                  <p className="pt-1">
                  <b>La Wi-SUN Alliance</b> es un consorcio de corporaciones globales y líderes mundiales en los mercados de servicios públicos inteligentes,
                  ciudades inteligentes e Internet de las cosas. Para satisfacer plenamente los requisitos de una amplia gama de aplicaciones de ciudades
                  inteligentes, Wi-SUN Alliance® ve la necesidad de una red segura, robusta y basada en estándares abiertos para servicios públicos y otras
                  aplicaciones de ciudades inteligentes. La alianza Wi-SUN de 300 miembros y 46 países está impulsando el desarrollo de la red de área
                  de campo (FAN) Wi-SUN, una tecnología inalámbrica robusta, eficiente y segura. 
                  </p>
                  </div>

                  <p>
                  5G es inherentemente <b>una tecnología de banda ancha y, si bien permite muchas aplicaciones fascinantes y quizás transformadoras</b>,
                  es simplemente excesivo para muchas de las mismas aplicaciones para las que Wi-SUN FAN sería adecuado. Tampoco es probable que 5G
                  sea tan rentable como la malla para soportar aplicaciones como AMI o alumbrado público, que simplemente no requieren grandes cantidades
                  de datos ni una latencia extremadamente baja. Otras tecnologías celulares LPWAN, como LTE-M y NB-IoT, pueden superponerse en cierta
                  medida con las capacidades de Wi-SUN FAN. Sin embargo, hay una serie de diferenciadores y escenarios para los cuales la tecnología de
                  red de malla RF subyacente de Wi-SUN es más adecuada.
                  </p>
                  <p>
                  A corto plazo, es probable que la tecnología 5G complemente Wi-SUN. Por ejemplo, <b>5G es una excelente opción de retorno de alta velocidad
                  desde el enrutador fronterizo FAN hasta el centro de datos, similar a cómo se usa la fibra hoy en día</b>. Si bien algunas aplicaciones de
                  detección de red de gran ancho de banda pueden beneficiarse de una conexión de alta velocidad, en otros casos las capacidades inherentes
                  de igual a igual de una red en malla ofrecen ventajas. Combinadas con conceptos como inteligencia distribuida y mayor computación de
                  vanguardia, las redes de malla pueden respaldar una toma de decisiones más localizada sin tanta dependencia de sistemas de cabecera
                  centralizados. Es probable que este enfoque de inteligencia en capas, que incluye el procesamiento y la toma de decisiones a nivel de borde,
                  comunidad y sistema, triunfe y al mismo tiempo se adapte a la arquitectura Wi-SUN FAN.
                  </p>

                  <h3>¿Como funciona Wi - SUN</h3>
                  <p className="pt-1">
                  Wi-SUN es una tecnología de comunicación avanzada que conecta múltiples dispositivos a largas distancias para crear una red de red inteligente. <b>
                  Wi-SUN funciona mediante el uso de una combinación de radiofrecuencia y tecnologías de redes de malla inalámbricas</b>. La tecnología RF
                  permite que los dispositivos Wi-SUN se comuniquen entre sí a largas distancias, mientras que la tecnología de red en malla les permite
                  formar una red autoorganizada que puede ajustarse automáticamente a los cambios en la topología de la red.
                  </p>

                  

                  <p>
                  Los dispositivos Wi-SUN utilizan una variedad de canales de comunicación diferentes, incluidas las bandas de 2,4 GHz y 900 MHz, para
                  garantizar que puedan comunicarse entre sí incluso en entornos donde las redes inalámbricas tradicionales pueden tener dificultades.
                  Esto hace que Wi-SUN sea ideal para su uso en aplicaciones de servicios públicos como medidores inteligentes y alumbrado público, donde
                  los dispositivos necesitan comunicarse a largas distancias.
                  </p>

                    <ul type='none'>
                  <li><b>La arquitectura de red Wi-SUN es una tecnología de comunicación inalámbrica</b> diseñada para proporcionar comunicación confiable
                    y segura a largas distancias. Se basa en IEEE 802.15.4g, que es un estándar para comunicaciones inalámbricas de bajo consumo y baja
                    velocidad de datos.</li>
                  <li className="pt-2"><b>La arquitectura consta de tres capas: la capa física, la capa MAC y la capa de aplicación.</b></li>                    
                    </ul>

                    <div className="article-image bg-white">
                  <img
                    style={{float:'left', margin:'16px'}}
                    src="/images/iot/Wisun-funcion.webp"
                    alt="Image"
                    width={'400'}
                  />                

                  <li><b>La capa física</b> es responsable de transmitir y recibir señales por el aire.</li>
                  <li><b>La capa MAC</b> es responsable de controlar el acceso a la red y garantizar que los datos se transmitan de manera confiable.</li> 
                  <li><b>La capa de aplicación</b> es responsable de proporcionar la interfaz entre la red y los dispositivos finales.</li>

                  <ul type='none' className="pt-2">
                    <li><b>La red Wi-SUN consta de tres componentes principales: la red de área de campo (FAN), la red de área doméstica (HAN) y la red de área amplia (WAN).</b></li></ul>
                  <li><b>La FAN(Red de Área de Campo)</b> se encarga de conectar varios dispositivos dentro de un área específica, como una ciudad o una fábrica.</li>
                  <li><b>La HAN (Red de Área Doméstica)</b> conecta dispositivos dentro de una casa o edificio.</li>
                  <li><b>La WAN (Red de Área Amplia)</b> proporciona conectividad en un área más amplia, como un país o un continente.</li>
                </div>
                </div>


                <h3 className="pt-2">Aplicaciones de Wi - SUN</h3>

                <ul type='square'>
                <li><b>Una de las aplicaciones más comunes de Wi-SUN</b> son las redes de redes inteligentes. En este contexto, Wi-SUN se utiliza
                    para conectar medidores inteligentes a Internet, lo que permite a las empresas de servicios públicos monitorear el uso
                    de energía en tiempo real y realizar los ajustes necesarios. </li>
                <li>Otra aplicación de Wi-SUN son <b>los sistemas de iluminación inteligentes</b>. Al utilizar Wi-SUN para conectar dispositivos de iluminación
                    inteligentes a un sistema de control central, <b>es posible crear un sistema de iluminación altamente eficiente y flexible</b> que se puede
                    ajustar fácilmente para satisfacer las necesidades de diferentes espacios y actividades.</li>
                <li>Por último, <b>Wi-SUN también se utiliza en ciudades inteligentes para conectar varios dispositivos y sensores a Internet</b>, lo que permite
                    una mejor planificación urbana, gestión del tráfico y seguridad pública. </li>
                </ul>

                <h3 className="pt-2">Ventajas</h3>

                <ul type='square'>
                <li><b>Una de las ventajas clave de Wi-SUN es su capacidad de proporcionar una red segura, confiable y de bajo costo</b> para la transmisión
                    de datos, lo que la hace ideal para implementaciones a gran escala. Wi-SUN está diseñado para operar en el mismo espectro de radio
                    que Wi-Fi y admite topologías de red en malla y en estrella, lo que lo hace altamente flexible y escalable. </li>
                <li>Otra ventaja es que es compatible con IPv6, que es la última versión del Protocolo de Internet, lo que <b>le permite manejar una gran cantidad
                    de dispositivos y brindar mayor seguridad</b>. Con Wi-SUN, los dispositivos pueden comunicarse entre sí directamente, sin necesidad de un
                    concentrador o servidor central, lo que lo hace más resistente y fácil de administrar.</li>
                <li><b>Wi-SUN también ofrece funciones avanzadas como administración segura de claves</b>, actualizaciones de firmware inalámbricas y monitoreo del
                    rendimiento en tiempo real, lo <b>que lo convierte en una opción atractiva para las organizaciones que buscan implementar ciudades inteligentes
                    y soluciones de energía inteligentes</b>.</li>
                <li>Wi-SUN para admitir una amplia gama de aplicaciones de redes inteligentes, incluidas medición, respuesta a la demanda y automatización de la distribución,
                    todo en una única red. Esto puede <b>ayudar a las empresas de servicios públicos a ahorrar dinero y reducir la complejidad al consolidar
                    su infraestructura de red inteligente en una única plataforma.</b></li>
                </ul>
                <p>
                Con la capacidad de admitir miles de nodos en una sola red, <b>Wi-SUN es una solución poderosa y rentable para conectar dispositivos IoT
                en un área amplia</b>. Esta tecnología está ganando terreno rápidamente a medida que las ciudades y las empresas buscan formas de mejorar
                 la eficiencia y reducir los costos mediante el uso de dispositivos IoT.
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
                  href="/blog/lte"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/nfc"
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

export default ArticleWisun;
