import logo from './logo.svg';
import './App.css';
import CCSeries from './CCSeries/CCSeries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCSeries/>
      </header>
    </div>
  );
}

export default App;
