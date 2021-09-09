import React from "react";
import Wrapper from "../Wrapper";
import { connect } from "react-redux";
import { addCartItem } from '../../redux/actions/cart';
import { selectCategory } from '../../redux/actions/categories';
import { requestProductById } from '../../redux/actions/products';
import ProductWrapper from "./ProductWrapper";


class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            product: undefined,
        }
    }

    selectAndLoadCategory() {
        const foundCategory = this.props.categories.find(x => x === this.props.category);
        if (foundCategory) {
            this.props.selectCategory(foundCategory);
            this.props.requestProductById(window.location.href.slice(window.location.href.lastIndexOf('/') + 1));
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

    render() {

        const product = this.props.product;

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
                                <img src={x} alt="" />
                            </div>)
                        }
                    </div>
                    =                        <ProductWrapper product={product} />
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedCurrency: state.currencies.selected,
        product: state.products.selected,
        products: state.products.list,
        categories: state.categories.list
    };
};

export default connect(
    mapStateToProps,
    { addCartItem, selectCategory, requestProductById }
)(ProductPage);