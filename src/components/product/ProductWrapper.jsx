import React from "react";
import { currenciesSymbols } from '../../constants';
import ToggleButtons from "./ToggleButtons";
import { connect } from "react-redux";
import { addCartItem } from '../../redux/actions/cart';

class ProductWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            attributes: {},
            mainImage: ''
        }
    }

    setAttributes(value) {
        this.setState({
            attributes: value
        });
    }


    isAllSelected(product, attributes) {
        if (product !== undefined)
            for (let attr of product.attributes) {
                if (attributes[attr.id] === undefined) {
                    return false;
                }
            }
        return true;
    }

    render() {

        const { product } = this.props;
        const mainImage = this.state.mainImage;
        const attributes = this.state.attributes;

        if (product)
            return <div className="product-wrapper">
                <div className="main-image-wrapper">
                    {product.inStock ? "" : <p className="out-of-stock">Out of stock</p>}
                    <img src={mainImage.length > 0
                        ? mainImage
                        : product.gallery[0]}
                        alt={product.id}
                        className="main-image"></img>
                </div>
                <div key={product.id} className="product-info">
                    <h3>{product.brand}</h3>
                    <p>{product.name}</p>
                    <ToggleButtons
                        product={product}
                        attributes={attributes}
                        setAttributes={this.setAttributes.bind(this)}
                    />
                    <h4>Price:</h4>
                    <p key={Math.random()} className="price">
                        {currenciesSymbols[this.props.selectedCurrency] || '$'}
                        {product.prices.find(x => x.currency === this.props.selectedCurrency)?.amount}</p>
                    <button
                        onClick={() => this.isAllSelected() && this.props.addCartItem({ ...product, attrValues: attributes })}
                        className={'add-to-cart-button ' + ((this.isAllSelected(product, attributes))
                            && product.inStock ? '' : 'add-to-cart-button-disabled')}>
                        Add to cart
                    </button>
                    <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        selectedCurrency: state.currencies.selected,
        products: state.products.list,
        categories: state.categories.list
    };
};

export default connect(
    mapStateToProps,
    { addCartItem }
)(ProductWrapper);