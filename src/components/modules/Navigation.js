import React from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";
//import Navbar from './Navbar';

const Navigation = () => {

  return (
  <div class="header-area stype-two" id="sticky-header">
  
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>

        <Navbar.Brand href="/">
          <img
            src="../../../public/images/zidioLogo.png" // Replace with your logo URL
            alt="Zidio Development"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>


          <Nav className="me-3">
            <Nav.Link href="#search">
              <i className="bi bi-search"></i>
            </Nav.Link>
          </Nav>


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
