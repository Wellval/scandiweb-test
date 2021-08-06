import React from "react";
import Wrapper from "../Wrapper";
import { connect } from "react-redux";
import { addCartItem, removeCartItem, changeCartItemAttribute, toggleCart } from "../../redux/actions/cart";
import { currenciesSymbols } from "../../constants";
import { groupItems } from "../../utils/groupItems";

class CartPage extends React.Component {

    componentDidMount() {
        if (this.props.isCartOpen) {
            this.props.toggleCart();
        }
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
                    groupItems(this.props.cartItems).map(item =>
                        <div key={item.id} className="cart-item-container">
                            <div className="product-info product-info-cart">
                                <h3>{item.brand}</h3>
                                <p>{item.name}</p>
                                <p className="price">
                                    {currenciesSymbols[this.props.selectedCurrency] || '$'} {item.prices.find(x => x.currency === this.props.selectedCurrency)?.amount}
                                </p>
                                {
                                    item.attributes.map(attribute => <div className="cart-attributes" key={attribute.id}>
                                        {
                                            attribute.items.map(attr => <button
                                                key={attribute.id + attr.value}
                                                className={this.setButtonClassName(attr, item.attrValues, attribute)}
                                                style={{ ...attribute.type === "swatch" ? { backgroundColor: attr.value } : "" }}
                                                onClick={() => this.props.changeCartItemAttribute(item, attribute.id, attr.value)}
                                            >{attribute.type === "swatch" ? "" : attr.value}</button>
                                            )}
                                    </div>)
                                }

                            </div>
                            <div className="cart-popup-image">
                                <div className="cart-popup-amount">
                                    <button className="cart-popup-button"
                                        onClick={() => {
                                            this.props.addCartItem({ ...item, count: undefined });
                                        }}>
                                        +
                                    </button>
                                    <p>{item.count}</p>
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
        isCartOpen: state.cart.isOpen
    };
};

export default connect(
    mapStateToProps,
    { addCartItem, removeCartItem, changeCartItemAttribute, toggleCart }
)(CartPage);