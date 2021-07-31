import React from "react";
import { Cart } from "./Cart";
import CurrenciesDropdown from "./CurrenciesDropdown";
import { Navbar } from "./Navbar";

export class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <Navbar />
        <img alt="" className="a-logo" src="../../a-logo.png"></img>
        <div className="cart-dropdown">
          <CurrenciesDropdown />
          <Cart />
        </div>
      </header>
    );
  }
}
