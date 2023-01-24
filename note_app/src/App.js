import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNote from "./Pages/AddNote";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyNotes from "./Pages/MyNotes";
import Reg from "./Pages/Reg";

function App() {
  return (
    <div className="App">
      <div className="box purple"></div>
      <div className="box blue"></div>
      <div className="box orange"></div>
      <div className="box lightblue"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/addNote" element={<AddNote/>} />
        <Route path="/myNote" element={<MyNotes/>} />
      </Routes>
    </div>
  );
}

export default App;
