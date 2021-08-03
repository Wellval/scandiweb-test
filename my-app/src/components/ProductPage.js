import React from "react";

export default class ProductPage extends React.Component {
    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="side-images">
                        {
                            this.props.products
                                .map(x => x
                                    .map(product => product.id === this.props.product
                                        && product.gallery.map(x => <img key="x" alt="" className="side-image" src={x}></img>)))
                        }
                    </div>
                    <div className="product-wrapper">
                        {
                            this.props.products
                                .map(x => x
                                    .map(product => product.id === this.props.product
                                        && <img src={product.gallery[0]} alt={product.id} className="main-image"></img>))
                        }
                    {
                        this.props.products
                            .map(x => x
                                .map(product => product.id === this.props.product
                                    && <div className="product-info">
                                        <h3>{product.brand}</h3>
                                        <p>{product.name}</p>
                                    </div>))
                    }
                </div>
                </div>

            </main>
        );
    }
}