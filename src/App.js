// src/App.js
import "./App.css";
import Navbar from "./components/modules/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/views/Home";

import Services from "./components/views/Services";
import Contact from "./components/views/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/views/AboutUs";
import Topheader from "./components/modules/Topheader";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Router>
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
