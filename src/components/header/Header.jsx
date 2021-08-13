import React from "react";
import Cart from "../cart/Cart";
import CurrenciesDropdown from "./CurrenciesDropdown";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/actions/cart"

class Header extends React.Component {

    render() {
        return (
            <header>
                <Navbar />
                <NavLink
                    to={"/" + this.props.selectedCategory}>
                    <img onClick={() => { if (this.props.isCartOpen === true) this.props.toggleCart() }} alt="" className="a-logo" src="../../a-logo.png"></img>
                </NavLink>
                <div className="cart-and-dropdown">
                    <CurrenciesDropdown />
                    <Cart isCartOpen={this.props.isCartOpen}
                        toggleCart={this.props.toggleCart}
                        cartItems={this.props.cartItems}
                        addCartItem={this.props.addCartItem}
                        removeCartItem={this.props.removeCartItem}
                        selectedCurrency={this.props.selectedCurrency}
                    />
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        isCartOpen: state.cart.isOpen,
        categories: state.categories.list,
        selectedCategory: state.categories.selected
    };
};

export default connect(
    mapStateToProps,
    { toggleCart }
)(Header);
