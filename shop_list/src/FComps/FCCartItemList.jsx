import React from "react";
import FCCartItem from "./FCCartItem";
import "./cardItemList.css";
export default function FCCartItemList(props) {
  let cartItem = props.cartItemList.map((cI) => (
    <FCCartItem
      title={cI.title}
      imgSrc={cI.imgUrl}
      price={cI.price}
      id={cI.id}
      key={cI.id}
      id2DelFromFC={(id2del) => props.id2DelFromFC_L(id2del)}
    />
  ));

  return <div style={{ display: "flex", gap: "1rem" }}>{cartItem}</div>;
}
