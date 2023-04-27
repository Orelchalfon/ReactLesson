import React from "react";
import "./cardItem.css"
export default function FCCardItems(props) {
  return (
    <div className="card">
      <div>{props.title} </div>
      <div><img  src={props.imgSrc} alt="T-Shirt" /> </div>
      <div className="price">{props.price} <span>$</span></div>
     <button onClick={()=> props.id2DelFromFC(props.id)}></button>
    </div>
  );
}
