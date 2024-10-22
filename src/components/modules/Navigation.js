import React, {useState} from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";
//import Navbar from './Navbar';

const Navigation = () => {

  return (
  <div>
    <div class="top-header-area">
  <div class="container-fluid">
    <div class="row align-items-center justify-content-between">
      <div class="contact-info d-flex justify-content-start">
        <span class="me-3">📍 Bengaluru, Karnataka, India</span>
        <span class="me-3">📧 support@zidio.in</span>
        <span>⏰ 9.00 am – 5.30 pm</span>
      </div>
      <div class="social-links d-flex justify-content-end">
        <a href="#"><i class="bi bi-facebook me-3"></i></a>
        <a href="#"><i class="bi bi-twitter me-3"></i></a>
        <a href="#"><i class="bi bi-linkedin me-3"></i></a>
        <a href="#"><i class="bi bi-youtube"></i></a>
      </div>
    </div>
  </div>
</div>
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="../../../public/images/zidioLogo.png" // Replace with your logo URL
            alt="Zidio Development"
            height="40"
          />
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
  </div>
  
);




  /*
  return (
    <div className="top-header">
      <div className="contact-info">
        <span>📍 Bengaluru, Karnataka, India</span>
        <span>📧 support@zidio.in</span>
        <span>⏰ 9.00 am – 5.30 pm</span>
      </div>
    
      <nav className="navbar">
        <div className="logo">
          <img src={"../../../public/images/zidioLogo.png"} alt="Zidio Development" width="30" height=""/>           
        </div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a> </li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>

        </ul>
        <Button className="quote-btn">Get A Quote</Button>

        
      </nav>
    </div>

    
    
  );*/
}
  

export default Navigation;
