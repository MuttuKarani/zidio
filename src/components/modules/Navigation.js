import React from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";

const Navigation = () => {
  return (

    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src="images/zidioLogo.png" alt="Zidio Development" height="40" />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Search icon */}
          <Nav className="me-3">
            <Nav.Link href="#search">
              <i className="bi bi-search"></i>
            </Nav.Link>
          </Nav>

          {/* Button */}
          <Button variant="primary" href="#quote">
            Get A Quote
          </Button>
         
        </Navbar.Collapse>
      
      </Container>
    </Navbar>

  );
};

export default Navigation;
