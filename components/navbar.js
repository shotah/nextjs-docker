import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              alt=""
              src="/astro_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Astro!
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link href="/about" passHref>
                <NavDropdown.Item>About</NavDropdown.Item>
              </Link>
              <Link href="/about" passHref>
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </Link>
              <Link href="/about" passHref>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/about" passHref>
                <NavDropdown.Item>Separated Something</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
