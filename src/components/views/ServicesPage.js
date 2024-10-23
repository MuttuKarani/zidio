import React from "react";
import ServicesAll from "../modules/ServicesAll";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";
import ServicePageTop from "../modules/ServicePageTop";


const ServicesPage= () => {
  return (
    <>
       <Navbar />
       <ServicePageTop />
      <ServicesAll />
      <Footer />
    </>
  );
};

export default ServicesPage;

