import React, { useContext } from "react";
import Footer from "../AppComps/Footer";
import Header from "../AppComps/Header";
import { ShopContext } from "../Context/ShopContextProvider";

export default function AddNotes()
{
  const {addNote,setTitle,setDesc} = useContext(ShopContext)
  return (
    <div className="Home">
      <Header />
      <main className="mainSec">
      
        <div className="form">
          <h3 className="title">AddNotes</h3>
          <div className="inp-group reg">
            <input
             onChange={(e)=>setTitle(e.target.value)}
              type="text"
              className="inp "
              placeholder="enter Title"
              required
            />
            <textarea
           onChange={(e)=>setDesc(e.target.value)}
              type="text"
              className="inp"
              placeholder="enter password. . ."
              required
            />
          
            <button className="btn" onClick={addNote}>submit</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
