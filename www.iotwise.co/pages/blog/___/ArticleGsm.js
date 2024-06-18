import React, {useState}  from "react";
import Link from "next/link";

const ArticleGsm = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Wi - Fi para IoT");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de 3GPP");
    
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
            <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/logogsm.png"
                    alt="Image"
                    width={'250px'}
                  />

              <div>               

                <div className="article-content">

                  <h2>GSM ¿Qué es?</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 0 de junio del 2024
                      </li>
                    </ul>
                  </div>                 
                </div>
                </div>               

                <div className="pt-5">
                  <p>
                  <b>Sus siglas aluden a Sistema Global de Comunicaciones Móviles</b>. Es uno de los estándares más utilizados desde principios del siglo XXI.
                    Se conoce también como red 2G en España, ya que fue la segunda generación de comunicaciones y convirtió la señal analógica en digital.
                  </p>

                  <p>
                  Se caracteriza por operar en una frecuencia distinta dependiendo del territorio. En Europa emplea el espectro radioeléctrico, que va de los
                  900 a los 1800 MHz, pero en Estados Unidos la banda funciona a 1900 MHz. Ello provoca que no todos los móviles GSM puedan funcionar
                  correctamente en todos los países del mundo.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>El GSM (Global System Mobile Comunications) es el estándar de la Segunda Generación (2G)</b> de tecnología de telefonía inalámbrica. Lanzado por primera vez en Finlandia en 1991,
                    se convirtió rápidamente en la tecnología de red estándar del mundo, ofreciendo conexiones inalámbricas rápidas y seguras.
                    </p>
                  </blockquote>

                  <p>
                  Los estudios confirmaban a principios de siglo que la red iba a convertirse en la más utilizada. Sin duda, esto se debe a su propia
                  arquitectura interna, que resumimos así:
                  </p>
                  <ul>
                    <li>Cada teléfono se denomina <b>«estación móvil».</b></li>

                    <li>Para activar la estación es imprescindible contar con <b>una tarjeta SIM, que contiene información tanto del dispositivo como del
                        usuario</b>, así como del operador de red, el tipo de contrato y otros detalles.</li>

                    <li>La estación tiene un identificador llamado <b>IMEI</b>. También la tarjeta tiene un identificador internacional que se puede transferir
                        a otro dispositivo sin perder la información grabada.</li>

                    <li>La SIM le indica a la estación base o torre de repetición quién se está comunicando a través de ondas de radio.</li>

                    <li>Las estaciones base se unen en red utilizando un controlador. Este gestiona los recursos para mejorar todo lo posible la comunicación.
                        Todos los controladores se conectan por cable al mismo centro conmutador gestionado por el operador de telefonía.
                        Es aquí donde se recopilan todos los datos y se comprueba la veracidad de la identidad de cada tarjeta SIM que solicita una llamada
                        o servicio. El objetivo es que la compañía pueda registrar, y cobrar, la llamada efectuada.</li>                        
                  </ul>

                  <p>
                  Las comparativas entre las distintas redes de comunicación subrayan cómo este tipo de red supuso el inicio de una etapa digital que no ha
                  dejado de evolucionar. Al mismo tiempo, queda claro que fue el estándar tecnológico que permitió que Europa liderase la revolución
                  necesaria para dejar atrás las comunicaciones telefónicas a través de la línea y convertirlas en totalmente inalámbricas.
                  </p>

                  <blockquote className="flaticon-quote">
                    <p>
                    La principal utilidad de la red GSM radica en <b>la posibilidad de realizar llamadas, conectarse a Internet y enviar mensajes o archivos
                    de todo tipo</b>. Ahora que muchos países parecen prepararse para el apagón de esta red, consideramos esencial recordar sus beneficios
                    y sus puntos débiles.
                    </p>
                  </blockquote>

                  <h2 className="pt-2">Ventajas</h2>
                  <li><font size='4'><strong>Cobertura</strong></font></li>
                  <p>
                  Al menos de momento, el 2G está extendido por todo el mundo y funciona con un espectro de frecuencias armonizado. Esto es una buena noticia
                  para cualquier empresa que quiera tener una presencia global. Significa que sus dispositivos conectados pueden funcionar en múltiples
                  mercados geográficos diferentes, con poca o ninguna adaptación necesaria para las distintas zonas.
                  </p>
                  
                  <li><font size='4'><strong>Rentabilidad</strong></font></li>
                  <p>
                  Si algo ya funciona, ¿por qué cambiarlo? Con la mayoría de las iniciativas de IoT, no es necesario enviar grandes cantidades de datos hacia
                  y desde los dispositivos. Simplemente se necesita una plataforma adecuada y de bajo coste que cubra la zona en la que se pretende operar.
                  Las redes basadas en GSM suelen cumplir estos criterios básicos. Con las tecnologías de última generación, existe el riesgo de pagar
                  innecesariamente por capacidades que su empresa no necesita.
                  </p>

                  <li><font size='4'><strong>Fiabilidad</strong></font></li>
                  <p>
                  Las redes basadas en GSM tienden a ser estables, con poco riesgo de inactividad. Como ejemplo de la fiabilidad de GSM, muchos operadores
                  de telefonía móvil siguen manteniendo la 2G como alternativa, para cubrir las lagunas de la cobertura 4G/5G, y para entrar en juego
                  si sus redes más avanzadas sufren una interrupción.
                  </p>

                  <h2 className="pt-2">Desventajas</h2>
                  <li><font size='4'><strong>Ancho de Banda</strong></font></li>
                  <p>
                  El ancho de banda 2G tiene un máximo de 64 kbps. Con 5G, es de 1Gbps y más: es decir, 15 veces mayor. Normalmente, el ancho de banda no es
                  la única, o incluso la principal, consideración a la hora de elegir una red IoT, pero puede resultar crucial. Por ejemplo, si se quiere
                  incorporar la transmisión de secuencias de vídeo a los próximos proyectos, el escaso ancho de banda de la 2G lo hace imposible.
                  </p>
                  
                  <li><font size='4'><strong>La extinción del 2G</strong></font></li>
                  <p>
                  Si bien el espectro RF de radiofrecuencia facilita la estabilidad de la red, no es menos cierto que tiene un límite. Por ello,
                  los operadores han decidido dejar el espacio de las redes 3G a las 4G y a las 5G. Las 2G seguirán estando operativas, aunque
                  no por mucho tiempo. Todo dependerá de la normativa que se apruebe. No parece lógico que ninguna empresa invierta en una red GSM
                  para terminar adaptándose a una más moderna en el futuro. No obstante, su utilidad sigue intacta y nadie parece dudar de que quedan
                  algunos años hasta su desaparición total.
                  </p>
                </div>

                <div className="article-image bg-white">
                  <img
                    style={{float:'right'}}
                    src="/images/iot/gsmLog.png"
                    alt="Image"
                    width={'250px'}
                  />
                  <h2 className="pt-5">EC-GSM-IoT</h2>
                  <p>
                  <b>GSM IoT de cobertura extendida (EC-GSM-IoT)</b> es una tecnología de área amplia de baja potencia basada en estándares. Se basa en eGPRS
                  y está diseñado como <b>un sistema celular de alta capacidad, largo alcance, baja energía y baja complejidad para comunicaciones IoT</b>.
                  Las optimizaciones realizadas en EC-GSM-IoT que deben realizarse en las redes GSM existentes se pueden realizar como una actualización
                  de software, lo que garantiza la cobertura y un tiempo de comercialización acelerado. Se puede admitir una duración de la batería de
                  hasta 10 años para una amplia gama de casos de uso.
                  </p>

                  <p>
                  Las pruebas de la red EC-GSM-IOT han comenzado y los primeros lanzamientos comerciales están previstos para 2017. Con el respaldo
                  de los principales fabricantes de equipos móviles, conjuntos de chips y módulos, <b>xlas redes EC-GSM-IoT coexistirán con 2G, 3G y 4G.
                  redes móviles</b>. También se beneficiará de todas las características de seguridad y privacidad de la red móvil, como soporte para la
                  confidencialidad de la identidad del usuario, autenticación de entidades, confidencialidad, integridad de datos e identificación de
                  equipos móviles.
                  </p>
                  </div>

                  <ul type='none'>
                    <li><b>La EC-GSM-IoT es una tecnología 2G basada en la eGPRS existente</b>, y diseñada como un sistema celular poco complejo de alta capacidad
                        con bajo consumo de energía y amplio alcance. Su objetivo es dar soporte al IoT, y puede implantarse en las redes GSM existentes mediante
                        una actualización de software.</li>

                    <li><b>Proporciona un estándar LPWA aprobado por el 3GPP que permite transmitir hasta 70 Kbps</b>. Cuenta con funcionalidades de voz, movilidad plena y
                        baja latencia en frecuencias celulares basadas en bandas 2GSM reutilizadas. La  GEC-GSM-IoT ha sido diseñada para ofrecer cobertura a
                        dispositivos máquina a máquina (M2M) en zonas mal comunicadas.</li>

                    <li><b>Aplicaciones para la EC-GSM-IoT:</b> contadores con requisitos de cobertura exigentes y bajo consumo (agua, gas), redes
                         inteligentes y control de maquinaria.</li>
                  </ul>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>Para favorecer el desarrollo y futuro crecimiento del Internet de las cosas (IoT)</b>, la industria móvil está creando nuevas tecnologías
                    GSM denominadas redes de Área amplia de baja potencia (LPWA por sus siglas en inglés), y estandarizándolas.
                    </p>                    
                  </blockquote>

                  <p>
                  Las tecnologías LPWA soportan un número cada vez mayor y más competitivo de servicios IoT. Se espera que resulten Útiles para un gran número
                  de sectores verticales, y que ayuden a conectar aplicaciones y escenarios a los que no se puede acceder con las tecnologías móviles
                  existentes.
                  </p>
                  <p>
                  En su Release 13 de 2016, el 3GPP optará por conceder licencias a tres tecnologías LPWA para cubrir las necesidades de varios sectores del mercado IoT. Estas tres licencias son:
                  </p>
                  <ul><font size='4'>
                    <li><b>EC-GSM-IoT</b></li>
                    <li><b>LTE-M</b></li>
                    <li><b>NB-IoT</b></li>
                    
                    </font></ul>

                    <p><b>La tecnología EC-GSM-IoT es menos conocida que las dos tecnologías NB-IoT y LTE-M</b>, EC-GSM-IoT se puede implementar en la  red GSM
                        existente  ( 2G / 3G / 4G ) con una simple actualización de software. La red GSM es la única red que cubre el 90% del planeta,
                        incluso en zonas remotas, en el mar o en zonas de conflicto. Por lo tanto, se utiliza principalmente en  países en desarrollo
                        donde las infraestructuras de telecomunicaciones aún están insuficientemente equipadas (África, Oriente Medio, Sudeste Asiático)
                        o <b>en algunas zonas mal equipadas con antenas 4G, Lora o Sigfox, es decir, sin alternativas</b>. Por el lado de la latencia,
                        se sitúa entre el LTE-M y el  NB-IoT, con cifras en torno al segundo (700ms, 2 segundos). También presenta velocidades
                        intermedias entre 474 Kbit/s y  2 Mbit/s . <b>El EC-GSM-IoT permite, a diferencia de NB-IoT</b>, transportar SMS , pero no llamadas de
                        voz. Cabe destacar que ofrece una serie de problemas de seguridad en la red 2G , reduciendo los riesgos a nivel de red 3G o 4G
                        existentes. La red EC-GSM-IoT es, por tanto, <b>una conectividad interesante cuando la red 2G aún necesita mantenimiento durante
                        muchos años y la red 4G es insuficiente.</b>
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
                  href="/blog/wifi"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/3gpp"
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

export default ArticleGsm;
