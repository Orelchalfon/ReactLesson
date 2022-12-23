import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <span id="noteMark"></span>
      <h1>{props.title}</h1>
      <span id="dellNote"></span>
      <p>{props.desc}</p>
    </div>
  );
}
