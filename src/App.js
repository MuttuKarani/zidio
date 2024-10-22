import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/modules/Footer";
import TestimonialCarousel from "./components/modules/Testimonials";
import WorkingProcess from "./components/modules/WorkingProcess";
import DedicatedTeam from "./components/modules/DedicatedTeam";
import Services from "./components/modules/Services";
import About from "./components/modules/About";
import Features from "./components/modules/Features";
import Hero from "./components/modules/Hero";
import Navbar from "./components/modules/Navbar";
import AboutUs from "./components/modules/AboutUs";
import CounterArea from "./components/modules/CounterArea";
import FeatureArea2 from "./components/modules/FeatureArea2";
import AboutUsPageTop from "./components/modules/AboutUsPageTop";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      {/* About us Tab */}
    
      <AboutUs />
      <CounterArea />
      <FeatureArea2 />
      {/*  */}
     
      <Features />
      <About />
      <Services />
      <DedicatedTeam />
      <WorkingProcess />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
