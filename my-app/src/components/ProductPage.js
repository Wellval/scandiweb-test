import React from "react";
import { currenciesSymbols } from '../constants';
import { ToggleButtons } from "./ToggleButtons";

export default class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            mainImage: ''
        }
    }
    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="side-images">
                        {
                            this.props.products.map(x => x
                                .map(product => product.id === this.props.product
                                    && product.gallery.map(x => <img key={x} alt=""
                                        className="side-image"
                                        src={x}
                                        onClick={() => {
                                            this.setState({
                                                mainImage: x
                                            });
                                        }}></img>)))
                        }
                    </div>
                    <div className="product-wrapper">
                        {
                            this.props.products.map(x => x.map(product => product.id === this.props.product
                                && <div className="main-image-wrapper"><img key={Math.random()} src={this.state.mainImage.length > 0
                                    ? this.state.mainImage
                                    : product.gallery[0]}
                                    alt={product.id}
                                    className="main-image"></img>
                                </div>))
                        }
                        {
                            this.props.products.map(x => x
                                .map(product => product.id === this.props.product
                                    && <div key={product.id} className="product-info">
                                        <h3>{product.brand}</h3>
                                        <p>{product.name}</p>
                                        <ToggleButtons product={this.props.product} products={this.props.products}></ToggleButtons>
                                        <h4>Price:</h4>
                                        {product.prices.map(x => x.currency === this.props.selectedCurrency
                                            && <p key={Math.random()} className="price">{currenciesSymbols[this.props.selectedCurrency] || '$'}
                                                {x.amount}</p>)}
                                        <button className="add-to-cart-button">
                                            Add to cart
                                        </button>
                                        <p className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>))
                        }
                    </div>
                </div>

            </main>
        );
    }
}