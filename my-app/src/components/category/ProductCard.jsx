import React from "react";
import { NavLink } from "react-router-dom";
import { currenciesSymbols } from '../../constants';

export class ProductCard extends React.Component {
    getSymbolForCurrency = currency => currenciesSymbols[currency] || '$';

    render() {
        return (
            this.props.products
                .map(x => x
                    .map(product => product.category === this.props.selectedCategory
                        &&
                        <div key={product.id} className="card">
                            <img alt="" className="buy-icon" src="./buy-icon.svg"></img>
                            <img alt={product.brand + '' + product.name} className="item-image" src={product.gallery[0]}></img>
                            <div className="item-info">
                                <NavLink to={`/${this.props.selectedCategory}/${product.id}`}>
                                    <p>{product.brand} {product.name}</p>
                                </NavLink>

                                <p className="price">{this.getSymbolForCurrency(this.props.selectedCurrency)}
                                    {product.prices.map(x => x.currency === this.props.selectedCurrency && x.amount)}</p>
                            </div>
                        </div>
                    )))
    }
}