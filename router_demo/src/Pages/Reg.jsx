import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";

export default function Reg() {
  const {
    name,
    setName,
    pass,
    setPass,
    passAgain,
    setPassAgain,
    regValidation,
  
  } = useContext(ShopContext);
  return (
    <div className="Home">
      <header className="nav">
        <div className="nav_link">
          <Link to="/">Home</Link>
        </div>
        <ul>
          <li className="nav_link">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="nav_link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
      <main className="mainSec">
        <div className="form">
          <h3 className="title">Register</h3>
          <div className="inp-group">
            <input
            onFocus={()=>{}}
              onChange={(e) => {
                const inp = e.target.value;
                setName(inp);
              console.log(name,pass);
              }}
              type="text"
              className="inp"
              placeholder="enter mail. . ."
            />

            <input
              onChange={(e) => {
                const inp = e.target.value;
                setPass(inp);
                console.log(pass);
              }}
              type="text"
              className="inp"
              placeholder="enter password. . ."
            />
            <input
              onBlur={(e) => {
                const inp = e.target.value;
                setPassAgain(inp);
                console.log(name, pass, pass === passAgain);
              }}
              type="text"
              className="inp "
              placeholder="enter password again. . ."
            />
          </div>
          <div className="btn-group">
            <button onClick={regValidation} className="btn Login">
              Login
            </button>
          </div>
        </div>
      </main>
      <footer className="footerSec">©️ OrelChalfon</footer>
    </div>
  );
}
/*  <div className="Home">
      <header className="nav">
        <div className="nav_link">
          <Link to="/">Home</Link>
        </div>
        <ul>
          <li className="nav_link">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="nav_link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
      <main className="mainSec">
        <div className="form">
          <h3 className="title">Login</h3>
          <div className="inp-group">
            <input type="text" className="inp" placeholder="enter mail. . ." />
            <input
              type="text"
              className="inp"
              placeholder="enter password. . ."
            />
            <input
              type="text"
              className="inp "
              placeholder="enter password again. . ."
            />
            { <input
              type="text"
              className="inp"
              placeholder="enter password . . ."
            /> }
            </div>
             <div className="btn-group">
        <button onClick={()=>navigateTo('/login')} className="btn Login">Login<span>➡️</span></button>
      </div>
          </div>
        </main>
        <footer className="footerSec">©️ OrelChalfon</footer>
      </div> */
