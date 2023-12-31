import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'
import logoElmes from '../../images/ElmesLogo.png'
import './Navbar.css'

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className="bg-body-tertiary fixed-top">
        <img className='logo-elmes' src={logoElmes} alt='logo-de-elmes' />
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/proximas-fechas">Próximas Fechas</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="/integrantes">Integrantes</NavDropdown.Item>
              <NavDropdown.Item href="/redes">Redes</NavDropdown.Item>
              <NavDropdown.Item href="/contacto">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
