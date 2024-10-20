import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/modules/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <Footer />
    </div>
  );
}

export default App;
