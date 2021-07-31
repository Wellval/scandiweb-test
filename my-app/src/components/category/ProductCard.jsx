import React from "react";

export class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      gallery: [],
      category: "",
    };
  }

  /*componentDidMount() {
    client
      .query({
        query: gql`
          query GetProds {
            category {
              products {
                name
                id
                gallery
              }
            }
          }
        `,
      })
      .then((result) =>
        this.setState((prevState) => ({
          name: result.data.category.products.map((prod) => prod.name),
          gallery: result.data.category.products.map((prod) => prod.gallery),
        }))
      );
  }*/

  render() {
    return (
      <div>
        <img alt="" className="buy-icon" src="./buy-icon.svg"></img>
        <div className="item-info">
          <p>Apollo Running Short</p>
          <p className="price">$50.00</p>
        </div>
      </div>
    );
  }
}