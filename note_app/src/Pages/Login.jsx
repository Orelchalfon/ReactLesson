import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Footer from "../AppComps/Footer";
import Header from "../AppComps/Header";
import { ShopContext } from "../Context/ShopContextProvider";

export default function Login(props) {
  const navigateTo = useNavigate();
  const { setName, setPass, loginValidation } = useContext(ShopContext);
  return (
    <div className="Home">
      <Header />
      <main className="mainSec">
        <div className="form">
          <h3 className="title" >Login</h3>
          <div className="inp-group">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="inp"
              placeholder="enter mail. . ."
              required
            />
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type="text"
              className="inp"
              placeholder="enter password. . ."
              required
            />
            <input
              type="text"
              className="inp hidden"
              placeholder="enter password again. . ."
              required
            />
          </div>
          <div className="btn-group">
            <button
              onClick={() => navigateTo("/register")}
              className="btn SignUp"
            >
              SignUp
            </button>
            <button onClick={loginValidation} className="btn Login">
              Login
            </button>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
