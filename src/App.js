// src/App.js
import "./App.css";
//import "./components/modules/Navigation";
import Navbar from "./components/modules/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/views/Home";
import Topheader from "./components/modules/Topheader";

import About from "./components/views/About";
import Services from "./components/views/Services";
import Contact from "./components/views/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <Topheader />
      <Navbar />
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;
