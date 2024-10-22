// src/App.js
import "./App.css";
//import "./components/modules/Navigation";
import Navbar from "./components/modules/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/views/Home";
import Topheader from "./components/modules/Topheader";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Home />
    </div>
  );
}
export default App;
