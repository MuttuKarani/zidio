import React from "react";
import FeatureArea2 from "../modules/FeatureArea2";
import AboutUs from "../modules/AboutUs";
import DedicatedTeam from "../modules/DedicatedTeam";
import CounterArea from "../modules/CounterArea";
import TestimonialCarousel from "../modules/Testimonials";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";
import AboutUsPageTop from "../modules/AboutUsPageTop";

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <AboutUsPageTop />
    <FeatureArea2 />
    <AboutUs />
    <DedicatedTeam />
    <CounterArea />
    <TestimonialCarousel />
    <Footer />

    </>
  );
};

export default AboutPage;
