// src/App.js
import "./App.css";
//import "./components/modules/Navigation";
import Navbar  from './components/modules/Navigation';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
    </div>


  );
}
/*        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1> */
export default App;
