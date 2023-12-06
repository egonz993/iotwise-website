import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarComponent from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <NavbarComponent expand="lg" className="navbar bg-dark p-0" data-bs-theme="dark">
      <Container>

        {/* Logo */}
        <NavbarComponent.Brand>
          <img src='https://iotwise.co/images/iotwise-logo-white.svg' width={50} alt="" />
        </NavbarComponent.Brand>

        {/* Mobile Button */}
        <NavbarComponent.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <NavbarComponent.Collapse id="basic-navbar-nav bg-dark" data-bs-theme="dark">

          {/* Left Items */}
          <Nav className="me-auto bg-dark" data-bs-theme="dark">

            {/* Home */}
            <Link href='/' className='nav-link' >Inicio</Link>

            {/* WISE® Modules" */}
            <NavDropdown title={<>Módulos u-WISE<sup>®</sup></>} id="basic-nav-dropdown">
              
              <Link href='/' className='nav-link'>Ver Todo</Link>
              <NavDropdown.Divider />

              <Link href='/' className='nav-link'>¿Qué es u-WISE<sup>®</sup>?</Link>
              <NavDropdown.Divider />
              
              <NavDropdown.Header className='nav-header'>
                Módulos u-WISE<sup>®</sup>
              </NavDropdown.Header>

              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Base</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Power</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Control</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Wireless</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Interface</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Sensor</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Actuator</Link>
              <Link href='/' className='nav-link'>u-WISE<sup>®</sup> | Extra</Link>

            </NavDropdown>
            
            {/* Technologies */}
            <NavDropdown title="Tecnologías" id="basic-nav-dropdown">
              
              <Link href='/' className='nav-link'>Ver Todo</Link>
              <NavDropdown.Divider />

              <Link href='/' className='nav-link'>LoRaWAN</Link>
              <Link href='/' className='nav-link'>Helium</Link>
              <Link href='/' className='nav-link'>Wi-SUN</Link>
              <Link href='/' className='nav-link'>NB-IoT</Link>
              <Link href='/' className='nav-link'>LTE</Link>
              <Link href='/' className='nav-link'>Wi-Fi</Link>
              <Link href='/' className='nav-link'>Zigbee</Link>
              <Link href='/' className='nav-link'>Bluetooth</Link>

            </NavDropdown>

            {/* Accesories" */}
            <NavDropdown className='nav-dropdown' title="Accesorios" id="basic-nav-dropdown">
              
              <Link href='/' className='nav-link'>Ver Todo</Link>
              <NavDropdown.Divider />

              <Link href='/' className='nav-link'>Cajas</Link>
              <Link href='/' className='nav-link'>Antenas</Link>
              <Link href='/' className='nav-link'>Conectores</Link>
              <Link href='/' className='nav-link'>Herramientas</Link>

            </NavDropdown>

            {/* Software" */}
            <NavDropdown title="Software" id="basic-nav-dropdown">
              
              <Link href='https://www.iotwise.co/senpai' target='_blank' className='nav-link'>IoT Senpai<sup>®</sup></Link>
              <Link href='https://www.iotwise.co/cloouder' target='_blank' className='nav-link'>Cloouder<sup>®</sup> LNS</Link>

            </NavDropdown>

          </Nav>

          {/* Right Items */}
          <Nav className="ms-auto bg-dark" data-bs-theme="dark">

            <Link href='/' className='nav-link' onClick={() => alert("Cart")}>
            <sup className={`bg-info text-dark rounded-pill px-2 py-1 ${true ? '' : 'd-none'}`}>$724,<sub>80</sub></sup><img src='/cart.png' alt='' width={20} /> <sub>Carrito</sub>
            </Link>
              
            <NavDropdown id="basic-nav-dropdown"
              title={<><img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' alt='' width={20} /> E'Gonzalez</>}
            >
              
              <Link href='/' className='nav-link' onClick={() => alert("Action 1")}>
                Action 1
              </Link>

              <Link href='/' className='nav-link' onClick={() => alert("Action 2")}>
                Action 2
              </Link>

              <NavDropdown.Divider />
              
              <Link href='/' className='nav-link' onClick={() => alert("Cerrar Sesión")}>
                <i className='fas fa-sign-out-alt' /> Cerrar Sesión
              </Link>
            </NavDropdown>

          </Nav>
          
        </NavbarComponent.Collapse>

      </Container>
    </NavbarComponent>
  );
}