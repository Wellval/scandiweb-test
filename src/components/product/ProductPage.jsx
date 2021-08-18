import React from "react";
import { currenciesSymbols } from '../../constants';
import ToggleButtons from "./ToggleButtons";
import Wrapper from "../Wrapper";
import { connect } from "react-redux";
import { addCartItem } from '../../redux/actions/cart';
import { selectCategory } from '../../redux/actions/categories';
import { requestProducts } from '../../redux/actions/products';


class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            mainImage: '',
            product: undefined,
            attributes: {}
        }
    }

    selectAndLoadCategory() {
        const foundCategory = this.props.categories.find(x => x === this.props.category);
        if (foundCategory) {
            this.props.selectCategory(foundCategory);
            this.props.requestProducts(foundCategory);
        } else {
            window.location.href = '/';
        }
    }

    componentDidMount() {
        this.selectAndLoadCategory();
    }

    componentDidUpdate() {
        this.selectAndLoadCategory();
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.product?.id !== props.product) {
            return {
                product: props.products.find(x => x.id === props.product)
            }
        }
        return null
    }

    setAttributes(value) {
        this.setState({
            attributes: value
        });
    }

    isAllSelected() {
        for (let attr of this.state.product.attributes) {
            if (this.state.attributes[attr.id] === undefined) {
                return false;
            }
        }
        return true;
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
                            product.gallery.map(x => <div key={x}
                                className="side-image"
                                onClick={() => {
                                    this.setState({
                                        mainImage: x
                                    });
                                }}>
                                    <img src={x} alt=""/>
                                </div>)
                        }
                    </div>
                    <div className="product-wrapper">
                        <div className="main-image-wrapper"><img src={this.state.mainImage.length > 0
                            ? this.state.mainImage
                            : product.gallery[0]}
                            alt={product.id}
                            className="main-image"></img>
                        </div>
                        <div key={product.id} className="product-info">
                            <h3>{product.brand}</h3>
                            <p>{product.name}</p>
                            <ToggleButtons
                                product={product}
                                attributes={this.state.attributes}
                                setAttributes={this.setAttributes.bind(this)}
                            />
                            <h4>Price:</h4>
                            <p key={Math.random()} className="price">
                                {currenciesSymbols[this.props.selectedCurrency] || '$'} {product.prices.find(x => x.currency === this.props.selectedCurrency)?.amount}</p>
                            <button
                                onClick={() => this.isAllSelected() && this.props.addCartItem({ ...product, attrValues: this.state.attributes })}
                                className={'add-to-cart-button ' + (this.isAllSelected() ? '' : 'add-to-cart-button-disabled')}>
                                Add to cart
                            </button>
                            <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                        </div>
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
        categories: state.categories.list
    };
};

export default connect(
    mapStateToProps,
    { addCartItem, selectCategory, requestProducts }
)(ProductPage);