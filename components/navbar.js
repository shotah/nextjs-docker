import React from 'react';
import Link from 'next/link'
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          </ Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Link href="/about" passHref>
                  <NavDropdown.Item>About</NavDropdown.Item>
                </ Link>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};

export default NavBar;