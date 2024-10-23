import React from "react";
import ServicesAll from "../modules/ServicesAll";
import ContactForm from "../modules/ContactForm";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";
import ContactUsPageTop from "../modules/ContactUsPageTop";


const ContactPage= () => {
  return (
    <>
      <Navbar />
       <ContactUsPageTop />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
