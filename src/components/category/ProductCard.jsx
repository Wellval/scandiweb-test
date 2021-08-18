import React from "react";
import { NavLink } from "react-router-dom";
import { currenciesSymbols } from '../../constants';
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/cart";

class ProductCard extends React.Component {
    getSymbolForCurrency = currency => currenciesSymbols[currency] || '$';

    generateCartItem(product) {
        const cartItem = { ...product, attrValues: {} };

        for (let attr of product.attributes) {
            cartItem.attrValues[attr.id] = attr.items[0]?.value;
        }

        return cartItem;
    }

    render() {

        const product = this.props.product;

        return (
            <div className={product.inStock ? "card" : "card card-inactive"}>
                {product.inStock ? "" : <p className="out-of-stock">Out of stock</p>}
                <img alt=""
                    className="buy-icon"
                    src="./buy-icon.svg"
                    onClick={() => this.props.addCartItem(this.generateCartItem(product))}></img>
                <NavLink to={`/${this.props.selectedCategory}/${product.id}`}>
                    <div className="item-image-wrapper">
                        <img alt={product.brand + ' ' + product.name} className="item-image" src={product.gallery[0]}></img>
                    </div>
                </NavLink>
                <div className="item-info">
                    <NavLink to={`/${this.props.selectedCategory}/${product.id}`}>
                        <p>{product.brand} {product.name}</p>
                    </NavLink>
                    <p className="price">{this.getSymbolForCurrency(this.props.selectedCurrency)}
                        {product.prices.map(x => x.currency === this.props.selectedCurrency && x.amount)}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedCurrency: state.currencies.selected,
        selectedCategory: state.categories.selected,
    };
};

export default connect(
    mapStateToProps,
    { addCartItem }
)(ProductCard);
