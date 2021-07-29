import React from "react";
import { ProductCard } from "./ProductCard";

export class CategoryPage extends React.Component {
    render() {
        return <main>
            <h2>Category name</h2>
            <div className="cards-wrapper">
                <ProductCard />
            </div>
        </main>
    }
}