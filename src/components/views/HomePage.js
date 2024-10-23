import React from "react";
import About from "../modules/About";
import Services from "../modules/Services";
import DedicatedTeam from "../modules/DedicatedTeam";
import WorkingProcess from "../modules/WorkingProcess";
import TestimonialCarousel from "../modules/Testimonials";
import Footer from "../modules/Footer";
import Features from "../modules/Features";
import Navbar from "../modules/Navbar";
import Hero from "../modules/Hero";
import CounterArea from "../modules/CounterArea";
import ContactInfo from "../modules/ContactInfo";
import Topheader from "../modules/TopHeader";

const HomePage = () => {
  return (
    <>
      <Topheader />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <DedicatedTeam />
      <CounterArea />
      <WorkingProcess />
      <TestimonialCarousel />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default HomePage;
