import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header()
{
    const navigateTo = useNavigate();
    const {state:loggedUser}=useLocation()
    const location=useLocation()
  return (
    <header className="nav">
      <div className="nav_link">
        <Link to="/">Home</Link>
      </div>

      <span className="guest">
        Welcome<span>{loggedUser?.uName ? loggedUser?.uName : `Guest`}</span>
      </span>

      <span
        onClick={() => {
          navigateTo(`/`, {});
        }}
        className="nav_link"
      >
        Logout
      </span>

      <ul>
      { loggedUser&& <li >
          <span className="nav_link" onClick={() => navigateTo(`${location.pathname==='/addNote'?"/MyNote":"/addNote"}`, { state: loggedUser })}>{`${location.pathname==="/addNote"?"MyNote":"addNote"}`}</span>
              </li>}
              
       {!loggedUser&& <li className="nav_link">
          <Link to="/login">Login</Link>
        </li>}
      </ul>
    </header>
  );
}
