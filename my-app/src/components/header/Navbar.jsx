import React from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends React.Component {
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
                                to={x}
                                className={x === this.props.selectedCategory ? "active" : ''}
                                onClick={() => this.clickOnCategory(x)}
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
