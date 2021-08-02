import React from "react";
import { currenciesSymbols } from '../../constants';

export class ProductCard extends React.Component {
    getSymbolForCurrency = currency => currenciesSymbols[currency] || '$';

    render() {
        return (
            this.props.products
                .map(x => x
                    .map(product => product.category === this.props.selectedCategory
                        && <div key={product.id} className="card">
                            <img alt="" className="buy-icon" src="./buy-icon.svg"></img>
                            <img alt={product.brand + '' + product.name} className="item-image" src={product.gallery[0]}></img>
                            <div className="item-info">
                                <p>{product.brand} {product.name}</p>
                                <p className="price">{this.getSymbolForCurrency(this.props.selectedCurrency)}
                                {product.prices.map(x => x.currency === this.props.selectedCurrency && x.amount)}</p>
                            </div>
                        </div>))
        );
    }
}