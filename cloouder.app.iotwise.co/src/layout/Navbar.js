import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarComponent from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Auth } from '../services/firebase/auth.service';
import { Sidebar } from './Sidebar';
import { useAuth } from '../hooks/useAuth';
import './layout.css'

const auth = Auth.getInstance()

export const Navbar = () => {

  const { user } = useAuth()

  return (
    <NavbarComponent expand={true} className="navbar bg-dark p-0" data-bs-theme="dark">
      <Container>

        {/* Logo
        <NavbarComponent.Brand>
          <img src='https://iotwise.co/images/iotwise-logo-white.svg' width={50} alt="" />
        </NavbarComponent.Brand> */}


        {/* Navbar Items */}
        <NavbarComponent.Collapse id="basic-navbar-nav bg-dark" data-bs-theme="dark">

          {/* Left Items */}
          <Nav className="me-auto bg-dark" data-bs-theme="dark">

            {/* Home */}
            <div className='nav-link' >
             <Sidebar />
            </div>
 
          </Nav>

          <div className='text-light d-none d-sm-block'>Cloouder<sup>®</sup> LNS</div>


          {/* Right Items */}
          <Nav className="ms-auto bg-dark" data-bs-theme="dark">
              
            <NavDropdown id="basic-nav-dropdown"
              title={
                <div className='text-light d-inline'>
                  <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' alt='' width={20} />
                  {" " + user.email}
                </div>
              }
            >
              
              <Link href='/' className='nav-link' onClick={() => alert("Action 1")}>
                Mi perfil
              </Link>

              <Link href='/' className='nav-link' onClick={() => alert("Action 2")}>
                Administrar usuarios
              </Link>

              <NavDropdown.Divider />
              
              <div  className='nav-link link-danger' onClick={() => auth.signOut()}>
                <i className='fas fa-sign-out-alt' /> Cerrar Sesión
              </div>
            </NavDropdown>

          </Nav>
          
        </NavbarComponent.Collapse>

      </Container>
    </NavbarComponent>
  );
}