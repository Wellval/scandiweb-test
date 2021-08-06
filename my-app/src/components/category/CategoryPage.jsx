import React from "react";
import ProductCard from "./ProductCard";
import { requestProducts } from "../../redux/actions/products";
import { selectCategory } from "../../redux/actions/categories";
import Wrapper from "../Wrapper";
import { toggleCart } from "../../redux/actions/cart";


import { connect } from "react-redux";

class CategoryPage extends React.Component {

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

    render() {
        if (!this.props.selectedCategory || !this.props.products) {
            return null;
        }

        return (
            <Wrapper>
                <h2>
                    {this.props.selectedCategory}
                </h2>
                <div className="cards-wrapper">
                    {this.props.products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        selectedCategory: state.categories.selected,
        isCartOpen: state.cart.isOpen,
        products: state.products.list,
        isLoading: state.categories.loading
    };
};

export default connect(
    mapStateToProps,
    { requestProducts, selectCategory, toggleCart }
)(CategoryPage);

