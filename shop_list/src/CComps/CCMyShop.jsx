import React, { Component} from "react";
import FCCardItemsList from "../FComps/FCCardItemsList";

import FCCartItemList from "../FComps/FCCartItemList";
import "../CComps/CComps.css";
const InitialItemList = [
  {
    id: 1,
    title: "T-Shirt",
    imgUrl:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: 200,
  },
  {
    id: 2,
    title: "Hat",
    imgUrl:
      "https://images.pexels.com/photos/8968896/pexels-photo-8968896.jpeg",
    price: 150,
  },
  {
    id: 3,
    title: "shoes",
    imgUrl:
      "https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg",
    price: 600,
  },
  {
    id: 4,
    title: "coat",
    imgUrl:
      "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg",
    price: 800,
  },
];
const InitialCartItem = [];
const [itemCount, cartCount] = [InitialItemList.length, InitialCartItem.length];

export default class CCMyShop extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      cardItem: InitialItemList,
      itemCounter: itemCount,
      cartItem: InitialCartItem,
      cartCounter: cartCount,
      price: 0,
    };
  }
  addToCart = (id2del) => {
    let cartItems = this.state.cardItem.find((item) => item.id === id2del);

    let totalPrice = this.state.price + cartItems.price;

    let newCardItem = this.state.cardItem.filter((item) => item.id !== id2del);

    let newCartItems = [...this.state.cartItem, cartItems];
    this.setState({
      cardItem: newCardItem,
      cartItem: newCartItems,
      price: totalPrice,
    });
  };
  add2Card = (id2del) => {
    let cardItems = this.state.cartItem.find((item) => item.id === id2del);
    let newCartItem = this.state.cartItem.filter((item) => item.id !== id2del);

    let newCardItems = [...this.state.cardItem, cardItems];
    this.setState({
      cardItem: newCardItems,
      cartItem: newCartItem,
    });
  };
  render() {
    return (
      <div>
        <div
          className={this.state.cartItem.length !== 0 ? "cardItemList" : null}
        >
          <FCCartItemList
            cartItemList={this.state.cartItem}
            id2DelFromFC_L={this.add2Card}
          />
        </div>
        <div className="totalCon">
          <span className="totalPrice">
            Total: <span>{this.state.price}$</span>
          </span>
        </div>

        <div className={"cardItemList"}>
          <FCCardItemsList
            cardItemList={InitialItemList}
            id2DelFromFC_L={this.addToCart}
          />
        </div>
      </div>
    );
  }
}
