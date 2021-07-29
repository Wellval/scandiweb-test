import React from "react";
import items from "../../shared/itemImages";

export class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOutOfStock: false,
    };
  }
  render() {
    return items
      .find((x) => x.images)
      .images.map((imgObject) => (
        <div
          className={
            imgObject.outOfStock === true ? "card-inactive" : "card"
          }
        >
        {
            imgObject.outOfStock === true ? <p className="out-of-stock">Out of stock</p> : ''
        }
          <img className="item-image" src={imgObject.image}></img>
          <img className="buy-icon" src="./buy-icon.svg"></img>
          <div className="item-info">
            <p>Apollo Running Short</p>
            <p className="price">$50.00</p>
          </div>
        </div>
      ));
  }
}
