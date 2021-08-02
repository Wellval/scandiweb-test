import React from "react";
import { ProductCard } from "./ProductCard";

export default class CategoryPage extends React.Component {
    render() {
        return (
            <main>
                <h2>
                {this.props.selectedCategory}
                </h2>
                <div className="cards-wrapper">
                    <ProductCard products={this.props.products} selectedCurrency={this.props.selectedCurrency} selectedCategory={this.props.selectedCategory} />
                </div>
            </main>
        );
    }
}
