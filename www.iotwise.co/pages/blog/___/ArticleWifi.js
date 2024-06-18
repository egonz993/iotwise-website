import React, {useState}  from "react";
import Link from "next/link";

const ArticleWifi = () => {
  const [prevLabel, setPrevLabel] = useState("Prev Post");
  const [homeLabel, setHomeLabel] = useState("Next Post");
  
  const handleMouseEnterPrev = () => {
    setPrevLabel("Articulo de Bluetooth");
    
  };

  const handleMouseLeavePrev = () => {
    setPrevLabel("Prev Post");
    
  };

  const handleMouseEnterHome = () => {
    setHomeLabel("Articulo de GSM");
    
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
                    src="/images/iot/wifilogo.jpg"
                    alt="Image"
                    width={'300px'}
                    height={'500px'}
                  />

                <div className="article-content">

                  <h2>¿Que es Wi-Fi?</h2>

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
                  <b>El WiFi es</b> una tecnología que permite la conexión inalámbrica entre dispositivos electrónicos, ordenadores, smartphones, tablets, televisores,
                  videoconsolas, etc. En realidad, Wi-Fi es <b>una marca de Wi-Fi Alliance o Alianza Wi-Fi</b>, la organización que promueve dicha tecnología y que
                  se encarga de certificar todos los productos que se ajustan a las normas establecidas de interoperabilidad.
                  </p>

                  <div className="">
                  <img
                    style={{float: 'left', margin:'18px'}}
                    src="/images/iot/wifialliance.png"
                    alt="Image"
                    width={'250'}                    
                  />
                  <p>
                  Dicha conectividad se basa en ondas de radio. Es decir, las redes WiFi transmiten la información por el aire usando ondas radiofónicas.
                  Ahora bien, las frecuencias que se utilizan para esta tecnología de conectividad inalámbrica son distintas, concretamente 2,4 GHz hasta
                  el estándar 802.11 n y 5 GHz en 802.11 ac. Aunque los 5 GHz proporcionan unas prestaciones superiores, se utilizan ambas frecuencias.
                  De hecho, en los equipos más modernos, se combina la transferencia de datos por ambas bandas.
                   </p>
                                       
                   <p>
                   <b>Para que la conexión Wifi funcione correctamente</b>, es necesario un router. Este es un aparato conectado mediante cables a Internet.
                   A través de infrarrojos y ondas de radiofrecuencia, el router es capaz de <b>enviar información a los dispositivos y que estos se conecten
                   así a internet</b>.
                  </p>                                 
                  <p>
                  Una vez instalado el router, <b>necesitamos su nombre de identificación y la contraseña</b> a través de la cual poder conectar los dispositivos
                  a internet. Por ejemplo, cuando activas la opción de la Wifi en el smartphone y es la primera vez que te conectas a ese router, te pedirá
                  conocer el nombre del mismo y la contraseña.
                  </p>
                  </div>
                  <p>
                  Al igual que cualquier tecnología, <b>el Wifi ha ido evolucionando hasta llegar a la generación de Wifi 6</b> con más ventajas y novedades que permitirán navegar más rápido.
                  </p>

                  

                  <blockquote className="flaticon-quote">
                    <p>
                    Con más de 450 millones de puntos de conexión Wi-Fi desplegados en 2020 y una base instalada de más de 13 mil millones de dispositivos, Wi-Fi se consagra como una tecnología de éxito mundial.
                    </p>
                    <p>
                    El término Wi-Fi fue creado por la Alianza de Compatibilidad de Ethernet Inalámbrico, que más tarde se convirtió en la Wi-Fi Alliance, organización sin ánimo de lucro que tiene como objetivo estandarizar
                    y universalizar el uso de las redes inalámbricas basadas en el protocolo de red IEEE 802.11.
                    </p>
                  </blockquote>

                  <p>
                  Wi-Fi 6 es el nombre que recibe el <b>estándar IEEE 802.11ax certificado por Wi-Fi Alliance</b>, una organización del sector que proporciona liderazgo
                  de opinión, asesoramiento en espectros y herramientas de colaboración industrial. La nueva numeración hace que resulte mucho más fácil
                  diferenciar las distintas generaciones de conexiones Wi-Fi. Wi-Fi 6 está diseñada para mejorar la eficiencia con velocidades hasta 4 veces
                  superiores y mayor capacidad que la conexión Wi-Fi 5 (802.11ac). Además, ofrece mayor seguridad para contraseñas e invitados.
                  </p>
                  <p>
                  La demanda de acceso inalámbrico está aumentando exponencialmente, y el número y la variedad de dispositivos y aplicaciones sigue creciendo
                  igualmente. Wi-Fi 6 ayuda a adaptarse al creciente número de dispositivos móviles de IoT aumentando la eficiencia y la velocidad de la red
                  para satisfacer mejor los requisitos de TI y empresariales. La previsión es que para 2029 (IDC, 2021) habrá más de 15 000 millones de
                  dispositivos IoT conectados a la infraestructura empresarial.
                  </p>                 
                  
                </div>   

                <h2 className="pt-3"> Ventajas y Características</h2>

                <h3>VENTAJAS</h3>
                <ul>
                    <li><font size='3' className="pt-1">Velocidades de datos mas altas</font ></li>

                    <li><font size='3' >Mayor Capacidad</font ></li>

                    <li><font size='3' className="pt-1">Rendimiento Mejorado en entornos con muchos dispositivos conectados</font ></li>
                    
                    <li><font size='3' >Eficiencia energética mejorada</font ></li>

                    <li><font size='3'  className="pt-1">Compatibilidad con dispositivos IoT mejorada</font ></li>
                </ul>
                <h3>CARACTERISTICAS</h3>
                <ul>
                    <li><font size='3' className="pt-1"><b>El acceso múltiple por división de frecuencias ortogonales (OFDMA)</b> permite compartir canales de forma eficiente para aumentar el rendimiento de la red.</font ></li>

                    <li><font size='3'><b>La tecnología de entrada/salida múltiple multiusuario (MIMO multiusuario)</b> permite transferir más datos de enlace descendente al mismo tiempo y esto, a su vez, hace posible que los puntos de acceso puedan gestionar simultáneamente más dispositivos.</font ></li>

                    <li><font size='3' className="pt-1"><b>La tecnología Target Wake Time (TWT)</b> mejora significativamente la eficiencia de la red y la vida útil de la batería de los dispositivos, incluidos los dispositivos IoT.</font ></li>

                    <li><font size='3'><b>Modo de funcionamiento de gestión de IoT para dispositivos de bajo ancho de banda y baja potencia</b>, como sensores, herramientas de automatización y dispositivos médicos.</font ></li>

                    <li><font size='3' className="pt-1"><b>La seguridad WPA3 y Enhanced Open</b> refuerzan la privacidad de los usuarios en redes abiertas, simplifican la configuración de la seguridad para dispositivos IoT sin interfaz y añaden niveles de seguridad más altos para cumplir los requisitos gubernamentales, de defensa e industriales.</font ></li>
                </ul>               

                <h2 className="p-2">Aplicaciones y Usos</h2>

                
                <p>
                Quizá se pregunte: "¿Merece la pena Wi-Fi 6?". Si su sector depende de IoT y se beneficia de conexiones más rápidas, mayor seguridad y muchos
                dispositivos conectados, Wi-Fi 6 merece la pena. Considere los siguientes casos de uso de Wi-Fi 6. Cada uno de ellos muestra el valor que
                Wi-Fi 6 puede aportar a estos sectores.
                </p>

                <h3>Casos prácticos de fabricación</h3>

                <p>
                La fabricación es un gran caso de uso para Wi-Fi 6 debido a la transformación digital de la Industria 4.0 que está experimentando.
                Desde las operaciones de producción hasta el almacén y la oficina, <b>Wi-Fi 6 ayuda a los fabricantes a obtener, analizar, sintetizar
                y aplicar datos en tiempo real de forma segura</b>.
                </p>

                <div>
                  <img
                    style={{float: 'right', margin:'5px'}}
                    src="/images/iot/WIFI.jpeg"
                    alt="Image"
                    width={'450px'}
                    height={'900px'}                   
                  />

                <p>
                Los sensores inteligentes transmiten de forma inalámbrica datos como la temperatura, el estado de la máquina o los fallos del proceso
                en la línea de producción, todo ello a mayor velocidad. Los ingenieros pueden utilizar Wi-Fi 6 en operaciones de asistencia remota que
                incluyan auriculares de realidad aumentada. Los robots autónomos de almacén pueden aprovechar Wi-Fi 6 para navegar sin problemas por
                un almacén. <b>Esto es lo que Wi-Fi 6 puede ofrecer:</b>
                </p>
                
                <ul>
                  <li><b>Baja latencia:</b> Wi-Fi 6 mejora el uso de la RA cuando los operadores dependen de auriculares para compartir vídeo, voz y manipulación de datos en tiempo real.</li>

                  <li><b>Monitoreo Industrial:</b> BLE permite el monitoreo en tiempo real de las condiciones de los equipos, el mantenimiento predictivo,
                  el seguimiento de activos, el monitoreo ambiental, el monitoreo de energía, la seguridad de los trabajadores y la recopilación y análisis
                  de datos. Los sensores y balizas BLE transmiten datos de forma inalámbrica a un sistema central, lo que permite un monitoreo eficiente y
                  rentable de varios parámetros.</li>

                  <li><b>Sin tasas de licencia</b> - Como Wi-Fi 6 opera en bandas sin licencia, no hay tasas de espectro.</li>

                  <li><b>Mejor IoT Duración de la batería de los dispositivos:</b> Wi-Fi 6 permite a los fabricantes conectarse más fácilmente y gestionar mejor los requisitos energéticos de los sensores y dispositivos sensibles a la energía.</li>
                </ul>
                </div>

                <h2>Casos de usos en el sector minorista</h2>
                <p>
                Los consumidores utilizan las redes sociales y otros recursos en línea para investigar, comparar y compartir productos y compras, por lo que,
                cuando van de compras, esperan una conexión Wi-Fi omnipresente. Actualizar a Wi-Fi 6 significa que, independientemente de cuántos clientes
                accedan a una red inalámbrica mientras compran, disfrutarán de conexiones rápidas. Se convierte en parte de la experiencia de marca y
                respalda el deseo del comprador de retransmitir en directo, grabar o buscar marcas y productos. <b>Estas son algunas de las ventajas que los
                comercios pueden esperar de la actualización a Wi-Fi 6:</b>
                </p>

                <ul>
                  <li><b>Wi-Fi 6 ofrece</b> una gran experiencia Wi-Fi a los clientes y comunicaciones seguras y fiables al personal de los comercios.</li>

                  <li><b>Wi-Fi 6 anima</b> a los clientes a compartir sus experiencias en la tienda y sus productos en las redes sociales.</li>

                  <li><b>Con las conexiones alimentadas por Wi-Fi 6</b>, los minoristas se dirigen directamente a los clientes para influir en sus decisiones de compra y ofrecerles promociones.</li>
                </ul>

                <h2>Casos prácticos de oficinas comerciales</h2>
                <p>
                Wi-Fi 6 puede actuar como base de una red de área local inalámbrica segura. Wi-Fi 6 también mejora el alcance de la red y ayuda a que el
                dispositivo Wi-Fi consuma menos energía, por lo que las baterías duran más. 
                </p>
                <p>
                Con el cambio a la nube, Wi-Fi 6 hace que las aplicaciones de conferencias web sean aún más cómodas y fiables. La velocidad, la seguridad
                y la compatibilidad de Wi-Fi 6 con muchos dispositivos hacen que las oficinas ya no necesiten teléfonos de sobremesa. <b>Estas son algunas
                de las ventajas de la actualización a Wi-Fi 6 en una oficina:</b>
                </p>
                <ul>
                  <li><b>Los equipos pueden mantener las conexiones cuando visitan diferentes plantas.</b></li>

                  <li><b>Wi-Fi 6 conecta fácilmente a la red un volumen y una variedad cada vez mayores de dispositivos</b>,
                    incluidos ordenadores, smartphones, impresoras, tabletas, smartwatches y software de videoconferencia.</li>

                    <li><b>La función "Target Wake Time" de Wi-Fi 6</b> pone los dispositivos en modo de reposo hasta que se activan,
                      lo que reduce la congestión de la red al tiempo que preserva la duración de la batería del dispositivo.</li>
                </ul>

                
                
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
                  href="/blog/bluetooth"
                  onMouseEnter={handleMouseEnterPrev}
                  onMouseLeave={handleMouseLeavePrev}
                >
               <i className="bx bx-left-arrow-alt"></i> {prevLabel}
               </Link>
                </div>
              <div className="nav-next">
               <Link
                href="/blog/gsm"
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

export default ArticleWifi;
