import React from "react";
import { connect } from "react-redux";

class Wrapper extends React.Component {

    render() {
        return (
            <main>
                {this.props.isCartOpen && <div className="overlay"></div>}
                {this.props.children}
            </main>
        );
    }
}

const mapStateToProps = state => {
    return { 
        isCartOpen: state.cart.isOpen
    };
};

export default connect(
    mapStateToProps,
)(Wrapper);

