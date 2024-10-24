import "./App.css";
import Navbar from "./components/modules/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/views/HomePage";
import AboutPage from "./components/views/AboutPage";
import ServicesPage from "./components/views/ServicesPage";
import ContactPage from "./components/views/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topheader from "./components/modules/Topheader";

function App() {
  return (
    <div className="App">
      <Router>
        <Topheader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
