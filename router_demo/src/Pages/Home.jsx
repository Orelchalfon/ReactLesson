import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();
const {state:loggedUser}=useLocation()
console.log(`loggedUser ${loggedUser}`);
  return (
    <div className="Home">
      <header className="nav">
        <div className="nav_link">
          <Link to="/">Home</Link>
        </div>
        <span className="guest">
          Welcome<span>{loggedUser?.uName ? loggedUser?.uName : `Guest`}</span>
        </span>
        <span
          onClick={() => {
            navigateTo(`/`,{});
            
          }}
          className="nav_link"
        >
          Logout
        </span>

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
        <div>Home</div>
      </main>
      <footer className="footerSec">©️ OrelChalfon</footer>
    </div>
  );
}
