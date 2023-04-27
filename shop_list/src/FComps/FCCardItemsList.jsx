import React from "react";
import FCCardItems from "./FCCardItems";
import "./cardItemList.css";
export default function FCCardItemsList(props) {
  let cardItem = props.cardItemList.map((cI) => (
    <FCCardItems
      title={cI.title}
      imgSrc={cI.imgUrl}
      price={cI.price}
      id={cI.id}
      key={cI.id}
      id2DelFromFC={(id2del,price2Add) =>{ props.id2DelFromFC_L(id2del,price2Add)}}
    />
  ));
  return <div style={{display:"flex ",gap:"1rem"}}>{cardItem}</div>;
}
