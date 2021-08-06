import React from "react";
import Wrapper from "../Wrapper";
import { connect } from "react-redux";
import { addCartItem, removeCartItem } from "../../redux/actions/cart";
import { currenciesSymbols } from "../../constants";

class CartPage extends React.Component {

    countCartItems(itemId) {
        const counts = {};
        this.props.cartItems.forEach(function (x) { counts[x.id] = (counts[x.id] || 0) + 1; 
        });
        return counts[itemId]
    }

    getProductsSet() {
        const itemsSet = new Set(this.props.cartItems.map(item => JSON.stringify(item)))
        const productsSet = [];
        itemsSet.forEach(item => productsSet.push(JSON.parse(item)));
        return productsSet;
    }

    setButtonClassName = (attr, id, attribute) => {
        if (attr.value === id[attribute.id]) {
            return attribute.type === "swatch" ? "attribute-color-active" : "attribute-text-active";
        } else {
            return "attribute-button";
        }
    }

    render() {

        return (
            <Wrapper>
                <p className="cart-page-title">cart</p>

                {
                    this.getProductsSet().map(item =>
                        <div className="cart-item-container">
                            <div key={item.id} className="product-info product-info-cart">
                                <h3>{item.brand}</h3>
                                <p>{item.name}</p>
                                <p key={Math.random()} className="price">
                                    {currenciesSymbols[this.props.selectedCurrency] || '$'} {item.prices.find(x => x.currency === this.props.selectedCurrency)?.amount}
                                </p>
                                {
                                    item.attributes.map(attribute => <div className="cart-attributes">
                                        {
                                            attribute.items.map(attr => <button
                                                className={this.setButtonClassName(attr, item.attrValues, attribute)}
                                                style={{ ...attribute.type === "swatch" ? { backgroundColor: attr.value } : "" }}
                                            >{attribute.type === "swatch" ? "" : attr.value}</button>
                                            )}
                                    </div>)
                                }

                            </div>
                            <div className="cart-popup-image">
                                <div className="cart-popup-amount">
                                    <button className="cart-popup-button"
                                        onClick={() => {
                                            this.props.addCartItem({ ...item, attrValues: item.attrValues });
                                        }}>
                                        +
                                    </button>
                                    <p>{this.countCartItems(item.id)}</p>
                                    <button className="cart-popup-button"
                                        onClick={() => {
                                            this.props.removeCartItem(item);
                                        }}>
                                        -
                                    </button>
                                </div>
                                <div className="img-wrapper">
                                    <img alt="" src={item.gallery[0]}></img>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCurrency: state.currencies.selected,
        cartItems: state.cart.list,
        products: state.products.list,
    };
};

export default connect(
    mapStateToProps,
    { addCartItem, removeCartItem }
)(CartPage);