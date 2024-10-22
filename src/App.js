// src/App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home";
import Topheader from "./components/modules/Topheader";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Home />
    </div>
  );
}

export default App;
