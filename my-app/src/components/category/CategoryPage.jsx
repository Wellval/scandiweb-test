import React from "react";
import { connect } from "react-redux";

import { ProductCard } from "./ProductCard";
import { requestCategory } from '../../redux/actions/categories';

class CategoryPage extends React.Component {

    render() {
        return (
            <main>
                <h2>
                </h2>
                <div className="cards-wrapper">
                    <ProductCard />
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return { ...state.category };
};

export default connect(
    mapStateToProps,
    { requestCategory }
)(CategoryPage);