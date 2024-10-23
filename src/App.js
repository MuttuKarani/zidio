
import "./App.css";
import HomePage from "./components/views/HomePage";


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from "./components/views/AboutPage";
import ServicesPage from "./components/views/ServicesPage";
import ContactPage from "./components/views/ContactPage";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
