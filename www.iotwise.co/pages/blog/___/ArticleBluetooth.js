import React, {useState}  from "react";
import Link from "next/link";

const ArticleBluetooth = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de ZigBee");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Wi - Fi para IoT");
    
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
              <div>
                  <img
                    
                    style={{float: 'right', margin: '10px'}}
                    src="/images/iot/bluetoothLogo.png"
                    alt="Image"
                    width={'300px'}
                    height={'500px'}
                  />

                <div className="article-content">

                  <h2>Bluetooth IoT o BLE</h2>

                  <div className="entry-meta my-2">
                    <ul>
                      <li>
                        <span>Fecha:</span> 05 de junio del 2024
                      </li>
                    </ul>
                  </div>
                </div>
                </div>

                

                <div className="pt-5">

                
                  <p>
                    Para entender un poco sobre la <b>nueva tecnología Bluetooth Low Energy (BLE)</b> debemos comenzar un poco sobre los
                    comienzos de Bluetooth y su evolución a través de la historia.
                  </p>
                  <p>
                   <b>Bluetooth</b> es un medio de tecnología inalámbrica de corto alcance que se utiliza para intercambiar datos entre dos dispositivos electrónicos.
                   (generalmente móvil) en una distancia corta. Este proceso elimina por completo el uso primitivo de cables para la conectividad.
                   Un ejemplo típico es cómo puede escuchar música con un auricular mientras viaja sin tener que conectarlo al conector para auriculares
                   de su dispositivo móvil. Fue creado por la empresa Ericson en el año 1994; desde entonces, La tecnología Bluetooth ha evolucionado y se ha convertido
                   en la solución de conectividad inalámbrica preferida para los wearables, artilugio, y otros dispositivos. Hoy en día, encontrarás Bluetooth
                   en todas partes( carros, Altavoces, usables, dispositivos médicos, audífonos inalámbricos, Zapatos, etc). Si posee algún dispositivo
                   moderno, Es seguro asumir que ha encontrado y utilizado la tecnología Bluetooth en un momento u otro.
                   </p>
                   <div className="">
                  <img
                    style={{float: 'right'}}
                    src="/images/iot/BLE.png"
                    alt="Image"
                    width={'350'}                    
                  />                    
                   <p>
                  <b>Bluetooth es un protocolo de comunicación inalámbrico</b> desarrollado originalmente por Ericsson que opera sobre frecuencia sin licencia.
                  Se concibió para Redes de Uso Personal (PAN) con el propósito de transferir datos de manera inalámbrica. Sin embargo, presenta limitaciones
                  intrínsecas de diseño: requiere emparejar los dispositivos en conexión (normalmente mediante un proceso manual de configuración),
                  su consumo de energía es elevado (no está optimizado para dispositivo que funcionen a pilas), y su alcance no suele superar el de
                  la habitación donde se encuentren los dispositivos. Nokia desarrolló una nueva evolución del estándar Bluetooth para superar estas
                  limitaciones llamado Bluetooth Low-Energy (BLE o Bluetooth LE), que ahora forma parte de la configuración de todos los smartphones
                  y dispositivos de última generación como smartwatches, pulseras conectadas (health bands) y dispositivos similares.
                  </p>
                                 
                  <p>
                  Un caso de uso típico es distribuirlos de manera estratégica dentro de las Smart Cities para que los beacons(<b>dispositivos basados en la tecnología BLE</b>) estáticos provean de
                  información variada a elementos en movimiento, aunque un beacon no tiene por qué estar estático ni los receptores tienen por qué
                  estar en movimiento. Las posibilidades de uso van desde lectores de Smart Meters hasta la conectividad de los Connected Cars,
                  pasando por el clásico punto de información dentro de las Smart Cities.
                  </p>
                  <p>
                  Bluetooth IoT, particularmente impulsado por la popularidad de Bluetooth Low Energy (BLE), ha sido testigo de un crecimiento y una
                  adopción significativos en el dominio de IoT. <b>Con el bajo consumo de energía de BLE y su capacidad de funcionar con baterías pequeñas
                  durante períodos prolongados, se ha convertido en la tecnología inalámbrica preferida para muchas aplicaciones de IoT.</b>
                  </p>

                  </div>

                  <blockquote className="flaticon-quote">
                    <p>
                    Sus características hacen que un dispositivo BLE actúe la mayor parte del tiempo en modo de suspensión, activado solo para realizar
                    conexiones que duran milisegundos. Por lo tanto, es ideal para aplicaciones que informan esporádicamente.
                    </p>
                  </blockquote>

                  <p>
                  En pocas palabras, <b>Bluetooth Low Energy (BLE)</b> es un tipo de bluetooth que consume mucha menos energía, aproximadamente un <b>10% en
                  comparación con el bluetooth clásico</b>. Esto se debe a que este último se creó solo para la transmisión de datos, como cuando conectamos
                  nuestro teléfono celular al estéreo del automóvil para reproducir una canción, por ejemplo.
                  </p>
                  <p>
                  Las Beacons (dispositivos emisores de BLE) ya se han probado con éxito en varios sectores: comercio minorista, industria, logística, atención médica y mucho más.
                  </p>

                  <p>
                  Como ofrece una buena experiencia a bajo costo, es una excelente opción para aquellos que necesitan un seguimiento más continuo, con un alto
                  procesamiento de datos y precisión. Por lo tanto, el protocolo se ha utilizado ampliamente para monitorear personas y equipos móviles en
                  entornos cerrados.
                  </p>

                  <p>
                  La tecnología Bluetooth ha evolucionado a través de diferentes iteraciones, introduciendo nuevas funciones y mejoras. La versión inicial de
                  Bluetooth se introdujo en 1999. Bluetooth Low Energy (BLE), también conocido como Bluetooth 4.0 o Bluetooth Smart, se inventó en 2010 para
                  minimizar el consumo de energía. Esto lo hace ideal para dispositivos IoT que funcionan con batería, lo que proporciona una mayor duración
                  de la batería. BLE es adecuado para dispositivos que requieren intercambios de datos periódicos y se adopta ampliamente en las industrias
                  de electrónica de consumo y automoción.
                  </p>
                </div>

                <h2 className="pt-3">Funcionamiento y Ventajas</h2>

                <p className="pt-1">
                Bluetooth Low Energy (BLE) funciona en aplicaciones de IoT a través de varios modos de operación:
                </p>

                <ul>
                    <li><b>Transferencia de datos en una sola dirección:</b> BLE se utiliza comúnmente en aplicaciones Bluetooth IoT
                     para la transferencia de datos unidireccional, donde los dispositivos sensores transmiten datos periódicamente a
                     una puerta de enlace o receptor conectado a la nube.</li>

                     <li><b>Control remoto y operación:</b> La puerta de enlace controla sensores/actuadores BLE IoT para aplicaciones Bluetooth
                     IoT en comunicación bidireccional BLE, lo que permite el control y la operación remotos.</li>

                     <li><b>Redes de mallas BLE:</b> BLE admite redes de malla, donde varios dispositivos BLE IoT forman una red con la puerta de enlace
                     actuando como controlador. Esto permite el monitoreo y control remotos de toda la red de malla BLE, lo que permite escalabilidad
                     y coordinación entre nodos en implementaciones de Bluetooth IoT más grandes.</li>
                </ul>

                <p>
                Toda moneda tiene sus dos caras, y también BLE. Al prestar atención a los beneficios de Bluetooth LE, las limitaciones tampoco pueden ser
                ignoradas. El hecho es que podría ser importante conocer los pros y los contras para poder determinar si BLE es apropiado para una
                aplicación y un caso de uso específicos.
                </p>
                <h3>Beneficios</h3>
                <ul>
                    <li><b>Bajo consumo de energía:</b> La ventaja destacada de BLE radica en su bajo consumo de energía. Minimizando el tiempo de funcionamiento
                    innecesario en la radio y asegurando una pequeña cantidad de transmisión de datos en un rango corto, BLE logra un consumo de energía ultra bajo.</li>

                    <li><b>Estabilidad económica:</b> BLE proviene de un consorcio de gigantes de la industria (IBM, microsoft, Intel…), lo que le da una mejor adopción y
                    un fuerte apoyo económico y estabilidad.</li>

                    <li><b>Menor costo de módulos y conjuntos de chips:</b>En comparación con otros protocolos y tecnologías inalámbricas similares, BLE aplica módulos y conjuntos de chips menos costosos.
                    Compatibilidad con varios teléfonos: BLE ya está integrado en todos los smartphones, haciéndolo más fácil y más conveniente de usar.</li>
                </ul>
                <h3>Desventajas</h3>
                <ul>
                    <li><b>Bajo rendimiento de datos:</b>  El rendimiento de datos de los dispositivos BLE es 100-250 Kbps, limitado por el PHY (la capa de radio física) velocidad de datos.</li>

                    <li><b>Rango estrecho:</b> Diseñado originalmente para transmitir pequeñas cantidades de datos periódicamente en un rango corto, BLE no tiene duda de un rango operativo limitado.</li>

                    <li><b>Requisito de puerta de enlace para una conexión a Internet:</b>  Para habilitar la conectividad a Internet solo entre dispositivos BLE, cuando un dispositivo BLE envía datos,
                    se requiere otro dispositivo con una conexión IP para recibir los datos, que a su vez se transmite a otro dispositivo IP (o Internet).</li>
                </ul>

                <p>
                Hay dos tipos diferentes de conexiones BLE: <b>comunicación y radiodifusión orientadas a la conexión</b>. Para el primer tipo de conexión, el dispositivo BLE
                puede actuar como un dispositivo central o un dispositivo periférico. El dispositivo central desempeña un papel en el escaneo de los
                dispositivos conectables y el inicio de solicitudes de conexión e intercambio de datos. El periférico, por otra parte, puede recibir
                comandos y solicitudes desde el dispositivo central. La comunicación entre ambos se realiza en 4 pasos: anuncio publicitario, iniciación,
                conexión, e intercambiar.
                </p>
                <p>
                El segundo tipo de comunicación BLE se llama Broadcasting o Bluecasting. Lo que lo distingue de la primera conexión es que no tiene conexión
                y es unidireccional. Aquí, el dispositivo habilitado para BLE envía datos unidireccionales a cualquier dispositivo que esté observando y 
                sea capaz de recibir los datos de transmisión. Cabe señalar que este método no proporciona seguridad para los datos transmitidos y,
                por lo tanto, no es adecuado para compartir información confidencial. Es más adecuado para aplicaciones como el intercambio de archivos
                de datos públicos en la oficina.
                </p>

                <h2 className="p-2">Aplicaciones y Usos</h2>

                <div>
                  <img
                    style={{float: 'left', margin:'5px'}}
                    src="/images/iot/blueTooth.png"
                    alt="Image"
                    width={'400px'}
                    height={'300px'}                   
                  />
                <p>
                Sin ninguna duda, Los desarrolladores han podido introducir dispositivos con tecnología Bluetooth que pueden funcionar mediante aplicaciones
                de IoT de Bluetooth. Dispositivos como controles remotos, dispositivos domésticos inteligentes, usables, dispositivos de seguimiento, y
                teclados, Entre otros, se han desarrollado para limitar el estrés y las implicaciones financieras de los usuarios que tienen que cambiar
                las baterías con frecuencia debido a las aplicaciones de Bluetooth de ahorro de energía y los modelos de recolección de energía en uso.
                es más, Bluetooth para aplicaciones IoT como seguimiento de activos, localización interior, balizas, sensores de automatización
                industrial, monitores de presión de neumáticos, etiquetas electrónicas para estantes, etc., utilizado en soluciones industriales y
                empresariales, También reducirá los costos de propiedad y mantenimiento, ya que se erradica el reemplazo de la batería.
                Mientras que, en aplicaciones más exigentes como sensores industriales o aplicaciones médicas, el riesgo de falla se reducirá
                significativamente debido a la confiabilidad que brindan dichos dispositivos. Hay dos tecnologías principales con la especificación de núcleo de Bluetooth: Bluetooth y Bluetooth de bajo consumo. Ambos están diseñados
                para ayudar a los usuarios a lograr la comunicación inalámbrica entre dispositivos inteligentes, ya sea para uso personal o comercial.
                sin embargo, es esencial tener en cuenta que las dos soluciones difieren mucho en términos de especificaciones técnicas, solicitud,
                y características adicionales.
                </p>
                
                <ul>
                  <li><b>Hogar Inteligente:</b> La tecnología de malla BLE se utiliza mucho en aplicaciones domésticas inteligentes. Conecta y controla
                  varios dispositivos inteligentes como luces, termostatos, cerraduras de puertas y sistemas de seguridad. Las puertas de enlace Bluetooth
                  y la malla BLE comunican y administran de manera eficiente múltiples dispositivos BLE IoT dentro del ecosistema del hogar inteligente.</li>

                  <li><b>Monitoreo Industrial:</b> BLE permite el monitoreo en tiempo real de las condiciones de los equipos, el mantenimiento predictivo,
                  el seguimiento de activos, el monitoreo ambiental, el monitoreo de energía, la seguridad de los trabajadores y la recopilación y análisis
                  de datos. Los sensores y balizas BLE transmiten datos de forma inalámbrica a un sistema central, lo que permite un monitoreo eficiente y
                  rentable de varios parámetros.</li>

                  <li><b>Artículos portátiles para el Hogar:</b> Los dispositivos portátiles como ECG (electrocardiograma) y CGM
                  (monitoreo continuo de glucosa) utilizan Bluetooth de baja energía en aplicaciones de IoT. BLE IoT proporciona una transmisión de datos
                  segura y de bajo consumo entre el sensor portátil y un dispositivo móvil o plataforma en la nube. Permite la monitorización continua de
                  signos vitales y parámetros de salud.</li>

                  <li><b>Posicionamiento interior:</b> Las balizas y receptores BLE ayudan a lograr un posicionamiento y navegación precisos en interiores.
                  Esta tecnología se utiliza en diversas situaciones, como tiendas minoristas, museos, hospitales, aeropuertos y almacenes, lo que permite
                  servicios basados en la ubicación, orientación y seguimiento de activos en entornos interiores.</li>
                </ul>
                </div>
                <p>
                Con su eficiencia energética inherente y disponibilidad de teléfonos inteligentes, <b>La tecnología Bluetooth Low Energy es el principal protocolo
                inalámbrico de corto alcance para IoT</b>. Al reducir el consumo de energía, BLE permite que los dispositivos IoT se reduzcan
                significativamente y extiendan su duración. Además, el intercambio de datos entre dispositivos IoT puede ser asequible debido a la menor
                carga en los tanques de energía. Gracias a BLE, Los dispositivos IoT que funcionan con baterías tipo moneda pueden funcionar durante
                semanas, meses, o incluso años, sin agotar sus baterías.
                </p>
                <p>
                Es más que evidente que muchas de las aplicaciones más populares de IoT no hubieran sido posibles sin la tecnología BLE. Al mismo tiempo,
                El rápido crecimiento de IoT ha provocado que muchas industrias se modifiquen para adaptarse a él. <b>Bluetooth SIG también ha aplicado la
                tecnología BLE en su versión Bluetooth 4.0 para que pueda ser relevante para IoT</b>. En todo, A BLE le resultó más fácil ganarse la confianza
                de los desarrolladores e ingenieros de IoT, y las implementaciones demuestran que BLE está transformando drásticamente el IoT de una
                manera inimaginable.
                </p>
                <p>
                Todos estos factores se combinan para hacer de BLE la opción principal para muchos consumidores en aplicaciones de IoT, y su posición se
                consolida aún más en el mercado. Vale la pena señalar que Bluetooth SIG aún no ha dejado de extraer BLE, en otras palabras,
                Bluetooth Low Energy se sigue desarrollando y refinando constantemente para satisfacer las demandas más actuales del mercado,
                por lo que definitivamente debería permanecer en su radar.
                </p>

                <h2 className="pt-2">Seguridad en Bluetooth LE</h2>

                <p>
                Las principales características de seguridad que incorpora Bluetooth Low Energy son el cifrado de 128 bits y la autenticación. Además,
                como protocolo de transmisión es más robusto gracias al salto de frecuencia adaptable (AFH), que incluye la corrección de errores hacia
                adelante (FEC). <b>Esto permite al receptor corregir errores en la trasmisión sin necesidad de reenvíos; canales con ancho de banda de
                frecuencias estrechos y baja sensibilidad a las reflexiones o múltiples rutas.</b>
                </p>
                <p>
                La comunicación BLE en dispositivos que ya han verificado una conexión es realmente segura. Sin embargo, para conectarse, los dispositivos deben emparejarse primero,
                y aquí es donde reside la principal vulnerabilidad de los sistemas BLE.
                </p>
                <p>
                <b>Durante la primera etapa de emparejamiento</b>, los dispositivos intercambian información básica sobre sus capacidades para descubrir cómo
                proceder con la conexión. Es decir, se identifican en la red y explican qué son (un Fitbit, un teclado, un auricular, etc.) y qué pueden
                hacer. Este intercambio no está encriptado.
                </p>
                <p>
                <b>La segunda fase de emparejamiento</b> está dedicada a generar e intercambiar claves. Es en este punto que las conexiones BLE pueden ser
                manipuladas: si la conexión no está asegurada adecuadamente, los atacantes pueden tomar el control de los dispositivos y los datos
                que transmiten.
                </p>
                <p>
                Por último, la vinculación es el proceso durante el cual los dispositivos almacenan los datos de autenticación que intercambiaron durante
                el primer emparejamiento, lo que les permite recordarse mutuamente como seguros cuando se vuelven a conectar en el futuro.
                Veamos las fases de emparejamiento con más detalle, ya que nos ayudarán a comprender la vulnerabilidad de BLE.
                </p>
                <p>
                Existen métodos para asegurar la segunda fase, como el uso de claves temporales para autorizar la conexión o el uso de BLE Secure,
                que se introduce en la versión 4.2 e implementa el algoritmo Diffie-Hellman para la generación de claves, además de introducir un proceso
                más complejo de autenticación. Pero lo cierto es que muchos de los dispositivos IoT que encontramos en el mercado no implementan estos
                métodos y son fácilmente vulnerables. Hay dos tipos de ciberataques comúnmente asociados módulos BLE: escuchas pasivas y hombre en el
                medio (Man-In-The-Middle).
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
                  href="/blog/zigbee"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/wifi"
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

export default ArticleBluetooth;
