import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/actions/categories";
import { toggleCart } from "../../redux/actions/cart"

class Navbar extends React.Component {
    clickOnCategory = category => {
        this.props.selectCategory(category);
    }

    render() {
        return (
            <nav>
                <ul className="nav-list">                    
                    {this.props.categories.map(x =>
                        <li key={x}>
                            <NavLink
                                to={'/' + x}
                                className={x === this.props.selectedCategory ? "active" : ''}
                                onClick={() => {
                                    this.clickOnCategory(x);
                                }}
                            >
                                {x}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        selectedCategory: state.categories.selected,
    };
};

export default connect(
    mapStateToProps,
    { selectCategory, toggleCart }
)(Navbar);

