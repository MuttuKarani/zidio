// src/App.js
import "./App.css";
import Navbar from "./components/modules/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/views/HomePage";

import Services from "./components/views/ServicesPage";
import Contact from "./components/views/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/views/AboutPage";
import Topheader from "./components/modules/Topheader";

function App() {
  return (
    <div className="App">
      <Router>
        <Topheader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
