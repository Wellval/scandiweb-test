import React from "react";
import { connect } from "react-redux";

class ToggleButtons extends React.Component {

    setButtonClassName = (type, value, id) => {
        if (this.props.attributes[id] === value) {
            return type === "swatch" ? "attribute-color-active" : "attribute-text-active";
        } else {
            return "attribute-button";
        }
    }

    render() {

        const { product, attributes, setAttributes } = this.props;

        if (product) {
            return (
                product.attributes.map(attribute =>
                    <div key={attribute.id} className="attribute-buttons">
                        <h4>{attribute.id}</h4>
                        <div className="attributes-wrapper" key={attribute.id}>
                            {attribute.items
                                .map(item => <button
                                    onClick={() => setAttributes({
                                        ...attributes,
                                        [attribute.id]: item.value
                                    })}
                                    className={this.setButtonClassName(attribute.type, item.value, attribute.id)}
                                    key={item.id}
                                    style={{ ...attribute.type === "swatch" ? { backgroundColor: item.value } : "" }}
                                >
                                    {attribute.type === "swatch" ? "" : item.value}
                                </button>
                                )}
                        </div>
                    </div>
    
                )
            );   
        }
        return null;
    }
}

const mapStateToProps = state => {
    return { 
        products: state.products.list,
    };
};

export default connect(
    mapStateToProps
)(ToggleButtons);