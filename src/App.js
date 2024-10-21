import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/modules/Footer";
import TestimonialCarousel from "./components/modules/Testimonials";
import WorkingProcess from "./components/modules/WorkingProcess";
import DedicatedTeam from "./components/modules/DedicatedTeam";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <DedicatedTeam />
      <WorkingProcess />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
