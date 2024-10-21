import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/modules/Footer";
import TestimonialCarousel from "./components/modules/Testimonials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
