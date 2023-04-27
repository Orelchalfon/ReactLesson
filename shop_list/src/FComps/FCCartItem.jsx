import React from "react";
import "./cardItem.css";
export default function FCCartItem(props) {

  return (
    <div className="card">
      <span
        className="delMark"
        onClick={() => props.id2DelFromFC(props.id)}
      ></span>

      <div>{props.title} </div>
      <div>
        <img src={props.imgSrc} alt="T-Shirt" />
      </div>
      <div className="price">{props.price} $</div>
    </div>
  );
}
