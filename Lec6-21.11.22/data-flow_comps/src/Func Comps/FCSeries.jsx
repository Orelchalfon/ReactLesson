import React from "react";

export default function FCSeries(props) {

  return (
    <div className="listCon">
      <span style={{ color: "lightcoral" }}>{props.name}</span>|
      <span style={{ color: "initial" }}>{props.genre}</span>|
      <span style={{ color: "green" }}>{props.seasons}</span>
      <span
        className="delMark"
        onClick={() => props.id2DelFromFCS(props.id)}
      ></span>
    </div>
  );
}
