import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";

export default function Note(props) {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const {dellNoteById,updateCompDate} = useContext(ShopContext)
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const renderEditView = () => (
    <div className="note">
      <button
        className="cancel_Mark"
        onClick={() => {
          setIsInEditMode(!isInEditMode);
        }}
      >
        x
      </button>

      <input className="title" type="text" defaultValue={props.title} onChange={(e) => setTitle(e.target.value)}  />
      <input className="title" type="text" defaultValue={props.desc} onChange={(e) => setDesc(e.target.value)} />
      <button>EDIT</button>
      <button onClick={ ()=>{updateCompDate(props.id,title,desc)}}>Submit</button>
    </div>
  );
  const renderDefaultView = () => (
    <div className="note">
      {/* <button className="cancel_Mark">x</button> */}
      <h1 className="title">{props.title}</h1>
      <p>{props.desc}</p>
      <button
        onClick={() => {
          setIsInEditMode(!isInEditMode);
        }}
      >
        EDIT
      </button>
      <button onClick={() =>{dellNoteById(props.id)}}>DELETE</button>
    </div>
  );
  return isInEditMode ? renderEditView() : renderDefaultView();
}
