import logo from "./logo.svg";
import "./App.css";
import CCSeriesListApp from "./Class Comps/CCSeriesListApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCSeriesListApp />
      </header>
    </div>
  );
}

export default App;
