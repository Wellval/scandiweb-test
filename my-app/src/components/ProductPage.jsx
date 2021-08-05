import React from "react";
import { currenciesSymbols } from '../constants';
import { ToggleButtons } from "./ToggleButtons";
import Wrapper from "./Wrapper";
import { connect } from "react-redux";


class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            mainImage: '',
            product: undefined
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.product?.id !== props.product) {
          return {
            product: props.products.find(x => x.id === props.product)
          }
        }
        return null
    }

    render() {

        const product = this.state.product;

        if (!product) {
            return null;
        }

        return (
            <Wrapper>
                <div className="wrapper">
                    <div className="side-images">
                        {
                            product.gallery.map(x => <img key={x} alt=""
                                className="side-image"
                                src={x}
                                onClick={() => {
                                    this.setState({
                                        mainImage: x
                                    });
                                }}></img>)
                        }
                    </div>
                    <div className="product-wrapper">
                        {

                            <div key={Math.random()} className="main-image-wrapper"><img src={this.state.mainImage.length > 0
                                ? this.state.mainImage
                                : product.gallery[0]}
                                alt={product.id}
                                className="main-image"></img>
                            </div>
                        }
                        {
                            <div key={product.id} className="product-info">
                                <h3>{product.brand}</h3>
                                <p>{product.name}</p>
                                <ToggleButtons product={product}></ToggleButtons>
                                <h4>Price:</h4>
                                {product.prices.map(x => x.currency === this.props.selectedCurrency
                                    && <p key={Math.random()} className="price">{currenciesSymbols[this.props.selectedCurrency] || '$'}
                                        {x.amount}</p>)}
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <p className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                            </div>
                        }
                    </div>
                </div>

            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return { 
        selectedCurrency: state.currencies.selected,
        products: state.products.list,
    };
};

export default connect(
    mapStateToProps
)(ProductPage);