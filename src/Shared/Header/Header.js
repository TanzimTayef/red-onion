import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../images/logo2.png";

const Header = () => {
    return (
        <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{width: "100px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold text-dark">
              <Nav.Link href="#link">Cart</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link className="bg-danger text-white rounded-pill px-3" href="#link">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        
    );
};

export default Header;