import logo from "./logo.svg";
import "./App.css";
import CCarsList from "./CCarsList/CCarsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CCars id={1} model={"BMW"} speed={300} /> */}
        <CCarsList/>
      </header>
    </div>
  );
}

export default App;
