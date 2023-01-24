import React from "react";
import Footer from "../AppComps/Footer";
import Header from "../AppComps/Header";
import NotesList from "../NoteComps/NotesList";


export default function MyNotes()
{

     return (
      <div className="Home">
        <Header />
      <main className="mainSec">
     
           <div className="form">
             <NotesList/>
            {/* <h3 className="title">MyNotes</h3>
            <div className="inp-group reg">
              <input
                onChange={(e) => {}}
                type="text"
                className="inp "
                placeholder="enter Title"
                required
              />
              <textarea
                onChange={(e) => {}}
                type="text"
                className="inp"
                placeholder="enter Description"
                required
              />

              <button className="btn">
                submit
              </button>
            </div> */}
        {/* <Note title="title" desc="description"/> */}
          
          </div>
        </main>
        <Footer />
      </div>
  
  );
}
