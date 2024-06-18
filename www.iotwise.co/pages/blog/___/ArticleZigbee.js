import React, {useState}  from "react";
import Link from "next/link";

const ArticleZigbee = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de LTE - CAT M1");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de Bluetooth");
    
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
                    style={{float:'left'}}
                    src="/images/iot/ZigbeeLogo.png"
                    alt="Image"
                    width={'175px'}
                  />

                <div className="article-content">

                  <h2 className="pt-4">Tecnología ZigBee</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 03 de junio del 2024
                      </li>
                    </ul>
                  </div>
                </div>               
                

                <div className="pt-5">
                  <p>
                   <font size='4'><b>ZigBee</b></font> es un protocolo de comunicación que está revolucionando la forma en la que los dispositivos se conectan.
                   Su éxito se debe principalmente a que <b>es una tecnología de baja potencia, bajo consumo y bajo coste</b>. 
                   Además, gracias a que se construye sobre redes de tipo mesh o malla presenta un gran alcance y una gran velocidad de comunicación. <b>Está 
                   basada en el estándar IEEE 802.15.4 y se emplea, principalmente, para dispositivos IoT y domótica</b>, entre otras aplicaciones.
                   ZigBee crea Redes de Área Personal (PAN) y permite la comunicación entre dispositivos de bajo consumo, en la que cada dispositivo
                   actúa como un repetidor de señal o nodo que expande el alcance de la red.
                  </p>

                  <p>
                  <b>ZigBee</b> se puede utilizar en diferentes situaciones y sectores completamente diferentes, algunos de los usos más comunes son:
                  </p>

                  <ul>
                    <li><b>Dómotica:</b> Los sistemas ZigBee se utilizan en los sistemas de automatización del hogar: control de luz, temperatura, cerraduras inteligentes, cámaras de seguridad.
                    Gracias a este protocolo de comunicación se crea una red centralizada.</li>

                    <li><b>IoT:</b> Gracias a su bajo consumo de energía, ZigBee se utiliza comúnmente en dispositivos IoT. Es capaz de conectar miles de dispositivos entre sí,
                    por lo que es perfecto para recopilar datos o automatizar tareas.</li>

                    <li><b>Industrias:</b> ZigBee se utiliza en entornos industriales con diferentes objetivos como control de procesos, seguimiento de inventarios u optimización
                    de maquinaria, entre otras opciones.</li>
                  </ul>

                  <blockquote className="flaticon-quote">
                    <p>
                    <b>ZigBee opera en la banda de frecuencia de 2.4 GHz</b> y utiliza una topología de malla (mesh) para permitir la comunicación entre los dispositivos en la red.
                    La topología de malla significa que <b>cada dispositivo puede comunicarse directamente con otros dispositivos dentro del rango de transmisión</b> o 
                    utilizar otros dispositivos como repetidores para ampliar el alcance de la red.
                    </p>
                  </blockquote>
                  <p>
                  <b>Bluetooth</b> es un protocolo de comunicación inalámbrica diseñado para comunicaciones de corto alcance entre dispositivos. A menudo se utiliza
                   para conectar dispositivos como teléfonos inteligentes, auriculares y altavoces. <b>ZigBee</b> es un protocolo de comunicación inalámbrica
                   diseñado para aplicaciones de bajo consumo y baja velocidad de datos. A menudo se utiliza para conectar dispositivos como luces,
                   termostatos y sensores inteligentes.
                  </p>
                  <p>
                  ZigBee se desarrolló en respuesta a la necesidad de un protocolo de comunicación inalámbrica diseñado específicamente para aplicaciones de IoT. <b>ZigBee
                  ofrece una serie de ventajas sobre Bluetooth</b>, incluido un menor consumo de energía, mayor confiabilidad y
                  capacidades de red en malla.
                  </p>
                  </div>

                  
                  <h3 className="pt-3">Características y Ventajas</h3>

                  <div className="article-image bg-white">
                  <img
                    style={{float:'right', marginLeft:'8px'}}
                    src="/images/iot/zigbeeCara.png"
                    alt="Image"
                    width={'500px'}
                  />
                  
                  <ul style={{textAlign: "justify;"}}>
                    <li><b>Bajo consumo de energía:</b> ZigBee está diseñado para aplicaciones de baja potencia, lo que significa que los
                    dispositivos pueden funcionar con baterías de larga duración o incluso con recolección de energía (como paneles solares).</li>

                    <li><b>Seguridad:</b>  ZigBee ofrece mecanismos de seguridad robustos para proteger la comunicación entre los dispositivos.
                    Utiliza cifrado de datos AES-128 para garantizar la confidencialidad y autenticación mutua para prevenir ataques de suplantación.</li>

                    <li><b>Redes de malla autoorganizadas:</b> ZigBee permite la creación de redes de malla autoorganizadas, lo que significa que los
                    dispositivos pueden unirse o abandonar la red fácilmente sin afectar su funcionamiento. Además, <b>la topología de malla proporciona
                    redundancia y permite rutas alternativas para la comunicación, lo que mejora la confiabilidad de la red.</b></li>

                    <li><b>Baja latencia y alta capacidad de red:</b> ZigBee ofrece tiempos de respuesta rápidos y una alta capacidad de red,
                    lo que lo hace adecuado para aplicaciones en tiempo real y entornos donde se requiere la conexión de múltiples dispositivos.</li>

                    <li><b>Alta confiabilidad:</b> Las redes ZigBee son muy confiables, incluso en ambientes ruidosos. Esto se debe a que ZigBee utiliza una
                     variedad de técnicas para garantizar que los datos se entreguen correctamente.</li>
                  </ul>



                  <blockquote className="flaticon-quote">
                    <p>
                    <b>ZigBee</b> consume menos energia que <b>Bluetooth y Wi-Fi</b>; es ideal para trabajar en aplicaciones de bajo ancho de banda ya que opera
                    a velocidades mas bajas que Wi-Fi y Bluetooth; ZigBee puede acomodar mayor cantidad de dispositivos y exhibir una mejor escalabilidad
                    en comparación a Bluetooth; normalmente ZigBee ofrece mayor alcance que bluetooth pero obtiene menos alcance que la tecnología Wi-Fi
                    </p>
                  </blockquote>               

                  <p>
                  Con ZigBee se pueden crear importantes redes de malla mucho más grandes que el alcance de una sola radio. <b>La malla ZigBee se configura
                  automáticamente (autoformación) y se reconfigura dinámicamente para repararse si se desactivan o eliminan nodos (autocuración)</b>. Al ser
                  un estándar interoperable, los dispositivos de muchos fabricantes diferentes pueden comunicarse sin problemas, lo que ha contribuido
                  a la amplia aceptación de ZigBee tanto en la automatización del hogar como en la industria IoT. Los costes son modestos, con muchas
                  opciones de equipos OEM en el mercado abierto.
                  </p>
                  <p>
                  <b>Zigbee no utiliza direcciones IP</b>. Por lo tanto, hay que instalar pasarelas para comunicarse con Internet y los servicios en la nube.
                  Dado que la mayoría de los teléfonos, tabletas y ordenadores no incluyen Zigbee, también se necesitan pasarelas para comunicarse con ellos.
                  El aprovisionamiento debe realizarse deliberadamente para garantizar que los nodos se unan a la red correcta y se comuniquen con la 
                  pasarela adecuada. <b>La latencia es mayor con la malla que con los protocolos punto a punto más sencillos</b>, aunque esto debe considerarse
                  en el contexto del alcance efectivo y la fiabilidad mucho mayores de la malla.
                  </p>

                  <h3 className="pt-2">Estructura de una red ZigBee</h3>

                  <p className="pt-1">
                     Como se ha mencionado anteriormente, las redes ZigBee permiten trabajar con una topología de red tipo mesh (o malla).
                     Esta topología permite a los nodos actualizar de forma dinámica la tabla de rutas, lo que aporta robustez y eficacia a la red.
                     Un nodo dentro de una red ZigBee puede tener los siguientes roles:
                     </p>
                  

                  <div className="article-image bg-white">
                  <img
                    style={{float:'right', margin:'0px'}}
                    src="/images/iot/topoZigbee.png"
                    alt="Image"
                    width={'550px'}
                    height={'650px'}
                  />                  

                  <ul>
                    <li><b>Coordinador:</b> El coordinador de la red es un nodo único y es el encargado de crear la red, enrutar los paquetes y permitir las
                     conexiones entrantes del resto de nodos de la red. Este nodo acostumbra a estar siempre conectado e integrado con un módulo de comunicación
                     con conexión a Internet, lo que permite enviar los datos recolectados por la red ZigBee a un servidor central.</li>

                    <li><b>Router:</b> De manera parecida al coordinador donde los nodos actúan como router, la red tienen la capacidad de enrutar paquetes, 
                    pero no pueden aceptar conexiones.</li>

                    <li><b>End Device:</b> Estos nodos representan los dispositivos más sencillos de la red. Son capaces de enviar o recibir paquetes de la red,
                     pero no tienen capacidad de enrutar. Además, pueden entrar en modo de bajo consumo, o sleep, para alargar la vida de la batería,
                     volviéndose a conectar tan solo cuando es necesario.</li>

                    </ul>

                    <h3>Ejemplos y casos de Usos</h3>

                  <p>
                  Las redes de sensores basadas en la tecnología Zigbee son ampliamente utilizadas y pueden ayudar a alcanzar mejor los objetivos.
                   <b>Las aplicaciones de la tecnología ZigBee incluyen hogares inteligentes, control industrial, lectura automática de medidores,
                   monitoreo médico, aplicaciones de red de sensores, aplicaciones de telecomunicaciones y sistemas de logística de almacenamiento.</b>
                  </p>
                  <ul>
                    <li><b>Hogar Inteligente:</b> En circunstancias normales, habrá muchos dispositivos eléctricos y electrónicos en el hogar, como luces,
                     televisores, refrigeradores, lavadoras, computadoras, acondicionadores de aire, etc., y puede haber sensores de humo, alarmas, cámaras
                     y otros equipos. En el pasado, era posible lograr un control punto a punto, pero si se utiliza la tecnología ZigBee, estos dispositivos
                     electrónicos se pueden vincular para formar una red.</li>

                     <li><b>Cuidado Inteligente para Adulto Mayor:</b> ZigBee también se puede utilizar ampliamente en el campo del cuidado inteligente de
                      personas mayores. Puede detectar la trayectoria de vida de los ancianos y también proteger la seguridad
                      de los ancianos. El sistema emplea sensores inalámbricos discretos colocados en toda la casa para aprender los patrones de
                      comportamiento diarios de los ancianos y detectar cambios de comportamiento que puedan causar preocupación.</li>
                      <p>
                      Luego envía mensajes a los familiares o cuidadores para recordárselos. <b>El sistema inteligente de cuidado de ancianos ha sido
                      probado con éxito en centros de atención residencial durante varios años y ahora está disponible para instalaciones en el hogar
                      por parte de proveedores de servicios, minoristas e integradores de sistemas de hogares inteligentes.</b>
                      </p>

                      <li><b>Apartamento Inteligente:</b> Está equipado con dispositivos de hardware inteligente como concentrador de puerta de enlace zigbee, control de acceso, cerraduras, termostatos, medidores inteligentes,
                      sensores de fuga de líquidos, sensores de movimiento humano, enchufes inteligentes e interruptores inteligentes.</li>

                      <li><b>Monitoreo Médico:</b> El monitoreo médico electrónico es un punto de acceso de investigación reciente. Se colocan muchos sensores
                      en el cuerpo de una persona para medir cosas como el pulso, la presión arterial y el estado de salud. También se colocan monitores y
                      alarmas en una sala de hospital para que las condiciones físicas se puedan verificar en cualquier momento. Una vez que ocurre un
                      problema, puede responder a tiempo, por ejemplo, notificando al personal de guardia del hospital.</li>
                      <p>
                      A través de la tecnología ZigBee, estos sensores, monitores y alarmas pueden conectarse para crear una red de monitoreo. Debido
                      a que es una tecnología inalámbrica, no hay necesidad de una conexión por cable entre los sensores y la persona que está siendo monitoreada
                      puede moverse libremente.
                      </p>

                      <li><b>Aplicación de red de Sensores:</b> La red de sensores también es un punto de acceso de investigación reciente y tiene buenas
                       perspectivas de aplicación en aspectos como el seguimiento de carga, el control de edificios y la protección del medio ambiente.
                       Nodos de bajo costo, bajo consumo de energía, redes automáticas, mantenimiento simple y alta confiabilidad son requisitos para las
                       redes de sensores</li>

                       <li><b>Lectura automática del medidor:</b> Los sensores convierten las lecturas del medidor en señales digitales que envían las lecturas
                        directamente a la empresa que suministra el gas o el agua a través de la red ZigBee. Usar ZigBee para lecturas de medidores también puede
                        traer otros beneficios. Por ejemplo, la compañía de gas o agua puede enviar alguna información directamente al usuario o combinarla con
                        el ahorro de energía. Puede reducir automáticamente la velocidad de uso cuando descubre que la energía se está utilizando demasiado rápido.</li>                      
                  </ul>

                  <p>
                  ZigBee es un <b>estándar de comunicación inalámbrica de baja potencia que ofrece numerosas ventajas en aplicaciones de redes de área personal
                  y dispositivos de IoT</b>. Su bajo consumo de energía, seguridad robusta y capacidad de red de malla lo hacen ideal para una amplia gama de
                  aplicaciones, desde la domótica hasta la agricultura inteligente y el cuidado de la salud. Con el crecimiento continuo de la Internet de
                  las cosas(IoT), <b>ZigBee seguirá desempeñando un papel importante en la conectividad inalámbrica y la automatización inteligente</b>. También
                  se espera que ZigBee desempeñe un papel importante en el futuro de IoT, con tendencias como la integración con 5G, medidas de seguridad
                  mejoradas y una mayor interoperabilidad.
                  </p>
                  </div>
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
                  href="/blog/ltem"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/bluetooth"
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

export default ArticleZigbee;
