import React from "react";
import { Cart } from "./Cart";
import CurrenciesDropdown from "./CurrenciesDropdown";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar categories={this.props.categories}
                    selectedCategory={this.props.selectedCategory}
                    selectCategory={this.props.selectCategory}
                />
                <NavLink
                    to={"/" + this.props.selectedCategory}>
                    <img alt="" className="a-logo" src="../../a-logo.png" ></img>
                </NavLink>
                <div className="cart-dropdown">
                    <CurrenciesDropdown />
                    <Cart />
                </div>
            </header>
        );
    }
}
