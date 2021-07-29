import React from "react";
import { Cart } from "./Cart";
import { Dropdown } from "./Dropdown";
import { Navbar } from "./Navbar";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: [
        {
          id: 0,
          title: "$ USD",
          selected: true,
          key: "currency",
        },
        {
          id: 1,
          title: "€ EUR",
          selected: false,
          key: "currency",
        },
        {
          id: 2,
          title: "¥ JPY",
          selected: false,
          key: "currency",
        },
      ],
    };
  }

  resetThenSet = (id, key) => {
    const temp = [...this.state[key]];

    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;

    this.setState({
      [key]: temp,
    });
  };

  render() {
    return (
      <header>
        <Navbar />
        <img className="a-logo" src="./a-logo.png"></img>
        <div className="cart-dropdown">
          <Dropdown
            title="$"
            list={this.state.currency}
            resetThenSet={this.resetThenSet}
          />
          <Cart />
        </div>
      </header>
    );
  }
}
