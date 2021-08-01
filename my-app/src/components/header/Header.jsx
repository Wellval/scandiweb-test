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
                <Navbar categories={this.props.categories}
                    selectedCategory={this.props.selectedCategory}
                    selectCategory={this.props.selectCategory}
                />
                <img alt="" className="a-logo" src="../../a-logo.png"></img>
                <div className="cart-dropdown">
                    <CurrenciesDropdown />
                    <Cart />
                </div>
            </header>
        );
    }
}
