import React from "react";

export class ToggleButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const setButtonClassName = (type, value, id) => {
            if (this.state[id] === value) {
                return type === "swatch" ? "attribute-color-active" : "attribute-text-active";
            } else {
                return "attribute-button";
            }
        }
        return (
            this.props.products.map(x => x
                .map(product => product.id === this.props.product
                    && product.attributes
                        .map(attribute =>
                            <div className="attribute-buttons">
                                <h4>{attribute.id}</h4>
                                <div className="attributes-wrapper" key={attribute.id}>
                                    {attribute.items
                                        .map(item => <button
                                            onClick={() => {
                                                this.setState({
                                                    [attribute.id]: item.value
                                                });
                                            }}
                                            className={setButtonClassName(attribute.type, item.value, attribute.id)}
                                            key={item.id}
                                            style={{ ...attribute.type === "swatch" ? { backgroundColor: item.value } : "" }}
                                        >
                                            {attribute.type === "swatch" ? "" : item.value}
                                        </button>
                                        )}
                                </div>
                            </div>

                        ))))
    }
}